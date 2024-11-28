import React from "react";

const Gear = ({ members, onHover }) => {
  return (
    <div className="relative">
      {/* Animated Gear */}
      <svg
        width="300"
        height="300"
        viewBox="0 0 100 100"
        className="animate-spin-slow"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="8"
        />
        {members.map((member, index) => {
          const angle = (360 / members.length) * index;
          const x = 50 + 35 * Math.cos((angle * Math.PI) / 180);
          const y = 50 + 35 * Math.sin((angle * Math.PI) / 180);

          return (
            <circle
              key={member.id}
              cx={x}
              cy={y}
              r="6"
              fill="#60A5FA"
              className="cursor-pointer hover:fill-yellow-400 hover:scale-110 transition-all duration-300 shadow-lg"
              onMouseEnter={() => onHover(member)}
              onMouseLeave={() => onHover(null)}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default Gear;
