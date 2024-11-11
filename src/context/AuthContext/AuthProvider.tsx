import { useState } from "react"
import { AuthContext } from "./AuthContext"
import { IAuthenticatedInterface } from "../../interfaces/AuthInterface/AuthenticatedInterface";







const AuthProvider = ({children}:any) => {

    const [isAuthenticated,setIsAuthenticated] = useState<boolean>(false);
    const [authUserDetail,setAuthUserDetail] = useState<IAuthenticatedInterface>({
      loginName:"",
      loginRole:"",
      loginTime:new Date(),
      loginToken:"",
      loginid:""
    });


 

  return (
    <AuthContext.Provider value={{ 
        isAuthenticated,setIsAuthenticated,
        authUserDetail,setAuthUserDetail
     }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
