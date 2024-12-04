import { BrowserRouter } from "react-router-dom";
import { Suspense, useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";
import AuthRoute from "./AuthRoute";
import GuestRoute from "./GuestRoute";
import ScreenLoader from "../global/loader/ScreenLoader";
import { getLoginToken } from "../service/AuthService";

const RouteNavigation = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

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
  },[setIsAuthenticated]);


  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<ScreenLoader />}>
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
