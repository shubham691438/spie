import React from 'react';
import { Link } from "react-router-dom";
const ComingSoon = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">Coming Soon</h1>
        <p className="text-xl mb-8">We are working hard to bring something amazing. Stay tuned!</p>
        <div className="flex justify-center space-x-4">
          <button
            className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-1055"
          >
           <Link to="/">Back to Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
