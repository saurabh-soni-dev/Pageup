import React from 'react';
import Route from './src/navigation';
import { UserProvider } from './src/i18n/UserContext';
const App = () => {
  return (
    <UserProvider>
      <Route />
    </UserProvider>
  );
};

export default App;
