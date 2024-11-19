import { BrowserRouter } from "react-router-dom";
import { Suspense, useContext, useEffect, useState } from "react";
// import { UserContext } from "../context/UserContext/UserContext";
// import { useGetAllUsers } from "../api/endpoints/user/user-detail-api";
import { AuthContext } from "../context/AuthContext/AuthContext";
import AuthRoute from "./AuthRoute";
import GuestRoute from "./GuestRoute";
// import useGetRoleDataDetail from "../api/endpoints/roles/role-data-api";
// import { RoleContext } from "../context/RoleContext/RoleContext";
import ScreenLoader from "../global/loader/ScreenLoader";
import { getLoginToken } from "../service/AuthService";
// import useGetDesignationData from "../api/endpoints/designation/designation-data-api";
// import { DesignationContext } from "../context/DesignationContext/DesignationContext";

const RouteNavigation = () => {
  // const { setUserDataDetail, userDataDetail } = useContext(UserContext);
  // const { setRoleDataDetail } = useContext(RoleContext);
  // const {setDesignationDetail} = useContext(DesignationContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { isAuthenticated, setAuthUserDetail, setIsAuthenticated } =
    useContext(AuthContext);

  // useEffect(() => {
  //   useGetAllUsers()
  //     .then((data) => {
  //       setUserDataDetail(data.data);
  //     })
  //     .catch((error) => {
  //       console.warn("Error: ", error);
  //   });

  //   useGetRoleDataDetail()
  //     .then((data) => {
  //       setRoleDataDetail(data.data);
  //     })
  //     .catch((error) => {
  //       console.warn("Error: ", error);
  //   });

  //   useGetDesignationData().then((data)=>{
  //       setDesignationDetail(data?.data);
  //   }).catch((error)=>{
  //       console.warn("Error: ",error);
  //   });

  // }, []);

  useEffect(() => {
    const checkUser = async () => {
      setIsLoading(true);
      const loginId = await getLoginToken();
      if (loginId !== null) {
          setIsAuthenticated(true);
      }
      setTimeout(() => {
        setIsLoading(false);
      }, 900);
    };

    checkUser();
  }, []);

  return (
    <>
      <BrowserRouter>
      <Suspense fallback={<ScreenLoader/>}>
      {isLoading ? (
          <ScreenLoader />
        ) : isAuthenticated ? (
          <AuthRoute />
        ) : (
          <GuestRoute />
        )}
      </Suspense>

      </BrowserRouter>
    </>
  );
};

export default RouteNavigation;
