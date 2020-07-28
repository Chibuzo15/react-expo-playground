import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';

import ProfileScreen from '../containers/ProfileScreen/ProfileScreen';
import Login from '../components/Profile/Login/Login';
import Orders from './OrderStack';
import Settings from '../containers/Settings/Settings';

const Stack = createStackNavigator();

const ProfileStack = (props) => {
    return (
        <Stack.Navigator
        initialRouteName={props.loggedIn ? "Profile" : null}
        >
            {props.loggedIn ? (
                <>
                    <Stack.Screen name="Profile" component={ProfileScreen} />
                    <Stack.Screen name="Orders" component={Orders} />
                    <Stack.Screen name="Settings" component={Settings}/>
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

// const mapDispatchToProps = dispatch => {
//     return {
//         login: (userObj) => dispatch(actions.login(userObj))
//     }
// }

export default connect(mapStateToProps, null)(ProfileStack);