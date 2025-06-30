import React, { useState, useEffect } from 'react';
import { MdLanguage } from "react-icons/md";
import { IoSunnyOutline } from "react-icons/io5";
import { BsMoonStars } from "react-icons/bs";
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const navLinks = ["Home", "About", "Offers", "Seats", "Destinations"];

  // Modal
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!formData.name) newErrors.name = 'Required';
    if (!formData.email) newErrors.email = 'Required';
    if (!formData.message) newErrors.message = 'Required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSuccessMessage({ type: 'error', text: 'Please fill all fields' });
      return;
    }

    setSuccessMessage({ type: 'success', text: 'Message sent successfully!' });
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    setSuccessMessage(null);
  };

  return (
    <nav className='flex flex-col'>
      {/* Top bar */}
      <div className='flex justify-between items-center py-4 px-12 text-[#767676] bg-[#dbf1ff] dark:bg-[#292929] dark:text-[#d2d2d2]'>
        <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1 , x: 0 }}
        transition={{ duration: 0.5 , delay: 0.5 ,type: 'spring', stiffness: 100 , damping: 10 }}
        className='flex items-center bg-white py-1 px-3 rounded-3xl shadow shadow-black/25'>
          <button onClick={() => setIsDarkMode(false)} className={`mr-4 p-2 rounded-full ${!isDarkMode ? 'bg-[#FFF700] text-black' : 'bg-gray-300 text-gray-700'}`}>
            <IoSunnyOutline />
          </button>
          <button onClick={() => setIsDarkMode(true)} className={`p-2 rounded-full ${isDarkMode ? 'bg-[#1a1a1a] text-white' : 'bg-gray-300 text-gray-700'}`}>
            <BsMoonStars />
          </button>
        </motion.div>


        <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1 , y: 0 }}
        transition={{ duration: 0.5 , delay: 0.5 ,type: 'spring', stiffness: 100 , damping: 10 }}
        className='flex gap-4'>
          <span>Support</span>
          <span className='flex items-center gap-2'>
            <MdLanguage />
            Language
          </span>
        </motion.div>


        <div className='flex gap-4'>
          <motion.span
           initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1 , y: 0 }}
        transition={{ duration: 0.5 , delay: 0.5 ,type: 'spring', stiffness: 100 , damping: 10 }}
          className='hover:text-[#477ED9]/80 cursor-pointer'>Sign in</motion.span>
          <motion.span
           initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1 , y: 0 }}
        transition={{ duration: 0.5 , delay: 0.5 ,type: 'spring', stiffness: 100 , damping: 10 }}
          className='hover:text-[#477ED9]/80 cursor-pointer'>Sign up</motion.span>
        </div>
      </div>

      {/*  nav */}
      <div className='flex justify-between items-center py-4 px-12 bg-white text-[#767676] dark:bg-black dark:text-[#b2b2b2]'>
        <div>
          <motion.span
           initial={{ opacity: 0, y: -10 }}
           animate={{ opacity: 1 , y: 0 }}
           transition={{ duration: 0.5 , delay: 0.5 ,type: 'spring', stiffness: 100 , damping: 10 }}
          className='text-3xl font-bold text-[#477ED9]'>FlyWithUs</motion.span>
          <motion.p
           initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1 , scale: 1 }}
        transition={{ duration: 0.5 , delay: 0.7 ,type: 'spring', stiffness: 100 , damping: 10 }}
          className='text-sm'>Flight Booking Agency</motion.p>
        </div>

        <div className='flex gap-10'>
          {navLinks.map((link, index) => (
            <motion.span
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1 , y: 0 }}
            transition={{ duration: 0.5 , delay:index * 0.3 ,type: 'spring', stiffness: 100 , damping: 10 }}
            key={index} className='cursor-pointer hover:text-blue-500 hover:underline hover:underline-offset-4'>
              {link}
            </motion.span>
          ))}
        </div>
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1 , scale: 1 }}
        transition={{ duration: 0.5 , delay: 0.7 ,type: 'spring', stiffness: 100 , damping: 10 }}
          onClick={() => setShowModal(true)}
          className='bg-[#477ED9] text-white px-4 py-2 rounded-3xl shadow-md hover:bg-[#292929] hover:text-[#477ED9]'
        >
          Contact
        </motion.button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 bg-black/40  flex items-center justify-center z-[100]">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-white dark:bg-[#1a1a1a] p-6 rounded-xl shadow-xl w-[90%] max-w-md"
            >
              <h2 className="text-xl font-bold text-center mb-4 text-[#477ED9] dark:text-white">Contact Us</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-lg focus:outline-none dark:bg-[#333] dark:text-white ${errors.name ? 'border-red-500' : ''}`}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-lg focus:outline-none dark:bg-[#333] dark:text-white ${errors.email ? 'border-red-500' : ''}`}
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-lg focus:outline-none dark:bg-[#333] dark:text-white ${errors.message ? 'border-red-500' : ''}`}
                ></textarea>

                {/* Success or error message */}
                {successMessage && (
                  <div className={`flex items-center gap-2 p-3 rounded-md text-white ${successMessage.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>
                    {successMessage.type === 'success' ? <AiOutlineCheckCircle size={20} /> : <AiOutlineCloseCircle size={20} />}
                    <span>{successMessage.text}</span>
                  </div>
                )}

                <div className="flex justify-end gap-2">
                  <button type="button" onClick={closeModal} className="px-4 py-2 rounded-lg bg-gray-300 dark:bg-gray-700 text-black dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600">
                    Cancel
                  </button>
                  <button type="submit" className="px-4 py-2 rounded-lg bg-[#477ED9] text-white hover:bg-[#375bb5]">
                    Send
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
