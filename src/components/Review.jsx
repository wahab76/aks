import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaCheckCircle, FaClock, FaShippingFast } from 'react-icons/fa';

const reviews = [
  { id: 1, name: 'Amit Kumar', review: 'Excellent service and top-notch quality. Highly recommend!', rating: 5, image: 'https://randomuser.me/api/portraits/men/45.jpg' },
  { id: 2, name: 'Priya Sharma', review: 'Very professional and responsive team. Great experience!', rating: 4, image: 'https://randomuser.me/api/portraits/women/32.jpg' },
  { id: 3, name: 'Ali Khan', review: 'Fantastic service, great prices, and delivery was on time. Highly recommend!', rating: 5, image: 'https://randomuser.me/api/portraits/men/12.jpg' },
  { id: 4, name: 'Fatima Begum', review: 'Very helpful team and the product quality is excellent. Will definitely shop again!', rating: 5, image: 'https://randomuser.me/api/portraits/women/18.jpg' },
  { id: 5, name: 'Ravi Verma', review: 'Wide range of affordable products. Will definitely shop again!', rating: 4, image: 'https://randomuser.me/api/portraits/men/68.jpg' },
  { id: 6, name: 'Geeta Patel', review: 'Impressive quality and fast customer support. Would recommend!', rating: 5, image: 'https://randomuser.me/api/portraits/women/56.jpg' },
];

const Reviews = () => (
  <section id="reviews" className="py-20 bg-[#0D3B6688]">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-semibold text-[#FAF0CA] text-center mb-8">Customer Reviews</h2>

      {/* Service Highlights */}
      <div className="flex flex-wrap gap-6 justify-center mb-10">
        <div className="bg-[#0D3B66] text-[#FAF0CA] p-6 rounded-xl shadow-lg flex flex-col items-center text-center flex-1 min-w-[250px]">
          <FaCheckCircle className="text-4xl mb-3" />
          <h3 className="text-xl font-semibold mb-2">Quality Service</h3>
          <p>Ensuring high standards in every interaction.</p>
        </div>
        <div className="bg-[#0D3B66] text-[#FAF0CA] p-6 rounded-xl shadow-lg flex flex-col items-center text-center flex-1 min-w-[250px]">
          <FaClock className="text-4xl mb-3" />
          <h3 className="text-xl font-semibold mb-2">Quick Response</h3>
          <p>We respond promptly to all inquiries.</p>
        </div>
        <div className="bg-[#0D3B66] text-[#FAF0CA] p-6 rounded-xl shadow-lg flex flex-col items-center text-center flex-1 min-w-[250px]">
          <FaShippingFast className="text-4xl mb-3" />
          <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
          <p>Timely delivery of quality products.</p>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow hover:scale-105 transform"
          >
            <div className="flex items-center gap-4 mb-4">
              <img src={review.image} alt={review.name} className="w-12 h-12 object-cover rounded-full shadow-md" />
              <div>
                <h3 className="text-lg font-semibold text-[#0D3B66]">{review.name}</h3>
                <div className="flex text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600">{review.review}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;
