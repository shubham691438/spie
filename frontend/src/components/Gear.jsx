import { useState } from "react";

const Gear = ({ members, onHover }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="relative">
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
          
          const angle = (2 * Math.PI / members.length) * index;
          const baseRadius = 35;
          const hoverOffset = hoveredIndex === index ? 3 : 0;

          const effectiveRadius = baseRadius + hoverOffset;
          const x = 50 + effectiveRadius * Math.cos(angle); 
          const y = 50 + effectiveRadius * Math.sin(angle); 
         
          const fillColor = index % 2 === 0 ? "#1E3A8A" : "#60A5FA";

          return (
            <circle
              key={member.id}
              cx={x}
              cy={y}
              r="6"
              fill={hoveredIndex === index ? "#FBBF24" : fillColor} 
              className="cursor-pointer hover:scale-100 transition-all duration-800 shadow-lg"
              onMouseEnter={() => {
                setHoveredIndex(index);
                onHover(member);
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
                onHover(null);
              }}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default Gear;