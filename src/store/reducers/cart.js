import * as actionTypes from '../actions/actions';

const initialState = {
    cartLoading: false,
    addToCartLoading: false,
    cartData: null,
    totalPrice: null,
    success: null,
    error: null,
    cartItems: []
}

function removeCartItem(array, action) {
    return array.filter((item) => item !== action)
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CART_START:
            return {
                ...state,
                cartLoading: true,
                error: null
            }
        case actionTypes.SET_CART_SUCCESS:
            return {
                ...state,
                error: null,
                cartLoading: false,
                totalPrice: action.cartData.totalPrice,
                cartData: action.cartData
            }
        case actionTypes.SET_CART_FAILED:
            return {
                ...state,
                cartLoading: false,
                totalPrice: null,
                error: action.error
            }
        /**
         * ADD
         */
        case actionTypes.ADD_TO_CART_START:
            return {
                ...state,
                addToCartLoading: true,
            }
        case actionTypes.ADD_TO_CART_SUCCESS:
            return {
                ...state,
                addToCartLoading: false,
                success: true,
                error: null,
                // cartItems: [...state.cartItems, action.product_id]
            }
        case actionTypes.ADD_TO_CART_FAILURE:
            return {
                ...state,
                addToCartLoading: false,
                error: action.error
            }
        /**
         * REMOVE
         */
        case actionTypes.REMOVE_FROM_CART_SUCCESS:
            return {
                ...state,
                cartData: action.cartData
                // cartItems: removeCartItem(state.cartItems, action.product_id)
            }
        case actionTypes.REMOVE_FROM_CART_FAILURE:
            return {
                ...state,
                error: action.error
            }
        case actionTypes.CLEAR_CART_SUCCESS:
            return {
                ...state,
                cartData: null
            }
        case actionTypes.CLEAR_CART_FAILED:
            return {
                ...state,
                error: action.error
            }
        case actionTypes.CLEAR_CART_MESSAGES:
            return {
                ...state,
                success: null,
                error: null
            }
        default:
            return state;
    }
}

export default cartReducer;