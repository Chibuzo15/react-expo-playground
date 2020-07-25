import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


class HomeScreen extends Component {
    render() {
        console.log(styles)
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.topText}>
                    <Text style={styles.greetingsText}>Hi, user</Text>
                    <Text style={styles.TitleText} >WELCOME</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    topText:{
        paddingLeft: 10,
    },
    TitleText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    greetingsText: {
        fontSize: 14,
        color: 'grey',
        textAlign: 'left'
    }
});

export default HomeScreen