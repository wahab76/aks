import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <section id="about" className="py-20 bg-[#0D3B66dd]">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8"
    >
      {/* Text Section */}
      <div className="md:w-1/2 bg-[#F4D35E22] p-4 rounded-xl">
        <h2 className="md:text-4xl text-3xl font-semibold mb-4 text-[#FAF0CA]">About Us</h2>
        <p className="text-white mb-4">
          Welcome to our Scrap Dealing business! We are a dedicated team focused on the sustainable recycling of scrap materials. Our mission is to offer an easy, efficient, and environmentally friendly way for people to deal with all kinds of scrap materials. By bridging the gap between sellers and buyers of scrap, we aim to reduce waste and promote a greener planet.
        </p>
        <p className="text-white mb-4">
          Our services are designed for everyone—whether you’re an individual looking to sell small amounts of household scrap or a business with large quantities. We handle metals, plastics, electronics, and more. Our team is committed to transparency, reliability, and customer satisfaction, making sure that every transaction is smooth and hassle-free.
        </p>
        <p className="text-white">
          Join us in our journey toward a cleaner and more sustainable world. Together, we can make a positive impact on the environment by turning what might be waste into valuable resources.
        </p>
      </div>

      {/* Image Section */}
      <motion.div
        initial={{ x: 200 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 flex justify-center"
      >
        <img
          src="https://media.istockphoto.com/id/937865058/photo/grab-crane-works-in-waste-recycling-station.webp?a=1&b=1&s=612x612&w=0&k=20&c=9jaw_Av8yQuw8WUkLBBqVZq_MPVTwsrGd0PHZDB2lAg="
          alt="About us"
          className="rounded-lg shadow-lg w-full max-w-sm scale-[1.1] md:scale-[1.4]"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default About;
