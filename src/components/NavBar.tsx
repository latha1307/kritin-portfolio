import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/kritinLogo.png";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 md:px-32 py-4 flex mt-2 justify-between items-center relative">
      <div className="flex items-center gap-3">
        <img src={logo} alt="logo" className="h-12 w-12" />
        <h2 className="text-[28px] font-bold text-[#DB4A2B] tracking-widest">
          Kritin
        </h2>
      </div>

      <ul className="hidden md:flex gap-8 text-gray-300 font-semibold">
        <li className="px-6 py-4 bg-zinc-800 rounded-full shadow-[inset_0_4px_6px_rgba(0,0,0,0.4)] hover:bg-zinc-700 text-white hover:-translate-y-1 duration-300 cursor-pointer">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="hover:text-white px-6 py-4 hover:bg-zinc-700 rounded-full hover:-translate-y-1 duration-300 cursor-pointer">
          <Link to="/design">Design Explorations</Link>
        </li>
        <li className="hover:text-white px-6 py-4 hover:bg-zinc-700 rounded-full hover:-translate-y-1 duration-300 cursor-pointer">
          <Link to="/about">About Me</Link>
        </li>
        <li className="hover:text-white px-6 py-4 hover:bg-zinc-700 rounded-full hover:-translate-y-1 duration-300 cursor-pointer">
          <Link to="/resume">Resume</Link>
        </li>
        <li className="px-6 py-4 rounded-full shadow-[inset_0_4px_6px_rgba(0,0,0,0.4)] bg-[#2137A6] text-white font-semibold hover:-translate-y-1 duration-300 cursor-pointer ">
          <Link to="/contact">Contact Me</Link>
        </li>
      </ul>

      <button
        className="md:hidden text-gray-300 text-2xl"
        onClick={() => setMenuOpen(true)}
      >
        <FaBars />
      </button>

      {menuOpen && (
  <div className="fixed inset-0 bg-black flex flex-col items-center z-50 p-6">
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-3">
        <img src={logo} alt="logo" className="h-12 w-12" />
        <h2 className="text-[28px] font-bold text-[#DB4A2B] tracking-widest">
          Kritin
        </h2>
      </div>
      <button
        className="text-gray-300 text-3xl"
        onClick={() => setMenuOpen(false)}
      >
        <FaTimes />
      </button>
    </div>

    <ul className="text-center space-y-6 my-16 text-xl w-full text-white">
    <li>
  <Link
    to="/projects"
    className="block px-6 py-3 text-[16px] text-gray-300 opacity-95 bg-zinc-800 w-full rounded-full 
               hover:bg-zinc-700 transform hover:-translate-y-1 transition duration-300 
               shadow-[inset_0_4px_6px_rgba(0,0,0,0.4)]"
    onClick={() => setMenuOpen(false)}
  >
    Projects
  </Link>
</li>

      <li>
        <Link
          to="/design"
          className="block w-full px-6 py-3 text-[16px] text-gray-300 hover:text-gray-300 hover:bg-zinc-700 transform hover:-translate-y-1 rounded-full transition duration-300"
          onClick={() => setMenuOpen(false)}
        >
          Design Explorations
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="block w-full px-6 py-3 text-[16px] text-gray-300 hover:text-gray-300 hover:bg-zinc-600 transform hover:-translate-y-1 rounded-full transition duration-300"
          onClick={() => setMenuOpen(false)}
        >
          About Me
        </Link>
      </li>
      <li>
        <Link
          to="/resume"
          className="block w-full px-6 py-3 text-[16px] text-gray-300 hover:text-gray-300 hover:bg-zinc-600 transform hover:-translate-y-1 rounded-full transition duration-300"
          onClick={() => setMenuOpen(false)}
        >
          Resume
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className="block w-full px-6 py-3 text-[16px] shadow-[inset_0_4px_6px_rgba(0,0,0,0.4)]  rounded-full bg-[#2137A6] transform hover:-translate-y-1 to-indigo-600 text-gray-300 font-semibold duration-300 transition-transform "
          onClick={() => setMenuOpen(false)}
        >
          Contact Me
        </Link>
      </li>
    </ul>
  </div>
)}

    </nav>
  );
};
