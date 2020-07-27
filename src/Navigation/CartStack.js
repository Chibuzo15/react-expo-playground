import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';

import Cart from '../containers/Cart/Cart';
import Checkout from '../containers/Checkout/Checkout';
import Login from '../components/Profile/Login/Login';

const Stack = createStackNavigator();

const FeedStack = (props) => {
    return (
        <Stack.Navigator
            initialRouteName='CartScreen'
        >
            <Stack.Screen options={{ headerShown: false }} name="CartScreen" component={Cart} />
            {props.loggedIn ? (
                <>
                    <Stack.Screen name="Checkout" component={Checkout} />
                </>
            ) : (
                    <>
                        <Stack.Screen name="Checkout" component={Checkout} />
                        <Stack.Screen name="SignIn" component={Login} />
                    </>
                )}
        </Stack.Navigator>
    );
}

const mapStateToProps = state => {
    return {
        loggedIn: state.customer.loggedIn
    }
}

export default connect(mapStateToProps, null)(FeedStack);