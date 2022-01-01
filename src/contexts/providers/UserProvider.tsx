import React, { FC } from 'react';
import { useAuthState } from '../../hooks/useAuthState';
import { UserContext } from '../UserContext';

export const UserProvider: FC = ({ children }) => {
  const [user, isLoading] = useAuthState();
  return (
    <UserContext.Provider value={user}>
      {isLoading && <div>...Loading</div>}
      {!isLoading && children}
    </UserContext.Provider>
  );
};
