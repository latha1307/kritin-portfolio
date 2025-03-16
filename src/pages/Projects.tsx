import React from 'react'

export const Projects = () => {
  return (
    <div className='text-gray-200 my-4 mt-20 mx-8 md:mx-64 md:my-24'>
      <div className="space-y-10">
        <h1 className="md:text-[50px] text-[40px] font-bold text-[#DB4A2B]">Who am I?</h1>
        <h3 className="md:text-[50px] text-[40px] font-bold ">My name is <span className='text-[#DB4A2B]'>Kritin.</span> I’m a Product Designer.</h3>
        <p className="md:text-[30px] text-[24px] text-zinc-400">As a product designer, I enjoy transforming rough and complex ideas into beautiful and intuitive products that address user’s pain points while meeting business goals.</p>
      </div>
      <p className="text-center text-[30px]  md:text-[38px] mt-20 ">Let’s go through some of my projects together.</p>
      <div className="bg-zinc-900 hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-zinc-800 bg-opacity-75 mt-10 px-10 py-8 rounded-3xl flex flex-col">
        <h1 className="text-[36px] md:text-[42px] tracking-tighter font-bold">As the capstone project for my M.Sc. in Creative Digital 
        Media & UX program, I made New Parent. </h1>
        <p className="mt-5 text-zinc-400 text-[16px] font-normal md:text-[20px]">Parenting is one of the biggest responsibilities and with fast-paced digital lifestyles, I wish New Parent to be a helpful tool for all the parents. And the goal for ‘New Parent’ was to create an app which makes parents life easy and be more aware of all the important aspects of their babies in general.</p>
      </div>
    </div>
  )
}
