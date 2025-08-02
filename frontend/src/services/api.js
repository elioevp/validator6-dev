
import axios from 'axios';

const api = axios.create({
  baseURL: "https://validator-v-bwacdteva7e5eugt.eastus-01.azurewebsites.net",
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      window.location = '/'; // Redirige a la página de login
    }
    return Promise.reject(error);
  }
);

export default api;
