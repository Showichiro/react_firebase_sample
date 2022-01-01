import { signOut } from 'firebase/auth';
import React, { FC } from 'react';
import { firebaseAuth } from '../firebase';

export const SignOut: FC = () => {
  return (
    <button
      type="submit"
      onClick={(e) => {
        e.preventDefault();
        signOut(firebaseAuth).catch((e) => window.alert(e));
      }}
    >
      ログアウト
    </button>
  );
};
