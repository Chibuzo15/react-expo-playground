import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, StatusBar } from 'react-native';

import ProfileItems from '../../components/Profile/ProfileItems/ProfileItems';

class ProfileScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <View style={styles.userInfo}>
                    <Text>profile image</Text>
                    <Text> Akt's profile</Text>
                </View>
                <View style={styles.options}>
                    <ProfileItems>Recent views</ProfileItems>
                    <ProfileItems>Settings</ProfileItems>
                    <ProfileItems>Logout</ProfileItems>
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

export default ProfileScreen;