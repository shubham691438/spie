import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import gear1 from "../assets/img/gear1.png";
import gear2 from "../assets/img/gear2.png";
import gear3 from "../assets/img/gear3.png";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { Link } from 'react-router-dom';


const HeroSection = () => {

const { scrollY } = useScroll();
    const rotateGear1 = useTransform(scrollY, [0, 1000], [0, 360]);
    const rotateGear2 = useTransform(scrollY, [0, 1000], [0, -360]);
    const rotateGear3 = useTransform(scrollY, [0, 1000], [0, -720]);
   
    

  return (
    
        <div className="min-h-[43.5rem] md:min-h-screen  text-white flex items-center justify-center px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 w-full">
            {/* Left Section */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">SPIE</h1>
              <h2 className="mt-4 text-lg sm:text-xl md:text-2xl font-bold">
                Society of Production & Industrial Engineering
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-400 mt-4">
                Where creativity meets logic, turning challenges into opportunities and processes into perfection
              </p>
              <div className="mt-6 flex justify-center md:justify-start">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="bg-black text-white flex items-center space-x-2 px-6 py-3"
                >
                  <AceternityLogo />
                  <Link to='/register'><span>Register Now</span></Link>
                </HoverBorderGradient>
              </div>
            </div>
    
            {/* Right Section */}
            <div className="relative flex justify-center md:justify-end mt-24 md:mt-0">
              <motion.img
                src={gear1}
                alt="Gear 1"
                className="absolute w-20 sm:w-28 md:w-40 top-1/4 left-1/4 md:top-2/3 md:left-auto animate-spin-slow"
              />
              <motion.img
                src={gear2}
                alt="Gear 2"
                className="absolute w-16 sm:w-24 md:w-36 top-1/2 right-1/4 animate-spin-reverse"
              />
              <motion.img
                src={gear3}
                alt="Gear 3"
                className="absolute w-14 sm:w-20 md:w-28 bottom-1/4 left-1/3 md:left-auto animate-spin-faster"
              />
            </div>
    
            {/* <div className="relative flex justify-center md:justify-end mt-24 md:mt-0">
              <motion.img
                src={gear1}
                alt="Gear 1"
                className="absolute w-20 sm:w-28 md:w-40 top-1/4 left-1/4 md:top-2/3 md:left-auto"
                style={{ rotate: rotateGear1 }}
              />
              <motion.img
                src={gear2}
                alt="Gear 2"
                className="absolute w-16 sm:w-24 md:w-36 top-1/2 right-1/4"
                style={{ rotate: rotateGear2 }}
              />
              <motion.img
                src={gear3}
                alt="Gear 3"
                className="absolute w-14 sm:w-20 md:w-28 bottom-1/4 left-1/3 md:left-auto"
                style={{ rotate: rotateGear3 }}
              />
            </div> */}
    
          </div>
        </div>
    
  )
}

export default HeroSection


const AceternityLogo = () => {
    return (
      <svg
        width="66"
        height="65"
        viewBox="0 0 66 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-3 w-3 text-white"
      >
        <path
          d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
          stroke="currentColor"
          strokeWidth="15"
          strokeMiterlimit="3.86874"
          strokeLinecap="round"
        />
      </svg>
    );
  };