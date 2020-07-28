import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground
} from 'react-native';
import DefaultButton from '../../UI/Button/button';

const orderItem = ({ data }) => {
    const [imageisLoading, setImageisLoading] = useState(true);

    return (
        <View style={styles.container}>
            <View style={styles.identifier}>
                <Text>Order ID: {data._id}</Text>
                <Text>Order ID: {data.order_date}</Text>
            </View>
            <View
                style={styles.productDetails}
            >
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
                <View style={{
                    justifyContent:'center'
                }}>
                    <Text>product 1</Text>
                </View>
            </View>
            <View
                style={{
                    padding:5,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <Text>Total Amount</Text>
                <Text>{'₦' + data.orderdetails[0].total_price.toString()}</Text>
            </View>
            <View style={{marginTop: 30}}>
                <DefaultButton
                    style={styles.button}
                    title='leave feedback'
                />
                <DefaultButton
                    textStyle={{ color: 'tomato' }}
                    style={[styles.button, { borderColor: 'tomato', borderWidth: 2, backgroundColor: 'white' }]}
                    title='cancel order'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 5,
        backgroundColor: '#fcfcfc',
        borderColor: 'grey',
        marginBottom: 15,
        marginHorizontal: 15,
        borderRadius: 5,
        // For Android
        elevation: 2,
        // For IOS
        shadowColor: '#606060',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.7,
        shadowRadius: 2,
    },
    imagePlaceHolder: {
        flex: 1,
        width: 100,
        height: 100
    },
    identifier: {
        padding: 5
    },
    productDetails: {
        flex: 1,
        padding: 5,
        marginTop: 10,
        marginBottom:10,
        flexDirection: 'row',
        justifyContent: "space-between",
        // minHeight: 100
    },
    button: {
        borderRadius: 5,
        width: 350
    }
})

export default orderItem;