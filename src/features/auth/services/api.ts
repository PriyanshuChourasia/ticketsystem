import { AxiosResponse } from "axios";
import { axiosApi } from "../../../service/AxiosConfig";
import { LoginRequestInterface } from "../interfaces/LoginRequestInterface";
import { TokenResponseInterface } from "../interfaces/TokenInterface";






export async function userLogin(payload:LoginRequestInterface):Promise<AxiosResponse<TokenResponseInterface>>{
    try{
        const response = await axiosApi.post('/auth/login',payload);
        return response;
    }catch(error:unknown)
    {
        throw new Error("Axios Error");
    }
}