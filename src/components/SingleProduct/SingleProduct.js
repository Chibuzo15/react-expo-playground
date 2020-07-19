import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

// import ProductImage from '../Products/ProductBox/ProductImage';

const singleProduct = ({ route }) => {
    const { name } = route.params
    const { price } = route.params

    return (
        <View>
            <Image
                style={styles.Image}
                source={require('../Products/ProductBox/product_placeholder.jpg')}
            />
            <Text style={styles.productName}>{name}</Text>
            <Text style={styles.productPrice}>{price}</Text>
        </View>
    )
}

const device_width = Dimensions.get('window').width

const styles = StyleSheet.create({
    productName: {
        fontSize: 21,
        fontWeight: '700'
    },
    productPrice: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#ffbc00',
    },
    Image:{
        minWidth: 0.9 * device_width,
        marginTop: 10
    }
})

export default singleProduct;