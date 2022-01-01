import React, { FC } from 'react';
import { useUser } from '../hooks/useUser';
import { ContentForm } from './ContentForm';
import { List } from './List';
import LoginForm from './LoginForm';
import { SignOut } from './SignOut';

export const Main: FC = () => {
  const user = useUser();
  if (!user) {
    return <LoginForm />;
  } else {
    return (
      <>
        <List user={user} />
        <ContentForm user={user} />
        <SignOut />
      </>
    );
  }
};
