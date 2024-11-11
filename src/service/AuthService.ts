export const authName = "auth-name";
export const authId = "auth-id";
export const noAuth = "no-auth";





async function saveDataLocal(loginEmail:string){
    localStorage.setItem(authName,JSON.stringify(loginEmail));
}


async function logout(){
    localStorage.clear();
    return true;
}



async function getLoginEmail(){
    const email = localStorage.getItem(authName);
    const auth = localStorage.getItem(authId);
    if(email && auth)
    {
        const parseEmail:string = JSON.parse(email);
        return parseEmail;
    }
    else{
        return null;
    }
}


async function setUserAuth(){
    localStorage.setItem(authId,JSON.stringify(true));
}




export {saveDataLocal,logout,getLoginEmail,setUserAuth};