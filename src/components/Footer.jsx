import React from 'react'
import { FaLinkedin, FaTelegram, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Left - Copyright */}
          <p className="text-sm text-gray-400">
            © 2025 Yonatan Awoke. All rights reserved.
          </p>

          {/* Right - Social Icons */}
          <div className="flex space-x-6">
            <a 
              href="https://github.com/yo13ni" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a 
              href="https://www.linkedin.com/in/yonatan1234567" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a 
              href="https://t.me/yo_uno" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="Telegram"
            >
              <FaTelegram className="text-2xl" />
            </a>
          </div>
        
        </div>
      </div>
    </footer>
  )
}

export default Footer
