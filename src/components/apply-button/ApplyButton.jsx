import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ApplyButton = ({ text, bgColor, border }) => {
  const borderStyle = border ? "border-2 border-black solid" : "border-none";
  return (
    <>
      <Link
        className={`${bgColor} ${borderStyle} text-black font-bold rounded-full px-4 py-3 text-lg sm:text-xl hover:cursor-pointer transition duration-300 ease-in-out transform hover:${bgColor} hover:scale-105`}
        to="/apply"
      >
        {text}
      </Link>
    </>
  );
};

export default ApplyButton;
