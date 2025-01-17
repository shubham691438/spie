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

  const iframeWrapper1Style = {
    filter: "invert(1)"
  };

  const iframeWrapper2Style = {
    filter: "hue-rotate(224.18deg) saturate(62.87%) brightness(108.04%)"
  };

  const loaderStyle = {
    width: "50px",
    height: "50px",
    border: "5px solid #f3f3f3",
    borderTop: "5px solid #3498db",
    borderRadius: "50%",
    animation: "spin 2s linear infinite"
  };

  const spinKeyframes = `@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }`;

  return (
    <>
      {/* Loader */}
      {isLoading ? (
        <div className="fixed inset-0 flex justify-center items-center bg-black text-white z-50">
          <div style={loaderStyle}></div>
        </div>
      ) : (
        <div className="flex flex-col bg-gray-900 text-white">
          {/* Header */}
          <header className="bg-gray-800 text-white p-4 shadow-md">
            <h1 className="text-center text-xl">PRODYOG REGISTRATION FORM</h1>
          </header>

          {/* Main Content (Iframe container) */}
          <main className="flex-1 bg-gray-900 p-4">
            <div style={iframeWrapper1Style}>
              <div style={iframeWrapper2Style}>
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
            </div>
          </main>

          {/* Footer */}
          <footer className="bg-gray-800 text-white p-4 shadow-md">
            <p className="text-center text-sm">© 2025 SPIE</p>
          </footer>
        </div>
      )}

      {/* Add the spin animation styles dynamically */}
      <style>{spinKeyframes}</style>
    </>
  );
};

export default Register;
