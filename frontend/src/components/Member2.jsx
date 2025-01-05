import React from "react";

const MemberCard = ({ member, isLarge = false }) => {
  
  return (
    <div
      className={`${
        isLarge ? "w-96 h-72" : "w-80 h-80"
      } bg-[#2e3a49] text-white rounded-xl shadow-2xl p-6 flex flex-col items-center justify-between transform hover:scale-105 transition-all duration-300`}
    >
      {/* Photo Section (Vertical Rectangle) */}
      <div className="w-24 h-50 bg-transparent overflow-hidden mb-4 shadow-md">
        <img
          src={member.src || ""}
          alt={member.name}
          className="w-full h-full object-cover"  // Portrait orientation
        />
      </div>
      {/* Member Details */}
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
