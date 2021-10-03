import axios from 'axios'

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



export const listProducts = () => async(dispatch) => {
    try {
        dispatch({type : PRODUCT_LIST_REQUEST})

        const {data} = await axios.get('/api/products')

        dispatch({
            type : PRODUCT_LIST_SUCCESS,
            payload : data,

        })
    } catch (error) {
        dispatch({
            type : PRODUCT_LIST_FAIL,
            payload :
             error.response  && error.response.data.message 
             ? error.response.data.message 
             : error.message,
        })
    }

}

export const clearListPage = () => async (dispatch) => {
    dispatch({ type: CLEAR_LIST_PAGE, payload: {} });
  };




export const listProductDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_DETAILS_REQUEST })
  
      const { data } = await axios.get(`/api/products/${id}`)
  
      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data,
      })

    } catch (error) {
      dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }


  export const clearProductDetails = () => async (dispatch) => {
    dispatch({ type: CLEAR_PRODUCT_DETAILS, payload: {} });
  };
