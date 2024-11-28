import React from "react";

const MemberCard = ({ member }) => {
  if (!member) {
    return (
      <div className="w-80 h-48 bg-gray-800 rounded-xl flex items-center justify-center shadow-2xl transition-transform duration-500 transform hover:scale-105">
        <p className="text-gray-400 text-center">Hover over a gear tooth to see member details</p>
      </div>
    );
  }

  return (
    <div className="w-80 h-60 bg-gradient-to-br from-purple-600 to-blue-500 text-white rounded-xl shadow-2xl p-6 transform hover:scale-105 transition-all duration-300">
      <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
      <p className="text-lg font-semibold text-gray-200 mb-2">{member.por}</p>
      <p className="text-sm text-gray-100">{member.contact}</p>
    </div>
  );
};

export default MemberCard;
