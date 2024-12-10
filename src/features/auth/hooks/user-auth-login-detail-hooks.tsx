import { useQuery } from "@tanstack/react-query"
import { login_user_detail_key } from "../services/qyery-key"
import { getUserLoginDetail } from "../services/user-detail-api"







export const useGetAuthLoginDetail = (isAuth:boolean) =>{
    return useQuery({
        queryKey:[login_user_detail_key],
        queryFn:() => getUserLoginDetail(),
        retry:false,
        refetchOnMount:false,
        refetchOnWindowFocus:false,
        enabled: !!isAuth
    })
}