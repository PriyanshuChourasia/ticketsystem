import { useQuery } from "@tanstack/react-query"
import { get_all_user_type_key } from "../queryKeys/userTypeQueryKey"
import { getAllUserType } from "../services/api"



export const useGetAllUserType = () =>{
    return useQuery({
        queryKey:[get_all_user_type_key],
        queryFn:()=> getAllUserType(),
        retry:false,
        refetchOnMount:false,
        refetchOnWindowFocus:false
    })
}