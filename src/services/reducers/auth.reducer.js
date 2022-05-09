import { types } from "../constants/actionTypes";

const initialState = {
  authData: null
}

export const authReducer = (state= initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        authData: action.payload
      } 
    case types.LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        authData: null
      }
    default:
      return state;
  }
}
