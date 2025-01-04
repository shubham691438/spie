import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gear1 from "../assets/img/gear1.png";
import gear2 from "../assets/img/gear2.png";
import gear3 from "../assets/img/gear3.png";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { HomeEvents } from "../components/HomeEvents";

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

      {/* Message from Director and Vice Chairman */}
<div>
  <div>
    <section class="bg-gray-900">
    
      <div class="flex flex-col md:flex-row justify-between items-center py-8 px-4 mx-auto max-w-screen-xl gap-8 lg:gap-16 lg:px-6">
        <div className="relative border  border-white/[0.2]  p-4 w-full md:w-2/4 rounded-lg">
        {/* Plus sign at top-left corner */}
        <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
        {/* Plus sign at bottom-left corner */}
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
        {/* Plus sign at top-right corner */}
        <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
        {/* Plus sign at bottom-right corner */}
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />
        <img
            src="https://www.nitjsr.ac.in/static/media/hod_prod.ce4207e1a4a0ef31db34.jpg"
            alt="Director's image"
          />
        </div>
       
        <div class="mt-4 md:mt-0 text-center md:text-left">
          <blockquote>
            <p class="text-lg md:text-xl font-medium text-white leading-relaxed">
              "Welcome to the Society of Production and Industrial Engineering, NIT Jamshedpur, where excellence meets innovation. With expert faculty and accomplished alumni, we foster cutting-edge research and transformative education."
            </p>
          </blockquote>
          <div class="flex items-center divide-x-2 divide-gray-700 mt-10">
                          <div class="pr-3 text-white bg-blue-400 dark:bg-blue-500  font-medium rounded-full text-sm px-5 py-2.5 text-center">PROF. RAJ BALLAV</div>
                          <div class="pl-3 text-sm font-light text-gray-400">Head Of Department</div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-gray-900">
      <div class="flex flex-col-reverse md:flex-row justify-between items-center py-8 px-4 mx-auto max-w-screen-xl gap-8 lg:gap-16 lg:px-6">
        <div class="mt-4 md:mt-0 text-center md:text-left">
          <blockquote>
            <p class="text-lg md:text-xl font-medium text-white leading-relaxed">
              "Join the Society of Production and Industrial Engineering at NIT Jamshedpur to gain skills, industry exposure, and a vibrant community. Engage in events, competitions, and activities from B.Tech to Ph.D. levels for a transformative experience."
            </p>
          </blockquote>
          <div class="flex items-center divide-x-2 divide-gray-700 mt-10">
                          <div class="pr-3 text-white bg-blue-400 dark:bg-blue-500  font-medium rounded-full text-sm px-5 py-2.5 text-center">DR.SHUBHAM TRIPATHI</div>
                          <div class="pl-3 text-sm font-light text-gray-400">Vice Chairman</div>
          </div>
        </div>
        <div className="relative border  border-white/[0.2]  p-4 w-full md:w-2/4 rounded-lg">
        {/* Plus sign at top-left corner */}
        <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
        {/* Plus sign at bottom-left corner */}
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
        {/* Plus sign at top-right corner */}
        <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
        {/* Plus sign at bottom-right corner */}
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />
        <img
            src="https://www.nitjsr.ac.in/backend/uploads/Faculty/PI114/profile/a1896d08-28aa-4bf2-844c-bf3631c50d6a.jpg"
            alt="Director's image"
          />
        </div>
        
      </div>
    </section>
  </div>
</div>

 

      <div>
        <section class=" bg-gray-800 ">
            <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div class="font-light  sm:text-lg text-gray-400 text-left">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold  text-white">The future belongs to those who innovates in manufacturing.</h2>
                    
                    <br/>
                    
                    <h2 class="mb-2 text-lg font-semibold  text-white">Vision</h2>
                    <p> To produce engineers and researchers with excellent technical knowledge, research acumen, leadership skills and ethical responsibility.</p>
                    <h2 class="mb-2 text-lg font-semibold text-white">Mission</h2>
                    <p>To educate B. Tech., M. Tech and Ph. D students with fundamental knowledge in concerned subjects, and to update them with the state-of-the-art in the field. To develop and maintain laboratories which cater to the needs of the students Quest for inter-disciplinary research. To promote academia-industry collaboration</p>

                    

                </div>
                <div class="grid grid-cols-1 gap-4 mt-8">
                    <img class="w-full rounded-lg" src="https://i.ibb.co/j3gcJPJ/DSC-0190.jpg" alt="office content 1"/>
                    {/* <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"/> */}
                </div>
            </div>
        </section>
      </div>

      <div className="mt-10">
        <h2 className="text-6xl font-extrabold text-white">Major Events</h2>
        <HomeEvents />
        <div className="md:ml-64 flex  text-center">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="bg-black  text-white flex items-center space-x-2"
              >
                <AceternityLogo />
                <span>Know More ...</span>
              </HoverBorderGradient>
            </div>
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

export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
