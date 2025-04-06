import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className="w-full mb-20">
      <hr className="border-gray-500 opacity-65" />
      

      <div className="text-white flex flex-col sm:flex-row justify-between items-center mt-8 space-y-6 sm:space-y-0  px-6 sm:px-12 lg:px-60 ">
        
      <a href="https://www.linkedin.com/in/kritin-rajmohan-25679514a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
   target="_blank" 
   rel="noopener noreferrer">
  <div className="flex items-center space-x-4 text-[18px] sm:text-[20px]">
    <FaLinkedin className="text-[#0A66C2] text-[30px]" />
    <p>LinkedIn</p>
  </div>

    </a>
    <div className='flex items-center space-x-4 text-[18px] sm:text-[20px]'>
    <FaEnvelope className="text-red-600 text-[30px]"/>
    <p>kritinrajmohan@gmail.com</p>
    </div>



        <div className="text-[18px] sm:text-[22px] text-center">
          Kritin Rajmohan © {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
};
