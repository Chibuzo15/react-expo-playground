import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


class HomeScreen extends Component {
    render() {
        console.log(this.props)
        return (
            <View style={styles.container}>
                <Text style={styles.TitleText} >URVAN CONCEPTS TEST APP</Text>
                <Button
                    title="Profile"
                    onPress={() => this.props.navigation.navigate('Profile')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    TitleText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 30,
    }
});

export default HomeScreen