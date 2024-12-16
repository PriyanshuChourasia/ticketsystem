import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routeList } from "./RouteList";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext/AuthContext";
import ScreenLoader from "@/global/loader/ScreenLoader";
import { isAuth } from "@/service/AuthService";
import { useGetAuthLoginDetail } from "@/features/auth/hooks/user-auth-login-detail-hooks";
import { UserContext } from "@/features/auth/context/UserContext";


const AppRoute = () => {

    const {isAuthenticated,setIsAuthenticated} = useContext(AuthContext);
    const [isRouteLoading,setIsRouteLoading] = useState<boolean>(true);
    const [isLogin,setIsLogin] = useState<boolean>(false);
    const {data,isFetching} = useGetAuthLoginDetail(isLogin);
    const {setAuthUserDetail} = useContext(UserContext);


    useEffect(()=>{
        const checkUserAuthentication = async() =>{
            const token:boolean = await isAuth();
            if(token === false){
                setIsAuthenticated(false);
            }else{
                setIsLogin(true);
                if(data?.data.success === false){
                    localStorage.clear();
                    setIsAuthenticated(false);
                    setIsLogin(false)
                }
                else if(data?.data.success === true){
                    setAuthUserDetail(data.data);
                    setIsAuthenticated(token);
                }
                
            }
        }

        checkUserAuthentication();
        setTimeout(() => {
            setIsRouteLoading(isFetching);
        }, 1200);
    },[data,isFetching]);


  return (
    <>
        {
            isRouteLoading ?
                <ScreenLoader/>
                :
                <BrowserRouter>
                <Routes>
                    {
                        routeList.map((item,index)=>{
                            if(!item.isPrivate && !isAuthenticated)
                            {
                                return <Route key={index} path={item.path} element={item.element}  />;
                            }else if(isAuthenticated && item.isPrivate){
                                return <Route key={index} path={item.path} element={item.element}>
                                    {
                                        item.children && item.children.map((childR,r)=>{
                                            return <Route key={r} path={childR.path} element={childR.element}>
                                                {
                                                    childR.children && childR.children.map((nestR,n)=>{
                                                        return <Route key={n} path={nestR.path} element={nestR.element} />
                                                    })
                                                }
                                            </Route>
                                        })
                                    }
                                </Route>;
                            }else return null;
                        })
                    }
                </Routes>
            </BrowserRouter>
        }

    </>
  )
}




export default AppRoute;