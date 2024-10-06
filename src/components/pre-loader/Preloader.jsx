import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Preloader = ({ username }) => {
  const [showText, setShowText] = useState(true);

  // Broom Broom text will disappear after a 3000ms delay
  setTimeout(() => setShowText(false), 6500);

  return (
    <>
      <motion.div
        className="flex flex-col items-center justify-center min-h-screen bg-[#451952] text-white overflow-hidden"
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
        <motion.div
          className="w-[80%] text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.5 }}
        >
          <TypeAnimation
            sequence={[
              "Hold Tight!",
              1800,
              "We’re driving you toward your dream career!",
              1500,
            ]}
            speed={30}
            className="text-4xl font-bold capitalize mb-4"
          />
        </motion.div>
        <AnimatePresence>
          {showText && (
            <motion.h2
              className="text-4xl sm:text-6xl mb-4 font-bold"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [1, 1.5, 1], opacity: 1 }}
              transition={{
                delay: 2,
                duration: 1.2,
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
      </motion.div>
    </>
  );
};
export default Preloader;
