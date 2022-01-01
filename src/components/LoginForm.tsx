import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { FC, useState } from 'react';
import { firebaseAuth } from '../firebase';

export const LoginForm: FC = () => {
  const [auth, setAuth] = useState({ email: '', passwd: '' });
  return (
    <form>
      <div>ログインフォーム</div>
      <label htmlFor="email">
        email:
        <input
          type="email"
          name="email"
          id="email"
          value={auth.email}
          onChange={(e) =>
            setAuth((prev) => ({ ...prev, email: e.target.value }))
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
          value={auth.passwd}
          onChange={(e) =>
            setAuth((prev) => ({ ...prev, passwd: e.target.value }))
          }
        />
        <br />
        <button
          type="button"
          onClick={() => {
            signInWithEmailAndPassword(
              firebaseAuth,
              auth.email,
              auth.passwd,
            ).catch((e) => window.alert(e));
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
