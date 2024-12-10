import { axiosApi } from "@/service/AxiosConfig";
import axios, { AxiosResponse } from "axios";
import { IUserTypeResponseInterface } from "../interface/UserTypeResponseInterface";





export async function getAllUserType():Promise<AxiosResponse<IUserTypeResponseInterface>>{
    try{
        const response = await axiosApi.get('/user_types');
        return response;
    }catch(error:unknown){
        if(axios.isAxiosError(error)){
            throw new Error("Axios Error");
        }else{
            throw new Error("Network Error");
        }
    }
}