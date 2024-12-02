import { useMutation } from "@tanstack/react-query"
import { login_query_key } from "../services/qyery-key"
import { LoginRequestInterface } from "../interfaces/LoginRequestInterface"
import { userLogin } from "../services/api"
import { setAccessToken } from "../../../service/AuthService"






export const useUserGetLogin = () =>{
    return useMutation({
        mutationKey:[login_query_key],
        mutationFn:(payload:LoginRequestInterface)=>{
            return userLogin(payload);
        },
        retry:false,
        onSuccess:(data)=>{
            console.log(data.data);
            if(data.data.success === true){
                setAccessToken(data.data.data.access_token);
            }
        }
    })
}