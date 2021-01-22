import axios from 'axios';
const api = axios.create({
  baseURL: "https://backendpetgato.herokuapp.com/",
});

export default api;