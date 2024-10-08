import { BrowserRouter } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext/UserContext";
import { useGetAllUsers } from "../api/endpoints/user/user-detail-api";
import { AuthContext } from "../context/AuthContext/AuthContext";
import AuthRoute from "./AuthRoute";
import GuestRoute from "./GuestRoute";
import useGetRoleDataDetail from "../api/endpoints/roles/role-data-api";
import { RoleContext } from "../context/RoleContext/RoleContext";



const RouteNavigation = () =>{

    const {setUserDataDetail} = useContext(UserContext);
    const {setRoleDataDetail} = useContext(RoleContext);
    const {isAuthenticated} = useContext(AuthContext);
    

    useEffect(()=>{
        useGetAllUsers().then((data)=>{
            setUserDataDetail(data.data);
        }).catch((error)=>{
            console.warn("Error: ",error);
        });
        
        useGetRoleDataDetail().then((data)=>{
            setRoleDataDetail(data.data);
        }).catch((error)=>{
            console.warn("Error: ",error);
        })
    },[]);



    return(
        <>
        <BrowserRouter>
            {
                isAuthenticated ?
                <AuthRoute/>
                :
                <GuestRoute/>
            }
        </BrowserRouter>
        </>
    )
}

export default RouteNavigation;