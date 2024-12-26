import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gear1 from "../assets/img/gear1.png";
import gear2 from "../assets/img/gear2.png";
import gear3 from "../assets/img/gear3.png";

const App = () => {
  const { scrollY } = useScroll();
  const rotateGear1 = useTransform(scrollY, [0, 1000], [0, 360]);
  const rotateGear2 = useTransform(scrollY, [0, 1000], [0, -360]);
  const rotateGear3 = useTransform(scrollY, [0, 1000], [0, -720]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 w-full">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold">SPIE</h1>
          <h2 className="mt-4 text-xl md:text-2xl font-bold">
            Society of Production & Industrial Engineering
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mt-4">
            Creating Future Engineers
          </p>
        </div>
        <div className="relative flex justify-center md:justify-end">
          <motion.img
            src={gear1}
            alt="Gear 1"
            className="absolute w-28 md:w-40 top-1/4 left-1/4 md:top-2/3 md:left-auto"
            style={{ rotate: rotateGear1 }}
          />
          <motion.img
            src={gear2}
            alt="Gear 2"
            className="absolute w-24 md:w-36 top-1/2 right-1/4"
            style={{ rotate: rotateGear2 }}
          />
          <motion.img
            src={gear3}
            alt="Gear 3"
            className="absolute w-20 md:w-28 bottom-1/4 left-1/2 md:left-auto"
            style={{ rotate: rotateGear3 }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
