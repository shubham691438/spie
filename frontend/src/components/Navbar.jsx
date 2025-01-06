import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  
  const [menuOpen, setMenu] = useState(false);
  const menuref = useRef(null);
  
  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };

  useEffect(() => {
    const handleclickOutside = (event) => {
      if (menuref.current && !menuref.current.contains(event.target)) {
        setMenu(false);
      }
    };
    document.addEventListener('mousedown', handleclickOutside);
  
    return () => {
      document.removeEventListener('mousedown', handleclickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-900  text-white   p-2 flex items-center justify-between relative">
      
      <div className="text-2xl font-bold"><img src="https://i.postimg.cc/QxMBprrW/logo.png" class="mr-3 h-28 bg-blue" alt="FlowBite Logo" /></div>

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
        
      </div>

      {/* Action Buttons */}
      <div className="hidden lg:flex items-center gap-2">
       

        {/* Sign In Button Connected to Register Page */}
        <Link to="/register">
          <button className="bg-blue-600 px-4 py-2 rounded-md text-white hover:bg-blue-800">
            Register
          </button>
        </Link>
      </div>
        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden block text-white"
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
      

      {/* Mobile Menu */}
      {menuOpen && (
        <div ref={menuref} className="absolute top-16 left-0 w-full   bg-customGray text-white p-4 lg:hidden z-10">
          <div>
            <Link to="/" className="block hover:underline mb-2" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/events" className="block hover:underline mb-2" onClick={toggleMenu}>
              Events
            </Link>
            <Link to="/team" className="block hover:underline mb-2" onClick={toggleMenu}>
              Team
            </Link>
            <Link to="/about" className="block hover:underline mb-2" onClick={toggleMenu}>
              About
            </Link>
            <Link to="/blog" className="block hover:underline mb-2" onClick={toggleMenu}>
              Blog
            </Link>
            <Link to="/gallery" className="block hover:underline mb-2" onClick={toggleMenu}>
              Gallery
            </Link>
            <Link to="/student-activity" className="block hover:underline mb-2" onClick={toggleMenu}>
              Student Activity
            </Link>
            <div className="items-center gap-2">
       

        {/* Sign In Button Connected to Register Page */}
        <Link to="/register">
          <button className="bg-blue-600 px-4 py-2 rounded-md text-white hover:bg-blue-800" onClick={toggleMenu}>
            Register
          </button>
        </Link>
      </div>
            {/* <Link to="/register" className="block hover:underline mb-2">
              Register
            </Link> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
