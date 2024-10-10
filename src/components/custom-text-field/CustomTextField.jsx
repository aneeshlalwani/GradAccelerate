import { Field, ErrorMessage } from "formik";

// eslint-disable-next-line react/prop-types
const CustomTextField = ({ label, labelFor, placeholder, type, name }) => {
  const min = type == "number" ? 0 : undefined;
  const max = type == "number" ? 5 : undefined;
  const stepAllowed = type == "number" ? "any" : undefined;
  return (
    <>
      <div className="flex flex-col space-y-2">
        <label
          htmlFor={labelFor}
          className="text-lg font-semibold text-gray-300"
        >
          {label}
        </label>
        <Field
          type={type}
          name={name}
          id={labelFor}
          placeholder={placeholder}
          // onChange={onChange}
          min={min}
          max={max}
          step={stepAllowed}
          className="w-full p-3 rounded-lg bg-gray-800 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent placeholder-gray-500"
          required
        />
        <ErrorMessage
          name={name}
          component="div"
          className="text-red-500 mt-2"
        />
      </div>
    </>
  );
};

export default CustomTextField;
