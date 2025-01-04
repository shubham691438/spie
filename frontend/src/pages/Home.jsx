import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gear1 from "../assets/img/gear1.png";
import gear2 from "../assets/img/gear2.png";
import gear3 from "../assets/img/gear3.png";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";

const App = () => {
  const { scrollY } = useScroll();
  const rotateGear1 = useTransform(scrollY, [0, 1000], [0, 360]);
  const rotateGear2 = useTransform(scrollY, [0, 1000], [0, -360]);
  const rotateGear3 = useTransform(scrollY, [0, 1000], [0, -720]);

  return (
    <div>
    <div className="min-h-screen text-white flex items-center justify-center px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 w-full">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold">SPIE</h1>
          <h2 className="mt-4 text-xl md:text-2xl font-bold">
            Society of Production & Industrial Engineering
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mt-4">
          Where creativity meets logic, turning challenges into opportunities and processes into perfection
          </p>
          <div className="mt-6 flex justify-start text-center">
                      <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="bg-black  text-white flex items-center space-x-2"
                      >
                        <AceternityLogo />
                        <span>Register Now</span>
                      </HoverBorderGradient>
                    </div>
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
      <div>
        <section class=" bg-gray-800 ">
            <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div class="font-light  sm:text-lg text-gray-400 text-left">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold  text-white">The future belongs to those who innovates in manufacturing.</h2>
                    <p class="mb-4">At our society, we offer an inclusive platform for students from various branches to connect with like-minded individuals, esteemed professors, researchers, and industry experts. Through a plethora of events, ranging from case studies and business models to entrepreneurial initiatives.
                    </p>
                    <br/>
                    <p>Our ultimate goal?</p>
                    <h2 class="mb-2 text-lg font-semibold  text-white">Empowerment</h2>
                    <p> To empower students with the knowledge, skills, and network needed to thrive in the dynamic landscape of the manufacturing industry</p>
                    <h2 class="mb-2 text-lg font-semibold text-white">Contribution</h2>
                    <p>We’re also dedicated to contributing to the greater extent through sustainable and cutting-edge practices.</p>

                    

                </div>
                <div class="grid grid-cols-1 gap-4 mt-8">
                    <img class="w-full rounded-lg" src="https://i.ibb.co/j3gcJPJ/DSC-0190.jpg" alt="office content 1"/>
                    {/* <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"/> */}
                </div>
            </div>
        </section>
      </div>
    </div>
  );
};

export default App;

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
