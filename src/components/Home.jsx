import React from 'react';
import { motion } from 'framer-motion';

const Home = () => (
  <section
    id="home"
    className="h-[950px] md:h-[140vh] flex items-center justify-center bg-cover bg-center bg-opacity-70 text-[#FAF0CA]"
    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1545070255-fdc9a55d32f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNjcmFwfGVufDB8fDB8fHww')" }} // Replace with actual background image URL
  >
    <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="container mx-auto px-6 md:px-12 lg:px-20 text-center"
      >
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Welcome to <span className='flex justify-center items-center my-3'><img src='./dist/aks.png' alt="" className="h-[100px] w-[100px] outline-[2px_solid_white]" /></span> Traders
        </h1>
        
        {/* Subheading */}
        <p className="text-lg md:text-xl lg:text-2xl mb-6 max-w-2xl mx-auto">
          Your trusted partner in sustainable recycling. We buy and sell high-quality scrap materials, contributing to a cleaner, greener environment.
        </p>
        
        {/* Call to Action Button */}
        <motion.a
          href="#products"
          className="mt-4 inline-block text-xl bg-[#0D3B66] hover:bg-blue-700 font-semibold py-3 px-6 rounded-lg transition transform hover:scale-105"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Explore Our Products
        </motion.a>

        {/* Additional Information Section */}
        <div className="mt-8 text-sm md:text-base lg:text-lg max-w-3xl mx-auto text-gray-300">
          <p>
            We specialize in handling all types of recyclable materials, including metals, plastics, e-waste, and more. Our team is committed to delivering a smooth, reliable service, ensuring each transaction benefits both you and the environment.
          </p>
          <p className="mt-4">
            With years of experience in the scrap industry, we have developed a streamlined process to make it easy for individuals and businesses to buy or sell scrap. Whether you have a few items or bulk materials, we’re here to provide fair prices and excellent customer service.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Home;
