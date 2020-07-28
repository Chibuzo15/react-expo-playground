import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const eachProduct = ({ product }) => {
    const [imageisLoading, setImageisLoading] = useState(true);
    return (
        <View style={styles.container}>
            <ImageBackground
                style={imageisLoading ? styles.imagePlaceHolder : { width: 100 }}
                source={imageisLoading ? require('../../../Products/ProductBox/product_placeholder.jpg') : null}
            >
                {/* <Image
                        style={styles.Image}
                        source={{ uri: props.item.image }}
                        onLoad={() => setImageisLoading(false)}
                    /> */}
            </ImageBackground>
            <View style={styles.productDetails}>
                <Text style={{fontSize:15, fontWeight: 'bold'}}>{product.id.name}</Text>
                <Text>{"Quantity: "+ product.quantity} </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignContent: 'center',
        borderColor: 'grey',
        paddingVertical: 5,
        borderBottomWidth: 1
    },
    imagePlaceHolder: {
        flex: 2,
        // width: 100,
        height: 100
    },
    productDetails:{
        flex: 5,
        justifyContent: 'center'
    }
})

export default eachProduct;