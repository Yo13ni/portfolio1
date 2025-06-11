import React from 'react'
import { FaLinkedin, FaTelegram, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left - Copyright */}
        <p className="text-sm text-gray-400 mb-4 md:mb-0">
          © 2025 Yonatan Awoke. All rights reserved.
        </p>

        {/* Right - Social Icons */}
        <div className="flex space-x-6">
          <a href="https://www.linkedin.com/in/@yonatan123" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-400 transition" />
          </a>
          <a href="https://t.me/@yo_uno" target="_blank" rel="noopener noreferrer">
            <FaTelegram className="text-2xl hover:text-blue-400 transition" />
          </a>
          <a href="https://www.instagram.com/@y_o_u_n_o" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-pink-400 transition" />
          </a>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer
