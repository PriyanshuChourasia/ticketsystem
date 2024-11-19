import axios, { AxiosResponse } from "axios";
import { LoginRequestInterface } from "../../../features/auth/interfaces/LoginRequestInterface";
import { axiosApi } from "../../../service/AxiosConfig";
import { TokenResponseInterface } from "../../../features/auth/interfaces/TokenInterface";







export async function userLogin(loginRequest:LoginRequestInterface):Promise<AxiosResponse<TokenResponseInterface>>{
    try{
        const response = await axiosApi.post("/auth/login",loginRequest);
        return response;
    }catch(error:unknown){
        if(axios.isAxiosError(error)){
            throw new Error("Token Error");
        }
        else{
            throw new Error("unexpected Error");
        }
    }
}