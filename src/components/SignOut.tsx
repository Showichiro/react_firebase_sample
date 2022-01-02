import { signOut } from 'firebase/auth';
import React, { FC } from 'react';
import { useFirebase } from '../hooks/useFirebase';

export const SignOut: FC = () => {
  const { auth } = useFirebase();
  return (
    <button
      type="submit"
      onClick={(e) => {
        e.preventDefault();
        signOut(auth).catch((e) => window.alert(e));
      }}
    >
      ログアウト
    </button>
  );
};
