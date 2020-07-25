import React from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    TouchableHighlight,
    Dimensions
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const SearchBar = (props) => {
    return (
        <View style={styles.searchBar}>
            <TextInput
                style={styles.input}
                placeholder='Search...'
            />
            <TouchableHighlight
                onPress = {props.clicked}
                style={styles.icon}>
                <MaterialIcons name='close' size={25} />
            </TouchableHighlight>
        </View>
    )
}

// const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    searchBar: {
        flexDirection: "row",
        justifyContent: 'center',
        // position: 'absolute',
        zIndex: 100,
    },
    input: {
        padding: 7,
        borderColor: '#eee',
        borderWidth: 1,
        flex: 1
    },
    icon:{
        justifyContent: 'center'
    }
})

export default SearchBar;