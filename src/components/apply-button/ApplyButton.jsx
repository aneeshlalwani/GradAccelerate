// eslint-disable-next-line react/prop-types
const ApplyButton = ({ text, bgColor, border }) => {
  const borderStyle = border ? "border-2 border-black solid" : "border-none";
  return (
    <>
      <a
        className={`${bgColor} ${borderStyle} text-black text-xl font-bold rounded-full px-4 py-3 hover:cursor-pointer transition duration-300 ease-in-out transform hover:${bgColor} hover:scale-105`}
      >
        {text}
      </a>
    </>
  );
};

export default ApplyButton;
