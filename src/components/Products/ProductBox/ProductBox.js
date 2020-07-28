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

    let baseUrl = "https://protected-springs-06155.herokuapp.com/";
    let image_url = null
    if (props.image) {
        image_url = baseUrl + 'images' + props.image.replace('--', '_md')
    }

    return (
        <TouchableOpacity
            onPress={() => props.clicked(productObj)}
            style={productBoxStyle}
        >
            <ImageBackground
                style={ImageIsLoading ? { flex: 1 } : {flex:1}}
                // source={{ uri: image_url }}
                source={ImageIsLoading ? require('./product_placeholder.jpg') : null}
            >
                <Image
                    style={styles.Image}
                    source={{ uri: image_url }}
                    onLoad={() => setImageIsLoaded(false)}
                />
            </ImageBackground>
            <View style={styles.productInfo} >
                <Text style={styles.productName}>{props.name}</Text>
                <Text style={styles.price}>{'₦' + props.price.toString()}</Text>
            </View>
        </TouchableOpacity>
    )
}

const device_height = Dimensions.get('window').height;
const device_width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1 / 2,
        minHeight: device_height * 0.4,
        marginBottom: 10,
        borderRadius: 1.5,
        // For Android
        elevation: 5,
        // For IOS
        shadowColor: '#898989',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.7,
        shadowRadius: 2,
    },
    productName: {
        color: '#4f4f4f',
        fontSize: 17,
        padding: 5,
        fontWeight: '700'
    },
    price: {
        alignSelf: 'flex-end',
        color: 'tomato',
        // backgroundColor: '#ffbc00',
        fontSize: 20,
        padding: 3,
        // margin: 2,
        borderRadius: 3
    },
    Image: {
        flex: 1,
        width: undefined,
        height: undefined
    },
    productInfo: {
        height: 'auto',
        backgroundColor: 'white'
    }
})


export default productBox