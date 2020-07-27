import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Checkout extends Component {
    render (){
        console.log('NAV Log', this.props)
        return(
            <View>
                <Text>Checkout screen</Text>
            </View>
        )
    }
}

export default Checkout;