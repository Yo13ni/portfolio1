import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "developing cross-platform mobile applications using Flutter.",
  },
  {
    id: 4,
    title: "Graphics Design",
    description: "UI/UX design, banners, and sticker designs.",
  }
]

const Service = () => {
  return (
    <>
      <div className='bg-black text-white py-20' id='service'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
          <motion.h2
            className='text-4xl font-bold text-center mb-12'
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Servic<span className='text-yellow-400'>es</span>
          </motion.h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className='bg-white px-6 py-8 rounded-lg hover:shadow-lg transition-transform duration-300 hover:scale-105'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className='text-right text-3xl font-bold text-yellow-500'>{service.id}</div>
                <h3 className='mt-2 text-2xl font-bold text-black'>{service.title}</h3>
                <p className='mt-2 text-lg text-gray-800'>{service.description}</p>
                <Link
                  to={`/services/${service.id}`}
                  className='mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium'
                >
                  Read More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Service
