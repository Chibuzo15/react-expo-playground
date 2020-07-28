import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Orders from '../containers/Orders/Orders';

const Stack = createStackNavigator();

const ProductStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Orders" component={Orders} />
        </Stack.Navigator>
    );
}

export default ProductStack;