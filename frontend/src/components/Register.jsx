import React, { useState, useEffect } from "react";

const Register = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate page load completion
    const handlePageLoad = () => setIsLoading(false);

    // Simulated delay for loader
    setTimeout(() => {
      handlePageLoad();
    }, 2000);

    return () => window.removeEventListener("load", handlePageLoad);
  }, []);

  return (
    <>
      {isLoading ? (
        // Loader component
        <div className="fixed inset-0 flex justify-center items-center bg-black text-white">
          <div className="loader"></div>
        </div>
      ) : (
        // Your main application
        <div className="w-full h-screen flex justify-center items-center bg-gray-100">
          <div className="shadow-lg rounded-md overflow-hidden w-full max-w-4xl">
            {/* Google Form Embed */}
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScbEY-q6R71VkyCMUmR-dMTUVdf_fxYD1637Gv94pIqcucZWQ/viewform?embedded=true"
              width="640"
              height="2283"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Google Form"
              className="w-full"
            >
              Loading…
            </iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
