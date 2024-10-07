import { IAuthenticatedInterface } from "../../interfaces/AuthInterface/AuthenticatedInterface";

export const AuthenticatedInitialState:IAuthenticatedInterface={
    loginName:"",
    loginTime:new Date(),
    loginToken:"",
    loginRole:""
}