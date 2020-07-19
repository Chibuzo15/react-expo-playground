import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/containers/HomeScreen/HomeScreen';

import Profile from './src/containers/ProfileScreen/ProfileScreen';
import ProductNavStack from './src/Navigation/ProductStack';
import Cart from './src/containers/Cart/Cart';

import HomeSvg from './src/expo_svg/home_svg';
import FeedSvg from './src/expo_svg/feed_svg';
import ProfileSvg from './src/expo_svg/profile_svg';
import CartSvg from './src/expo_svg/cart_svg';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? <HomeSvg/>
              : <HomeSvg/>;
          } else if (route.name === 'Feed') {
            iconName = focused ? <FeedSvg/> : <FeedSvg/>;
          } else if (route.name === 'Profile'){
            iconName = focused ? <ProfileSvg/> : <ProfileSvg/>
          } else if (route.name === 'Cart') {
            iconName = focused ? <CartSvg/> : <CartSvg/>
          }

          // You can return any component that you like here!
          return iconName;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
      >

        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Feed" component={ProductNavStack} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}