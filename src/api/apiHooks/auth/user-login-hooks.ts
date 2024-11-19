import { useMutation } from "@tanstack/react-query"
import { APIQUERYKEY } from "../../queryKeys/api-query-keys"
import { LoginRequestInterface } from "../../../features/auth/interfaces/LoginRequestInterface"
import { userLogin } from "../../endpoints/auth/login-api"




export const useUserLogin = () =>{
   return useMutation({
        mutationKey:[APIQUERYKEY.API_LOGIN_QUERY_KEY],
        mutationFn:(loginParam:LoginRequestInterface)=>{
            return userLogin(loginParam);
        },
        retry:false,
    })
}