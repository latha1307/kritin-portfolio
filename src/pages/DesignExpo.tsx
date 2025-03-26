import React from 'react'
import music1 from '../assets/music_player/Beats Library (1).png'
import music2 from '../assets/music_player/Frame 7.png'
import music3 from '../assets/music_player/Frame 8.png'
import music4 from '../assets/music_player/Player.png'
import music5 from '../assets/music_player/Live Looops.png'
import music6 from '../assets/music_player/Player beats_record.png'
import ecom1 from '../assets/ecom/Chiara 1.png'
import ecom2 from '../assets/ecom/Chiara.png'
import ecom3 from '../assets/ecom/HOME SCREEN.png'
import ecom4 from '../assets/ecom/Party wear.png'
import ecom5 from '../assets/ecom/Party wearA.png'
import ecom6 from '../assets/ecom/Stradivarius Jumper.png'
import ecom7 from '../assets/ecom/Trending Trends Screen.png'
import I1 from '../assets/Illustrations/1376096.jpg'
import I2 from '../assets/Illustrations/Frame 3.png'
import I3 from '../assets/Illustrations/Frame 7.png'
import I4 from '../assets/Illustrations/Isolated_Camera.jpg'
import I5 from '../assets/Illustrations/Naruto.jpg'
import I6 from '../assets/Illustrations/Naruto_Hokage.jpg'
import I7 from '../assets/Illustrations/Untitled_Artwork.jpg'
import Logo1 from '../assets/Logos/Artboardw@600x-100.jpg'
import Logo2 from '../assets/Logos/Logo.jpg'
import pro1 from '../assets/certProject/Article.png'
import pro2 from '../assets/certProject/Doc.png'
import pro3 from '../assets/certProject/Frame 58.jpg'
import pro4 from '../assets/certProject/Home (1).png'
import pro5 from '../assets/certProject/Library.png'
import pro6 from '../assets/certProject/Self care.jpg'
import pro7 from '../assets/certProject/Therapists.png'
import { motion } from 'framer-motion';

