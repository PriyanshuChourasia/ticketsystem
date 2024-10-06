import { createContext } from "react";
import { DesignationInitialState } from "../../initialState/DesignationInitialState/DesignationInitialState";
import { IDesignationInterface } from "../../interfaces/DesignationInterface/DesignationInterface";







interface DesginationProps{
    designationDetail:IDesignationInterface[],
    setDesignationDetail: React.Dispatch<React.SetStateAction<IDesignationInterface[]>>;
}

const designationDefault:DesginationProps={
    designationDetail:[DesignationInitialState],
    setDesignationDetail:() =>{}
}


export const DesignationContext = createContext(designationDefault);