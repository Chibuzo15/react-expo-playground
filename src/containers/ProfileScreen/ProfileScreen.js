import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, StatusBar } from 'react-native';

import ProfileItems from '../../components/Profile/ProfileItems/ProfileItems';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class ProfileScreen extends Component {
    logout = () => {
        this.props.onLogout(this.props.token)
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.userInfo}>
                    <Text>profile image</Text>
                    <Text> Akt's profile</Text>
                </View>
                <View style={styles.options}>
                    <ProfileItems>Recent views</ProfileItems>
                    <ProfileItems>Settings</ProfileItems>
                    <ProfileItems
                        clicked={this.logout}
                    >Logout</ProfileItems>
                </View>
            </View>
        )
    }
}

var height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    options: {
        alignSelf: "stretch",
    },
    userInfo: {
        height: height * 0.3
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