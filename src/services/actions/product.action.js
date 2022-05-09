import * as api from '../api/api-calls';
import { types } from '../constants/actionTypes';


// Action creators
export const getProducts = (page) => async(dispatch) => {
  try {
    dispatch({ type: types.START_LOADING });
    const {data} = await api.getProducts(page);
    dispatch({type: types.FETCH_PRODUCTS, payload: data});
    dispatch({ type: types.STOP_LOADING });
  } catch (error) {
    console.log(error);
  }
}

export const getProduct = (id) => async(dispatch) => {
  try {
    dispatch({ type: types.START_LOADING });
    const {data} = await api.getProductById(id);
    dispatch({type: types.FETCH_PRODUCT, payload: data});
    dispatch({ type: types.STOP_LOADING });
  } catch (error) {
    console.log(error);
  }
}