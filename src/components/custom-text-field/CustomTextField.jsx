// eslint-disable-next-line react/prop-types
const CustomTextField = ({ label, labelFor, placeholder, type, onChange }) => {
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
        <input
          type={type}
          id={labelFor}
          className="w-full p-3 rounded-lg bg-gray-800 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent placeholder-gray-500"
          placeholder={placeholder}
          onChange={onChange}
          min={min}
          max={max}
          step={stepAllowed}
          required
        />
      </div>
    </>
  );
};

export default CustomTextField;
