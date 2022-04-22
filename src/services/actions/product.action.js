import * as api from '../api/api-calls';
import { types } from '../constants/actionTypes';


// Action creators
export const getProducts = () => async(dispatch) => {
  try {
    dispatch({ type: types.START_LOADING });
    const {data} = await api.getProducts();
    dispatch({type: types.FETCH_PRODUCTS, payload: data});
    dispatch({ type: types.STOP_LOADING });
  } catch (error) {
    console.log(error);
  }
}