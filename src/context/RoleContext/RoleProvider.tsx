import { useState } from "react";
import { RoleContext } from "./RoleContext";
import { IRoleInterface } from "../../interfaces/RoleInterface/RoleInterface";

const RoleProvider = ({ children }: any) => {
  const [roleDataDetail, setRoleDataDetail] = useState<IRoleInterface[]>([]);

  console.log("role context");
  return (
    <RoleContext.Provider
      value={{
        roleDataDetail,
        setRoleDataDetail,
      }}
    >
      {children}
    </RoleContext.Provider>
  );
};

export default RoleProvider;
