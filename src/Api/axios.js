import axios from "axios";

const axiosInstance = axios.create({
  
  // baseURL: " http://127.0.0.1:4000/functions",
  baseURL: "http://localhost:3000/",

});

export { axiosInstance };