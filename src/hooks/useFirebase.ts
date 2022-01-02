import React, { useContext } from 'react';
import { FirebaseContext } from '../contexts/FirebaseContext';

export const useFirebase = () => useContext(FirebaseContext);
