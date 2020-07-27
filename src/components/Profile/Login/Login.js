import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';

import Input from '../../UI/Input/Input';
import DefaultButton from '../../UI/Button/button';

import * as actions from '../../../store/actions/index';
import { connect } from 'react-redux'

class Login extends Component {
    state = {
        email: '',
        password: '',
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
        },
    }
    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    inputChangedHandler = (value, controlName) => {
        console.log('value ' + value + ' for element :' + controlName)
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: value,
                valid: this.checkValidity(value, this.state.controls[controlName].validation),
                touched: true
            }
        }
        this.setState({ controls: updatedControls })
    }


    handleLogin = () => {
        const userObj = {
            email: this.state.controls.email.value,
            password: this.state.controls.password.value
        }
        console.log(userObj)
        this.props.login(userObj)
    }

    render() {
        console.log('NAV Log', this.props.route.params)

        // Build form
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            })
        }

        let form = formElementsArray.map(formElement => {
            return <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                changed={(value) => this.inputChangedHandler(value, formElement.id)}
                inValid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
            />
        })

        // Generate message to show user if redirected from another route
        // e.g {USER MUST BE LOGGED IN BEFORE CHECKOUT}
        let message = null
        if (this.props.route.params) {
            message = <View >
                <Text style={styles.Message}>
                    {this.props.route.params.message ? this.props.route.params.message : null}
                </Text>
            </View>
        }
        let pageContent = <View style={styles.container}>
            {message}
            {form}
            <View style={styles.Forgot}>
                <Text> Forgot password </Text>
            </View>
            <Button

                title="Forgot password"
                onPress={() => this.props.navigation.navigate('Home')}
            />
            <Button
                title="SIGN IN"
                onPress={this.handleLogin}
            // btnType='Cart'
            />
            <View
                style={styles.CreateNew}>
                <Button

                    title="Create new account?"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
            <DefaultButton
            title='Create new account'
            />
            <View
            style={{
                marginTop: 20,
            }}>
                <Text>Testmail: tester@mail.com</Text>
                <Text>Testpassword: test123</Text>
            </View>
        </View>;

        if (this.props.loggedIn) {
            pageContent = <View style={styles.Success}><Text>You are successfully logged In</Text></View>
            // const RedirectUrl = this.props.location.state ? this.props.location.state.redirect : '/';
            // console.log('On login Page')
            // console.log('url :', RedirectUrl)
            // if (!this.props.location.state) {
            //     console.log('Message and location state unknown')
            //     setTimeout(() => {
            //         return <Redirect to={RedirectUrl} />
            //     }, 3000);
            // }
            // return <Redirect to={RedirectUrl} />
        }

        return (
            pageContent
        )
    }
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexFlow: column,
        alignItems: "center",
        // width: 80,
        // padding: 10,
        margin: "auto",
        // minHeight: 200,
    },
    Input: {
        width: deviceWidth,
        // height: 40,
        borderRadius: 7,
        // border: 1px solid rgb(78, 78, 78),
        borderWidth: 1,
        borderColor: 'grey',
    },
    CreateNew: {
        // marginTop: 30,
    },
    Forgot: {
        alignSelf: 'flex-end',
        // marginRight: 10 * deviceWidth,
    },
    Success: {
        color: 'green',
        fontSize: 22,
        textAlign: "center",
        minHeight: 100,
    },
    Message: {
        color: "red",
        fontSize: 20,
        textAlign: "center",
        padding: 10,
        // box - sizing: border - box;
    }
})

const mapStateToProps = state => {
    return {
        loggedIn: state.customer.loggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (userObj) => dispatch(actions.login(userObj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);