import { IUserInterface } from "../../../interfaces/UserInterface/UserInterface";
import { axiosApi } from "../../../service/AxiosConfig";





async function createUser(userRequest:IUserInterface){
    try{
        const response = await axiosApi.post("/auth/register",userRequest);
        return response;
    }catch(error){
        console.warn("Error: ",error);
    }
}


export default createUser;