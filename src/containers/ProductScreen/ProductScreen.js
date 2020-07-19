import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native';

import ProductBox from '../../components/Products/ProductBox/ProductBox';

class ProductScreen extends Component {

    state = {
        products: [{
            name: 'product 1',
            price: 289
        }, {
            name: 'product 2',
            price: 150
        }, {
            name: 'product 3',
            price: 764
        }, {
            name: 'product 4',
            price: 328
        }, {
            name: 'product 5',
            price: 210
        }, {
            name: 'product 6',
            price: 381
        },]
    }

    renderProducts = ({ item, index }) => {
        // add margin based on even or odd
        let style = {}
        // if even do this , else do that
        console.log(index)
        index % 2 == 0 ? style = { marginLeft: 10 } : style = { marginLeft: 10, marginRight: 10 }
        console.log(style)
        return <ProductBox
            clicked={(name) => this.viewProduct(name)}
            style={style}
            name={item.name}
            price={item.price}
        />
    }

    viewProduct = ({name, price}) => {
        console.log('clicked', name)
        this.props.navigation.navigate('ProductDetails', {
            name,
            price,
          });
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <Text style={styles.TitleText}>Featured products</Text>
                <FlatList
                    data={this.state.products}
                    renderItem={this.renderProducts}
                    keyExtractor={item => item.name}
                    numColumns={2}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flex:1,
    },
    TitleText: {
        fontSize: 23,
        padding: 5,
        fontWeight: 'bold',
    }
})

export default ProductScreen;