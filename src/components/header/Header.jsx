import { useState } from "react";
import logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa6";
import ApplyButton from "../apply-button/ApplyButton";
import { motion, AnimatePresence } from "framer-motion";
const Header = () => {
  // UseState Hook To Toggle Mobile Navigation Menu
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <motion.nav
        className="mx-auto sticky backdrop-blur-sm top-0 z-50 mb-3"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center pt-3 pb-2 sm:px-10">
            {/* GAP LOGO */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img src={logo} alt="logo" className="w-24 h-auto" />
            </motion.div>
            {/* GAP APPLY BUTTON */}
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <ApplyButton
                text="Apply now"
                bgColor="bg-[#F39F5A]"
                border={false}
              />
            </motion.div>
            {/* Hamburger Menu for Mobile */}
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <FaBars
                className="text-[#F39F5A] hover:cursor-pointer"
                size={30}
                onClick={() => setIsOpen(!isOpen)}
              />
            </motion.div>
          </div>
          {/* GAP Apply Button for Mobile */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="flex justify-center items-center bg-[#662549] p-2 rounded-md sm:hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ApplyButton
                  text="Apply now"
                  bgColor="bg-[#F39F5A]"
                  border={false}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
};

export default Header;
