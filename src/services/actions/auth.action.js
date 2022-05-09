import Swal from 'sweetalert2';
import * as api from '../api/api-calls';
import { types } from '../constants/actionTypes';

export const signin = (formData)=> async(dispatch) => {
  try {
    const {data} = await api.signin(formData);
    console.log(data);
    dispatch({type: types.LOGIN, payload: data});
  } catch (error) {
    Swal.fire(
      'Error!',
      'Credenciales incorrectas',
      'error'
    )
  }
}
