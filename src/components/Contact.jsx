import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import { motion } from 'framer-motion';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevent page reload

    emailjs.sendForm('service_d2utn1k', 'template_faa1oxc', form.current, 'bgkARWVJ69BOJXVd8')
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully! 🚀");
          form.current.reset(); // reset form after send
      }, (error) => {
          console.log(error.text);
          alert("Failed to send message ❌");
      });
  };

  // animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { staggerChildren: 0.3, duration: 0.6 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className='bg-white py-20' id='contact'>
      <div className='container mx-auto px-6 md:px-12 lg:px-24'>
        <motion.h2 
          className='text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900'
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact <span className='text-primary-600'>Me</span>
        </motion.h2>
        <motion.p
          className='text-center text-gray-600 mb-16 max-w-2xl mx-auto'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Let's work together on your next project
        </motion.p>
        
        <motion.div 
          className='flex flex-col md:flex-row gap-12 max-w-5xl mx-auto'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          
          <motion.div className='flex-1' variants={itemVariants}>
            <h3 className='text-3xl font-bold text-gray-900 mb-4'>Let's Talk</h3>
            <p className='mb-8 text-gray-600 leading-relaxed'>I am open to discussing web development, graphic design, or partnership opportunities.</p>
            
            <div className='space-y-6'>
              <div className='flex items-center gap-4'>
                <div className='bg-primary-100 p-3 rounded-lg'>
                  <FaEnvelope className='text-primary-600 text-xl' />
                </div>
                <div>
                  <p className='text-sm text-gray-500 mb-1'>Email</p>
                  <a href="mailto:yoni13awoke@gmail.com" className='text-gray-900 font-medium hover:text-primary-600 transition-colors'>yoni13awoke@gmail.com</a>
                </div>
              </div>
              
              <div className='flex items-center gap-4'>
                <div className='bg-primary-100 p-3 rounded-lg'>
                  <FaPhone className='text-primary-600 text-xl' />
                </div>
                <div>
                  <p className='text-sm text-gray-500 mb-1'>Phone</p>
                  <span className='text-gray-900 font-medium'>+251955178307</span>
                </div>
              </div>

              <div className='flex items-center gap-4'>
                <div className='bg-primary-100 p-3 rounded-lg'>
                  <FaMapMarkedAlt className='text-primary-600 text-xl' />
                </div>
                <div>
                  <p className='text-sm text-gray-500 mb-1'>Location</p>
                  <span className='text-gray-900 font-medium'>Addis Ababa, ETHIOPIA</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className='flex-1 w-full' variants={itemVariants}>
            <form ref={form} onSubmit={sendEmail} className='bg-gray-50 p-8 rounded-xl border border-gray-200 space-y-6'>
              
              <div>
                <label htmlFor="user_name" className='block mb-2 text-gray-700 font-medium'>Your Name</label>
                <input 
                  type="text" 
                  name="user_name" 
                  className='w-full p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all' 
                  placeholder='Enter your name' 
                  required 
                />
              </div>

              <div>
                <label htmlFor="user_email" className='block mb-2 text-gray-700 font-medium'>Email</label>
                <input 
                  type="email" 
                  name="user_email" 
                  className='w-full p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all' 
                  placeholder='Enter your email' 
                  required 
                />
              </div>

              <div>
                <label htmlFor="message" className='block mb-2 text-gray-700 font-medium'>Message</label>
                <textarea 
                  name="message" 
                  className='w-full p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none' 
                  rows={5} 
                  placeholder='Enter your message' 
                  required 
                />
              </div>

              <button 
                type="submit" 
                className='w-full bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium shadow-lg hover:shadow-xl'
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </motion.div>
      </div>
    </div>
  )
}

export default Contact;
