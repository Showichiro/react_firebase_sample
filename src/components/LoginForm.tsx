import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { FC, useState } from 'react';
import { useFirebase } from '../hooks/useFirebase';

export const LoginForm: FC = () => {
  const { auth } = useFirebase();
  const [login, setLogin] = useState({ email: '', passwd: '' });
  return (
    <form>
      <div>ログインフォーム</div>
      <label htmlFor="email">
        email:
        <input
          type="email"
          name="email"
          id="email"
          value={login.email}
          onChange={(e) =>
            setLogin((prev) => ({ ...prev, email: e.target.value }))
          }
        />
      </label>
      <br />
      <label htmlFor="passwd">
        password:
        <input
          type="password"
          name="passwd"
          id="passwd"
          value={login.passwd}
          onChange={(e) =>
            setLogin((prev) => ({ ...prev, passwd: e.target.value }))
          }
        />
        <br />
        <button
          type="button"
          onClick={() => {
            signInWithEmailAndPassword(auth, login.email, login.passwd).catch(
              (e) => window.alert(e),
            );
          }}
        >
          ログイン
        </button>
        <br />
      </label>
    </form>
  );
};
export default LoginForm;
