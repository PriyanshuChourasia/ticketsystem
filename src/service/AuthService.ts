export const authName = "auth-name";
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
    if(email)
    {
        const parseEmail:string = JSON.parse(email);
        return parseEmail;
    }
    else{
        return noAuth;
    }
}




export {saveDataLocal,logout,getLoginEmail};