import axios from 'axios';

axios.defaults.withCredentials = true; // Habilitar el envío de cookies globalmente
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// crear otros configs, ya que tenemos :
//import.meta.env.VITE_BACKEND_URL + '/products'
//import.meta.env.VITE_BACKEND_URL + '/clients'
//import.meta.env.VITE_BACKEND_URL + '/orders'
//import.meta.env.VITE_BACKEND_URL + '/users' + etc......

export default axiosInstance;
