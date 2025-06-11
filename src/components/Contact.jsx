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
    <div className='bg-black text-white py-20' id='contact'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>Contact me</h2>
        
        <motion.div 
          className='flex flex-col md:flex-row items-center md:space-x-12'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          
          <motion.div className='flex-1' variants={itemVariants}>
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 mb-4'>Let's Talk</h3>
            <p className='mb-8'>I am open to discussing web development, graphic design, or partnership opportunities.</p>
            
            <div className='mb-4 flex items-center'>
              <FaEnvelope className='inline-block text-yellow-400 mr-2' />
              <a href="mailto:yoni13awoke@gmail.com" className='hover:underline'>yoni13awoke@gmail.com</a>
            </div>
            
            <div className='mb-4 flex items-center'>
              <FaPhone className='inline-block text-yellow-400 mr-2' />
              <span>+251955178307</span>
            </div>

            <div className='mb-4 flex items-center'>
              <FaMapMarkedAlt className='inline-block text-yellow-400 mr-2' />
              <span>Addis Ababa, ETHIOPIA</span>
            </div>
          </motion.div>

          <motion.div className='flex-1 w-full' variants={itemVariants}>
            <form ref={form} onSubmit={sendEmail} className='space-y-4'>
              
              <div>
                <label htmlFor="user_name" className='block mb-2'>Your Name:</label>
                <input 
                  type="text" 
                  name="user_name" 
                  className='w-full p-2 rounded bg-gray-500 border border-gray-500 focus:outline-none focus:border-green-400' 
                  placeholder='Enter your name' 
                  required 
                />
              </div>

              <div>
                <label htmlFor="user_email" className='block mb-2'>Email:</label>
                <input 
                  type="email" 
                  name="user_email" 
                  className='w-full p-2 rounded bg-gray-500 border border-gray-500 focus:outline-none focus:border-green-400' 
                  placeholder='Enter your email' 
                  required 
                />
              </div>

              <div>
                <label htmlFor="message" className='block mb-2'>Message:</label>
                <textarea 
                  name="message" 
                  className='w-full p-2 rounded bg-gray-500 border border-gray-500 focus:outline-none focus:border-green-400' 
                  rows={5} 
                  placeholder='Enter your message' 
                  required 
                />
              </div>

              <button 
                type="submit" 
                className='bg-yellow-400 text-black border border-yellow-400 rounded-full px-8 py-2 hover:bg-transparent hover:text-yellow-400 transition'
              >
                Send
              </button>
            </form>
          </motion.div>

        </motion.div>
      </div>
    </div>
  )
}

export default Contact;
