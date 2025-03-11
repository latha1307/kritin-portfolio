import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for mobile menu
import logo from "../assets/kritinLogo.png";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 md:px-12 py-4 flex mt-2 justify-around items-center relative">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="logo" className="h-12 w-12" />
        <h2 className="text-[28px] font-bold text-[#f87456] tracking-widest">Kritin</h2>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-gray-300 font-semibold">
        <li className="px-6 py-4 bg-gray-900 rounded-full hover:bg-gray-800 text-white hover:-translate-y-1 duration-300 cursor-pointer">
          <Link
            to="/projects"
          >
            Projects
          </Link>
        </li>
        <li className="hover:text-white px-6 py-4 hover:bg-gray-800 rounded-full hover:-translate-y-1 duration-300 cursor-pointer">
          <Link
            to="/design"
          >
            Design Explorations
          </Link>
        </li>
        <li className="hover:text-white px-6 py-4 hover:bg-gray-800 rounded-full hover:-translate-y-1 duration-300 cursor-pointer">
          <Link
            to="/about"
            
          >
            About Me
          </Link>
        </li>
        <li className="hover:text-white px-6 py-4 hover:bg-gray-800 rounded-full hover:-translate-y-1 duration-300 cursor-pointer">
          <Link
            to="/resume"
            
          >
            Resume
          </Link>
        </li>
        <li  className="px-6 py-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-200">
          <Link
            to="/contact"
           
          >
            Contact Me
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-300 text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-black p-6 transition-transform duration-300 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden`}
      >
        <ul className="flex flex-col gap-4 text-center">
          <li>
            <Link
              to="/projects"
              className="block text-white py-2 hover:bg-gray-800 rounded"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/design"
              className="block text-white py-2 hover:bg-gray-800 rounded"
              onClick={() => setMenuOpen(false)}
            >
              Design Explorations
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block text-white py-2 hover:bg-gray-800 rounded"
              onClick={() => setMenuOpen(false)}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              className="block text-white py-2 hover:bg-gray-800 rounded"
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
