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
      {/* Loader */}
      {isLoading ? (
        <div className="fixed inset-0 flex justify-center items-center bg-black text-white z-50">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="flex flex-col bg-gray-900 text-white">
          {/* Header */}
          <header className="bg-gray-800 text-white p-4 shadow-md">
            <h1 className="text-center text-xl">PRODYOG REGISTRATION FORM</h1>
          </header>

          {/* Main Content (Iframe container) */}
          <main className="flex-1 bg-gray-900 p-4">
            <div>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScbEY-q6R71VkyCMUmR-dMTUVdf_fxYD1637Gv94pIqcucZWQ/viewform?embedded=true"
                width="100%"
                height="2283"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Prodyog Registration Form"
              >
                Loading…
              </iframe>
            </div>
          </main>

          {/* Footer */}
          <footer className="bg-gray-800 text-white p-4 shadow-md">
            <p className="text-center text-sm">© 2025 SPIE</p>
          </footer>
        </div>
      )}
    </>
  );
};

export default Register;
