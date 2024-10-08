import { Bounce, toast } from "react-toastify"

export const useErrorNotification = (message:string) =>{
    toast.error(message,{
        position:'top-right',
        autoClose:1000,
        hideProgressBar:false,
        closeOnClick:true,
        pauseOnFocusLoss:false,
        pauseOnHover:true,
        draggable:false,
        theme:"light",
        transition:Bounce
    })
}