import { useState } from "react";
import logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa6";
import ApplyButton from "../apply-button/ApplyButton";

const Header = () => {
  // UseState Hook To Toggle Mobile Navigation Menu
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-[#662549] mx-auto sticky top-0 z-50 mb-3">
        <div className="container px-6 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center pt-3 pb-2 sm:px-10">
            {/* GAP LOGO */}
            <div>
              <img src={logo} alt="logo" className="w-24 h-auto" />
            </div>
            {/* GAP APPLY BUTTON */}
            <div className="hidden md:block">
              <ApplyButton
                text="Apply now 🚀"
                bgColor="bg-[#F39F5A]"
                border={false}
              />
            </div>
            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden">
              <FaBars
                className="text-[#F39F5A] hover:cursor-pointer"
                size={30}
                onClick={() => setIsOpen(!isOpen)}
              />
            </div>
          </div>
          {/* GAP Apply Button for Mobile */}
          {isOpen && (
            <div className="flex justify-center items-center bg-[#662549] p-2 rounded-md sm:hidden">
              <ApplyButton
                text="Apply now"
                bgColor="bg-[#F39F5A]"
                border={false}
              />
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
