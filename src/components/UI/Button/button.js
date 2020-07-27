import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableHighlight
} from 'react-native'

const defaultButton = (props) => {
    //{[classes['Button'], classes[props.btnType]].join(' ')}
    return (
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            style={styles.Button}
            onPress={props.clicked}
        >
            <Text
                style={{
                    color: 'white',
                    textAlign: 'center'
                }}
            >{props.title.toUpperCase()}</Text>
        </TouchableHighlight>
    )
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    Button: {
        backgroundColor: 'tomato',
        alignSelf: 'center',
        maxWidth: deviceWidth * 0.5,
        borderRadius: 30,
        padding: 10,
        // For Android
        elevation: 5,
        // For IOS
        shadowColor: '#aaaaaa',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.7,
        shadowRadius: 2,
    },
})

export default defaultButton;