import React, { useEffect, useRef } from "react";
import "../styles/Event.css"; // Make sure this is where your custom theme-related styles are
import { Controller, Scene } from "scrollmagic";
import { Link } from "react-router-dom"; // Import Link for routing
import "scrollmagic/scrollmagic/minified/ScrollMagic.min.js";

const data = [
  {
    name: "DataHackon",
    des: "This event is dedicated to building the basics of data analytics and data science, which is a growing field in the industry. You will use your excel and data analysis skills including data aggregation, data mining and data visualization skills to solve the problem statement.",
    image:"../datahackon.jpg",
    route: "/datahackon", // Add a specific route for DataHackon
  },
  {
    name: "Chain-Zenith",
    des: "It is a Supply-chain case study competition for students interested in logistics, operations, and consultancy. Participants will tackle real-world challenges under time pressure, simulating industry dynamics. It’s valuable opportunity to develop problem-solving, decision-making skills while gaining insight into supply chain.",
    image:"../chainzenith.jpg",
    route: "/chainzenith",
  },
  {
    name: "Metal Masterpiece",
    des: "It is an exciting competition that brings together students with a passion for machining, design and precision craftsmanship. Participants will be provided a metal workpiece , and the design will be given. The participants will have to design the workpiece as per the design using lathe machine.",
    image:"../IMG-16.jpg",
    route: "/metalmasterpiece",
  },
  {
    name: "Talkathon",
    des: "Talkathon, an individual participation competition where participants showcase their conversational skills in various forms of speaking. The event combines multiple soft skills challenges under one roof, testing participants’ wit and confidence on general topics.",
    image:"../talkathon.jpg",
    route: "/talkathon",
  },
  {
    name: "Machina Mystique",
    des: "The objective of Machina Mystique is to assess participants’ mechanical reasoning skills through a series of quiz questions designed to challenge their understanding of mechanical principles, problem-solving abilities, and logical reasoning.",
    image:"../machinamystique.jpg",
    route: "/machinamystique",
  },
  {
    name: "Mini Shark Tank",
    des: "Welcome	to	the	deep	end	of	innovation! Get	ready	to	dive	into	a	frenzy	of	entrepreneurial	brilliance	as	we	unleash the	jaws	of	creativity	in	our	very	own	Mini	Shark	Tank	event.	Brace yourselves	for	a	feeding	frenzy	of	pitches	that	are	sure	to	make	waves	in the	business	world",
    image:"../minishark.jpg",
    route: "/minisharktank",
  },
  {
    name: "Singing",
    des: "The objective of Machina Mystique is to assess participants’ mechanical reasoning skills through a series of quiz questions designed to challenge their understanding of mechanical principles, problem-solving abilities, and logical reasoning.",
    image:"../IMG-10.jpg",
    route: "/singing",
  },
  {
    name: "Dancing",
    des: "The objective of Machina Mystique is to assess participants’ mechanical reasoning skills through a series of quiz questions designed to challenge their understanding of mechanical principles, problem-solving abilities, and logical reasoning.",
    image:"../dance.jpg",
    route: "/dancing",
  },
  {
    name: "Stand-ups",
    des: "The objective of Machina Mystique is to assess participants’ mechanical reasoning skills through a series of quiz questions designed to challenge their understanding of mechanical principles, problem-solving abilities, and logical reasoning.",
    image:"../standup.jpg",
    route: "/standup",
  }
];

const Events = () => {
  const controllerRef = useRef(null);

  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Initialize ScrollMagic controller
    controllerRef.current = new Controller();

    // Set up ScrollMagic scenes dynamically for each event section
    data.forEach((event, index) => {
      new Scene({
        triggerElement: `#event-${index}`,
        triggerHook: 0.9, // When it reaches the middle of the viewport
        duration: document.querySelector(`#event-${index}`).offsetHeight * 1.2, // Set duration to section height
      })
        .setClassToggle(`#event-${index}`, "in-view") // Add 'in-view' class when scene is active
        .addIndicators({ name: `Event ${index}` }) // Debugging
        .addTo(controllerRef.current);
    });

    // Cleanup ScrollMagic controller on component unmount
    return () => {
      controllerRef.current.destroy();
    };
  }, []);

  return (
    <section className="events-page pt-20 pb-20 w-full relative bg-gradient-to-r from-gray-800 to-gray-900 grid justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20  w-full max-w-5xl">
        {data.map((event, index) => (
          <div
            key={index}
            id={`event-${index}`}
            className="event-item relative w-80 lg:w-96 min-h-screen flex items-center bg-cover bg-center transition-all duration-1000 ease-in-out transform hover:scale-105"
            style={{
              backgroundColor: `gray-400`,
            }}
          >
            <div className="max-w-sm p-6 border rounded-lg shadow bg-gray-800 border-gray-300 h-auto min-h-[400px]">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                {event.name}
              </h5>
              <p className="mb-3 font-normal text-white">{event.des}</p>
              <img
                src={event.image || "https://via.placeholder.com/150"}
                alt={`${event.name} Image`}
                className="rounded-lg mb-4 w-full h-40 object-cover"
              />
              <Link
                to={event.route || "#"} // Use the route if available
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              >
                Know more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
