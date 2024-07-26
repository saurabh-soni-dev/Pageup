import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React, { FC } from 'react';
import { Image } from 'react-native';
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
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'black',
      }}>
      {homeBottomTabs?.map(screen => (
        <Tab.Screen
          key={screen?.id}
          name={screen?.name}
          component={screen?.component}
          options={() => ({
            tabBarIcon: ({focused}) => (
              <Image
                source={screen.icon}
                style={{
                  height: 22,
                  width: 22,
                  tintColor: focused ? 'orange' : 'black',
                }}
              />
            ),
          })}
        />
      ))}
    </Tab.Navigator>
  );
};
export default HomeBottomTabs;
