import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="px-10 py-4">
        <Outlet/>
      </div>
    </div>
  );
};

export default Dashboard;
