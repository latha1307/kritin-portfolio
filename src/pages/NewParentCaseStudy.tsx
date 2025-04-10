import React, { useState } from "react";
import Parent5 from '../assets/parent5.png' 
import Parent6 from '../assets/parent6.png' 
import Parent7 from '../assets/parent7.png' 
import Parent8 from '../assets/parent8.png' 
import Parent9 from '../assets/parent9.png' 
import Parent10 from '../assets/parent10.png' 
import Parent11 from '../assets/parent11.png' 
import Parent12 from '../assets/parent12.png' 
import Parent13 from '../assets/parent13.png' 
import Parent14 from '../assets/parent14.png' 
import Parent15 from '../assets/parent15.png' 
import Parent16 from '../assets/parent16.png' 
import Parent17 from '../assets/parent17.png' 
import Parent18 from '../assets/parent18.png' 
import Parent19 from '../assets/parent19.png' 
import Parent20 from '../assets/parent20.png' 
import Parent21 from '../assets/parent21.png' 
import Parent22 from '../assets/parent22.png' 
import Parent23 from '../assets/parent23.png' 
import Parent24 from '../assets/parent24.png' 
import Parent25 from '../assets/parent25.png' 
import Parent26 from '../assets/parent26.png' 
import Parent27 from '../assets/parent27.png' 
import Parent28 from '../assets/parent28.png' 
import Parent29 from '../assets/parent29.png' 
import Parent30 from '../assets/parent30.png' 
import Parent31 from '../assets/parent31.png' 
import Parent32 from '../assets/parent32.png' 
import Parent33 from '../assets/parent33.png' 
import Parent34 from '../assets/parent34.png' 
import { motion } from 'framer-motion';
import { FaPlay } from "react-icons/fa";

