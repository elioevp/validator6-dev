import axios from 'axios';

// Utiliza la variable de entorno para la URL base.
// El nombre de la variable debe comenzar con REACT_APP_
// y se definirá en el archivo .env
const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

// Este interceptor maneja los errores de autenticación
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Si el error es un 401 (No autorizado), limpia el token y redirige.
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      window.location = '/'; // Redirige a la página de login
    }
    return Promise.reject(error);
  }
);

export default api;

