import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';

import PlaceholderImage from './ProductImage';

const productBox = (props) => {
    const productBoxStyle = [styles.container,props.style];
    return (
        <TouchableOpacity
        onPress={() => props.clicked(props)}
        style={productBoxStyle}
        >
            <PlaceholderImage/>
            <Text style={styles.productName}>{props.name}</Text>
            <Text style={styles.price}>{'$' + props.price.toString()}</Text>
        </TouchableOpacity>
    )
}

const device_height = Dimensions.get('window').height

const styles = StyleSheet.create({
    container:{
        flex:1,
        borderColor: 'grey',
        borderWidth: 1,
        minHeight: device_height*0.4,
        marginBottom: 10,
        borderRadius:1.5
    },
    productName:{
        fontSize:17,
        padding: 5,
        fontWeight: '700'
    },
    price:{
        alignSelf: 'flex-end',
        color: '#fff',
        backgroundColor: '#ffbc00',
        fontSize: 20,
        padding: 3,
        margin: 2,
        borderRadius: 3
    }
})


export default productBox