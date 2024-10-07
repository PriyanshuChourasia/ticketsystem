import {  Route, Routes } from "react-router-dom";
import AppDashboard from "../views/app/dashboard/AppDashboard";

const AuthRoute = () => {
  return (
      <Routes>
        <Route path="/" element={<AppDashboard/>} />
      </Routes>
  )
}

export default AuthRoute;






