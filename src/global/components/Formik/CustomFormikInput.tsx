import {  useField } from "formik"

const CustomFormikInput = ({label,...props}:any) => {

    const [field,meta] = useField(props);

  return (
    <div className="flex flex-col">
      <label htmlFor={props.id || props.name} className="mb-1 font-semibold text-black">
        {label}
      </label>
    <input
      {...field}
      {...props}
    />
    {
        meta.touched && meta.error ? (
            <div>
                <span className="text-xs font-light text-red-600">{meta.error}</span>
            </div>
        ):
        null
    }
  </div>
  )
}

export default CustomFormikInput
