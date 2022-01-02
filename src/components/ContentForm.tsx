import type { User } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import React, { FC, useState } from 'react';
import { useFirebase } from '../hooks/useFirebase';
import { MessageConvertor } from '../convertors/MessageConvertor';
import type { Message } from '../types/Message';

type ContentFormProps = {
  user: User;
};

export const ContentForm: FC<ContentFormProps> = ({ user }) => {
  const { store } = useFirebase();
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
          const col = collection(store, `/messages`).withConverter(
            MessageConvertor,
          );
          addDoc(col, message)
            .then(() => setMessage((prev) => ({ ...prev, content: '' })))
            .catch((e) => window.alert(e));
        }}
      >
        登録
      </button>
    </form>
  );
};
