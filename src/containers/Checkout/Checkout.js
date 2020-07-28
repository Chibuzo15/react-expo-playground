import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet
} from 'react-native';
import { Input } from 'react-native-elements';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import DefaultButton from '../../components/UI/Button/button';

class Checkout extends Component {
    state = {
        formValues: {
            name: {
                value: 'ijsfjdj'
            },
            address: {
                value: ''
            },
            phone: {
                value: ''
            },
        }
    }

    handleInputChange = (value, field) => {
        // console.log(this.state.formValues['name'].value)
        let oldFormVal = this.state.formValues
        // console.log(oldFormVal[field] + value + 'fresh')
        oldFormVal[field].value = value
        this.setState({ formValues: oldFormVal })
        // this.setState({ formValues })
    }

    // orderHandler = () => {}
    orderHandler = () => {
        const formData = this.state.formValues

        if (!this.props.loggedIn) {
            this.props.navigation.navigate('SignIn', {
                message: 'You must be logged in before payment'
            })
            return
        }

        let products = null;
        if (this.props.cartData && this.props.cartData.cartItems) {
            products = this.props.cartData.cartItems.map(product => {
                return {
                    id: product.id,
                    quantity: product.quantity
                }
            })
        }

        const order = {
            products: products,
            price: this.props.totalPrice,
            userData: formData,
            order_status: 'pending'
        }
        this.props.onOrder(order, this.props.customerToken)

        // this.setState(prevState => ({
        //     showPaystack: true
        // }));
    }

    render() {
        // console.log('NAV Log', this.props)
        return (
            <ScrollView style={styles.container}>
                <View style={styles.form}>
                    <Input
                        placeholder='Your Name'
                        label='Name'
                        onChangeText={(val) => this.handleInputChange(val, 'name')} />
                    <Input
                        placeholder='Delivery Address'
                        label='Address'
                        multiline={true}
                        numberOfLines={4}
                        onChangeText={(val) => this.handleInputChange(val, 'address')} />
                    <Input
                        placeholder='Phone No'
                        label='Phone No'
                        keyboardType={'numeric'}
                        onChangeText={(val) => this.handleInputChange(val, 'phone')} />
                </View>
                <View style={styles.TotalWrapper}>
                    <Text style={{
                        fontSize: 18
                    }}>Total</Text>
                    <Text style={styles.totalPrice}>{'₦' + '10000'}</Text>
                </View>
                <DefaultButton
                    clicked={this.orderHandler}
                    style={{
                        width: 300,
                        marginBottom: 15
                    }}
                    title='pay now'
                />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20,
    },
    form: {
        marginTop: 15,
        padding: 15
    },
    TotalWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 22,
        marginBottom: 30
    },
    totalPrice: {
        fontWeight: 'bold',
        fontSize: 23,
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onOrder: (orderData, token) => dispatch(actions.order(orderData, token))
    }
}

const mapStateToProps = state => {
    return {
        cartData: state.cart.cartData,
        totalPrice: state.cart.totalPrice,
        customerToken: state.customer.token,
        loggedIn: state.customer.loggedIn
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);