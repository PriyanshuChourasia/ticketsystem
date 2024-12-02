import { Form, Formik, FormikProps } from "formik";
import CustomFormikInputBox from "./components/Input/CustomFormikInputBox";
import Icons from "../../global/icons/Icon";
import { useContext, useEffect, useState } from "react";
import ActionButton from "../../global/components/Button/ActionButton";
import { AuthInitialState } from "../../initialState/AuthInitialState/AuthInitialState";
import { IAuthInterface } from "../../interfaces/AuthInterface/AuthInterface";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { AuthValidationSchema } from "./hooks/AuthValidation";
import { logout, setUserAuthToken } from "../../service/AuthService";
import { useErrorNotification } from "../../utils/notifications/useErrorNotification";
import { useUserGetLogin } from "./hooks/user-login-hook-api";

const LoginAuth = () => {
  const [inputType, setInputType] = useState<string>("password");
  const {setIsAuthenticated} = useContext(AuthContext);
  const [isLoading,setIsLoading] = useState<boolean>(false);
  const {mutate,data,isPending} = useUserGetLogin();

  useEffect( ()=>{
    if(data?.data.success === true){
      setIsAuthenticated(true);
      setUserAuthToken(data.data.data.access_token);
      //  setAccessToken(data.data.data.access_token);
    }
    else if(data?.data.success === false){
      useErrorNotification(data.data.error.error);
      setIsAuthenticated(false);
      logout();
    }
  },[,data]);




  const handlePassword = () => {
    if (inputType == "password") {
      setInputType("text");
    } else if (inputType === "text") {
      setInputType("password");
    }
  };

  return (
    <>
      <Formik
        initialValues={AuthInitialState}
        validationSchema={AuthValidationSchema}
        onSubmit={(values, action) => {
          setIsLoading(true)
            setTimeout(async() => {
              mutate({email:values.email,password:values.password});
              action.setSubmitting(true);
              setIsLoading(isPending);
            }, 900);
            
        }}
      >
        {({}: FormikProps<IAuthInterface>) => (
          <Form className="px-8 py-2 border-4 rounded-md border-themePrimary w-96">
            <div>
              <h1 className="text-lg font-semibold text-center">Sign In</h1>
            </div>
            <CustomFormikInputBox
              label="Email"
              placeholder="youremail@example.com"
              type="email"
              name="email"
              icon={Icons.userIcon}
              className="px-1 py-1.5 border-2 border-gray-400 rounded-sm focus:border-black"
            />
            <CustomFormikInputBox
              label="Password"
              placeholder="........"
              onClickIcon={handlePassword}
              type={inputType}
              name="password"
              icon={Icons.passwordIcon}
              className="px-1 py-1.5 border-2 border-gray-400 rounded-sm focus:border-black"
            />
            <div className="mb-12">
              <ActionButton
              isLoading={isLoading}
              ringColor="#F2F2F2"
                type="submit"
                name="Submit"
                className="w-full flex justify-center items-center mt-4 py-1.5 px-4 text-white  bg-themeSecondary border-gray-600 rounded font-semibold text-center border-2"
              />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginAuth;
