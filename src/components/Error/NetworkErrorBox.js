import React, { useRef, useState } from 'react';
import { View, Text, Animated, StyleSheet, Dimensions } from 'react-native';
import { useFocusEffect} from '@react-navigation/native'

const networkErrorBox = (props) => {
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const [containerStyle, setStyle] = useState([styles.container, {opacity: fadeAnim}]);

    const fadeOut = () => {
        console.log('fadeout started')
        Animated.timing(fadeAnim, {
            delay: 2500,
            toValue: 0,
            duration: 1500,
            useNativeDriver: true
        }).start(() => {
            console.log('endedr')
            // setStyle([styles.container_hide, styles.container])
        });
    };

    fadeOut()

    return (
        <Animated.View style={containerStyle}
        pointerEvents='none'
        >
            <View style={styles.errorBox} >
                <Text style={styles.text}>{"Network Error: " + props.message}</Text>
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
        flex: 1,
        top: 0,
        left: 0,
        right: 0,
        bottom: deviceHeight * 0.10,
        justifyContent: 'flex-end',
        // paddingBottom: 30,
        alignItems: 'center'
    },
    container_hide:{
        position: 'relative'
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