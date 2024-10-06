import { useState } from "react";

const LoaderForm = ({ onSubmit }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      onSubmit(username);
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center min-h-screen bg-gray-900 p-6 rounded-lg shadow-lg"
      >
        <label className="text-5xl text-center mb-10 font-extrabold text-emerald-400">
          Hey there! 👋🏻 What&apos;s Your Good Name?
        </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-4 w-[30%] h-16 rounded-full mb-4 border bg-[#1c1c1c] text-white text-2xl focus:outline-none focus:ring-0 focus:border-gray-400 transition-all"
          placeholder="Enter your name, please"
        />
        <button
          type="submit"
          className="bg-white text-xl text-black font-bold px-6 py-3 rounded-full hover:bg-emerald-700 hover:text-white transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default LoaderForm;
