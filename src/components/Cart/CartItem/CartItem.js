import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Image,
    ImageBackground,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'

const cartItem = (props) => {
    const [imageisLoading, setImageisLoading] = useState(true);
    const id = props.item.id;
    return (
        <View style={styles.container}>
            <TouchableHighlight
            onPress={() => props.remove(id)}
            style={styles.remove}>
                <Ionicons name="md-close" size={20} style={{ textAlign: 'center' }} />
            </TouchableHighlight>
            <View style={styles.details}>
                <ImageBackground
                    style={imageisLoading ? styles.imagePlaceHolder : { width: 100 }}
                    source={imageisLoading ? require('../../Products/ProductBox/product_placeholder.jpg') : null}
                >
                    {/* <Image
                        style={styles.Image}
                        source={{ uri: props.item.image }}
                        onLoad={() => setImageisLoading(false)}
                    /> */}
                </ImageBackground>
                <View style={{flex:2}}>
                    <Text style={styles.productName}>{props.item.name}</Text>
                    <Text style={styles.price}>{'₦' + props.item.price.toString() }</Text>
                </View>
                <View style={styles.quantityWrapper}>
                    <View style={styles.quantityControls} >
                        <Ionicons name="md-remove" size={20} style={{ textAlign: 'center' }} />
                    </View>
                    <Text style={styles.quantity}>{props.item.quantity}</Text>
                    <View style={styles.quantityControls}>
                        <Ionicons name="md-add" size={20} style={{ textAlign: 'center' }} />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 3,
        height: 100,
        backgroundColor: '#fcfcfc',
        // borderColor: 'grey',
        marginTop: 15,
        marginBottom: 15,
        marginRight: 13,
        marginLeft: 13,
        borderRadius: 15,
        // For Android
        elevation: 3,
        // For IOS
        shadowColor: '#898989',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.7,
        shadowRadius: 2,
    },
    details: {
        flexDirection: 'row'
    },
    remove: {
        alignSelf: 'flex-start',
        justifyContent: 'center',
        alignContent: 'center',
        // padding: 3,
        backgroundColor: '#fff',
        borderRadius: 70,
        width: 38,
        height: 38,
        marginTop: -20,
        marginLeft: 10,
        // For Android
        elevation: 3,
        // For IOS
        shadowColor: '#aaaaaa',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.7,
        shadowRadius: 2,
    },
    productName: {
        fontSize: 17,
    },
    quantityWrapper: {
        flexDirection: 'row',
        marginLeft: 'auto',
        justifyContent: 'center',
        alignContent: 'center',
        marginRight: 3
    },
    quantityControls: {
        borderWidth: 0.7,
        // padding: 3,
        width: 32,
        height: 32,
        borderRadius: 30,
        margin: 7,
        justifyContent: 'center',
        borderColor: 'black',
        alignSelf: 'center'
    },
    quantity: {
        alignSelf: 'center'
    },
    Image:{
        height: 200,
        width: 100
    },
    imagePlaceHolder:{
        flex:1,
        maxWidth: 80,
        overlayColor: 'blue'
    },
    price:{
        color: '#666666'
    }
})

export default cartItem;