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
import { addToCart } from '../../../store/actions/index'

// import ProductImage from '../Products/ProductBox/ProductImage';

class SingleProduct extends Component {
    state = {
        imageisLoading: true
    }


    render() {
        const { id, name, price, image } = this.props.route.params

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

                <Text style={styles.productName}>{name}</Text>
                <Text style={styles.productPrice}>{'₦' + price.toString()}</Text>
                <View style={styles.addToCart}>
                    <Button
                        onPress={() => this.props.onAddToCart(id)}
                        title='Add to Cart'
                        color='tomato'
                    />
                </View>
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
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onAddToCart: (product_id) => dispatch(addToCart(product_id)),
    }
}

export default connect(null, mapDispatchToProps)(SingleProduct);