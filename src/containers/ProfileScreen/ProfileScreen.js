import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions,
    StatusBar
} from 'react-native';

import ProfileItems from '../../components/Profile/ProfileItems/ProfileItems';
import Avatar from '../../components/Profile/Avatar/Avatar';
import MyStatusBar from '../../components/StatusBar/StatusBar';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class ProfileScreen extends Component {
    logout = () => {
        this.props.onLogout(this.props.token)
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor="#e23e22" />
                {/* <MyStatusBar backgroundColor="#e23e22" barStyle="light-content"/> */}
                <View style={styles.userInfo}>
                    <Text style={styles.welcome}> Welcome user</Text>
                    <Avatar />
                </View>
                <View style={styles.options}>
                    <ProfileItems
                        clicked={() => this.props.navigation.navigate('Orders')}
                    >Orders</ProfileItems>
                    <ProfileItems
                        clicked={() => this.props.navigation.navigate('Settings')}
                    >Settings</ProfileItems>
                    <ProfileItems
                        clicked={this.logout}
                    >Logout</ProfileItems>
                </View>
            </ScrollView>
        )
    }
}

const height = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
    },
    options: {
        alignSelf: "stretch",
        marginBottom: 15
    },
    userInfo: {
        height: height * 0.3,
        width: deviceWidth,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'left'
    }
})

const mapStateToProps = state => {
    return {
        loggedIn: state.customer.loggedIn,
        token: state.customer.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: (token) => dispatch(actions.logout(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);