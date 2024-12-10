import { SuccessInterface } from "@/interfaces/SuccessInterface/SuccessInterface";
import { IUserTypeInterface } from "./UserTypeInterface";

export interface IUserInterface extends SuccessInterface{
    data:{
        id:string;
        name:string;
        email:string;
        user_type:IUserTypeInterface
    }
}