const NewParentCaseStudy = () => {

  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "JB_OQ2MzRFE";
  const ParentImages = [Parent28, Parent29, Parent30, Parent31];
  return (
    <div className="text-gray-200 mt-20 my-8 mx-8 md:mx-36 md:my-28 space-y-10">
      <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}
       className="md:text-[48px] md:text-center text-left text-[38px] font-bold ">New Parent: Simplifying parenthood, one tap at a time. </motion.div>

      <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: false }}
              className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-between mt-16 gap-4 sm:gap-2 p-5 bg-gradient-to-r from-[#15161A] to-[#2F3031] rounded-3xl h-auto w-full"
            >
              {[Parent5, Parent6, Parent7, Parent8].map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`parent-${index + 1}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
                  viewport={{ once: false }}
                  className="w-40 sm:w-52 md:w-72 rounded-lg"
                />
              ))}
            </motion.div>
      <div className="md:mx-36">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }} className="text-left text-[26px] md:text-[30px] font-medium text-[#DB4A2B]">The potential impact of New Parent</motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }} className="md:text-[22px] mt-5 text-[18px]  text-zinc-400">The New Parent is a supportive app for moms and dads. And it also act as an personalized hand book for your baby.<br/>
            In this app you can track your newborn his or her development and save those special memories in one place.
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }}  className="text-left  mt-20 mb-5 text-[26px] md:text-[30px] font-medium text-[#DB4A2B]">The brain and brawn of New Parent</motion.div>
        <div className="md:text-[22px] text-[20px] mt-5 text-zinc-400">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }} className="md:text-[28px] text-[22px] mt-5 text-white"> New Parent showcases my comprehensive learning journey in my M.Sc. programme. I was responsible for all aspects of the project, from design to development to deployment.</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }} className="block mt-5"> New Parent is the capstone project for my M.Sc. in Creative Digital Media & UX program. This project encapsulates the comprehensive learning journey focusing on identifying and addressing a design challenge understanding its domain and users, and crafting a user-friendly solution.</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }} className="block mt-5"> As an individual project, I am responsible for everything from every design phase to every development stage. The significant personal understanding demonstrates my capability in problem-solving, design solutions, development, managing project timelines and deadlines, and product management.</motion.span>

        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }} className="text-left mt-20 text-[26px] sm:text-[40px]  md:text-[30px] font-medium text-[#DB4A2B]">New Parent backstory</motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }} className="md:text-[22px] text-[20px] mt-5 text-zinc-400"> <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }} className="md:text-[28px] text-[22px] mt-5 text-white"> The main idea of my New Parent app stemmed from a shared experience: the overwhelming disconnect between the desired joy of new parenthood and the reality of its logistical demands. </motion.span>

            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }} className="block mt-5"> Frustrated by the constant struggle to manage schedules, track milestones, and simply find moments to connect with our children, a group of friends and I began brainstorming. We sought a solution that would streamline the chaos, allowing parents to truly savor the precious, fleeting moments of early childhood. This realization fueled the creation of my app, designed to alleviate the pressures of new parenthood.</motion.span></motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }} className="text-left mt-20 text-[26px]  md:text-[30px] font-medium text-[#DB4A2B]">Initial sketches</motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }} className="md:text-[22px] text-[20px] mt-5 text-zinc-400"> <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }} className="text-[26px] mt-5 text-white"> My initial sketches were rapid and iterative, focusing on capturing the essential functionalities. </motion.span> 

            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }} className="block mt-5">I prioritized visualizing the user flow, mapping out how parents would navigate the app to complete key tasks like scheduling feeding times, tracking milestones, and sharing photos. These sketches were intentionally low-fidelity, allowing for quick exploration of various layouts and interactions. I used pen and paper to freely explore different ideas, iterating on each screen based on user needs.</motion.span> </motion.div>

      <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: false }}
              className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-between mt-5 gap-4 sm:gap-2 p-8 bg-gradient-to-r from-[#15161A] to-[#2F3031] rounded-3xl h-auto w-full"
            >
              {[Parent9, Parent10, Parent11].map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`parent-${index + 1}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
                  viewport={{ once: false }}
                  className="w-40 sm:w-48 md:w-68 rounded-lg border-violet-300 border-4"
                />
              ))}
            </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }} className="md:text-[22px] text-[20px] mt-5 text-zinc-400">
      These initial sketches and wireframes served as a crucial foundation for the app's development, enabling me to validate key design decisions and iterate on the user experience. This process allowed me to move into the prototyping phase with a clear understanding of the app's core functionalities and user needs.
      </motion.div>
      <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: false }}
              className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-between mt-5 gap-4 sm:gap-2 p-8 bg-gradient-to-r from-[#15161A] to-[#2F3031] rounded-3xl h-auto w-full"
            >
              {[Parent12, Parent13, Parent14].map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`parent-${index + 1}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
                  viewport={{ once: false }}
                  className="w-40 sm:w-52 md:w-52 rounded-lg border-violet-300 border-4"
                />
              ))}
            </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }} className="text-left mt-20 text-[26px]  md:text-[30px] font-medium text-[#DB4A2B]">Low fidelity prototypes</motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }} className="md:text-[22px] text-[20px] mt-5 text-zinc-400">Building upon user insights gained from paper prototype testing, I moved into low-fidelity prototyping. This iterative process allowed me to refine the app's features, directly addressing identified user pain points. Using Figma, I then developed digital wireframes to solidify the app's structure and visualize the user experience.</motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }}  className="md:text-[22px] text-[20px] mt-5 text-zinc-400">The first wireframes had five main tabs in the bottom navigation: Home, Daily log, Moments, Parenting and Music. The Home screen layout was structured into distinct sections displaying your baby information, upcoming vaccination and slide show of recent photos of your baby.</motion.div>

      <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: false }}
              className="flex justify-center mt-10"
            >
              {[Parent15].map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`parent-${index + 1}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
                  viewport={{ once: false }}
                  className="w-40 sm:w-52 md:w-72 rounded-lg border-violet-300 border"
                />
              ))}
            </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }} className="md:text-[22px] text-[20px] mt-10 text-zinc-400">
      Wireframes were created for two main features: logging daily baby activity and photo moment capture. The Daily log wireframe incorporates a calendar for streamlined date selection and log retrieval, with dedicated sections for key baby care aspects such as sleep, feeding, and crying. 
        <br/>
        <br/>
        <br/>
        Likewise parents can also track their baby’s vaccination. The core of the screen features a chronological list of recommended vaccinations, segmented by the child's age in months. Each section clearly outlines the vaccines due at that specific age, with a visual indicator (thumbs-up icon) suggesting a potential mechanism for parents to mark completed vaccinations.
      </motion.div>

      <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: false }}
              className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-between mt-16 gap-4 sm:gap-2 p-5  h-auto w-full"
            >
              {[Parent16, Parent17].map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`parent-${index + 1}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
                  viewport={{ once: false }}
                  className="w-40 sm:w-48 md:w-72 rounded-lg border-violet-300 border-4"
                />
              ))}
            </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }} className="md:text-[22px] text-[20px] mt-10 text-zinc-400">
      Inspired by Instagram, the Moments feature offers a familiar and user-friendly way to capture, organize, and treasure those special baby moments in a single, accessible location.
      </motion.div>

      <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: false }}
              className="flex justify-center mt-10"
            >
              {[Parent18].map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`parent-${index + 1}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
                  viewport={{ once: false }}
                  className="w-40 sm:w-52 md:w-72 rounded-lg border-violet-300 border-4"
                />
              ))}
            </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }} className="text-left mt-20 text-[26px] sm:text-[40px]  md:text-[30px] font-medium text-[#DB4A2B]">Testing the prototype</motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }} className="md:text-[28px] text-[26px] mt-5 text-white">User testing revealed the need to make user flow of the app easy. Users also expressed to have minimal taps within the app.</motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }} className="md:text-[22px] text-[20px] mt-5 text-zinc-400">After creating the initial wireframes, I developed a low-fidelity prototype to gather early feedback. The first prototype tested the flow of logging daily data’s of your child and add photos of your child in Moments.</motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }} className="md:text-[22px] text-[20px] mt-5 text-zinc-400">User testing revealed the need to simplify app’s user flow and reduce feature overload to enhance user experience. The data entry process was also identified as a pain point, with users seeking a more efficient and less time-consuming method.</motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }} className="text-left mt-20 text-[26px] md:text-[30px] font-medium text-[#DB4A2B]">Further findings for New Parent</motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }} className="md:text-[28px] text-[26px] mt-5 text-white">After user testing I’ve conducted research to validate the ideas and features of New Parent. The target audience of New Parent were people of different age group.</motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }} className="md:text-[22px] text-[20px] mt-5 text-zinc-400">Based on usability test insights, I conducted research to validate the idea of broadening New Parent features. The research included qualitative interviews to uncover user needs and challenges and a quantitative survey to validate findings across a broader population.</motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }} className="md:text-[22px] text-[20px] mt-5 text-zinc-400">The main aim was to investigate and understand user behaviors,  needs, frustrations and values regarding things needed in this phase of New Parent.
