import React, { useEffect, useState } from 'react';
import Parent1 from '../assets/parent1.png';
import Parent2 from '../assets/parent2.png';
import Parent3 from '../assets/parent3.png';
import Parent4 from '../assets/parent4.png';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const Projects = () => {
  const languages = [
    'WELCOME',
    'BIENVENUE',
    'BIENVENIDO',
    'BEM-VINDO',
    'WILLKOMMEN',
    '欢迎',
    'स्वागत है',
    'ようこそ', 
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-gray-200 max-w-screen mt-32 mx-6 md:mx-64 md:my-40">
      <div className="space-y-8 md:space-y-10">
        <AnimatePresence mode="wait">
          <motion.h1
            key={languages[index]}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="text-[40px] md:text-[60px] font-bold text-[#DB4A2B]"
          >
            {languages[index]}
          </motion.h1>
        </AnimatePresence>

        <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
          className="text-[38px] md:text-[58px] font-bold"
        >
          My name is <span className="text-[#DB4A2B]">Kritin.</span> I’m a Product Designer.
        </motion.h3>

        <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
          className="text-[20px] sm:text-[24px] md:text-[24px] text-white text-opacity-75"
        >
          As a Product Designer, I enjoy transforming rough and complex ideas into beautiful and intuitive products
          that address user’s pain points while meeting business goals.
        </motion.p>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        className="text-center text-[28px] sm:text-[30px] md:text-[40px] mt-16 md:mt-20"
      >
        Let’s go through some of my projects together.
      </motion.p>

      <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1 }}
      className="bg-zinc-900 hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-zinc-900 bg-opacity-85 mt-10 px-6 sm:px-10 py-8 rounded-3xl flex flex-col"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: false }}
        className="text-[28px] sm:text-[36px] md:text-[40px] font-bold"
      >
        As the capstone project for my M.Sc. in Creative Digital Media & UX program, I made New Parent.
      </motion.h1>

      {[
        "Parenting is one of the biggest responsibilities and with fast-paced digital lifestyles, I wish New Parent to be a helpful tool for all the parents. The goal for ‘New Parent’ was to create an app which makes parents' life easy and be more aware of all the important aspects of their babies in general."      ].map((text, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 + index * 0.2 }}
          viewport={{ once: false }}
          className="mt-5 text-zinc-400 text-[16px] sm:text-[16px] md:text-[20px] font-normal"
        >
          {text}
        </motion.p>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: false }}
        className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-between mt-16 gap-4 sm:gap-2 p-5 bg-gradient-to-r from-black to-zinc-700 rounded-3xl h-auto w-full"
      >
        {[Parent1, Parent2, Parent3, Parent4].map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`parent-${index + 1}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
            viewport={{ once: false }}
            className="w-40 sm:w-48 md:w-52 rounded-lg"
          />
        ))}
      </motion.div>

      {[
        "New Parent is a supportive as well as informative app for moms and dads. And it also acts as a personalized hand-book for their baby. With New Parent, users can track their baby’s progress/development. One of New Parent’s standout features is the memories feature, a place where you can treasure all important memories with your child. New Parent also enhances the user experience with articles and content related to baby care.",
        "This case study is an interesting read that offers a detailed look into the design phase of the New Parent project, capturing the evolution of my ideas and the necessary compromises made due to technical constraints. It demonstrates my ability to adapt and innovate, ensuring that despite technical challenges, the core user issues were effectively addressed."
      ].map((text, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 + index * 0.2 }}
          viewport={{ once: false }}
          className="mt-5 text-zinc-400 text-[16px] sm:text-[16px] md:text-[20px] font-normal"
        >
          {text}
        </motion.p>
      ))}

      <Link to="/case-study">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: false }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-4 sm:py-6 rounded-full text-[16px] sm:text-[18px] md:text-[20px] mt-16 text-center hover:bg-[#214ba6] shadow-[inset_2px_2px_6px_rgba(0,0,0,0.4)] bg-[#2137A6] text-white font-semibold hover:-translate-y-1 duration-300 cursor-pointer"
        >
          Read Full Case Study
        </motion.div>
      </Link>
    </motion.div>
    </div>
  );
};
