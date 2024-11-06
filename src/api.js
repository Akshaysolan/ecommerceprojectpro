import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const fetchProducts = () => axios.get(`${API_BASE_URL}/products`);
export const fetchProductById = (id) => axios.get(`${API_BASE_URL}/products/${id}`);
export const checkoutProduct = (productId) => axios.post(`${API_BASE_URL}/checkout/${ productId }`);
