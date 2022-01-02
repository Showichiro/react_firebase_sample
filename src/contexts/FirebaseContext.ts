import type { Auth } from 'firebase/auth';
import type { FirebaseFirestore } from 'firebase/firestore';
import React, { createContext } from 'react';

type Firebase = {
  auth: Auth;
  store: FirebaseFirestore;
};

export const FirebaseContext = createContext<Firebase>({} as Firebase);
