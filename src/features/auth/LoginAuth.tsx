import { Form, Formik, FormikProps } from "formik";
import CustomFormikInputBox from "./components/Input/CustomFormikInputBox";
import Icons from "../../global/icons/Icon";
import { useContext, useState } from "react";
import ActionButton from "../../global/components/Button/ActionButton";
import { AuthInitialState } from "../../initialState/AuthInitialState/AuthInitialState";
import { IAuthInterface } from "../../interfaces/AuthInterface/AuthInterface";
import { UserContext } from "../../context/UserContext/UserContext";
import checkLogin from "./services/checkLogin";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { useSuccessNotification } from "../../utils/notifications/useSuccessNotification";
import { useErrorNotification } from "../../utils/notifications/useErrorNotification";
import { AuthValidationSchema } from "./hooks/AuthValidation";

const LoginAuth = () => {
  const [inputType, setInputType] = useState<string>("password");
  const {userDataDetail} = useContext(UserContext);
  const [loading,setLoading] = useState<boolean>(false);
  const {setIsAuthenticated,setAuthUserDetail} = useContext(AuthContext);

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
          setTimeout(() => {
            setLoading(true);
            setTimeout(async() => {
              const response = await checkLogin(values,userDataDetail);
              if(response === true)
              {
                const userDetails = userDataDetail.find(x => x.email === values.email);
                if(userDetails)
                {
                  setAuthUserDetail({
                    loginName:userDetails.name,
                    loginRole:userDetails.role,
                    loginTime: new Date(),
                    loginToken:""
                  });
                 
                  useSuccessNotification("Login Successfull");
                  setIsAuthenticated(true);
                }
              }
              else if(response === false)
              {
                useErrorNotification("Please check your credentials");
                setIsAuthenticated(false);
              }
              setLoading(false);
            }, 900);
            action.setSubmitting(true);
          }, 300);
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
              isLoading={loading}
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
