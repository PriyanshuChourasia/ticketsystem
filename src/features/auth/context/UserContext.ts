import { createContext } from "react";
import { UserInitialState } from "../initialStates/UserInitialState";
import { IUserInterface } from "../interfaces/UserInterface";





interface UserInterface{
    authUserDetail: IUserInterface;
    setAuthUserDetail: React.Dispatch<React.SetStateAction<IUserInterface>>
}


const defaultValue:UserInterface={
    authUserDetail:UserInitialState,
    setAuthUserDetail:()=>{}
}


export const UserContext = createContext(defaultValue);