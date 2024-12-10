import { SuccessInterface } from "@/interfaces/SuccessInterface/SuccessInterface";
import { IUserTypeInterface } from "./UserTypeInterface";

export interface IUserTypeResponseInterface extends SuccessInterface{
    data: IUserTypeInterface[]
}