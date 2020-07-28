import React, { Component } from 'react';
import { View, Text } from 'react-native';
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
            console.log(this.props.orders)
            this.props.order.map(order => {

            })
         }
        return (
            <View>
                {orders}
            </View>
        )
    }
}

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