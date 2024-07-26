import {
  BottomTabNavigationProp,
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import React, { FC } from 'react';
import { homeBottomTabs } from './homeBottomTabs.const';

const Tab = createBottomTabNavigator();
export type BottomTabStackParamList = {
  Home: undefined;
  Post: undefined;
  Profile: undefined;
};
export type BottomTabNavigationProps =
  BottomTabNavigationProp<BottomTabStackParamList>;
interface HomeBottomTabsProps {
  navigation: BottomTabNavigationProps;
}

const HomeBottomTabs: FC<HomeBottomTabsProps> = () => {
  return (
    <Tab.Navigator
      initialRouteName={''}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}>
      {homeBottomTabs?.map(screen => (
        <Tab.Screen
          key={screen?.id}
          name={screen?.name}
          component={screen?.component}
        />
      ))}
    </Tab.Navigator>
  );
};
export default HomeBottomTabs;
