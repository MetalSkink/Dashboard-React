import { combineReducers } from "redux";
import { productsReducer } from "../reducers/products.reducer";
import { authReducer } from "./auth.reducer";

export const rootReducer = combineReducers({
  products: productsReducer,
  auth: authReducer
});