import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Button
} from 'react-native';

import Topbar from '../../components/UI/Topbar/TopBar';
import MyStatusBar from '../../components/StatusBar/StatusBar';

class Cart extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* <StatusBar barStyle="light-content" /> */}
                <MyStatusBar backgroundColor="#e23e22" barStyle="light-content"/>

                <Topbar
                    title="Cart"
                />
                <View>
                    <Text style={styles.cartEmpty}>Your Cart is currently empty</Text>
                    <Button
                        onPress={() => this.props.navigation.navigate('Home')}
                        color='tomato'
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
})

export default Cart;