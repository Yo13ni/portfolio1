import React from 'react'
import Image from '../assets/Yonis.png'
import { FaDownload } from "react-icons/fa";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="bg-white min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <motion.div
            className="flex-1 text-center md:text-left max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm <span className="text-primary-600">Yonatan Awoke</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-8 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Flutter Mobile Developer & Software Engineer
            </motion.p>
            <motion.p 
              className="text-lg text-gray-500 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Building beautiful, scalable mobile applications with Flutter. Passionate about creating exceptional user experiences and solving complex problems.
            </motion.p>
            <motion.a
              href="/yonatan_awoke_flutter_developer_resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Download Resume <FaDownload className="text-lg" /> 
            </motion.a>
          </motion.div>

          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl transform rotate-6 opacity-20"></div>
              <img
                src={Image}
                alt="Yonatan Awoke - Flutter Developer"
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl object-cover shadow-2xl transform transition-transform duration-300 hover:scale-105 border-4 border-white"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero
