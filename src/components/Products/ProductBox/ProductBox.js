import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Image,
    ImageBackground
} from 'react-native';

import PlaceholderImage from './ProductImage';

const productBox = (props) => {
    const productBoxStyle = [styles.container, props.style];

    const { id, image, name, price } = props

    const productObj = {
        id,
        name,
        price,
        image
    }

    const [ImageIsLoading, setImageIsLoaded] = useState(true);

    return (
        <TouchableOpacity
            onPress={() => props.clicked(productObj)}
            style={productBoxStyle}
        >
            <ImageBackground
            style={ImageIsLoading ? { flex:1} : {width: 100}}
            source={ImageIsLoading ? require('./product_placeholder.jpg') : null}
            >
                <Image
                    style={styles.Image}
                    source={{ uri: props.image }}
                    onLoad={() => setImageIsLoaded(false)}
                />
            </ImageBackground>

            <Text style={styles.productName}>{props.name}</Text>
            <Text style={styles.price}>{'$' + props.price.toString()}</Text>
        </TouchableOpacity>
    )
}

const device_height = Dimensions.get('window').height;
const device_width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: 'grey',
        borderWidth: 1,
        minHeight: device_height * 0.4,
        marginBottom: 10,
        borderRadius: 1.5
    },
    productName: {
        fontSize: 17,
        padding: 5,
        fontWeight: '700'
    },
    price: {
        alignSelf: 'flex-end',
        color: '#fff',
        backgroundColor: '#ffbc00',
        fontSize: 20,
        padding: 3,
        margin: 2,
        borderRadius: 3
    },
    Image: {
        flex: 1,
        width: undefined,
        height: undefined
    }
})


export default productBox