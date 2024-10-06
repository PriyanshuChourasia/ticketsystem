import { useState } from "react"
import { AuthContext } from "./AuthContext"







const AuthProvider = ({children}:any) => {

    const [isAuthenticated,setIsAuthenticated] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ 
        isAuthenticated,setIsAuthenticated
     }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
