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

const LoginAuth = () => {
  const [inputType, setInputType] = useState<string>("password");
  const {userDataDetail} = useContext(UserContext);
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
        onSubmit={(values, action) => {
          setTimeout(() => {
            console.log(values);
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
                  setIsAuthenticated(true);
                }
              }
              else if(response === false)
              {
                setIsAuthenticated(false);
              }
              console.log("Login response: ",response);
            }, 900);
            action.setSubmitting(true);
          }, 600);
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
              className="px-1 py-1.5 mb-3 border-2 border-gray-400 rounded-sm focus:border-black"
            />
            <CustomFormikInputBox
              label="Password"
              placeholder="........"
              onClickIcon={handlePassword}
              type={inputType}
              name="password"
              icon={Icons.passwordIcon}
              className="px-1 py-1.5 mb-2 border-2 border-gray-400 rounded-sm focus:border-black"
            />
            <div className="mb-12">
              <ActionButton
                type="submit"
                name="Submit"
                className="w-full mt-4 py-1.5 px-4 text-white  bg-themeSecondary border-gray-600 rounded font-semibold text-center border-2"
              />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginAuth;
