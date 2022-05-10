import axios from "axios";

const API = axios.create({baseURL: 'http://localhost:3300/'});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers['x-access-token'] = `${localStorage.getItem('token')}`;
  }
  return req;
})

export const getProducts = (page) => API.get(`/products?page=${page}&limit=10`);
export const getProductById = id => API.get(`/products/${id}`);
export const deleteProduct = id => API.delete(`/products/${id}`);

export const signin = (formData) => API.post('/auth', formData);