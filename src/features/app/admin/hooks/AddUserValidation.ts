import * as yup from "yup";




export const AddUserValidationSchema = yup.object().shape({
    id: yup.string().required("Id is required"),
    name: yup.string().required("Name is required"),
    email:yup.string().email("Invalid email").required("Email is required"),
    role: yup.string().required("Role is required"),
    designation: yup.string().required("Designation is required"),
    password:yup.string().optional(),
    createdBy:yup.string().optional(),
    createdAt:yup.string().optional(),
    updatedAt:yup.string().optional(),

})