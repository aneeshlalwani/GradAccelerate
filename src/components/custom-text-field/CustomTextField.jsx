// eslint-disable-next-line react/prop-types
const CustomTextField = ({ label }) => {
  return (
    <>
      <div className="flex flex-col space-y-2">
        <label
          htmlFor="vip-input"
          className="text-lg font-semibold text-gray-300"
        >
          {label}
        </label>
        <input
          type="text"
          id="vip-input"
          className="w-full p-3 rounded-lg bg-gray-800 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent placeholder-gray-500"
          placeholder="Enter your username"
        />
      </div>
    </>
  );
};

export default CustomTextField;
