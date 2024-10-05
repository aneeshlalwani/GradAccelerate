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
        className="flex flex-col justify-center items-center min-h-screen"
      >
        <label className="text-5xl text-center mb-10 font-extrabold text-emerald-400">
          Hey👋🏻! Buddy😊, Can We Get Your Good Name?
        </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-4 w-80 h-12 rounded-full mb-4 border border-gray-300 bg-gray-100 focus:outline-none focus:ring-0 focus:border-gray-400 transition-all"
          placeholder="Enter your name, please"
        />
        <button
          type="submit"
          className="bg-white text-xl text-black font-bold px-6 py-3 rounded-full hover:bg-black hover:text-white"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default LoaderForm;
