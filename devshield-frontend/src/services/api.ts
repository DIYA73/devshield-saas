import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3002/api",
});

api.interceptors.request.use((config) => {

  const key = localStorage.getItem("apiKey");

  if (key) {
    config.headers["x-api-key"] = key;
  }

  return config;

});

export default api;