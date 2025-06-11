import React from 'react'
import Image from '../assets/image.png'
import { FaDownload } from "react-icons/fa";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-black text-white flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 md:px-16 py-12">
      
      <motion.div
        className="text-center md:text-left max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-2">Yonatan Awoke</h1>
        <p className="text-yellow-400 text-xl font-semibold mb-4">Frontend Developer</p>
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 bg-yellow-400 text-black border border-yellow-400 rounded-full px-4 py-1 hover:bg-transparent hover:text-yellow-400 transition"
        >
          Resume<FaDownload className="text-lg" /> 
        </a>
      </motion.div>

      <motion.div 
        className="flex justify-center mt-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img
          src={Image}
          alt=""
          className="mx-auto mb-8 w-65 h-60 rounded object-cover transform transition-transform duration-300 hover:scale-105"
        />
      </motion.div>

    </section>
  )
}

export default Hero
