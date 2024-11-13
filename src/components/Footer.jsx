import React from 'react';
import { FaInstagram, FaFacebookF, FaGoogle, FaWhatsapp } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-gray-800 py-8 flex flex-col items-center justify-center">
    <img src="./dist/aks.png" alt="Logo" className="h-14 w-14 outline-white outline-2" />
    
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-4">
      <h2 className="text-lg md:text-xl font-semibold mb-4">Follow Us</h2>
      
      {/* Social Links */}
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-600 transition-colors text-2xl md:text-3xl"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-600 transition-colors text-2xl md:text-3xl"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-red-600 transition-colors text-2xl md:text-3xl"
          aria-label="Google"
        >
          <FaGoogle />
        </a>
        <a
          href="https://wa.me"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-green-500 transition-colors text-2xl md:text-3xl"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
      </div>

      {/* Address and Google Maps */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">Our Address</h3>
        <p className="text-gray-400 text-sm md:text-base">1-4-554/44, Vivek nagar, Himayatnagar, Hyderabad, Telangana 500020</p>
        <p className="text-gray-400 text-sm md:text-base">Phone: +91 7396160440</p>

        {/* Google Maps Embed */}
        <div className="mt-4 w-full md:w-3/4 lg:w-1/2 mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60929.497599902774!2d78.44489260198512!3d17.359228505651277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99eb7171569b%3A0x78192b237bd70cd6!2sA%20K%20S%20Traders%20scrap%20dealer%20in%20Hyderabad!5e0!3m2!1sen!2sin!4v1731518165074!5m2!1sen!2sin"
            width="100%"
            height="200"
            allowFullScreen=""
            loading="lazy"
            title="Our Location"
            className="border-0 rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>

      {/* Responsive text */}
      <p className="text-sm md:text-base text-gray-400 mt-4">
        &copy; {new Date().getFullYear()} AKS Traders. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
