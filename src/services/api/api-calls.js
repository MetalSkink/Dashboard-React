import axios from "axios";

const API = axios.create({baseURL: 'http://localhost:3400/'});

export const getProducts = () => API.get("/products");
export const getProductById = id => API.get(`/products/${id}`);