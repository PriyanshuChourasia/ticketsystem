import { useMutation } from "@tanstack/react-query"
import { login_query_key } from "../services/qyery-key"
import { LoginRequestInterface } from "../interfaces/LoginRequestInterface"
import { userLogin } from "../services/api"
import { logout, setAccessToken, setRefreshToken } from "../../../service/AuthService"
import { AuthContext } from "../../../context/AuthContext/AuthContext"
import { useContext } from "react"
import { SuccessNotification } from "../../../utils/notifications/useSuccessNotification"
import { ErrorNotification } from "../../../utils/notifications/useErrorNotification"






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
                setRefreshToken(data.data.data.refresh_token);
                SuccessNotification("Login Successfull");
                setIsAuthenticated(true);
            }else if(data.data.success === false){
                ErrorNotification(data.data.error.message);
                setIsAuthenticated(false);
                logout();
            }
        },
        onError:(error)=>{
            ErrorNotification(error.message);
        }
    })
}