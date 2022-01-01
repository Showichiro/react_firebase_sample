import type { User } from 'firebase/auth';
import { collection, setDoc, doc, addDoc } from 'firebase/firestore';
import React, { FC, useState } from 'react';
import MessageConvertor from '../convertors/MessageConvertor';
import { firebaseFirestore } from '../firebase';
import type { Message } from '../types/Message';

type ContentFormProps = {
  user: User;
};

export const ContentForm: FC<ContentFormProps> = ({ user }) => {
  const [message, setMessage] = useState<Message>({
    userId: user.uid,
    content: '',
  });
  return (
    <form>
      <label htmlFor="content">
        <div>content</div>
        <div>
          <input
            type="text"
            name="content"
            id="content"
            value={message.content}
            onChange={(e) =>
              setMessage((prev) => ({ ...prev, content: e.target.value }))
            }
          />
        </div>
      </label>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          const col = collection(
            firebaseFirestore,
            `/users/${user.uid}/messages`,
          ).withConverter(MessageConvertor);
          if (message.id) {
            setDoc(doc(col, message.id), message);
          } else {
            addDoc(col, message).then((docRef) =>
              setMessage((prev) => ({ ...prev, id: docRef.id })),
            );
          }
        }}
      >
        登録
      </button>
    </form>
  );
};
