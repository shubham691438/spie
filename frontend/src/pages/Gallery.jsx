import LightGallery from 'lightgallery/react';
import "./Gallery.css"
import { useState, useEffect } from 'react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';


// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';
import { div } from 'framer-motion/client';
import { TracingBeam } from '../components/ui/tracing-beam';

const images = [
    { src: "/IMG-1.jpg", alt: "1" },
    { src: "/IMG-2.jpg", alt: "2" },
    { src: "/IMG-3.jpg", alt: "3" },
    { src: "/IMG-4.jpg", alt: "4", },
    { src: "/IMG-5.jpg", alt: "5", },
    { src: "/IMG-6.jpg", alt: "6", },
    { src: "/IMG-7.jpg", alt: "7", },
    { src: "/IMG-8.jpg", alt: "8", },
    { src: "/IMG-9.jpg", alt: "9", },
    { src: "/IMG-10.jpg", alt: "10", },
    { src: "/IMG-11.jpg", alt: "11", },
    { src: "/IMG-12.jpg", alt: "12", },
    { src: "/IMG-13.jpg", alt: "13", },
    { src: "/IMG-14.jpg", alt: "14", },
    { src: "/IMG-15.jpg", alt: "15", },
    { src: "/IMG-16.jpg", alt: "16", },
    { src: "/IMG-17.jpg", alt: "17", },
    { src: "/IMG-18.jpg", alt: "18", },
    { src: "/IMG-19.jpg", alt: "19", },
    { src: "/IMG-20.jpg", alt: "20", },
    { src: "/IMG-21.jpg", alt: "21", },
    { src: "/IMG-22.jpg", alt: "22", },
    { src: "/IMG-23.jpg", alt: "23", },
    { src: "/IMG-24.jpg", alt: "24", },
]

export function Gallery() {
    const [isLoading, setIsLoading] = useState(true);
      useEffect(() => {
        // Simulate page load completion
        const handlePageLoad = () => setIsLoading(false);
    
        // Use window.onload to detect when the page is fully loaded
        // if (document.readyState === "complete" ) {
        //   handlePageLoad();
        // } else {
        //   window.addEventListener("load", handlePageLoad);
        // }
    
        setTimeout(() => {
          handlePageLoad();
        }, 2000);
    
        // Cleanup event listener
        return () => window.removeEventListener("load", handlePageLoad);
      }, []);

  const onInit = () => {
    console.log('lightGallery has been initialized');
  };
  return (
    <>
      {isLoading ? (
        // Loader component
        <div className="fixed inset-0 flex justify-center items-center bg-black text-white">
          {/* <div className="loader">Loading...</div> */}
          <div class="loader"></div>
        </div>
      ) : (
        // Your main application
        <TracingBeam>
            <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center py-10 px-4 sm:px-6 md:px-10 dark:bg-white dark:text-black">
            <div className="App">
            {/* Heading Section */}
            <div className="mb-12 w-full text-center">
                    <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-12">
                        WELCOME TO OUR GALLERY
                    </h1>
                </div>
        </div>
                <LightGallery
                    onInit={onInit}
                    speed={500}
                    plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
                >

                    {images.map((image, index) => {
                        return (
                            <a href={image.src} key={index}>
                                <img alt={image.alt} src={image.src} />
                            </a>
                        )
                    })}


                </LightGallery>
            </div>
        </TracingBeam>
      )}
    </>
    
    );
}

export default Gallery;