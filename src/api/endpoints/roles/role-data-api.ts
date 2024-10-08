import axios, { AxiosResponse } from "axios";
import { axiosApi } from "../../../service/AxiosConfig";
import { IRoleInterface } from "../../../interfaces/RoleInterface/RoleInterface";



async function useGetRoleDataDetail():Promise<AxiosResponse<IRoleInterface[]>>{
    try{
        const response = await axiosApi.get("/roles");
        return response;
    }catch(error){
        if(axios.isAxiosError(error))
        {
            throw new Error("Data not found");
        }
        else
        {
            throw new Error("Unexpected Error");
        }
    }
}



export default useGetRoleDataDetail;