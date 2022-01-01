import type { User } from 'firebase/auth';
import { collection, onSnapshot } from 'firebase/firestore';
import React, { FC, useEffect, useState } from 'react';
import MessageConvertor from '../convertors/MessageConvertor';
import { firebaseFirestore } from '../firebase';
import type { Message } from '../types/Message';

type ListProps = {
  user: User;
};
export const List: FC<ListProps> = ({ user }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  useEffect(() => {
    const col = collection(firebaseFirestore, `/messages`).withConverter(
      MessageConvertor,
    );
    const unsubscribe = onSnapshot(col, {
      next: (sn) => {
        setMessages(sn.docs.map((docSn) => docSn.data()));
      },
    });
    return unsubscribe;
  }, [user]);
  return (
    <ul>
      {messages.map((message) => (
        <li
          key={`${message.content}-${
            message.userId
          }-${message.createdAt?.getTime()}`}
        >
          {JSON.stringify(message)}
        </li>
      ))}
    </ul>
  );
};
