import { IUserInterface } from "../interfaces/UserInterface";
import { UserTypeInitialState } from "./UserTypeInitialState";

export const UserInitialState:IUserInterface={
    data: {
        id: "",
        name: "",
        email: "",
        user_type: UserTypeInitialState
    },
    success: false,
    code: 0,
    errors: {
        message: ""
    }
}