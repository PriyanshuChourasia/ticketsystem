import { useMutation, useQueryClient } from "@tanstack/react-query"
import { login_query_key, login_user_detail_key } from "../services/qyery-key"
import { LoginRequestInterface } from "../interfaces/LoginRequestInterface"
import { userLogin } from "../services/api"
import { logout, setAccessToken, setRefreshToken } from "../../../service/AuthService"
import { AuthContext } from "../../../context/AuthContext/AuthContext"
import { useContext } from "react"
import { SuccessNotification } from "../../../utils/notifications/useSuccessNotification"
import { ErrorNotification } from "../../../utils/notifications/useErrorNotification"
import { getUserLoginDetail } from "../services/user-detail-api"
import { UserContext } from "../context/UserContext"






export const useUserGetLogin = () =>{

    const {setIsAuthenticated} = useContext(AuthContext);
    const {setAuthUserDetail} = useContext(UserContext);

    const queryClient = useQueryClient();

    return useMutation({
        mutationKey:[login_query_key],
        mutationFn:(payload:LoginRequestInterface)=>{
            return userLogin(payload);
        },
        retry:false,
        onSuccess:(data)=>{
            if(data.data.success === true){
                   const profile =  queryClient.fetchQuery({
                        queryKey:[login_user_detail_key],
                        queryFn:()=> getUserLoginDetail(),
                        retry:false,
                    });
                    profile.then((data)=>{
                        setAuthUserDetail(data.data);
                    }).catch((error)=>{
                        console.error(error);
                    })
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