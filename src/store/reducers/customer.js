import * as actionTypes from '../actions/actions';

const initialState = {
    loggedIn: false,
    userObj: null,
    error: null,
    customerLoading: false,
    success: null,
    token: null
}

const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_START:
            return {
                ...state,
                customerLoading: true,
                error: null
            }
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                customerLoading: false,
                loggedIn: true,
                customerId: action.userObj,
                token: action.token
            }
        case actionTypes.LOGIN_FAILED:
            return {
                ...state,
                customerLoading: false,
                customerId: null,
                token: null,
                loggedIn: false,
                error: action.error
            }
        case actionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                customerId: null,
                token: null,
                success: true,
                loggedIn: false
            }
        case actionTypes.LOGOUT_FAILED:
            return {
                ...state,
                success: false,
                error: action.error
            }
        case actionTypes.CLEAR_LOGIN_MESSAGES:
            return {
                ...state,
                success: null,
                error: null
            }
        default:
            return state;
    }
}

export default customerReducer;