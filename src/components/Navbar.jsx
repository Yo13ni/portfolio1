import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Yonatan from '../assets/Yonis.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div>
            <img
              src={Yonatan}
              alt="Yonatan Awoke"
              className="h-10 w-auto object-contain"
            />
          </div>
    
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              About
            </a>
            <a
              href="#service"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Services
            </a>
            <a
              href="#experience"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              Contact
            </a>
          </div>
    
          {/* Hamburger Icon */}
          <div className="md:hidden">
            {menuOpen ? (
              <FaTimes className="text-2xl cursor-pointer text-gray-700" onClick={() => setMenuOpen(false)} />
            ) : (
              <FaBars className="text-2xl cursor-pointer text-gray-700" onClick={() => setMenuOpen(true)} />
            )}
          </div>
        </div>
    
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-4 py-6 border-t border-gray-200">
            <a href="#home" className="text-gray-700 hover:text-gray-900 font-medium" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#service" className="text-gray-700 hover:text-gray-900 font-medium" onClick={() => setMenuOpen(false)}>
              Services
            </a>
            <a href="#experience" className="text-gray-700 hover:text-gray-900 font-medium" onClick={() => setMenuOpen(false)}>
              Experience
            </a>
            <a href="#projects" className="text-gray-700 hover:text-gray-900 font-medium" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
            <a
              href="#contact"
              className="bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium text-center"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
