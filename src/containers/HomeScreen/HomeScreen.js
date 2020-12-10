import React, { Component, useRef } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Button,
    Animated,
    StatusBar,
    TouchableHighlight
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { connect} from 'react-redux';

import Card from '../../components/UI/Card/card';
import Searchbar from '../../components/SearchBar/SearchBar';
import MyStatusBar from '../../components/StatusBar/StatusBar';

import * as actions from '../../store/actions/index';


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
        showSearch: false,
        fadeAnim: new Animated.Value(0),
        headerOpacity: new Animated.Value(1)
    }

    componentDidMount (){
        this.props.onCheckAuth()
    }

    handleCategoryClick = () => {
        this.props.navigation.navigate('ProductScreen')
    }

    handleSearchclick = () => {
        this.setState({ showSearch: true })
        this.fadeInSearch()
        //hide header
        this.state.headerOpacity.setValue(0)
    }

    handleSearchclose = () => {
        this.setState({ showSearch: false })
        this.fadeInHeader()
    }

    fadeInSearch = () => {
        // show search icon
        Animated.timing(this.state.fadeAnim, {
            toValue: 1,
            useNativeDriver: true,
            duration: 300
        }).start();
    };

    fadeInHeader = () => {
        Animated.timing(this.state.headerOpacity, {
            toValue: 1,
            useNativeDriver: true,
            duration: 300
        }).start();
    }

    render() {

        return (
            <ScrollView style={styles.container}>
                {/* <StatusBar barStyle="light-content" /> */}
                <MyStatusBar backgroundColor="#e23e22" barStyle="light-content"/>

                {this.state.showSearch ?
                    <Animated.View style={[styles.searchbar, {
                        opacity: this.state.fadeAnim // Bind opacity to animated value
                    }]}>
                        <Searchbar
                            clicked={this.handleSearchclose}
                        />
                    </Animated.View>
                    :
                    <Animated.View style={[styles.header, {
                        opacity: this.state.headerOpacity
                    }]}>
                        <View style={styles.topText}>
                            <Text style={styles.greetingsText}>Hi, user</Text>
                            <Text style={styles.TitleText} >WELCOME</Text>
                        </View>
                        <TouchableHighlight
                            onPress={this.handleSearchclick}
                            style={styles.searchIcon}>
                            <MaterialIcons name='search' size={25} />
                        </TouchableHighlight>
                    </Animated.View>
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
                <View>
                    <Text style={{
                        textAlign: 'center',
                        color:'grey',
                        paddingVertical: 7
                    }}>version 1.2</Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 5,
        paddingRight: 5,
        paddingLeft: 5,
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

const mapDispatchToProps = dispatch => {
    return {
        onCheckAuth: () => dispatch(actions.customerAuthCheckState()),
    }
}

export default connect(null, mapDispatchToProps)(HomeScreen)