import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import SidebarLayout from "./components/AppSidebar/SidebarLayout";

const Dashboard = () => {
  return (
    <div className="overflow-hidden">
      <Header />
    <SidebarLayout/>
      <div className="px-10 py-4">
        <Outlet/>
      </div>
    </div>
  );
};

export default Dashboard;
