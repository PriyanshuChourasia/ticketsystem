import { useMutation } from "@tanstack/react-query"
import { login_query_key } from "../services/qyery-key"
import { LoginRequestInterface } from "../interfaces/LoginRequestInterface"
import { userLogin } from "../services/api"
import { logout, setAccessToken } from "../../../service/AuthService"
import { AuthContext } from "../../../context/AuthContext/AuthContext"
import { useContext } from "react"
import { useSuccessNotification } from "../../../utils/notifications/useSuccessNotification"
import { useErrorNotification } from "../../../utils/notifications/useErrorNotification"






export const useUserGetLogin = () =>{

    const {setIsAuthenticated} = useContext(AuthContext);



    return useMutation({
        mutationKey:[login_query_key],
        mutationFn:(payload:LoginRequestInterface)=>{
            return userLogin(payload);
        },
        retry:false,
        onSuccess:(data)=>{
            if(data.data.success === true){
                setAccessToken(data.data.data.access_token);
                useSuccessNotification("Login Successfull");
                setIsAuthenticated(true);
            }else if(data.data.success === false){
                useErrorNotification(data.data.error.message);
                setIsAuthenticated(false);
                logout();
            }
        },
    })
}