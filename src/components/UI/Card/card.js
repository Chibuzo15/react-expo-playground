import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Dimensions,
    TouchableHighlight
} from 'react-native';

const card = (props) => {
    return (
        <TouchableHighlight
            style={styles.cardContainer}
            onPress={props.clicked}
            underlayColor="transparent"
        >
            <React.Fragment>
                <ImageBackground
                    style={styles.bgImage}
                    source={props.image}
                >
                </ImageBackground>
                <View
                    style={styles.textWrapper}
                >
                    <Text style={styles.text}>
                        {props.text}
                    </Text>
                </View>
            </React.Fragment>
        </TouchableHighlight>
    )
}

const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    cardContainer: {
        height: deviceHeight * 0.6,
        // borderWidth: 0.5,
        // borderColor: '#eee',
        borderRadius: 15,
        overflow: "hidden",
        elevation: 6,
        marginBottom: 30
    },
    bgImage: {
        flex: 1,
        justifyContent: 'center'
    },
    textWrapper: {
        backgroundColor: 'black',
        padding: 10,
        alignContent: 'center'
    },
    text: {
        color: 'white'
    }
})

export default card;