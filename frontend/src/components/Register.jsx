import React, { useState } from "react";

const Register = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Function to hide loader when the form loads
  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div style={styles.container}>
      {/* Loader */}
      {isLoading && (
        <div style={styles.loaderContainer}>
          <p style={styles.loaderText}>Loading...</p>
        </div>
      )}

      {/* Embedded Google Form using iframe */}
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScbEY-q6R71VkyCMUmR-dMTUVdf_fxYD1637Gv94pIqcucZWQ/viewform?embedded=true"
        style={styles.iframe}
        onLoad={handleLoad}
        title="Registration Form"
      />
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    backgroundColor: "#1A202C", // Dark background
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loaderContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    color: "#ffffff",
    fontSize: "16px",
  },
  loaderText: {
    color: "#ffffff",
    fontSize: "16px",
  },
  iframe: {
    width: "100%",
    height: "100%",
    border: "none",
  },
};

export default Register;
