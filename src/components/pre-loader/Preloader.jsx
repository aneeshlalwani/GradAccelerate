import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Preloader = ({ username }) => {
  const [showText, setShowText] = useState(true);

  // Broom Broom text will disappear after a 3000ms delay
  setTimeout(() => setShowText(false), 3000);

  return (
    <>
      <motion.div
        className="flex flex-col items-center justify-center min-h-screen bg-[#1c1c1c] text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.h1
          className="text-4xl font-extrabold capitalize mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          Yay, It&apos;s You, {username}...! 😅
        </motion.h1>
        <AnimatePresence>
          {showText && (
            <motion.h2
              className="text-6xl mb-4"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [1, 1.5, 1], opacity: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.7,
                ease: "easeInOut",
                repeat: 2,
                repeatType: "loop",
              }}
              exit={{
                x: "-100vw", // It Will Disappear Like a Car Speed.
                opacity: 0,
                transition: { duration: 0.4, ease: "easeIn" },
              }}
            >
              {" "}
              🚗💨 Broom Broom!{" "}
            </motion.h2>
          )}
        </AnimatePresence>

        <motion.div
          className="w-[80%] text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold capitalize mb-4">Hold tight!</h1>
          <h2 className="text-3xl font-bold mb-4">
            We&apos;re about to take you on a career-transforming journey that
            will unlock your potential!
          </h2>
        </motion.div>
      </motion.div>
    </>
  );
};
export default Preloader;
