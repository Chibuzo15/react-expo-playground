import React, { useRef } from 'react';
import { View, Text, Animated, StyleSheet, Dimensions } from 'react-native';
import { useFocusEffect} from '@react-navigation/native'

const networkErrorBox = (props) => {
    const fadeAnim = useRef(new Animated.Value(1)).current;

    const fadeOut = () => {
        console.log('fadeout called :')
        Animated.timing(fadeAnim, {
            delay: 2500,
            toValue: 0,
            duration: 1500,
            useNativeDriver: true
        }).start();
    };

    fadeOut()

    return (
        <Animated.View style={[styles.container, {
            opacity: fadeAnim // Bind opacity to animated value
        }]}>
            <View style={styles.errorBox} >
                <Text style={styles.text}>Network Error: no internet connection</Text>
            </View>
            <FetchData
            func={props.function}
            />
        </Animated.View>
    )
}

function FetchData({func}) {
    console.log('fetchData called ', func )
    useFocusEffect(
        React.useCallback(() => {
            func()
        }, [func])
    );

    return null;
}

const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: 'transparent',
        top: 0,
        left: 0,
        right: 0,
        bottom: deviceHeight * 0.10,
        justifyContent: 'flex-end',
        // paddingBottom: 30,
        alignItems: 'center'
    },
    errorBox: {
        backgroundColor: 'black',
        justifyContent: 'center',
        padding: 12,
        height: deviceHeight * 0.14
    },
    text: {
        color: 'white',
        fontSize: 12
    }
})

export default networkErrorBox;