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
        backgroundColor: '#fcfcfc',
        // borderColor: 'grey',
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 5,
        borderRadius: 5,
        // For Android
        elevation: 2,
        // For IOS
        shadowColor: '#606060',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.7,
        shadowRadius: 2,
        justifyContent: "center"
    },
    itemText:{
        fontSize: 20,
        paddingLeft: 10,
    }
})

export default profileItems;