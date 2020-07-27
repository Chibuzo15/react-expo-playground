import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    Dimensions,
    Button
} from 'react-native';
import { connect } from 'react-redux';
import { useFocusEffect} from '@react-navigation/native'

import * as actions from '../../store/actions/index';

import Topbar from '../../components/UI/Topbar/TopBar';
import MyStatusBar from '../../components/StatusBar/StatusBar';
import CartItem from '../../components/Cart/CartItem/CartItem';
import { TouchableHighlight } from 'react-native-gesture-handler';

class Cart extends Component {

    componentDidMount() {
        this.props.onSetCart()
    }


    handleCheckoutClick = () => {
        // if (!this.props.loggedIn) {
        //     this.props.navigation.navigate('SignIn', {
        //         message: 'You must be logged in before checkout'
        //     })
        //     return
        // }
        this.props.navigation.navigate('Checkout')
    }

    removeFromCart = (id) => {
        this.props.onRemoveFromCart(id)
    }

    render() {
        let cartItems = null;
        if (this.props.cartData && this.props.cartData.totalQty > 0 && this.props.cartData.cartItems) {
            cartItems = this.props.cartData.cartItems.map(item => {
                return <CartItem
                    remove={(id) => this.removeFromCart(id)}
                    key={item.id}
                    item={item}
                />
            })
        }

        let buildCart = <View>
            {cartItems}
            <View style={styles.total}>
                <Text
                    style={{
                        fontSize: 17
                    }}
                >Total</Text>
                <Text style={styles.totalPrice}>{this.props.cartData ? '₦' + this.props.cartData.totalPrice.toString() : null}</Text>
            </View>
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                style={styles.checkoutButton}
                onPress={this.handleCheckoutClick}
            >
                <Text
                    style={{
                        color: 'white',
                        textAlign: 'center'
                    }}
                >PROCEED TO CHECKOUT</Text>
            </TouchableHighlight>
        </View>
        return (
            <ScrollView style={styles.container}>
                {/* <StatusBar barStyle="light-content" /> */}
                <MyStatusBar backgroundColor="#e23e22" barStyle="light-content" />

                <Topbar
                    title="Cart"
                />
                {cartItems ? buildCart : <View>
                    <Text style={styles.cartEmpty}>Your Cart is currently empty</Text>
                    <Button
                        onPress={() => this.props.navigation.navigate('Home')}
                        color='tomato'
                        title='Shop Now'
                    />
                </View>}
                <FetchCartData
                    cartQty={this.props.cartData ? this.props.cartData.totalQty : null}
                    setCart={this.props.onSetCart}
                />
            </ScrollView>
        )
    }
}

function FetchCartData({setCart }) {
    useFocusEffect(
        React.useCallback(() => {
            setCart()
        }, [setCart])
    );

    return null;
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cartEmpty: {
        fontSize: 20,
        textAlign: "center",
    },
    total: {
        flexDirection: 'row',
        paddingRight: 20,
        paddingLeft: 20,
        marginVertical: 10,
        justifyContent: 'space-between'
    },
    checkoutButton: {
        backgroundColor: 'tomato',
        alignSelf: 'center',
        maxWidth: deviceWidth * 0.5,
        borderRadius: 30,
        padding: 10,
        // For Android
        elevation: 5,
        // For IOS
        shadowColor: '#aaaaaa',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.7,
        shadowRadius: 2,
    },
    totalPrice: {
        fontSize: 22,
        fontWeight: 'bold'
    }
})
const mapStateToProps = (state) => {
    return {
        cartData: state.cart.cartData,
        loggedIn: state.customer.loggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetCart: () => dispatch(actions.setCart()),
        onRemoveFromCart: (id) => dispatch(actions.removeFromCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);