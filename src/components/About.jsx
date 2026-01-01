import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='bg-gray-50 py-20' id='about'>
      <div className='container mx-auto px-6 md:px-12 lg:px-24'>
        <motion.h2 
          className='text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900'
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About <span className='text-primary-600'>Me</span>
        </motion.h2>
        <motion.p
          className='text-center text-gray-600 mb-16 max-w-2xl mx-auto'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Learn more about my background, skills, and experience
        </motion.p>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className='bg-white rounded-2xl p-8 md:p-12 shadow-lg'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className='text-lg md:text-xl mb-12 leading-relaxed text-gray-700'>
              I am a <span className='text-primary-600 font-semibold'>Software Engineering</span> graduate specializing in <span className='text-primary-600 font-semibold'>Mobile app development</span>. I love solving complex problems and creating scalable, efficient solutions using modern technologies. I enjoy building mobile applications and designing beautiful user experiences.
            </p>

            <div className='space-y-6'>
              {/* Skill Bars with Labels */}
              {[
                { label: 'HTML & CSS', percent: '95%' },
                { label: 'Flutter', percent: '90%' },
                { label: 'Dart', percent: '85%' },
              ].map((skill, index) => (
                <motion.div
                  className='space-y-2'
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className='flex justify-between items-center'>
                    <span className='font-semibold text-gray-900'>{skill.label}</span>
                    <span className='text-gray-600 text-sm'>{skill.percent}</span>
                  </div>
                  <div className='w-full bg-gray-200 rounded-full h-3 overflow-hidden'>
                    <motion.div
                      className='bg-gradient-to-r from-primary-500 to-primary-600 h-3 rounded-full'
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.percent }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
