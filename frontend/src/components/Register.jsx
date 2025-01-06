import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormfacadeEmbed from "@formfacade/embed-react";
import  QRcode  from '../assets/img/QR.jpg'

const Register = () => {
  
  
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
        <div  >
          
          <FormfacadeEmbed

          formFacadeURL="https://formfacade.com/include/107273075676913643495/form/1FAIpQLScbEY-q6R71VkyCMUmR-dMTUVdf_fxYD1637Gv94pIqcucZWQ/classic.js/?div=ff-compose"

          onSubmitForm={() =>alert('Form submitted')}

          />

          
        
        </div>
      )}
    </>
    
  );
};

export default Register;
