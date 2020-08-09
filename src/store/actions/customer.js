import * as actionTypes from './actions';
import axios from '../../axios';
import { AsyncStorage } from 'react-native';

export const clearMessages = (error) => {
    return {
        type: actionTypes.LOGIN_FAILED,
        error: error
    }
}

const storeToken = async (userToken) => {
    try {
        await AsyncStorage.setItem('customer_token', userToken);
        console.log("Asyncstorage customer success");
    } catch (error) {
        console.log("Something went wrong storing customer_token", error);
    }
}

const getToken = async () => {
    try {
        let customerToken = await AsyncStorage.getItem('customer_token');
        return customerToken
    } catch (error) {
        console.log("Something went wrong getting token", error);
    }
}

const getTokenExpirationDate = async () => {
    try {
        let expirationDate = await AsyncStorage.getItem('customer_expirationDate');
        expirationDate = new Date(JSON.parse(expirationDate))
        return expirationDate
    } catch (error) {
        console.log("Something went wrong getting token", error);
    }
}

export const login = (userObj) => {
    return dispatch => {
        axios.post('/api/customers/login', userObj)
            .then(res => {
                const expirationDate = new Date(new Date().getTime() + 3600000)
                storeToken(res.data.token)
                AsyncStorage.setItem('customer_expirationDate', JSON.stringify(expirationDate), (err) => {
                    if (err) {
                        // console.log("Asyncstorage customer error");
                        throw err;
                    }
                }).catch((err) => {
                    console.log("error is: " + err);
                });
                AsyncStorage.setItem('customer_userId', res.data.customer._id)
                dispatch(loginSuccess(res.data, res.data.token))

            })
            .catch((error) => {
                console.log(error)
                dispatch(loginFailed(error))
            })
    }
}

export const loginSuccess = (userObj, token) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        userObj: userObj,
        token: token
    }
}

export const loginFailed = (error) => {
    return {
        type: actionTypes.LOGIN_FAILED,
        error: error
    }
}

export function logout(token) {
    return dispatch => {
        const headers = {
            'Content-Type': 'application/json',
            'x-auth': token
        }
        // console.log('logout token :', token)
        axios.delete('/api/customers/logout', { headers: headers })
            .then(() => {
                dispatch(logoutSuccess())
            }).catch((error) => {
                dispatch(logoutFailed(error))
            })
    }
}

export const logoutSuccess = () => {
    AsyncStorage.removeItem('customer_token');
    AsyncStorage.removeItem('customer_expirationDate');
    AsyncStorage.removeItem('customer_userId');
    return {
        type: actionTypes.LOGOUT_SUCCESS
    }
}

export const logoutFailed = (error) => {
    return {
        type: actionTypes.LOGOUT_FAILED,
        error: error
    }
}

export const checkAuthTimeout = (expirationTime) => {
    console.log('expiration Time ', expirationTime)
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}

export const setCustomerAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_ADMIN_AUTH_REDIRECT_PATH,
        path: path
    }
}

export const customerAuthCheckState = () => {
    return dispatch => {
        console.log('customerAuth Check called')

        // const token = getToken()
        // console.log('check Auth Token ', token)
        getToken()
            .then((token) => {
                if (!token) {
                    console.log('logoutsuccess')
                    dispatch(logoutSuccess())
                } else {
                    // const expirationDate = new Date(AsyncStorage.getItem('customer_expirationDate'))
                    getTokenExpirationDate()
                        .then((expirationDate) => {
                            // console.log('expiration date :', expirationDate)
                            if (expirationDate <= new Date()) {
                                dispatch(logout(token))
                            } else {
                                // const userId = AsyncStorage.getItem('customer_userId')
                                dispatch(loginSuccess(null, token))
                                // dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000))
                            }
                        })
                }
            })

    };
}
