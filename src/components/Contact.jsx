import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_uqtv26f',     // Replace with your service ID
      'template_91gf0wt',    // Replace with your template ID
      form.current,
      'C5eEZwGqFFSX6cxw2'         // Replace with your user ID
    )
    .then((result) => {
      alert('Message sent successfully!');
      form.current.reset();
    }, (error) => {
      alert('An error occurred, please try again.');
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#0D3B66aa]">
      <motion.div initial={{ y: 50 }} animate={{ y: 0 }} transition={{ duration: 1 }} className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-4 md:text-4xl text-[#FAF0CA] text-center md:text-left">Contact Us</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 bg-[#F4D35Ebb] p-6 rounded-xl w-full md:w-1/2">
            <input type="text" name="from_name" placeholder="Name" className="p-3 border border-gray-300 rounded" required />
            <input type="email" name="from_email" placeholder="Email" className="p-3 border border-gray-300 rounded" required />
            <textarea name="message" placeholder="Message" className="p-3 border border-gray-300 rounded h-32" required></textarea>
            <button type="submit" className="bg-[#0D3B66] text-white p-3 rounded hover:bg-blue-700 transition">Send Message</button>
          </form>

          
          {/* Image Section */}
          <div className="w-full md:w-[40%] h-64 md:h-auto flex items-center justify-center">
            <img 
              src="https://media.istockphoto.com/id/925857310/photo/white-chat-bubbles-imprinted-with-contact-us-symbols-on-blue-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=a_A19_EwdKdtcfHvf44hmGZUePFpPBMBjk5a5nrUKYM=" 
              alt="Contact Us" 
              className="w-inherit h-inherit object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
