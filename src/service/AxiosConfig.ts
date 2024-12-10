import axios from "axios";
import { access_Token } from "./AuthService";

export const axiosApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});

axiosApi.interceptors.request.use( (config) => {

  const token  = localStorage.getItem(access_Token);
  const parsedToken = token ? JSON.parse(token) : false;

  if(parsedToken){
    config.headers['Authorization'] = `Bearer ${parsedToken}`;
  }
  return config;
},(error)=>{
  Promise.reject(error);
});

axiosApi.interceptors.response.use(
  function (response) {
    if (response.data) {
      return response;
    } else return Promise.reject(new Error("No data in response"));
  },
  function (error) {
    return Promise.reject(error);
  }
);
