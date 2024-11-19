export const authName = "auth-name";
export const authToken = "auth-token";
export const noAuth = "no-auth";





async function saveDataLocal(loginEmail:string){
    localStorage.setItem(authName,JSON.stringify(loginEmail));
}


async function logout(){
    localStorage.clear();
    return true;
}



async function getLoginToken(){
    const auth = localStorage.getItem(authToken);
    if(auth)
    {
        return true;
    }
    else{
        return null;
    }
}


async function setUserAuthToken(token:string){
    localStorage.setItem(authToken,JSON.stringify(token));
}




export {saveDataLocal,logout,getLoginToken,setUserAuthToken};