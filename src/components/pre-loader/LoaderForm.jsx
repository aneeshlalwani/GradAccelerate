import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
const LoaderForm = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      onSubmit(username);
      setIsFormSubmitted(true);
    }
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900">
        <AnimatePresence>
          {!isFormSubmitted && (
            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center min-h-screen bg-gray-900 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <label className="text-3xl sm:text-4xl md:text-5xl text-center mb-10 font-extrabold text-[#F39F5A]">
                Hey!👋🏻 What&apos;s Your Good Name, Superstar?
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="p-4 w-[90%] sm:w-[60%] md:w-[40%] h-16 rounded-full mb-4 border bg-[#1c1c1c] text-[#e5e0df] text-lg sm:text-xl md:text-2xl focus:outline-none focus:ring-0 focus:border-gray-400 transition-all"
                placeholder="Enter your name, please"
              />
              <button
                type="submit"
                className="bg-[#e5e0df] text-xl text-black font-bold px-6 py-3 rounded-full hover:bg-[#F39F5A] hover:text-[#1c1c1c] transition-colors duration-300"
              >
                Next <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default LoaderForm;
