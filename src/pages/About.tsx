import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <div className="text-gray-200 mt-20 my-8 mx-8 md:mx-64 md:my-28 space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        className="md:text-[50px] text-[38px] font-bold text-[#DB4A2B]"
      >
        WELCOME TO MY PORTFOLIO.
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 0.2 }}
        className="md:text-[50px] text-[38px] font-bold"
      >
        My name is <span className="text-[#DB4A2B]">Kritin.</span> I’m a Product Designer.
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 0.4 }}
        className="md:text-[26px] text-[22px] text-left text-zinc-400"
      >
        Driven by a passion for crafting intuitive and engaging experiences, I’m a product designer transitioning from a background in architecture, where I honed my skills in spatial reasoning, user-centered design, and problem-solving. With a year and half of experience in the architecture field, I’ve developed a keen eye for detail and a deep understanding of how people interact with their environment. Now, I’m eager to apply these skills to the digital realm, creating user-focused interfaces and experiences that are both beautiful and functional.
      </motion.div>
    </div>
  );
};
