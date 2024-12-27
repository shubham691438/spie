import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center py-10 px-4 sm:px-6 md:px-10 dark:bg-white dark:text-black">
      {/* Header */}
      <div className="mb-12 w-full text-center">
        <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-12">
          ABOUT US
        </h1>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col gap-6 max-w-7xl w-full">
        {/* SPIE Card */}
        <div className="bg-gradient-to-b from-gray-700/80 to-gray-600/80 text-white p-6 rounded-lg w-full transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
          <h2 className="text-2xl font-bold bg-gradient-to-b from-gray-900 to-gray-800 mb-4">
            SPIE
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
          <p className="text-base sm:text-lg leading-relaxed mt-4">
            Time to time, curricula/syllabus is upgraded as per the market and
            technology requirement. The department has also proposed to start a
            new PG course in Production Management, which will cater to the
            current industrial need.
          </p>
        </div>

        {/* PRODYOG Card */}
        <div className="bg-gradient-to-b from-gray-700/80 to-gray-600/80 text-white p-6 rounded-lg w-full transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
          <h2 className="text-2xl font-bold bg-gradient-to-b from-gray-900 to-gray-800 mb-4">
            PRODYOG
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
            The fest offers a plethora of activities ranging from technical
            workshops and innovative competitions to enlightening guest lectures
            by esteemed professionals. Prodyog is a platform where creativity
            meets technology, enabling participants to push the boundaries of
            innovation and problem-solving.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mt-4">
            In Previous Year we have featured exciting events such as
            Chain-Zenith, Metal Masterpiece, Pratyush, Machina Mystique,
            DataHackon, Talkathon, Mini Shark Tank, CyberRush, as well as fun
            events and a vibrant cultural night. Prodyog is a platform where
            creativity meets technology, enabling participants to push the
            boundaries of innovation and problem-solving.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
