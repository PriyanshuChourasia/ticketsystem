import { useState } from "react";
import { UserContext } from "./UserContext";
import { IUserInterface } from "../interfaces/UserInterface";
import { UserInitialState } from "../initialStates/UserInitialState";




const UserProvider = ({children}:any) =>{

    const [authUserDetail,setAuthUserDetail] = useState<IUserInterface>(UserInitialState);


    return(
        <UserContext.Provider value={{
            authUserDetail,setAuthUserDetail
        }}>
            {children}
        </UserContext.Provider>
    )
}



export default UserProvider;