import { useEffect } from "react";
import LoginAuth from "../../features/auth/LoginAuth";

const Login = () => {
  useEffect(() => {
    console.log("Hello");
  }, []);

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <LoginAuth />
    </div>
  );
};

export default Login;
