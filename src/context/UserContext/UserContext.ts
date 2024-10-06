import { createContext } from "react";
import { UserInitialState } from "../../initialState/UserInitialState/UserInitialState";
import { IUserInterface } from "../../interfaces/UserInterface/UserInterface";





interface UserProps{
    userDataDetail:IUserInterface[];
    setUserDataDetail: React.Dispatch<React.SetStateAction<IUserInterface[]>>;
}

const userDefaultValue:UserProps={
    userDataDetail:[UserInitialState],
    setUserDataDetail:()=>{}
}


export const UserContext = createContext(userDefaultValue);