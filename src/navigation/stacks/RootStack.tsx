import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FC} from 'react';
import {stackScreens} from './rootStack.const';
import {RootStackParams} from './rootStackParams';

const Stack = createNativeStackNavigator<RootStackParams>();
const RootStack: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={'HomeScreen'}
      screenOptions={{
        headerShown: false,
        statusBarAnimation: 'fade',
        presentation: 'card',
      }}>
      {stackScreens?.map(screen => (
        <Stack.Screen
          key={screen?.name}
          name={screen?.name as keyof RootStackParams}
          component={screen?.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default RootStack;
