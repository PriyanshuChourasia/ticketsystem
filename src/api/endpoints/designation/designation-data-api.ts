import { axiosApi } from "../../../service/AxiosConfig";






async function useGetDesignationData(){
    try{    
        const response = await axiosApi.get("/designations");
        return response;
    }catch(error){
        console.warn("Error: ",error);
    }
}



export default useGetDesignationData;