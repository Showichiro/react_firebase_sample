import React from 'react';
import './App.css';
import { Main } from './components/Main';
import { UserProvider } from './contexts/providers/UserProvider';

interface AppProps {}

const App = ({}: AppProps) => {
  return (
    <UserProvider>
      <Main />
    </UserProvider>
  );
};
export default App;
