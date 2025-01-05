import React from "react";

const MemberCard = ({ member, isLarge = false }) => {
  if (!member) {
    return (
      <div className="w-80 h-48 bg-gray-800 rounded-xl flex items-center justify-center shadow-2xl transition-transform duration-500 transform hover:scale-105">
        <p className="text-gray-400 text-center">
          Hover over a gear tooth to see member details
        </p>
      </div>
    );
  }

  return (
    <div
      className={`${
        isLarge ? "w-96 h-72" : "w-80 h-60"
      } bg-gradient-to-br from-purple-600 to-blue-500 text-white rounded-xl shadow-2xl p-6 flex flex-col items-center justify-between transform hover:scale-105 transition-all duration-300`}
    >
     
      <div className="leading-tight">
      <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
      <p className="text-lg font-semibold text-gray-200 mb-2">{member.por}</p>
      <p className="text-lg font-semibold text-gray-200 mb-2">{member.batch}</p>
      <p className="text-sm text-gray-100">{member.contact}</p>
      </div>
      
    </div>
  );
};

export default MemberCard;
