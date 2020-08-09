import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    // StatusBar
} from 'react-native';
import { connect } from 'react-redux';
import NetInfo from "@react-native-community/netinfo";

import * as actions from '../../store/actions/index';

import ProductBox from '../../components/Products/ProductBox/ProductBox';
import Spinner from '../../components/UI/Spinner/Spinner';
import MyStatusBar from '../../components/StatusBar/StatusBar';
import NetworkErrorBox from '../../components/Error/NetworkErrorBox';

class ProductScreen extends Component {
    state = {
        noOfProducts: 0
    }

    componentDidMount() {
        this.props.onClearMessages()
        this.props.onGetProducts()
        //get number of products to format flatlist design
        this.props.products ? this.setState({ noOfProducts: this.props.products.length }) : null
    }

    renderProducts = ({ item, index }) => {
        // add margin based on even or odd
        let style = {}

        // set styling for margin in product grid
        index % 2 == 0 ? style = { marginLeft: 10 } : style = { marginLeft: 10, marginRight: 10 }

        // set styling for last item
        if ((this.state.noOfProducts - 1) === index) {
            style = { marginLeft: 10, marginRight: 20 }
        }

        return <ProductBox
            clicked={(productData) => this.viewProduct(productData)}
            style={style}
            id={item.id}
            key={item.id}
            name={item.name}
            price={item.price}
            desc={item.desc}
            image={item.image}
        />
    }

    viewProduct = (product) => {
        this.props.navigation.navigate('ProductDetails', product);
    }



    render() {
        let products_error = null;

        const unsubscribe = NetInfo.addEventListener(state => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
            if(!state.isConnected){
                products_error = <NetworkErrorBox
                    function={this.props.onGetProducts}
                    message="Device is not connected"
                />
            }
          });

          unsubscribe()

        if (this.props.products_error) {
            console.log(this.props.products_error)
            products_error = <NetworkErrorBox
                    function={this.props.onGetProducts}
                    message="Error getting products"
                />
        }

        let products = this.props.products ?
            <FlatList
                data={this.props.products}
                renderItem={this.renderProducts}
                keyExtractor={item => item.name}
                numColumns={2}
            /> : <Spinner />;
        return (
            <View style={styles.container}>
                {/* <StatusBar barStyle="light-content" /> */}
                <MyStatusBar backgroundColor="#e23e22" barStyle="light-content" />
                <Text style={styles.TitleText}>products</Text>
                <View style={styles.productsWrapper}>
                    {products}
                </View>

                {products_error}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flex:1,
        marginBottom: 30
    },
    TitleText: {
        fontSize: 23,
        padding: 5,
        fontWeight: 'bold',
    },
    productsWrapper: {
        // paddingTop: 20,
        paddingBottom: 100,
    }
})

const mapStateToProps = state => {
    return {
        products: state.products.products,
        products_error: state.products.products_error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetProducts: () => dispatch(actions.getProducts()),
        onClearMessages: () => dispatch(actions.clearProductMessages())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen);