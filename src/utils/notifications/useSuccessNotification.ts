import { Bounce, toast } from "react-toastify"



export const useSuccessNotification = (message:string) =>{
    toast.success(message,{
        position:'top-right',
        autoClose:1000,
        hideProgressBar:false,
        closeOnClick:true,
        pauseOnFocusLoss:false,
        pauseOnHover:true,
        draggable:false,
        theme:"colored",
        transition:Bounce
    })
}