import React from "react";
import { motion } from "framer-motion"; // Framer Motion for animations
import { FaLightbulb, FaCogs } from "react-icons/fa"; // React Icons for visuals
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
    const navigate = useNavigate();

  return (
    
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center py-10 px-4 sm:px-6 md:px-10 dark:bg-white dark:text-black">
      {/* Header */}
      <motion.div
        className="mb-12 w-full text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          ABOUT US
        </h1>
        <motion.p
          className="mt-4 text-lg sm:text-xl leading-relaxed text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Learn more about our department and the annual branch fest!
        </motion.p>
      </motion.div>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row gap-6 max-w-7xl w-full">
        {/* SPIE Card */}
        <motion.div
          className="bg-gradient-to-b from-gray-700/80 to-gray-600/80 text-white p-6 rounded-lg w-full shadow-lg transform transition-transform duration-500 ease-out hover:scale-105 hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-center flex items-center justify-center gap-2 bg-gradient-to-b from-gray-900 to-gray-800 mb-4">
            <FaLightbulb className="text-purple-400" /> SPIE
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            Welcome to the Society of Production and Industrial Engineering, NIT
            Jamshedpur! As a part of the Department of Production and Industrial
            Engineering. The Department of Production & Industrial Engineering
            was started in the year 1988 with the name of “Production
            Engineering & Management”. The name of this department was changed
            to Production & Industrial Engineering in the year 2007.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mt-4">
            The department is running a UG course for a B. Tech. (Hons.) degree
            in Production and Industrial Engineering and a PG course in
            Manufacturing Systems Engineering as well as a Ph.D. program in
            various streams of Production and Industrial Engineering. The
            Department is currently developing different engineering
            laboratories like CAD/CAM Lab, Advanced Manufacturing and Flexible
            Manufacturing Systems Lab, Non-Traditional Manufacturing Lab, and
            Industrial Engineering & Ergonomics Lab and Central Workshop.
          </p>
        </motion.div>

        {/* PRODYOG Card */}
        <motion.div
          className="bg-gradient-to-b from-gray-700/80 to-gray-600/80 text-white p-6 rounded-lg w-full shadow-lg transform transition-transform duration-500 ease-out hover:scale-105 hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-center flex items-center justify-center gap-2 bg-gradient-to-b from-gray-900 to-gray-800 mb-4">
            <FaCogs className="text-blue-400" /> PRODYOG
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            The Annual Technical Fest of the Production and Industrial
            Engineering Department, NIT Jamshedpur. Prodyog, the flagship
            technical fest of the Production and Industrial Engineering
            Department at NIT Jamshedpur, is a celebration of technological
            brilliance and innovation. With a legacy of excellence, Prodyog is
            designed to bring together students, academicians, and industry
            professionals to share knowledge, showcase talent, and explore
            groundbreaking advancements in production and industrial
            engineering.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mt-4">
            In Previous Year we have featured exciting events such as
            Chain-Zenith, Metal Masterpiece, Pratyush, Machina Mystique,
            DataHackon, Talkathon, Mini Shark Tank, CyberRush, as well as fun
            events and a vibrant cultural night. Prodyog is a platform where
            creativity meets technology, enabling participants to push the
            boundaries of innovation and problem-solving.
          </p>
        </motion.div>
      </div>

      {/* Call-to-Action Section */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        
        <h3 className="text-3xl font-semibold text-gray-200 mb-6">
          Ready to Explore More?
        </h3>
        <motion.button
          className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-lg font-bold rounded-lg hover:scale-105 transform transition-all duration-500 ease-out"
          whileHover={{ scale: 1.1 }}
          onClick={() => window.scrollTo(0, 0)} 
          // Scroll to the top for now
        >
          <span  
          onClick={() => navigate("/register")}
          className="text-white cursor-pointer hover:underline"
          >
          Join Us Today!
          </span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default AboutPage;