export const DesignExpo = () => {
  return (
    <div className="text-gray-200 max-w-screen mt-32 md:mt-36 mx-6 md:mx-64 md:my-40">
      <motion.h1 initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}
              className=" md:text-[58px] text-[38px] font-bold leading-tight">Browse through some of my design explorations</motion.h1>
      <div className="mt-28">
        <motion.button 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        className="bg-zinc-900 px-4 py-3 border border-zinc-800 text-white rounded-2xl shadow-[inset_4px_4px_6px_rgba(255,255,255,0.1),inset_12px_12px_14px_rgba(0,0,0,0.6)] transition-all duration-300">Mobile app</motion.button>
            <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: false }}
                    className="bg-gradient-to-b from-slate-600 to-slate-800 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-6 py-8 rounded-3xl mt-10"
                  >
                    {[music1, music2, music3].map((image, index) => (
                      <motion.img
                        key={index}
                        src={image}
                        alt={`music-${index + 1}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
                        viewport={{ once: false }}
                        className="w-full rounded-lg"
                      />
                    ))}
              </motion.div>


      <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: false }}
                    className="bg-gradient-to-b from-slate-600 to-slate-800 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-6 py-8 rounded-3xl mt-10"
                  >
                    {[music4, music5, music6].map((image, index) => (
                      <motion.img
                        key={index}
                        src={image}
                        alt={`music-${index + 1}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
                        viewport={{ once: false }}
                        className="w-full rounded-lg"
                      />
                    ))}
              </motion.div>
        <motion.button 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        className="bg-zinc-900 px-4 py-3 mt-20 border border-zinc-900 text-white rounded-2xl shadow-[inset_4px_4px_6px_rgba(255,255,255,0.1),inset_12px_12px_14px_rgba(0,0,0,0.6)] transition-all duration-300">Mobile app</motion.button>
      <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: false }}
                    className="bg-gradient-to-b from-slate-600 to-slate-800 grid grid-cols-2 md:grid-cols-4 gap-4 px-6 py-8 rounded-3xl mt-10"
                  >
                    {[ecom1, ecom2, ecom3, ecom4].map((image, index) => (
                      <motion.img
                        key={index}
                        src={image}
                        alt={`ecommerce-${index + 1}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
                        viewport={{ once: false }}
                        className="w-full rounded-lg"
                      />
                    ))}
              </motion.div>
      <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: false }}
                    className="bg-gradient-to-b from-slate-600 to-slate-800 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-6 py-8 rounded-3xl mt-10"
                  >
                    {[ecom5, ecom6, ecom7].map((image, index) => (
                      <motion.img
                        key={index}
                        src={image}
                        alt={`ecommerce-${index + 1}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
                        viewport={{ once: false }}
                        className="w-full rounded-lg"
                      />
                    ))}
              </motion.div>
        <motion.button 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        className="bg-zinc-900 px-4 py-3 mt-20 border border-zinc-900 text-white rounded-2xl shadow-[inset_4px_4px_6px_rgba(255,255,255,0.1),inset_12px_12px_14px_rgba(0,0,0,0.6)] transition-all duration-300">Illustrations</motion.button>
        <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: false }}
                    className="bg-gradient-to-b from-slate-600 to-slate-800 flex px-6 py-6 md:px-16 md:py-14 rounded-3xl mt-10 justify-between"
                  >
                    {[I2].map((image, index) => (
                      <motion.img
                        key={index}
                        src={image}
                        alt={`ecommerce-${index + 1}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
                        viewport={{ once: false }}
                        className="md:w-full rounded-lg"
                      />
                    ))}
              </motion.div>


        <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: false }}
                    className="bg-gradient-to-b from-slate-600 to-slate-800 flex px-6 py-6 md:px-16 md:py-14 rounded-3xl mt-10 justify-between"
                  >
                    {[I3].map((image, index) => (
                      <motion.img
                        key={index}
                        src={image}
                        alt={`ecommerce-${index + 1}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
                        viewport={{ once: false }}
                        className="md:w-full rounded-lg"
                      />
                    ))}
              </motion.div>


        <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: false }}
                    className="bg-gradient-to-b from-slate-600 to-slate-800 flex px-6 py-6 md:px-16 md:py-14 rounded-3xl mt-10 justify-between"
                  >
                    {[I5].map((image, index) => (
                      <motion.img
                        key={index}
                        src={image}
                        alt={`ecommerce-${index + 1}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
                        viewport={{ once: false }}
                        className="md:w-full rounded-lg"
                      />
                    ))}
              </motion.div>


<motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: false }}
                    className="bg-gradient-to-b from-slate-600 to-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 px-6 py-8 rounded-3xl mt-10"
                  >
                    {[I4, I6].map((image, index) => (
                      <motion.img
                        key={index}
                        src={image}
                        alt={`Illustration-${index + 1}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
                        viewport={{ once: false }}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ))}
              </motion.div>

<motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: false }}
                    className="bg-gradient-to-b from-slate-600 to-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 px-6 py-8 rounded-3xl mt-10"
                  >
                    {[I1, I7].map((image, index) => (
                      <motion.img
                        key={index}
                        src={image}
                        alt={`Illustration-${index + 1}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
                        viewport={{ once: false }}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ))}
              </motion.div>


        <motion.button 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        className="bg-zinc-900 px-4 py-3 mt-20 border border-zinc-900 text-white rounded-2xl shadow-[inset_4px_4px_6px_rgba(255,255,255,0.1),inset_12px_12px_14px_rgba(0,0,0,0.6)] transition-all duration-300">Logos</motion.button>
      
      <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: false }}
                    className="bg-gradient-to-b from-slate-600 to-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 px-6 py-8 rounded-3xl mt-10"
                  >
                    {[Logo1, Logo2].map((image, index) => (
                      <motion.img
                        key={index}
                        src={image}
                        alt={`Logo-${index + 1}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
                        viewport={{ once: false }}
                        className="w-full rounded-lg"
                      />
                    ))}
              </motion.div>

        <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        className="bg-zinc-900 px-4 py-3 mt-20 border border-zinc-900 text-white rounded-2xl shadow-[inset_4px_4px_6px_rgba(255,255,255,0.1),inset_12px_12px_14px_rgba(0,0,0,0.6)] transition-all duration-300">Mobile app</motion.button>

      <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: false }}
                    className="bg-gradient-to-b from-slate-600 to-slate-800 grid grid-cols-2 md:grid-cols-4 gap-4 px-6 py-8 rounded-3xl mt-10"
                  >
                    {[pro3, pro4, pro6, pro5].map((image, index) => (
                      <motion.img
                        key={index}
                        src={image}
                        alt={`ecommerce-${index + 1}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
                        viewport={{ once: false }}
                        className="w-full rounded-lg"
                      />
                    ))}
              </motion.div>

      
      <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: false }}
                    className="bg-gradient-to-b from-slate-600 to-slate-800 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-6 py-8 rounded-3xl mt-10"
                  >
                    {[pro7, pro2, pro1].map((image, index) => (
                      <motion.img
                        key={index}
                        src={image}
                        alt={`project-${index + 1}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
                        viewport={{ once: false }}
                        className="w-full rounded-lg"
                      />
                    ))}
              </motion.div>

      </div>
    </div>
  )
}
