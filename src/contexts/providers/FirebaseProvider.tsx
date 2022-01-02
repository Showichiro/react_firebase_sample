import React, { FC } from 'react';
import { firebaseAuth, firebaseFirestore } from '../../firebase';
import { FirebaseContext } from '../FirebaseContext';

export const FirebaseProvider: FC = ({ children }) => (
  <FirebaseContext.Provider
    value={{ auth: firebaseAuth, store: firebaseFirestore }}
  >
    {children}
  </FirebaseContext.Provider>
);
