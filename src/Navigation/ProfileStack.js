import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';

import ProfileScreen from '../containers/ProfileScreen/ProfileScreen';
import Login from '../components/Profile/Login/Login';

const Stack = createStackNavigator();

const ProfileStack = (props) => {
    return (
        <Stack.Navigator>
            {props.loggedIn ? (
                <>
                    <Stack.Screen name="Profile" component={ProfileScreen} />
                </>
            ) : (
                    <>
                        <Stack.Screen name="SignIn" component={Login} />
                    </>
                )}
        </Stack.Navigator>
    )
}

const mapStateToProps = state => {
    return {
        loggedIn: state.customer.loggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (userObj) => dispatch(actions.login(userObj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileStack);