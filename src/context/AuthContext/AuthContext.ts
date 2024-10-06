import { createContext } from "react"





interface AuthProps{
    isAuthenticated:boolean;
    setIsAuthenticated:React.Dispatch<React.SetStateAction<boolean>>;
}


const AuthDefaultValue:AuthProps={
    isAuthenticated:false,
    setIsAuthenticated:()=>{}
}



export const AuthContext = createContext(AuthDefaultValue);