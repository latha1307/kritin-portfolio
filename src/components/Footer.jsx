import React from 'react';
import logo from "../assets/kritinLogo.png";
import { FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className="w-full mb-20">
      <hr className="border-gray-500 opacity-65" />
      
      <div className="text-center flex flex-col sm:flex-row items-center justify-center mt-16 sm:mt-24  px-6 sm:px-12 lg:px-60 ">
        <img src={logo} alt="Logo" className="w-32 h-40 sm:w-52 sm:h-60" />
        <h1 className="text-[70px] sm:text-[120px] md:text-[150px] font-bold text-[#DB4A2B] tracking-widest">
          Kritin
        </h1>
      </div>

      <div className="text-white flex flex-col sm:flex-row justify-between items-center mt-8 space-y-6 sm:space-y-0  px-6 sm:px-12 lg:px-60 ">
        
      <a href="https://www.linkedin.com/in/kritin-rajmohan-25679514a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
   target="_blank" 
   rel="noopener noreferrer">
  <div className="flex items-center space-x-4 text-[18px] sm:text-[20px]">
    <FaLinkedin className="text-[#0A66C2] text-[30px]" />
    <p>LinkedIn</p>
  </div>
</a>


        <div className="text-[18px] sm:text-[22px] text-center">
          Kritin Rajmohan © {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
};
