import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../views/auth/Login";



const RouteNavigation = () =>{
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<Login/>} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default RouteNavigation;