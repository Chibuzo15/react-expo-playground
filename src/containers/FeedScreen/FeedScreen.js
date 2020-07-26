import React, { Component } from 'react';
import {View, StyleSheet, Text} from 'react-native';

import TopBar from '../../components/UI/Topbar/TopBar';
import MyStatusBar from '../../components/StatusBar/StatusBar';

import { FontAwesome5 } from '@expo/vector-icons';

class FeedScreen extends Component {
    render(){
        console.log(this.props.navigation)
        return(
            <View
            style={styles.container}
            >
                <MyStatusBar backgroundColor="#e23e22" barStyle="light-content"/>

                <TopBar
                title='Feed'
                />
                <View
                style={{
                    flex:1,
                    justifyContent:'center'
                }}
                >
                    <Text style={{
                        fontSize: 30,
                        color: 'grey',
                        textAlign: "center"
                    }}>Nothing to show</Text>
                    <FontAwesome5 name='rss' size={40} style={{
                        color: '#bbb',
                        textAlign: 'center'
                        }} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

export default FeedScreen;