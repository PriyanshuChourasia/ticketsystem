import DataTable from "../DataTable/DataTable";
import Header from "./components/Header/Header";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="px-10 py-4">
        <DataTable/>
      </div>
    </div>
  );
};

export default Dashboard;
