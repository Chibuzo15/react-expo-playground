import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../containers/HomeScreen/HomeScreen';
import SingleProduct from '../components/Products/SingleProduct/SingleProduct';
import ProductScreen from '../containers/ProductScreen/ProductScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator
        initialRouteName='Home'
        >
            <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
            <Stack.Screen options={{headerShown: false}} name="ProductScreen" component={ProductScreen} />
            <Stack.Screen name="ProductDetails" component={SingleProduct} />
        </Stack.Navigator>
    );
}

export default HomeStack;