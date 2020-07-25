import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const topBar = (props) => {
    return(
        <View style={styles.topbar}>
            <Text style={styles.topBarText}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    topbar:{
        height: 50,
        backgroundColor: 'white',
        padding: 10,
        elevation: 1
    },
    topBarText:{
        color: 'black',
        fontSize: 22,
        fontWeight: "bold",
        paddingLeft: 15
    }
})

export default topBar