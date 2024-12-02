import { useState } from "react";
import { UserContext } from "./UserContext";
import { IUserInterface } from "../../interfaces/UserInterface/UserInterface";

const UserProvider = ({ children }: any) => {
  const [userDataDetail, setUserDataDetail] = useState<IUserInterface[]>([]);

  console.log("user context");

  return (
    <UserContext.Provider
      value={{
        userDataDetail,
        setUserDataDetail,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
