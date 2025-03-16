import React, { useState } from 'react';

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("kritinrajmohan@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  };

  return (
    <div className='text-gray-200 mt-32 my-10 mx-8 md:mx-64 md:my-44 space-y-14'>
      <div className="md:text-[60px] text-[40px] font-bold text-[#DB4A2B]">CONTACT ME.</div>
      <div className="md:text-[26px] text-[20px] text-zinc-400">
        I am available for internship and full-time opportunities. Message me on <span className="text-[#339ECC]">LinkedIn</span> 
        or contact me at my email address, kritinrajmohan@gmail.com
      </div>
      
      <div className="text-center relative">
        <div 
          className="px-6 py-6 rounded-full text-[18px] hover:bg-[#214ba6] shadow-[inset_2px_2px_6px_rgba(0,0,0,0.4)] md:text-[20px] bg-[#2137A6] text-white font-semibold hover:-translate-y-1 duration-300 cursor-pointer relative"
          onClick={handleCopyEmail}
          title="Click to copy email"
        >
          Copy Email Address
        </div>

        {copied && (
          <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 bg-zinc-600 text-gray-300 px-4 py-2 rounded-lg text-sm">
            Email copied!
          </div>
        )}
      </div>
    </div>
  );
};
