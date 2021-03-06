import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StyleSheet, Text, View } from 'react-native';
// import HomeScreen from './src/containers/HomeScreen/HomeScreen';

import ProfileNavStack from './src/Navigation/ProfileStack';
import HomeStack from './src/Navigation/HomeStack';
import CartStack from './src/Navigation/CartStack';
// import ProductNavStack from './src/Navigation/ProductStack';
import FeedStack from './src/Navigation/FeedStack';
// import Cart from './src/containers/Cart/Cart';

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
                ? <HomeSvg
                  fill='tomato'
                />
                : <HomeSvg
                fill = 'black'
                />;
            } else if (route.name === 'Feed') {
              iconName = focused ? <FeedSvg
                fill='tomato'
              /> : <FeedSvg
              fill = 'black'
              />;
            } else if (route.name === 'Profile') {
              iconName = focused
              ? <ProfileSvg
              fill = 'tomato'
              /> : <ProfileSvg
              fill = 'black'
              />
            } else if (route.name === 'Cart') {
              iconName = focused ?
               <CartSvg
               fill = 'tomato'
               /> : <CartSvg
               fill = 'black'
               />
            }

            // You can return any component that you like here!
            return iconName;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          keyboardHidesTabBar: true
        }}
      >

        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Feed" component={FeedStack} />
        <Tab.Screen name="Cart" component={CartStack} />
        <Tab.Screen name="Profile" component={ProfileNavStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}