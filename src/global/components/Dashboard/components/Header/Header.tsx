import { useContext } from "react";
import { AuthContext } from "../../../../../context/AuthContext/AuthContext";
import { RoleContext } from "../../../../../context/RoleContext/RoleContext";
import { FaPowerOff } from "react-icons/fa6";

const Header = () => {
  const { authUserDetail,setIsAuthenticated } = useContext(AuthContext);
  const { roleDataDetail } = useContext(RoleContext);

  const roleName = roleDataDetail.find((x) => x.id == authUserDetail.loginRole);

  return (
    <header className="flex items-center justify-between w-full px-4 py-2 text-white bg-themePrimary">
      <div className="flex space-x-5">
        <h2 className="text-lg font-bold">{"T.M.S."}</h2>
        <h2>
          Welcome <span className="font-mono uppercase">{roleName?.name}</span>
        </h2>
      </div>
      <div className="flex items-center space-x-4">
        <h1>{authUserDetail.loginName}</h1>
        <span>
          <FaPowerOff onClick={()=> setIsAuthenticated(false)} size={16} className="cursor-pointer" color="white" />
        </span>
      </div>
    </header>
  );
};

export default Header;
