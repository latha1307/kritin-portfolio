import React from 'react'
import Parent1 from '../assets/parent1.png' 
import Parent2 from '../assets/parent2.png' 
import Parent3 from '../assets/parent3.png' 
import Parent4 from '../assets/parent4.png' 

export const Projects = () => {
  return (
    <div className='text-gray-200 max-w-screen mt-20 mx-6 md:mx-64 md:my-24'>
      <div className="space-y-8 md:space-y-10">
        <h1 className="text-[32px] sm:text-[40px] md:text-[50px] font-bold text-[#DB4A2B]">Who am I?</h1>
        <h3 className="text-[32px] sm:text-[40px] md:text-[50px] font-bold">
          My name is <span className='text-[#DB4A2B]'>Kritin.</span> I’m a Product Designer.
        </h3>
        <p className="text-[20px] sm:text-[24px] md:text-[30px] text-zinc-400">
          As a product designer, I enjoy transforming rough and complex ideas into beautiful and intuitive products 
          that address user’s pain points while meeting business goals.
        </p>
      </div>

      <p className="text-center text-[24px] sm:text-[30px] md:text-[38px] mt-16 md:mt-20">
        Let’s go through some of my projects together.
      </p>

      <div className="bg-zinc-900 hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-zinc-900 bg-opacity-85 mt-10 px-6 sm:px-10 py-8 rounded-3xl flex flex-col">
        <h1 className="text-[28px] sm:text-[36px] md:text-[42px] tracking-tighter font-bold">
          As the capstone project for my M.Sc. in Creative Digital Media & UX program, I made New Parent.
        </h1>

        <p className="mt-5 text-zinc-400 text-[16px] sm:text-[16px] md:text-[20px] font-normal">
          Parenting is one of the biggest responsibilities and with fast-paced digital lifestyles, 
          I wish New Parent to be a helpful tool for all the parents. And the goal for ‘New Parent’ 
          was to create an app which makes parents life easy and be more aware of all the important 
          aspects of their babies in general.
        </p>

        <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-between mt-16 gap-4 sm:gap-2 p-5 bg-gradient-to-r from-black to-zinc-700 rounded-3xl h-auto w-full">
          <img src={Parent1} alt="parent" className="w-40 sm:w-48 md:w-52 rounded-lg" />
          <img src={Parent2} alt="parent" className="w-40 sm:w-48 md:w-52 rounded-lg" />
          <img src={Parent3} alt="parent" className="w-40 sm:w-48 md:w-52 rounded-lg" />
          <img src={Parent4} alt="parent" className="w-40 sm:w-48 md:w-52 rounded-lg" />
        </div>

        <p className="mt-5 text-zinc-400 text-[16px] sm:text-[16px] md:text-[20px] font-normal">
          New parent is a supportive as well as informative app for moms and dads. And it also acts as a 
          personalized hand-book for their baby. With New Parent, users can track their baby’s progress/development. 
          One of New Parent’s standout features is the memories feature, a place where you can treasure all important 
          memories with your child. New parent also enhances the user experience with articles and content related to baby care.
        </p>

        <p className="mt-5 text-zinc-400 text-[16px] sm:text-[16px] md:text-[20px] font-normal">
          This case study is an interesting read that offers a detailed look into the design phase of the New Parent 
          project, capturing the evolution of my ideas and the necessary compromises made due to technical constraints. 
          It demonstrates my ability to adapt and innovate, ensuring that despite technical challenges, 
          the core user issues were effectively addressed.
        </p>

        <div 
          className="px-6 py-4 sm:py-6 rounded-full text-[16px] sm:text-[18px] md:text-[20px] mt-16 text-center hover:bg-[#214ba6] shadow-[inset_2px_2px_6px_rgba(0,0,0,0.4)] bg-[#2137A6] text-white font-semibold hover:-translate-y-1 duration-300 cursor-pointer"
        >
          Read Full Case Study
        </div>
      </div>
    </div>
  )
}
