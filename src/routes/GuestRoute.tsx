import { Route, Routes } from "react-router-dom";
import Login from "../views/auth/Login";

const GuestRoute = () =>{
    return(
            <Routes>
                <Route path="/" element={<Login/>} />
                {/* <Route path="/create-user" element={<} /> */}
            </Routes>
    )
}



export default GuestRoute;