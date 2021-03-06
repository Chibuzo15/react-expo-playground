import React, { Component } from 'react';
import {
    View,
    Keyboard,
    ActivityIndicator,
    ScrollView,
    Text,
    StyleSheet,
    Dimensions,
    FlatList
} from 'react-native';

import Input from '../../UI/Input/Input';
import DefaultButton from '../../UI/Button/button';

import * as actions from '../../../store/actions/index';
import {clearMessages} from '../../../store/actions/index'
import { connect } from 'react-redux'
import { TouchableHighlight } from 'react-native-gesture-handler';

class Login extends Component {
    state = {
        isConnected: true,
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

    componentDidMount(){
        this.props.onClearLoginMessages()
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
        Keyboard.dismiss()
        const userObj = {
            email: this.state.controls.email.value,
            password: this.state.controls.password.value
        }
        // console.log(userObj)
        this.props.login(userObj)
    }

    renderInput = ({item}) => {
        const formElement = item
        return <Input
                // key={formElement.elementConfig.type}
                elementType={formElement.elementType}
                elementConfig={formElement.elementConfig}
                value={formElement.value}
                changed={(value) => this.inputChangedHandler(value, formElement.elementConfig.type)}
                inValid={!formElement.valid}
                shouldValidate={formElement.validation}
                touched={formElement.touched}
            />
    }

    render() {
        console.log('customerLoading ', this.props.customerLoading)

        let success_message = null;
        if(this.props.success){
           success_message = <Text
            style={{color: 'green', fontSize: 18}}
            >successfully logged in</Text>
        }

        let error_message = null;
        if(this.props.error){
            error_message = <><Text
            style={{color: 'red', fontSize: 18}}
            >Error while logging in</Text>
            {/* <Text>{this.props.error}</Text> */}
            </>
        }

        // Build form array
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            })
        }

        // Rearrange array
        const orderedForm = []
        const formOrder = ['email', 'password'];
        const itemsOrdered = [];
        for (let i = 0; i < formOrder.length; i++) {
            if (formElementsArray.findIndex(field => field.id === formOrder[i]) > -1) {
                itemsOrdered.push(this.state.controls[formOrder[i]]);
            }
        }

        let form = <FlatList
        data={itemsOrdered}
        renderItem={this.renderInput}
        keyExtractor={(item) => item.elementConfig.type}
      />

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
            <View>
                {form}
            </View>

            <View
                style={{
                    margin: 10
                }}
            >
                <TouchableHighlight
                    style={styles.Forgot}
                    onPress={() => this.props.navigation.navigate('Home')}
                >
                    <Text style={{ color: 'tomato' }}>
                        Forgot password?
                    </Text>
                </TouchableHighlight>
                {this.props.customerLoading ? <ActivityIndicator size="large" color="tomato" />
                :
                <DefaultButton
                style={{
                    margin: 10,
                    width: deviceWidth * 0.5
                }}
                clicked={this.handleLogin}
                title='Login'
            />
                }
            </View>
            <View>
                <Text style={{ textAlign: 'center' }}>Already have an account?</Text>
                <DefaultButton
                    style={{
                        marginTop: 10,
                        width: deviceWidth * 0.5
                    }}
                    // clicked={() => this.props.navigation.navigate('Home')}
                    title='Register'
                />
            </View>
                    {success_message}
                    {error_message}
            <View
                style={{
                    marginTop: 50,
                }}>
                <Text>Testmail: Test@test.com</Text>
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
        // alignItems: "center",
        margin: "auto",
    },
    formWrapper: {

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
        loggedIn: state.customer.loggedIn,
        error: state.customer.error,
        success: state.customer.success,
        customerLoading: state.customer.customerLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (userObj) => dispatch(actions.login(userObj)),
        onClearLoginMessages: () => dispatch(actions.clearMessages())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);