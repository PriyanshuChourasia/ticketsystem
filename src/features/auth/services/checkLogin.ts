import { IAuthInterface } from "../../../interfaces/AuthInterface/AuthInterface";
import { IUserInterface } from "../../../interfaces/UserInterface/UserInterface";




async function checkLogin(userRequest:IAuthInterface,userDetail:IUserInterface[]):Promise<boolean>{
    const emailResponse = userDetail.find(x => x.email === userRequest.email);

    if(emailResponse)
    {
        if(userRequest.password === emailResponse.password)
        {
            return true;
        }else{
            return false;
        }
    }
    else 
    {
        return false;
    }
}


export default checkLogin;