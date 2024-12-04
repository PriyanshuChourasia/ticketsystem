import { useField } from "formik";

const CustomFormikSelect = ({ label, options, ...props }: any) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col">
      <label htmlFor={`input_${label}`} className="mb-1 font-semibold text-black">
        {label}
      </label>

      <select
        {...field}
        {...props}
        className="w-64 px-2 py-1 border-2 border-gray-400 rounded outline-none focus:border-black"
      >
        <option value="">Select {label}</option>
        {/* {options.map((item: { id: string; name: string }, index: number) => (
          <option key={index} value={item.id}>
            {item.name}
          </option>
        ))} */}
      </select>

      {meta.touched && meta.error ? (
        <span className="text-xs font-light text-red-600">{meta.error}</span>
      ) : null}
    </div>
  );
};

export default CustomFormikSelect;
