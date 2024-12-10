import { SidebarTrigger } from "@/components/ui/sidebar";
import { AuthContext } from "@/context/AuthContext/AuthContext";
import { logout } from "@/service/AuthService";
import { useContext } from "react";
import { FaPowerOff } from "react-icons/fa6";

const Header = () => {
  const { authUserDetail, setIsAuthenticated } = useContext(AuthContext);

  const handleLogout = async () => {
    const response = await logout();
    if (response == true) {
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
  };

  return (
    <header className="flex items-center justify-between w-full px-4 py-2 text-white bg-themePrimary">
      <div>
        <SidebarTrigger />
      </div>
      <div className="flex space-x-5">
        <h2 className="text-lg font-bold">{"T.M.S."}</h2>
        <h2>
          Welcome <span className="font-mono uppercase">User</span>
        </h2>
      </div>
      <div className="flex items-center space-x-4">
        <h1>{authUserDetail.loginName}</h1>
        <span>
          <FaPowerOff
            onClick={handleLogout}
            size={16}
            className="cursor-pointer"
            color="white"
          />
        </span>
      </div>
    </header>
  );
};

export default Header;
