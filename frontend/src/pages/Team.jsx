import React, { useState } from "react";
import Gear from "../components/Gear"
import MemberCard from "../components/MemberCard";

const members = [
  { id: 1, name: "Alice", batch: "2022", por: "President", contact: "alice@example.com" },
  { id: 2, name: "Bob", batch: "2023", por: "Vice President", contact: "bob@example.com" },
  { id: 3, name: "Charlie", batch: "2023", por: "Secretary", contact: "charlie@example.com" },
  { id: 4, name: "Dave", batch: "2023", por: "Treasurer", contact: "dave@example.com" },
  { id: 5, name: "Dave", batch: "2022", por: "Treasurer", contact: "dave@example.com" },
  { id: 6, name: "Dave", batch: "2023", por: "Treasurer", contact: "dave@example.com" },
  { id: 8, name: "Dave", batch: "2023", por: "Treasurer", contact: "dave@example.com" },
  { id: 9, name: "Dave", batch: "2023", por: "Treasurer", contact: "dave@example.com" },
  { id: 10, name: "Dave", batch: "2023", por: "Treasurer", contact: "dave@example.com" },
];

const Team = () => {
  const [selectedBatch, setSelectedBatch] = useState("all");
  const [hoveredMember, setHoveredMember] = useState(null);

  const filteredMembers =
    selectedBatch === "all"
      ? members
      : members.filter((member) => member.batch === selectedBatch);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center py-10 dark:bg-white dark:text-black">
      {/* Header */}
      <h1 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-12">
        Meet Our Team
      </h1>

      {/* Dropdown */}
      <div className="mb-10">
        <label
          htmlFor="batch"
          className="text-xl font-medium text-gray-300 mr-4"
        >
          Filter by Batch:
        </label>
        <select
          id="batch"
          className="bg-gray-800 border border-gray-600 rounded-md text-white px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500 transition-shadow"
          onChange={(e) => setSelectedBatch(e.target.value)}
        >
          <option value="all">All</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>

      {/* Gear and Member Card */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        <Gear members={filteredMembers} onHover={setHoveredMember} />
        <MemberCard member={hoveredMember} />
      </div>
    </div>
  );
};

export default Team;