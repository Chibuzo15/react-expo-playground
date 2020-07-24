import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SingleProduct from '../components/Products/SingleProduct/SingleProduct';
import ProductScreen from '../containers/ProductScreen/ProductScreen';

const Stack = createStackNavigator();

const ProductStack = () => {
    return (
        <Stack.Navigator
        initialRouteName='ProductScreen'
        >
            <Stack.Screen options={{headerShown: false}} name="ProductScreen" component={ProductScreen} />
            <Stack.Screen name="ProductDetails" component={SingleProduct} />
        </Stack.Navigator>
    );
}

export default ProductStack;