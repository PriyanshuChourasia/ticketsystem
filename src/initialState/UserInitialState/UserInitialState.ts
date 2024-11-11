import { IUserInterface } from "../../interfaces/UserInterface/UserInterface";

export const UserInitialState:IUserInterface={
    id: "",
    name: "",
    role: "",
    email: "",
    password: "",
    designation: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    createdBy: ""
}