import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Button
} from 'react-native';

import Topbar from '../../components/UI/Topbar/TopBar';

class Cart extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <Topbar
                    title="Cart"
                />
                <View>
                    <Text style={styles.cartEmpty}>Your Cart is currently empty</Text>
                    <Button
                        style={styles.shopNow}
                        title='Shop Now'
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cartEmpty: {
        fontSize: 20,
        textAlign: "center",
    },
    shopNow: {
        width: 100
    }
})

export default Cart;