/* eslint-disable @typescript-eslint/no-explicit-any */
import { Field, Form, Formik, FormikProps } from "formik";
import { IUserInterface } from "../../../../../interfaces/UserInterface/UserInterface";
import { useContext, useState } from "react";
import { RoleContext } from "../../../../../context/RoleContext/RoleContext";
import { DesignationContext } from "../../../../../context/DesignationContext/DesignationContext";
import { AuthContext } from "../../../../../context/AuthContext/AuthContext";
import ActionButton from "../../../../../global/components/Button/ActionButton";
import { AddUserValidationSchema } from "../../hooks/AddUserValidation";
import CustomFormikInput from "../Formik/CustomFormikInput";


interface AddUserProps{
    setAddModal:(show:boolean) => void;
}

const AddUser:React.FC<AddUserProps> = ({setAddModal}) => {
  const { roleDataDetail } = useContext(RoleContext);
  const { designationDetail } = useContext(DesignationContext);
  const { authUserDetail } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <>
      <Formik
        validationSchema={AddUserValidationSchema}
        initialValues={{
          id: ``,
          name: "",
          email: "",
          password: "1234567890",
          role: "",
          designation: "",
          createdBy: `${authUserDetail.loginid}`,
          createdAt: new Date(),
          updatedAt: new Date(),
        }}
        onSubmit={(_values, action) => {
          setIsLoading(true);
          setTimeout(async () => {
            
            action.setSubmitting(false);
            setIsLoading(false);
            setAddModal(false);
          }, 700);
        }}
      >
        {({ values }: FormikProps<IUserInterface>) => (
          <Form className="px-4 py-4">
            <div className="flex space-x-6">
              <div className="flex flex-col mb-2">
                <label
                  htmlFor="user_id"
                  className="font-semibold text-black "
                >
                  User ID
                </label>
                <CustomFormikInput
                  name="id"
                  id="user_id"
                  readOnly
                  className="w-64 px-2 py-1 border-2 border-gray-400 rounded outline-none focus:border-black"
                  value={values.id}
                />
              </div>
              <div className="flex flex-col mb-2">
                <label htmlFor="name" className="font-semibold text-black ">
                  Name
                </label>
                <CustomFormikInput
                  type="text"
                  className="w-64 px-2 py-1 border-2 border-gray-400 rounded outline-none focus:border-black"
                  name="name"
                  id="name"
                  placeholder="Enter name"
                />
              </div>
            </div>

            <div className="flex justify-between w-full mb-2">
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="font-semibold text-black "
                >
                  Email
                </label>
                <CustomFormikInput
                  type="email"
                  className="w-64 px-2 py-1 border-2 border-gray-400 rounded outline-none focus:border-black"
                  name="email"
                  id="email"
                  placeholder="Enter email"
                />
              </div>
              <div>
                <CustomFormikInput
                  name="password"
                  id="password"
                  className="sr-only"
                  value={values.password}
                />
              </div>
              <div className="flex flex-col mb-2">
              <label
                  htmlFor="role"
                  className="font-semibold text-black "
                >
                  Role
                </label>
                <Field name="role" >
                  {({ field, meta }:any) => (
                    <div>
                      <select className="w-64 px-2 py-1 bg-white border-2 border-gray-400 rounded focus:border-black focus:outline-none" {...field}>
                      <option value="">Select Designation</option>
                        {roleDataDetail.map((item, index) => (
                          <option key={index} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                      </select>

                      {meta.touched && meta.error && (
                        <div className="text-xs font-light text-red-600">{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex flex-col mb-2">
                <label
                  htmlFor="designation"
                  className="font-semibold text-black "
                >
                  Designation
                </label>
                <Field name="designation" >
                  {({ field, meta }: any) => (
                    <div>
                      <select className="w-64 px-2 py-1 bg-white border-2 border-gray-400 rounded focus:border-black focus:outline-none" {...field}>
                      <option value="">Select Designation</option>
                        {designationDetail.map((item, index) => (
                          <option key={index} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                      </select>

                      {meta.touched && meta.error && (
                        <div className="text-xs font-light text-red-600">{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
              </div>
              <div className="flex flex-col mb-2">
                <label
                  htmlFor="createdBy"
                  className="font-semibold text-black "
                >
                  Created By
                </label>
                <Field
                  name="createdBy"
                  id="createdBy"
                  readOnly
                  className="w-64 px-2 py-1 border-2 border-gray-400 rounded outline-none sr-only focus:border-black"
                  value={values.createdBy}
                />
                <Field
                  name=""
                  id=""
                  readOnly
                  className="w-64 px-2 py-1 border-2 border-gray-400 rounded outline-none focus:border-black"
                  value={authUserDetail.loginName}
                />
              </div>
            </div>

            <div className="mt-4">
              <ActionButton
                isLoading={isLoading}
                type="submit"
                name="Create User"
                className="flex items-center justify-center w-full px-4 py-2 font-bold text-white rounded bg-themeSecondary"
              />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddUser;
