import React from 'react';
import { Image, StyleSheet } from 'react-native';

const productImage = () => {
    return (
        <Image
            style={styles.Image}
            source={require('./product_placeholder.jpg')}
        />
    )
}

const styles = StyleSheet.create({
    Image:{
        flex:1,
        width: undefined,
        height: undefined
    }
})

export default productImage;