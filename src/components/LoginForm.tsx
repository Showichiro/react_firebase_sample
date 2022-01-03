import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { FC, useState } from 'react';
import { useFirebase } from '../hooks/useFirebase';
import { EmailLogin } from './EmailLogin';

export const LoginForm: FC = () => {
  const { auth } = useFirebase();
  const [isEmailLogin, setIsEmailLogin] = useState(false);
  const provider = new GoogleAuthProvider();
  return (
    <div>
      <button
        type="button"
        onClick={() =>
          signInWithPopup(auth, provider).catch((e) => window.alert(e))
        }
      >
        Googleアカウントでログイン
      </button>
      <br />
      <button type="button" onClick={() => setIsEmailLogin(true)}>
        Emailでログイン
      </button>
      {isEmailLogin && <EmailLogin auth={auth} />}
    </div>
  );
};
export default LoginForm;