<br />
<br />
<br />
Here are some key insights I derived from the results of the quantitative research (survey).  </motion.div>

<motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: false }}
              className="grid grid-cols-2 mt-10 content-center sm:grid-cols-2 md:grid-cols-2 gap-2 sm:gap-4 p-2 w-full h-auto"
            >
              {[Parent19, Parent20, Parent21, Parent22].map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`parent-${index + 1}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
                  viewport={{ once: false }}
                  className="w-full  rounded-lg"
                />
              ))}
            </motion.div>


<motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: false }}
              className="flex flex-col sm:flex-row justify-center w-full gap-2 sm:gap-4 mt-10 px-4"
            >
              {[Parent23, Parent24].map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`parent-${index + 1}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
                  viewport={{ once: false }}
                  className="w-full sm:w-1/2 rounded-lg object-fill"
                />
              ))}
            </motion.div>


      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }} className="text-left mt-20 text-[28px] md:text-[30px] font-medium text-[#DB4A2B]">Designing the next level: The final high-fidelity prototype</motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }} className="md:text-[28px] text-[26px] mt-5 text-white">The high-fidelity mockups and prototype for the app feature a clean, minimalist interface, targeting both iOS and Android platforms to ensure wide accessibility.</motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }} className="md:text-[22px] text-[20px] mt-5 text-zinc-400">I refined the app's wireframes and fine-tuned its features and functionalities, all guided by initial user feedback.</motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }} className="md:text-[22px] text-[20px] mt-5 text-zinc-400">The high-fidelity mockups and prototype for the app feature a clean, minimalist interface targeting both iOS and android platform to ensure wide accessibility. 
<br />
<br />
The high-fidelity mockups and prototype was designed to satisfy the user values of a simplified interface and user-friendly design. The interface is clean and minimalist, with a structured and organized layout ensuring easy navigation. The high-fidelity mockup/prototype targets both iOS and Android platforms, ensuring a seamless and consistent user experience across the two most widely used mobile operating systems. This decision maximizes the app's reach and accessibility, allowing users to stay connected regardless of their chosen device.
<br />
<br />
The UI features a bottom navigation bar with icons for Home, Daily log, Memories and Evolution providing easy access to different app sections. The top navigation bar allows user to access their profile.  
</motion.div>

<motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: false }}
              className="flex justify-center mt-10"
            >
              {[Parent25].map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`parent-${index + 1}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
                  viewport={{ once: false }}
                  className="w-40 sm:w-52 md:w-72 rounded-lg border-violet-300 border"
                />
              ))}
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }} className="md:text-[22px] text-[20px] mt-5 text-zinc-400">The home screen features a personalized greeting, shortcuts to tracking feature, cover image of your child, motivational quote and list of Baby Care articles.</motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: false }}
              className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-between mt-16 gap-4 sm:gap-2 p-5  h-auto w-full"
            >
              {[Parent26, Parent27].map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`parent-${index + 1}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
                  viewport={{ once: false }}
                  className="w-40 sm:w-48 md:w-72 rounded-lg object-fill"
                />
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }} className="md:text-[22px] text-[20px] mt-5 text-zinc-400">The icons below the greeting represents the shortcuts to tracking features: "Feeding," "Sleep," "Nappy," "Growth," and "Health." This design provides parents with immediate, one-tap access to log essential information, saving time and effort during busy moments. 
<br />
<br />
A large image area dominates the center. This space is envisioned to be customizable, perhaps allowing parents to feature a photo of their baby, enhancing personalization and emotional connection.
<br />
The Daily Logs screen serving as the central hub for recording various baby-related activities.
</motion.div>


            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }} className="md:text-[22px] text-[20px] mt-5 text-zinc-400">
            The Memories screen offers parents a streamlined and visually intuitive way to capture their child's milestones.  With a simple tap on the '+' icon, users can quickly add photos and build a beautiful collection of cherished moments.

</motion.div>

<motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: false }}
              className="flex justify-center mt-10"
            >
              {[Parent32].map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`parent-${index + 1}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
                  viewport={{ once: false }}
                  className="w-40 sm:w-52 md:w-72 rounded-lg border-violet-300 border"
                />
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }} className="md:text-[22px] text-[20px] mt-5 text-zinc-400">
            The Evolution screen aims to provide parents with a visual overview of their child's developmental milestones, categorized by age ranges. It's designed to be simple, informative, and visually engaging.
</motion.div>

<motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: false }}
              className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-between mt-16 gap-4 sm:gap-2 p-5  h-auto w-full"
            >
              {[Parent33, Parent34].map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`parent-${index + 1}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
                  viewport={{ once: false }}
                  className="w-40 sm:w-48 md:w-72 rounded-lg object-fill"
                />
              ))}
            </motion.div>

      <div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }} className="text-left text-[26px] md:text-[30px] font-medium text-[#DB4A2B]">Accessibility considerations</motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }} className="md:text-[28px] text-[22px] mt-5 text-white">The app will priorities accessibility by adapting to users' device text settings and supporting screen readers, ensuring visually impaired individuals can navigate with ease.
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }} className="md:text-[22px] mt-5 text-[18px]  text-zinc-400">The app will adhere to and follow the native device text sizing in the Display settings of users' phones, catering to users with low vision by allowing them to use the app in their preferred font size. 
      Interactive elements such as buttons and links will have large touch targets (at least 9 mm by 9 mm) to accommodate users with motor impairments. Given that older adults, who are part of the target audience, may have varying levels of technological proficiency, the app will also feature a user-friendly design with clear, simple navigation and easily recognisable icons.</motion.div>
      </div>

      <div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }} className="text-left text-[26px] md:text-[30px] font-medium text-[#DB4A2B]">My reflections on this project and next steps
</motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }} className="md:text-[22px] mt-5 text-[18px]  text-zinc-400">The key takeaway from this project is the willingness to pivot and refine an idea. During this project, I had to change a major part of how New Parent works. Having an open mind and being receptive to feedback was crucial in my ability to easily pivot and find a solution to the backend complexity.
<br />
<br />
The app has been built. I developed it using React Native and Expo with TypeScript, and Supabase for the backend. Here's a Promo Video showing the app in action.</motion.div>
      </div>

      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: false }}
      className="flex justify-center items-center mt-16 gap-4 p-5 bg-gradient-to-r from-[#15161A] to-[#2F3031] rounded-3xl h-auto w-full"
    >
      {isPlaying ? (
        // ✅ Show YouTube Video
        <div className="w-full sm:w-[640px] h-auto aspect-video rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className="flex relative flex-wrap sm:flex-nowrap justify-center gap-4">

                <div className="absolute right-0 bottom-0 cursor-pointer m-1 z-10 bg-[#DB4A2B]  p-4 rounded-full">
                  <FaPlay onClick={() => setIsPlaying(true)}  className="text-white ml-1  text-3xl sm:text-4xl" />
                </div>
  
          {ParentImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
              viewport={{ once: false }}
              className="relative  w-40 sm:w-52 md:w-58"
              
            >
              <img
                src={image}
                alt={`parent-${index + 1}`}
                className="rounded-lg w-full object-cover"
              />
              
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
     
    </div>
    </div>

  )
}

export default NewParentCaseStudy