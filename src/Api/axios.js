import axios from "axios";

const axiosInstance = axios.create({
  
  // baseURL: " http://127.0.0.1:4000/functions",
  // baseURL: "https://us-central1-clone-a0e41.cloudfunctions.net/api",
  //deployrd firebase
  // baseURL: "https://api-xbfdcaz4hq-uc.a.run.app",
  //deployed server on render
  baseURL: "https://amazon-api-deploy-xoki.onrender.com",

});

export { axiosInstance };