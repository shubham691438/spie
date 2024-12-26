import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDark, setDark] = useState(true); // Default is dark mode
  const [isMenu, setMenu] = useState(false);

  const toggleDarkMode = () => {
    setDark((prev) => !prev);
  };

  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };

  useEffect(() => {
    if (!isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <nav className="bg-gray-900  text-white dark:bg-white dark:text-black p-2 flex items-center justify-between relative">
      
      <div className="text-2xl font-bold">SPIE-NITJSR</div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/events" className="hover:underline">
          Events
        </Link>
        <Link to="/team" className="hover:underline">
          Team
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link>
        <Link to="/blog" className="hover:underline">
          Blog
        </Link>
        <Link to="/gallery" className="hover:underline">
          Gallery
        </Link>
        <Link to="/student-activity" className="hover:underline">
          Student Activity
        </Link>
        <Link to="/register" className="hover:underline">
          Register
        </Link>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2">
        {/* Dark/Light Mode Button */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-700 dark:bg-gray-300 text-white dark:text-black hover:bg-gray-600 dark:hover:bg-gray-400"
        >
          {isDark ? (
            // New Half-Moon Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-moon"
            >
              <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
            </svg>
          ) : (
            // Sun Icon for Light Mode
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1m0 16v1m8.485-7.485h-1M4.515 12h-1m15.364-5.657l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z"
              />
            </svg>
          )}
        </button>

        {/* Sign In Button */}
        <button className="bg-blue-600 px-4 py-2 rounded-md text-white hover:bg-blue-800">
          Sign In
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden block text-white dark:text-black"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenu && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 text-white dark:bg-white dark:text-black p-4 lg:hidden z-10">
          <div>
            <Link to="/" className="block hover:underline mb-2">
              Home
            </Link>
            <Link to="/events" className="block hover:underline mb-2">
              Events
            </Link>
            <Link to="/team" className="block hover:underline mb-2">
              Team
            </Link>
            <Link to="/about" className="block hover:underline mb-2">
              About
            </Link>
            <Link to="/blog" className="block hover:underline mb-2">
              Blog
            </Link>
            <Link to="/gallery" className="block hover:underline mb-2">
              Gallery
            </Link>
            <Link to="/student-activity" className="block hover:underline mb-2">
              Student Activity
            </Link>
            <Link to="/register" className="block hover:underline mb-2">
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
