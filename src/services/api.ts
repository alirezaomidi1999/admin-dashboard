import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});
api.interceptors.request.use((config) => {
  const token = true; // یا حافظه
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default api;
