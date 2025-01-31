import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gear1 from "../assets/img/gear1.png";
import gear2 from "../assets/img/gear2.png";
import gear3 from "../assets/img/gear3.png";
import { useNavigate } from "react-router-dom";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { HomeEvents } from "../components/HomeEvents";
import Placement from "../components/Placement";
import { TracingBeam } from "../components/ui/tracing-beam";
import HeroSection from "../components/HeroSection";
import { Link } from "react-router-dom";
import HodImage from '../assets/img/hod-image.png'
import VCImage from '../assets/img/vice-chairman-image.png'
import TeamImage from '../assets/img/team-image.jpg'

const App = () => {
 const handleDownload = () => {
      const fileUrl = '../public/brochure.pdf'; // Adjust the path as per your directory structure
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = 'PROGYOG25 BROCHURE.pdf';  // You can set a custom name for the downloaded file
      link.click(); }

  return (
    <div>
    <HeroSection />
    <TracingBeam>

      {/* Message from Hod and Vice Chairman */}
      <div>
        <div>
          {/* Section 1 */}
          <section className="bg-gray-900 mx-2">
            <div className="flex flex-col md:flex-row justify-between items-center py-8 px-4 mx-auto max-w-screen-xl gap-8 lg:gap-16 lg:px-6">
              {/* Image Container */}
              <div className="relative border border-white/[0.2] p-4 w-full md:w-2/4 rounded-lg">
                <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
                <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
                <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
                <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />
                <img
                  className="object-cover rounded-md w-full h-auto"
                  src={HodImage}
                  alt="Director's image"
                />
              </div>

              {/* Text Content */}
              <div className="mt-4 md:mt-0 text-center md:text-left">
                <blockquote>
                  <p className="text-lg md:text-xl font-medium text-white leading-relaxed">
                    "Welcome to the Society of Production and Industrial Engineering, NIT Jamshedpur, where excellence meets innovation. With expert faculty and accomplished alumni, we foster cutting-edge research and transformative education."
                  </p>
                </blockquote>
                <div className="flex items-center divide-x-2 divide-gray-700 mt-10">
                  <div className="pr-3 text-white bg-blue-400 dark:bg-blue-500 font-medium rounded-full text-sm px-5 py-2.5 text-center">
                    PROF. RAJ BALLAV
                  </div>
                  <div className="pl-3 text-sm font-light text-gray-400">
                    Head Of Department
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-gray-900 mx-2">
            <div className="flex flex-col-reverse md:flex-row justify-between items-center py-8 px-4 mx-auto max-w-screen-xl gap-8 lg:gap-16 lg:px-6">
              {/* Text Content */}
              <div className="mt-4 md:mt-0 text-center md:text-left">
                <blockquote>
                  <p className="text-lg md:text-xl font-medium text-white leading-relaxed">
                    "Join the Society of Production and Industrial Engineering at NIT Jamshedpur to gain skills, industry exposure, and a vibrant community. Engage in events, competitions, and activities from B.Tech to Ph.D. levels for a transformative experience."
                  </p>
                </blockquote>
                <div className="flex items-center divide-x-2 divide-gray-700 mt-10">
                  <div className="pr-3 text-white bg-blue-400 dark:bg-blue-500 font-medium rounded-full text-sm px-5 py-2.5 text-center">
                    DR. SHUBHAM TRIPATHI
                  </div>
                  <div className="pl-3 text-sm font-light text-gray-400">
                    Vice Chairman
                  </div>
                </div>
              </div>

              {/* Image Container */}
              <div className="relative border border-white/[0.2] p-4 w-full md:w-2/4 rounded-lg">
                <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
                <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
                <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
                <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />
                <img
                  className="object-cover rounded-md w-full h-auto"
                  src={VCImage}
                  alt="Vice Chairman's image"
                />
              </div>
            </div>
          </section>
        </div>
      </div>


 
      {/* Vision And Mission Section */}
      <div>
        <section className="bg-gray-800 mx-4">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            {/* Text Content */}
            <div className="font-light sm:text-lg text-gray-400 text-left">
              <h2 className="mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold text-white">
                The future belongs to those who innovate in manufacturing.
              </h2>
              <br />
              <h2 className="mb-2 text-lg font-semibold text-white">Vision</h2>
              <p className="mb-6">
                To produce engineers and researchers with excellent technical knowledge, research acumen, leadership skills, and ethical responsibility.
              </p>
              <h2 className="mb-2 text-lg font-semibold text-white">Mission</h2>
              <p>
                To educate B. Tech., M. Tech., and Ph.D. students with fundamental knowledge in concerned subjects, and to update them with the state-of-the-art in
                the field. To develop and maintain laboratories that cater to the needs of the students' quest for inter-disciplinary research. To promote
                academia-industry collaboration.
              </p>
            </div>

            {/* Image Content */}
            <div className="grid grid-cols-1 gap-4 mt-8 lg:mt-0">
              <div className="relative">
                <img
                  className="w-full rounded-lg object-cover"
                  src={TeamImage}
                  alt="office content 1"
                />
              </div>
            </div>
          </div>
        </section>
      </div>


      {/* Major Events Section */}
      <div className="mt-10">
      <h2 className="text-6xl font-extrabold text-white"> PRODYOG 2025</h2>
      <p className="font-semibold text-white">Annual Technical Fest</p>
      <p className="font-semibold text-white">31 Jan - 2 Feb 2025</p>
      {/* <a href="public/PROGYOG'25%20BROCHURE.pdf" download> */}
    <button onClick={handleDownload} class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
      Download Brochure
    </button>
    <div className="flex justify-center ">
    {/* <img src="../public/prodyog.jpg" alt="Prodyog inaugural" className="rounded-lg shadow-lg" style={{ width: '1200px', height: '600px' }} ></img> */}
    <img src="../public/prodyog.jpg" alt="Prodyog inaugural" className="w-full sm:w-3/4 md:w-1/2 lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-150 rounded-lg shadow-lg" ></img>
  {/* </a> */}
  </div>
        <h4 className="text-4xl font-extrabold text-white mt-4">Major Events</h4>
        <HomeEvents />
        <div className="md:ml-48 flex justify-center md:justify-start text-center">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="bg-black  text-white flex items-center space-x-2"
              >
                <AceternityLogo />
                <Link to='/events'><span>Know More ...</span></Link>
              </HoverBorderGradient>
        </div>
      </div>

      <Placement />
    </TracingBeam>  
    </div>
  );
};

export default App;



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
