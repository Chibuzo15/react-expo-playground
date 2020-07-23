import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const profileItems = (props) => (
    <TouchableOpacity
    onPress={props.clicked}
     style={styles.item}
     >
        <Text style={styles.itemText}>{props.children}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    item:{
        // alignSelf: "stretch",
        height: 100,
        borderColor: 'grey',
        borderWidth:0.5,
        marginBottom: 5,
        marginRight: 5,
        marginLeft: 5,
        borderRadius: 5,
    },
    itemText:{
        fontSize: 20,
        paddingLeft: 10,
        // flex: 1,
        // flexDirection: 'column',
        // alignItems: "center",
        // justifyContent: 'center'
    }
})

export default profileItems;