import { useState } from "react";
import logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  // UseState Hook To Toggle Mobile Navigation Menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="sm:bg-[#662549] w-[90%] rounded-full mx-auto">
        <div className="container px-6 sm:px-8 lg:px-10 mt-3">
          <div className="flex justify-between items-center py-3 sm:px-10">
            {/* GAP LOGO */}
            <div>
              <img src={logo} alt="logo" className="w-24 h-auto" />
            </div>
            {/* GAP APPLY BUTTON */}
            <div className="hidden md:block">
              <a className="bg-[#F39F5A] text-black text-xl font-bold rounded-full px-6 py-3 hover:cursor-pointer">
                Apply now
              </a>
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
              <a className="bg-[#F39F5A] text-black text-xl font-bold rounded-full px-6 py-3 hover:cursor-pointer transition duration-300 ease-in-out transform hover:bg-[#D6894E] hover:scale-105">
                Apply now
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
