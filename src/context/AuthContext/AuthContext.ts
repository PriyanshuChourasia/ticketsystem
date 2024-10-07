import { createContext } from "react"
import { IAuthenticatedInterface } from "../../interfaces/AuthInterface/AuthenticatedInterface";
import { AuthenticatedInitialState } from "../../initialState/AuthInitialState/AuthenticatedInitialState";





interface AuthProps{
    isAuthenticated:boolean;
    setIsAuthenticated:React.Dispatch<React.SetStateAction<boolean>>;
    authUserDetail:IAuthenticatedInterface;
    setAuthUserDetail: React.Dispatch<React.SetStateAction<IAuthenticatedInterface>>;
}


const AuthDefaultValue:AuthProps={
    isAuthenticated:false,
    setIsAuthenticated:()=>{},
    authUserDetail:AuthenticatedInitialState,
    setAuthUserDetail:() =>{}
}



export const AuthContext = createContext(AuthDefaultValue);