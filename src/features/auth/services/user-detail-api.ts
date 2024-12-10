import axios, { AxiosResponse } from "axios";
import { IUserInterface } from "../interfaces/UserInterface";
import { axiosApi } from "@/service/AxiosConfig";





export async function getUserLoginDetail():Promise<AxiosResponse<IUserInterface>>{
    try{
        const response = axiosApi.get('/auth/profile');
        return response;
    }catch(error:unknown){
        console.log(error,'errror')
        if(axios.isAxiosError(error)){
            
            throw new Error("Axios Error");
        }else{
            throw new Error("Network Error");
        }
    }
}