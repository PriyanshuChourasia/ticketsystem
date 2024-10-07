import axios from "axios";


export const axiosApi = axios.create({
    baseURL:"http://localhost:3000/",
});



axiosApi.interceptors.request.use(function(config){
    
    return config;
}, function(error){
    return Promise.reject(error);
});



axiosApi.interceptors.response.use(function(response){

    if(response.data){
        return response;
    }
    else 
    return Promise.reject(new Error("No data in response"));
}, function(error){
    return Promise.reject(error);
});