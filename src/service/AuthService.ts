export const authName = "auth-name";
export const access_Token = "access_Token";
export const refresh_Token = "refresh_Token";
export const noToken = "no-token";





async function saveDataLocal(loginEmail:string){
    localStorage.setItem(authName,JSON.stringify(loginEmail));
}


async function logout(){
    localStorage.clear();
    return true;
}



async function getLoginToken(){
    const auth = localStorage.getItem(access_Token);
    if(auth)
    {
        return true;
    }
    else{
        return null;
    }
}


async function setUserAuthToken(token:string){
    localStorage.setItem(access_Token,JSON.stringify(token));
}


/**
 * This function is to set token to local storage
 * @param token :string
 */
function setAccessToken(token:string){
    localStorage.setItem(access_Token,JSON.stringify(token));
}


/**
 * This function will return token if found and if not then it will return boolean value
 * @returns Promise<string|boolean>
 */
async function getAccessToken():Promise<string | boolean>
{
    const token:string|null = localStorage.getItem(access_Token);
    return token ?? false;
}


async function isAuth():Promise<boolean>
{
    const token:string |boolean = await getAccessToken();
    return token ? true : false;
}

/**
 * This function is to set refresh token
 * @param token :string
 */
async function setRefreshToken(token:string){
    localStorage.setItem(refresh_Token,JSON.stringify(token));
}


async function getRefreshToken():Promise<string|boolean>
{
    const token:string|null = localStorage.getItem(refresh_Token);
    return token ?? false;
}


export {
    saveDataLocal,
    logout,
    getLoginToken,
    setUserAuthToken,
    setAccessToken,
    getAccessToken,
    setRefreshToken,
    getRefreshToken,
    isAuth
};