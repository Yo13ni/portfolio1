import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs that engage users and drive conversions.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces with modern frameworks and best practices.",
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Developing cross-platform mobile applications using Flutter for iOS and Android.",
  },
  {
    id: 4,
    title: "Graphics Design",
    description: "UI/UX design, banners, and sticker designs that communicate your brand effectively.",
  }
]

const Service = () => {
  return (
    <div className='bg-white py-20' id='service'>
      <div className='container mx-auto px-6 md:px-12 lg:px-24'>
        <motion.h2
          className='text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900'
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Servic<span className='text-primary-600'>es</span>
        </motion.h2>
        <motion.p
          className='text-center text-gray-600 mb-16 max-w-2xl mx-auto'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          What I can do for you
        </motion.p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto'>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className='bg-gray-50 border border-gray-200 px-8 py-10 rounded-xl hover:shadow-xl transition-all duration-300 hover:border-primary-300 group'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className='text-4xl font-bold text-primary-100 mb-4 group-hover:text-primary-200 transition-colors'>{service.id}</div>
              <h3 className='text-2xl font-bold text-gray-900 mb-3'>{service.title}</h3>
              <p className='text-gray-600 mb-6 leading-relaxed'>{service.description}</p>
              <Link
                to={`/services/${service.id}`}
                className='inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group-hover:gap-2 gap-1 transition-all'
              >
                Learn more
                <span className='transition-transform group-hover:translate-x-1'>→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Service
