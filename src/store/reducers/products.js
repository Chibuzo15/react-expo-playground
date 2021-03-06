import * as actionTypes from '../actions/actions';

const initialState = {
    products: null,
    productsLoading: false,
    products_error : false,
    uploaded_image_url: null,
    uploaded_image_id: null,
    added_product: null
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_START:
            return {
                ...state,
                productsLoading: true,
                products_error: null
            }
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                productsLoading: false,
                products: action.products
            }
        case actionTypes.GET_PRODUCTS_FAILED:
            return {
                ...state,
                productsLoading: false,
                products: null,
                products_error: true,
            }
        case actionTypes.ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                added_product: action.product
            }
        case actionTypes.ADD_PRODUCT_FAILED:
            return {
                ...state,
                products_error: true,
                added_product: null
            }
        case actionTypes.DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
            }
        case actionTypes.DELETE_PRODUCT_FAILED:
            return {
                ...state,
                admin_error: true,
            }
        case actionTypes.UPLOAD_PRODUCT_IMAGE_SUCCESS:
            return {
                ...state,
                uploaded_image_url: action.url,
                uploaded_image_id: action.image_id
            }
        case actionTypes.UPLOAD_PRODUCT_IMAGE_FAILED:
            return {
                ...state,
                uploaded_image_url: null,
                uploaded_image_id: null,
                products_error: action.error
            }
        case actionTypes.CLEAR_PRODUCT_MESSAGES:
            return {
                ...state,
                products_error: null
            }
        default:
            return state;
    }
}

export default productReducer