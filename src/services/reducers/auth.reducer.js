import { types } from "../constants/actionTypes";

const initialState = {
  authData: null,
  logged: false,
}

export const authReducer = (state= initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        rol: action.payload.roles.splice(-1)[0],
        authData: action.payload,
        logged: true
      } 
    case types.LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        rol: null,
        authData: null,
        logged: false
      }
    default:
      return state;
  }
}
