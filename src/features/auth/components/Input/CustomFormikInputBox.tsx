import { useField } from "formik";

const CustomFormikInputBox = ({ label,icon,onClickIcon, ...props }: any) => {
  const [field, meta] = useField(props);


  return (
    <>
      <div className="relative flex flex-col">
        {
          icon &&
          <div onClick={onClickIcon} className="absolute cursor-pointer right-2 top-9">
            {icon}
          </div>
        }
        <label htmlFor={`label_${label}`} className="px-1 font-semibold">{label}</label>
        <input {...props} {...field} />
        {meta.touched && meta.error ? (
          <p className="m-0 text-xs text-red-700">{meta.error}</p>
        ) : null}
      </div>
    </>
  );
};

export default CustomFormikInputBox;
