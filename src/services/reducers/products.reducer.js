import { types } from "../constants/actionTypes";

const initialState = {
  products: [],
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
    case types.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
        currentPage: action.payload.currentPage,
        totalPages: action.payload.totalPages,
      };
    default:
      return state;
  }
};