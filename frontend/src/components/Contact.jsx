import React from 'react';
import { FaPhoneAlt, FaInstagram, FaFacebook, FaGlobe } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

        {/* Contact Numbers */}
        <div className="space-y-6">
          <div className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-4 shadow-md">
            <FaPhoneAlt className="text-3xl" />
            <div className="text-right">
              <h2 className="font-bold text-lg">PRIYA SHARMA</h2>
              <p className="text-md">+91 9336485339</p>
            </div>
          </div>

          <div className="flex items-center justify-between bg-gradient-to-r from-blue-800 to-blue-600 rounded-lg p-4 shadow-md">
            <FaPhoneAlt className="text-3xl" />
            <div className="text-right">
              <h2 className="font-bold text-lg">KRISHNA GUPTA</h2>
              <p className="text-md">+91 6205694901</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 space-y-4">
          <a
            href="https://spie.nitjsr.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-gradient-to-r from-teal-500 to-teal-700 rounded-lg p-4 shadow-md hover:scale-105 transition-transform"
          >
            <FaGlobe className="text-3xl" />
            <p className="text-md">https://spie.nitjsr.com/</p>
          </a>

          <a
            href="https://instagram.com/prodyog_nitjsr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-4 shadow-md hover:scale-105 transition-transform"
          >
            <FaInstagram className="text-3xl" />
            <p className="text-md">/prodyog_nitjsr</p>
          </a>

          <a
            href="https://facebook.com/prodyog"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-gradient-to-r from-green-600 to-green-800 rounded-lg p-4 shadow-md hover:scale-105 transition-transform"
          >
            <FaFacebook className="text-3xl" />
            <p className="text-md">/prodyog</p>
          </a>

          <a
            href="https://www.linkedin.com/company/society-of-production-and-industrial-engineering-nit-jamshedpur/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-gradient-to-r from-blue-700 to-blue-900 rounded-lg p-4 shadow-md hover:scale-105 transition-transform"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20.48h-3v-10.29h3v10.29zm-1.5-11.75c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm14.25 11.75h-3v-5.62c0-1.34-.027-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.72h-3v-10.29h2.89v1.4h.041c.4-.76 1.37-1.56 2.82-1.56 3.02 0 3.58 1.99 3.58 4.57v5.88z" />
            </svg>
            <p className="text-md">/society-of-production-and-industrial-engineering-nit-jamshedpur</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
