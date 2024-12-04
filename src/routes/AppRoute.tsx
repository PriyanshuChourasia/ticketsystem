import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routeList } from "./RouteList";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext/AuthContext";
import ScreenLoader from "@/global/loader/ScreenLoader";
import { isAuth } from "@/service/AuthService";


const AppRoute = () => {

    const {isAuthenticated,setIsAuthenticated} = useContext(AuthContext);
    const [isRouteLoading,setIsRouteLoading] = useState<boolean>(true);

    useEffect(()=>{

        const checkUserAuthentication = async() =>{
            const token:boolean = await isAuth();

            if(token === false){
                setIsAuthenticated(false);
            }else{
                setIsAuthenticated(token);
            }
        }

        checkUserAuthentication();
        setTimeout(() => {
            setIsRouteLoading(false);
        }, 1200);
    },[setIsAuthenticated]);


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