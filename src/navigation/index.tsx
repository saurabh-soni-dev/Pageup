import { NavigationContainer } from '@react-navigation/native';
import { FC } from 'react';
import RootStack from './stacks/RootStack';

const Route: FC = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default Route;
