import { IAuthInterface } from "../../../interfaces/AuthInterface/AuthInterface";
import { IUserInterface } from "../../../interfaces/UserInterface/UserInterface";




async function checkLogin(userRequest:IAuthInterface,userDetail:IUserInterface[]):Promise<boolean>{
    console.log("run");
    console.log(userRequest);
    console.log(userDetail,"user detail");
    const emailResponse = userDetail.find(x => x.email === userRequest.email);

    if(emailResponse)
    {
        if(userRequest.password === emailResponse.password)
        {
            console.log("password check : ",userRequest.password);
            return true;
        }else{
            console.log("Password false: ",userRequest.password);
            return false;
        }
    }
    else 
    {
        return false;
    }
}


export default checkLogin;