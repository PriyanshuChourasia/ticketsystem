import { SuccessInterface } from "../../../interfaces/SuccessInterface/SuccessInterface";
import { LoginErrorInterface } from "./LoginErrorInterface";
import { LoginSuccessInterface } from "./LoginSuccessInterface";

export interface TokenResponseInterface extends SuccessInterface {
    data:LoginSuccessInterface;
    error:LoginErrorInterface
}

