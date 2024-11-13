import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaBoxOpen, FaPhone } from 'react-icons/fa'; // Import icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#0D3B66] text-[#FAF0CA] p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between px-5 md:justify-around items-center">
        <img src="https://i.imghippo.com/files/gKU4601rI.png" alt="Logo" className="h-12 w-12 outline-[2px_solid_white]" />
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:underline text-xl flex items-center">
            <FaHome className="mr-2" /> Home
          </a>
          <a href="#about" className="hover:underline text-xl flex items-center">
            <FaInfoCircle className="mr-2" /> About
          </a>
          <a href="#products" className="hover:underline text-xl flex items-center">
            <FaBoxOpen className="mr-2" /> Products
          </a>
          <a href="#contact" className="hover:underline text-xl flex items-center">
            <FaPhone className="mr-2" /> Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }} // Slide out to the right on close
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-0 right-0 w-3/4 h-full bg-[#0D3B66] text-[#FAF0CA] shadow-lg z-20 flex flex-col items-center p-4 text-xl"
          >
            {/* Close Button Inside Mobile Menu */}
            <button
              className="self-end mb-4 text-2xl"
              onClick={toggleMenu}
              aria-label="Close Menu"
            >
              <FaTimes />
            </button>

            {/* Mobile Menu Links */}
            <div className="flex flex-col items-start space-y-[50px] mt-10"> {/* Increased space-y value */}
              <a
                href="#home"
                className="hover:underline flex items-center justify-start w-full text-xl"
                onClick={() => setIsOpen(false)}
              >
                <FaHome className="mr-3 text-2xl" /> Home
              </a>
              <a
                href="#about"
                className="hover:underline flex items-center justify-start w-full text-xl"
                onClick={() => setIsOpen(false)}
              >
                <FaInfoCircle className="mr-3 text-2xl" /> About
              </a>
              <a
                href="#products"
                className="hover:underline flex items-center justify-start w-full text-xl"
                onClick={() => setIsOpen(false)}
              >
                <FaBoxOpen className="mr-3 text-2xl" /> Products
              </a>
              <a
                href="#contact"
                className="hover:underline flex items-center justify-start w-full text-xl"
                onClick={() => setIsOpen(false)}
              >
                <FaPhone className="mr-3 text-2xl" /> Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
