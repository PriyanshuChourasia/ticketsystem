import { Route, Routes } from "react-router-dom";
import Login from "../views/auth/Login";

const GuestRoute = () =>{
    return(
            <Routes>
                <Route path="/" element={<Login/>} />
            </Routes>
    )
}



export default GuestRoute;