import type { User } from 'firebase/auth';
import { createContext } from 'react';

export const UserContext = createContext<User | null>(null);
