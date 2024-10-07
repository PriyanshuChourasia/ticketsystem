import axios, { AxiosResponse } from "axios";
import { IUserInterface } from "../../../interfaces/UserInterface/UserInterface";
import { axiosApi } from "../../../service/AxiosConfig";




export async function useGetAllUsers():Promise<AxiosResponse<IUserInterface[]>>{
    try{
        const response = await axiosApi.get("/users");
        return response;
    }catch(error:unknown){
        if(axios.isAxiosError(error)){
            throw new Error("Data not found");
        }
        else{
            throw new Error("Unexpected Error");
        }
    }
}