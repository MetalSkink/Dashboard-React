import Swal from 'sweetalert2';
import * as api from '../api/api-calls';
import { types } from '../constants/actionTypes';

export const signin = (formData,navigate)=> async(dispatch) => {
  try {
    const {data} = await api.signin(formData);
    console.log(data);
    dispatch({type: types.LOGIN, payload: data});
    navigate('/products', {
      replace: true
    });
  } catch (error) {
    Swal.fire(
      'Error!',
      'Credenciales incorrectas',
      'error'
    )
  }
}

export const logout = () => async(dispatch) =>  {
  try {
    dispatch({type: types.LOGOUT});
  } catch (error) {
    console.log(error);
  }
}