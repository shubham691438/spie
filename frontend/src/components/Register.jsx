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
          <div className="loader"></div>
        </div>
      ) : (
        <div className="flex flex-col">
          {/* Header */}
          <header className="w-full bg-blue-600 text-white p-4 shadow-md">
            <h1 className="text-center text-xl">My Application Header</h1>
          </header>

          {/* Main Content (Iframe container) */}
          <main className="flex-1 overflow-auto bg-gray-100 p-4">
            <div className="shadow-lg rounded-md overflow-hidden max-w-4xl mx-auto">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScbEY-q6R71VkyCMUmR-dMTUVdf_fxYD1637Gv94pIqcucZWQ/viewform?embedded=true"
                width="100%"
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
          </main>

          {/* Footer */}
          <footer className="w-full bg-gray-800 text-white p-4 shadow-md">
            <p className="text-center text-sm">© 2025 My Application</p>
          </footer>
        </div>
      )}
    </>
  );
};

export default Register;
