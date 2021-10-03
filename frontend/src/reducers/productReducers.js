import { PRODUCT_LIST_FAIL,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_REQUEST, 
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_PRODUCT_DETAILS,
    CLEAR_LIST_PAGE,
    
    } 
    from "../constants/productConstants"


export const productListReducer = (state = { products : []}, action) =>{
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {loadig : true, products: []}
        case PRODUCT_LIST_SUCCESS:    
            return {loading : false, products : action.payload}
        case PRODUCT_LIST_FAIL :
            return {loading : false, error : action.payload}
        case CLEAR_LIST_PAGE:
            return { loading: true,  };

        default :
            return state
    }
}


export const productDetailsReducer = (state = { product : {reviews : [] }}, action) =>{
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return {loadig : true,  ...state}
        case PRODUCT_DETAILS_SUCCESS:    
            return {loading : false, product : action.payload}
        case PRODUCT_DETAILS_FAIL :
            return {loading : false, error : action.payload}
        case CLEAR_PRODUCT_DETAILS:
            return { loading: true, product: { reviews: [] } };

        default :
            return state
    }
}