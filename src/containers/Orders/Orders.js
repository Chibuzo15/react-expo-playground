import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import OrderItem from '../../components/Orders/OrderItem/OrderItem';

import * as actions from '../../store/actions/index';

class Orders extends Component {
    componentDidMount() {
        this.props.onGetOrders(this.props.token)
    }

    render() {
        let orders = null;
        if (this.props.orders) {
            // console.log(this.props.orders[0], 'order data')
            orders = this.props.orders.map(order => {
                return <OrderItem
                    key={order._id}
                    data={order}
                />
            })
        }
        return (
            <ScrollView style={styles.container}>
                {orders}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop: 15,
        flex:1
    }
})

const mapStateToProps = state => {
    return {
        token: state.customer.token,
        orders: state.order.orders
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetOrders: (token) => dispatch(actions.getOrdersCustomer(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);