import React, { useEffect, useRef } from 'react';
import "./Event.css"
import { Controller, Scene } from 'scrollmagic';
import 'scrollmagic/scrollmagic/minified/ScrollMagic.min.js';

const data = [
  { name: "Chain-Zenith", image: "https://www.projectmanager.com/wp-content/uploads/2019/06/190625_Blog_Feature_Change_Management.jpg" },
  { name: "Metal Masterpiece", image: "https://cncwmt.com/wp-content/uploads/2019/12/What-is-Lathe-machine-application.jpg" },
  { name: "Pratyush", image: "https://i.ytimg.com/vi/SeUJyE_ovcU/maxresdefault.jpg" },
  { name: "Machina Mystique", image: "https://www.datocms-assets.com/7756/1636549778-diag11.png?auto=format&w=1600" },
  { name: "DataHackon", image: "https://cdn.eventespresso.com/wp-content/uploads/2024/02/02193509/Blog-Banner-Event-Data-Analytics-1024x576.jpg" },
];

const Events = () => {
  const controllerRef = useRef(null);
  
  useEffect(() => {
    // Initialize ScrollMagic controller
    controllerRef.current = new Controller();

    // Set up ScrollMagic scenes dynamically for each event section
    data.forEach((event, index) => {
      new Scene({
        triggerElement: `#event-${index}`,
        triggerHook: 0.8, // When it reaches the middle of the viewport
        duration: document.querySelector(`#event-${index}`).offsetHeight*0.8, // Set duration to section height
      })
      .setClassToggle(`#event-${index}`, 'in-view') // Add 'in-view' class when scene is active
      .addIndicators({ name: `Event ${index}` }) // Debugging
      .addTo(controllerRef.current);
    });

    // Cleanup ScrollMagic controller on component unmount
    return () => {
      controllerRef.current.destroy();
    };
  }, []);

  return (
    <section className="events-page pt-80px w-full relative bg-gray-800">
      {data.map((event, index) => (
        <div
          key={index}
          id={`event-${index}`}
          className={`event-item relative w-full min-h-screen flex items-center justify-center`}
          style={{
            backgroundImage: `url(${event.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h1 className="text-red-900 text-center text-6xl font-bold">{event.name}</h1>
        </div>
      ))}
    </section>
  );
};

export default Events;
