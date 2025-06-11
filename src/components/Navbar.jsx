import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // icons for hamburger and close
import Yonatan from '../assets/yonatan.png'
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-8 py-0 md:px-16 lg:px-24">
    <div className="container py-4 mt-0 flex justify-between items-center">
      {/* Logo */}
      <div>
        <img
          src={Yonatan}
          alt=""
          className="w-40 h-auto object-contain object-center"
        />
      </div>
  
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <a
          href="#home"
          className="border border-yellow-400 rounded-full px-4 py-1 hover:bg-yellow-400 hover:text-black transition"
        >
          Home
        </a>
        <a
          href="#about"
          className="border border-yellow-400 rounded-full px-4 py-1 hover:bg-yellow-400 hover:text-black transition"
        >
          About Me
        </a>
        <a
          href="#service"
          className="border border-yellow-400 rounded-full px-4 py-1 hover:bg-yellow-400 hover:text-black transition"
        >
          Services
        </a>
        <a
          href="#projects"
          className="border border-yellow-400 rounded-full px-4 py-1 hover:bg-yellow-400 hover:text-black transition"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="bg-yellow-400 text-black border border-yellow-400 rounded-full px-4 py-1 hover:bg-transparent hover:text-yellow-400 transition"
        >
          Contact Me
        </a>
      </div>
  
      {/* Hamburger Icon */}
      <div className="md:hidden">
        {menuOpen ? (
          <FaTimes className="text-2xl cursor-pointer" onClick={() => setMenuOpen(false)} />
        ) : (
          <FaBars className="text-2xl cursor-pointer" onClick={() => setMenuOpen(true)} />
        )}
      </div>
    </div>
  
    {/* Mobile Menu */}
    {menuOpen && (
      <div className="md:hidden flex flex-col items-center space-y-6 py-6 bg-gray-600">
        <a href="#home" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
          Home
        </a>
        <a href="#about" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
          About Me
        </a>
        <a href="#service" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
          Services
        </a>
        <a href="#projects" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
          Projects
        </a>
        <a
          href="#contact"
          className="bg-yellow-400 text-black border border-yellow-400 rounded-full px-4 py-1 hover:bg-transparent hover:text-yellow-400 transition"
          onClick={() => setMenuOpen(false)}
        >
          Contact me
        </a>
      </div>
    )}
  </nav>
  
  );
};

export default Navbar;
