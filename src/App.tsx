import React from 'react';
import './App.css';
import { Main } from './components/Main';
import { FirebaseProvider } from './contexts/providers/FirebaseProvider';
import { UserProvider } from './contexts/providers/UserProvider';

interface AppProps {}

const App = ({}: AppProps) => {
  return (
    <FirebaseProvider>
      <UserProvider>
        <Main />
      </UserProvider>
    </FirebaseProvider>
  );
};
export default App;
