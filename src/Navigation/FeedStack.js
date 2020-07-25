import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FeedScreen from '../containers/FeedScreen/FeedScreen';
import SingleProduct from '../components/Products/SingleProduct/SingleProduct';
// import ProductScreen from '../containers/ProductScreen/ProductScreen';

const Stack = createStackNavigator();

const FeedStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='FeedScreen'
        >
            <Stack.Screen options={{ headerShown: false }} name="FeedScreen" component={FeedScreen} />
            <Stack.Screen name="ProductDetails" component={SingleProduct} />
        </Stack.Navigator>
    );
}

export default FeedStack;