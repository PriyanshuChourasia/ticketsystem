import { IUserInterface } from "../../../../interfaces/UserInterface/UserInterface";






export function EmailExists(userEmail:string,user:IUserInterface[]):boolean{
    const email = user.find(x => x.email === userEmail);
    if(email)
    {
        return true;
    }
    else {
        return false;
    }
}