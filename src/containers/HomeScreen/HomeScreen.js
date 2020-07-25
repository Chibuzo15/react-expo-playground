import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Button,
    StatusBar,
    TouchableHighlight
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import Card from '../../components/UI/Card/card';
import Searchbar from '../../components/SearchBar/SearchBar';


class HomeScreen extends Component {

    state = {
        cards: [
            {
                title: 'WOMEN',
                image: require('../../../assets/female_cloth.jpg')
            },
            {
                title: 'MEN',
                image: require('../../../assets/male_cloth.jpg')
            }
        ],
        showSearch: true
    }

    handleCategoryClick = () => {
        this.props.navigation.navigate('ProductScreen')
    }

    handleSearchclick = () => {

    }

    render() {
        console.log(styles)
        return (
            <ScrollView style={styles.container}>
                <StatusBar barStyle="light-content" />

                {this.state.showSearch ?
                    <View style={styles.searchbar}>
                        <Searchbar
                        clicked = {() => this.setState({showSearch: false})}
                        />
                    </View>
                    :
                    <View style={styles.header}>
                        <View style={styles.topText}>
                            <Text style={styles.greetingsText}>Hi, user</Text>
                            <Text style={styles.TitleText} >WELCOME</Text>
                        </View>
                        <TouchableHighlight
                            onPress={() => this.setState({showSearch: true})}
                            style={styles.searchIcon}>
                            <MaterialIcons name='search' size={25} />
                        </TouchableHighlight>
                    </View>
                }


                <View
                    style={styles.cardWrapper}
                >
                    {this.state.cards.map(card => {
                        return <Card
                            key={card.title}
                            text={card.title}
                            image={card.image}
                            clicked={this.handleCategoryClick}
                        />
                    })}
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
    },
    topText: {
        paddingLeft: 10,
    },
    TitleText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    greetingsText: {
        fontSize: 14,
        color: 'grey',
        textAlign: 'left'
    },
    cardWrapper: {
        padding: 20
    },
    searchIcon: {
        marginLeft: 'auto',
        padding: 7
    },
    searchbar: {
        height: "auto",
    }
});

export default HomeScreen