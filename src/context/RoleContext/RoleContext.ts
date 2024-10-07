import { createContext } from "react";
import { RoleInitialState } from "../../initialState/RoleInitialState/RoleInitialState";
import { IRoleInterface } from "../../interfaces/RoleInterface/RoleInterface";







interface RoleProps{
    roleDataDetail:IRoleInterface[];
    setRoleDataDetail: React.Dispatch<React.SetStateAction<IRoleInterface[]>>;
}


const defaultRoleValue:RoleProps ={
    roleDataDetail:[RoleInitialState],
    setRoleDataDetail:() =>{}
}

export const RoleContext = createContext(defaultRoleValue);