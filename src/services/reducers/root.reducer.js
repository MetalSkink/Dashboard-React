import { combineReducers } from "redux";
import { productsReducer } from "../reducers/products.reducer";

export const rootReducer = combineReducers({
  products: productsReducer,
});