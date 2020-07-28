import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const orderItem = ({item}) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                    style={imageisLoading ? styles.imagePlaceHolder : { width: 100 }}
                    source={imageisLoading ? require('../../Products/ProductBox/product_placeholder.jpg') : null}
                >
                    {/* <Image
                        style={styles.Image}
                        source={{ uri: props.item.image }}
                        onLoad={() => setImageisLoading(false)}
                    /> */}
                </ImageBackground>
            <View style={{
                flex: 3
            }}>
                    <Text>product 1</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
    },
    imagePlaceHolder:{
        flex: 2
    }
})

export default orderItem;