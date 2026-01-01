import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const experiences = [
  {
    id: 1,
    company: "Yoro App",
    position: "Mobile Developer",
    duration: "Currently Working",
    location: "Remote",
    description: "Developing mobile applications using Flutter. Working on building scalable and user-friendly mobile solutions.",
    status: "current",
    technologies: ["Flutter", "Dart", "Mobile Development"]
  },
  {
    id: 2,
    company: "Torians PLC",
    position: "Intern",
    duration: "3 Months",
    location: "Addis Ababa, Ethiopia",
    description: "Completed a 3-month internship program focusing on software development practices, team collaboration, and real-world project experience.",
    status: "completed",
    technologies: ["Software Development", "Team Collaboration", "Project Management"]
  }
]

const Experience = () => {
  return (
    <div className='bg-white py-20' id='experience'>
      <div className='container mx-auto px-6 md:px-12 lg:px-24'>
        <motion.h2 
          className='text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900'
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experien<span className='text-primary-600'>ce</span>
        </motion.h2>
        <motion.p
          className='text-center text-gray-600 mb-16 max-w-2xl mx-auto'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          My professional journey and work experience
        </motion.p>

        <div className='max-w-4xl mx-auto space-y-8'>
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className='bg-gray-50 border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300'
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className='flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4'>
                <div className='flex-1'>
                  <div className='flex items-center gap-3 mb-2'>
                    <div className='bg-primary-100 p-2 rounded-lg'>
                      <FaBriefcase className='text-primary-600' />
                    </div>
                    <div>
                      <h3 className='text-2xl font-bold text-gray-900'>{experience.position}</h3>
                      <p className='text-xl text-primary-600 font-semibold'>{experience.company}</p>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  {experience.status === 'current' && (
                    <span className='inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium'>
                      Current
                    </span>
                  )}
                  {experience.status === 'completed' && (
                    <span className='inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium'>
                      Completed
                    </span>
                  )}
                </div>
              </div>

              <div className='flex flex-wrap items-center gap-6 mb-4 text-gray-600'>
                <div className='flex items-center gap-2'>
                  <FaCalendarAlt className='text-primary-600' />
                  <span className='font-medium'>{experience.duration}</span>
                </div>
                <div className='flex items-center gap-2'>
                  <FaMapMarkerAlt className='text-primary-600' />
                  <span>{experience.location}</span>
                </div>
              </div>

              <p className='text-gray-700 mb-6 leading-relaxed'>
                {experience.description}
              </p>

              <div className='flex flex-wrap gap-2'>
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className='bg-white border border-gray-300 text-gray-700 px-4 py-1 rounded-full text-sm font-medium'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience

