import axios from "axios";

const API = axios.create({baseURL: 'http://localhost:3300/'});

export const getProducts = (page) => API.get(`/products?page=${page}&limit=10`);
export const getProductById = id => API.get(`/products/${id}`);

export const signin = (formData) => API.post('/auth', formData);