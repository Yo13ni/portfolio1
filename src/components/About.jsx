import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <>
      <div className='bg-black text-white py-20' id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
          <motion.h2 
            className='text-4xl font-bold text-center mb-12'
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About <span className='text-yellow-400'>Me</span>
          </motion.h2>

          <div className="bg-black text-white flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 md:px-16 py-12">
            <motion.div 
              className='flex-1'
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <p className='text-xl mb-8 leading-relaxed'>
                I am a <span className='text-yellow-400 font-semibold'>Software Engineering</span> graduate specializing in <span className='text-yellow-400 font-semibold'>Fullstack Development</span>. I love solving complex problems and creating scalable, efficient solutions using modern technologies. I enjoy building powerful web applications and designing beautiful user experiences.
              </p>

              <div className='space-y-6'>
                {/* Skill Bars with Labels */}
                {[
                  { label: 'HTML & CSS', percent: '95%' },
                  { label: 'React JS', percent: '90%' },
                  { label: 'Node JS', percent: '85%' },
                ].map((skill, index) => (
                  <motion.div
                    className='flex items-center gap-4'
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <span className='w-2/12 font-semibold text-yellow-400'>{skill.label}</span>
                    <div className='grow bg-gray-700 rounded-full h-4'>
                      <div
                        className='bg-yellow-500 h-4 rounded-full transition-all duration-500 hover:scale-105'
                        style={{ width: skill.percent }}
                      ></div>
                    </div>
                  </motion.div>
                ))}

                {/* Stats */}
                <motion.div
                  className='mt-12 flex justify-between text-center'
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {[
                    { number: '1+', label: 'Year Experience' },
                    { number: '10+', label: 'Projects Completed' },
                    { number: '10+', label: 'Happy Clients' },
                  ].map((stat, index) => (
                    <div key={index}>
                      <h3 className='text-2xl font-bold text-yellow-500'>{stat.number}</h3>
                      <p>{stat.label}</p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
