import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    Button,
    Dimensions
} from 'react-native';

import { connect } from 'react-redux';
import { addToCart, clearCartMessages } from '../../../store/actions/index';


// import ProductImage from '../Products/ProductBox/ProductImage';

class SingleProduct extends Component {
    state = {
        imageisLoading: true
    }

    componentDidMount(){
        this.props.onClearCartMessages()
    }

    render() {
        const { id, name, price, image, desc } = this.props.route.params

        let success_message = null;
        if(this.props.cart_success){
           success_message = <Text
            style={{color: 'green', fontSize: 18}}
            >Product successfully added to cart</Text>
        }

        let error_message = null;
        if(this.props.cart_error){
            error_message = <Text
            style={{color: 'red', fontSize: 18}}
            >Error adding product to cart</Text>
        }
        // const {}
        return (
            <View>
                <ImageBackground
                    style={this.state.imageisLoading ? { width: device_width, minHeight: 300 } : { width: 100 }}
                    source={this.state.imageisLoading ? require('../ProductBox/product_placeholder.jpg') : null}
                >
                    <Image
                        style={styles.Image}
                        source={{ uri: image }}
                        onLoad={() => this.setState({ imageisLoading: false })}
                    />
                </ImageBackground>
                <>
                    <Text style={styles.productName}>{name}</Text>
                    <Text style={styles.productDesc}>
                        {desc}
                    </Text>
                </>
                <Text style={styles.productPrice}>{'₦' + price.toString()}</Text>
                <View style={styles.addToCart}>
                    <Button
                        onPress={() => this.props.onAddToCart(id)}
                        title='Add to Cart'
                        color='tomato'
                    />
                </View>
                {success_message}
                {error_message}
            </View>
        )
    }
}

const device_width = Dimensions.get('window').width

const styles = StyleSheet.create({
    productName: {
        fontSize: 21,
        fontWeight: '700'
    },
    productPrice: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'tomato',
    },
    Image: {
        minWidth: 0.9 * device_width,
        marginTop: 10
    },
    addToCart: {
        width: 0.5 * device_width,
        marginLeft: 'auto'
    },
    productDesc: {
        fontSize: 18
    }
})

const mapStateToProps = state => {
    return {
        cart_success: state.cart.success,
        cart_error: state.cart.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddToCart: (product_id) => dispatch(addToCart(product_id)),
        onClearCartMessages: () => dispatch(clearCartMessages())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);