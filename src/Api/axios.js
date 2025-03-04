import axios from "axios";

const axiosInstance = axios.create({
  // localhost address
  // baseURL: "http://localhost:5175/",
//   baseURL: "https://amazon-backend-api-71jy.onrender.com/",
});

export { axiosInstance };