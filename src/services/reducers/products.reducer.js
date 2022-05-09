import { types } from "../constants/actionTypes";

const initialState = {
  products: [],
  product: {},
  isLoading: true,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case types.STOP_LOADING:
      return {
        ...state,
        isLoading: false
      };
    case types.FETCH_PRODUCT:
      return {
        ...state,
        product: action.payload
      };
    case types.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
        currentPage: action.payload.currentPage,
        totalPages: action.payload.totalPages,
      };
    case types.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload.id)
      };
    default:
      return state;
  }
};