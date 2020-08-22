const URL = "http://localhost:5000";
const axios = require("axios");


axios.interceptors.request.use(
  config => {
    config.headers.authorization = localStorage.getItem("token");
    return config;
  },
  error => Promise.reject(error)
);
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status == 401) {
      localStorage.clear();
    }
    return error;
  }
);

export const requestsMixin = {
    methods: {
  currentUser() {
        return axios.get(`${URL}/api/users/profile`);
      }
    }
}