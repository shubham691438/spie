import React, { useState } from "react";
import Gear from "../components/Gear"
import MemberCard from "../components/MemberCard";

const members = [
  { id: 1, name: "Shresth", batch: "2022", por: "CA", contact: "" },
  { id: 2, name: "Vedha", batch: "2022", por: "CA", contact: "" },
  { id: 3, name: "Ashish", batch: "2022", por: "CA", contact: "" },
  { id: 4, name: "Srinjoy", batch: "2022", por: "CA", contact: "" },
  { id: 5, name: "Shreya", batch: "2022", por: "Creative", contact: "" },
  { id: 6, name: "Sumani", batch: "2022", por: "Creative", contact: "" },
  { id: 7, name: "Ankit", batch: "2022", por: "Creative", contact: "" },
  { id: 8, name: "Janani", batch: "2022", por: "Creative", contact: "" },
  { id: 9, name: "Seema", batch: "2022", por: "Creative", contact: "" },
  { id: 10, name: "Prasanna", batch: "2022", por: "Creative", contact: "" },
  { id: 11, name: "Chandan", batch: "2022", por: "Creative", contact: "" },
  { id: 12, name: "Aditya Raj", batch: "2022", por: "Creative", contact: "" },
  { id: 13, name: "Kaveri", batch: "2022", por: "Creative", contact: "" },
  { id: 14, name: "Roshan", batch: "2022", por: "Creative", contact: "" },
  { id: 15, name: "Arnav", batch: "2022", por: "Web Team", contact: "" },
  { id: 16, name: "Pranjal", batch: "2022", por: "Web Team", contact: "" },
  { id: 17, name: "Raj Lucky", batch: "2022", por: "Web Team", contact: "" },
  { id: 18, name: "Krishna Kant", batch: "2022", por: "Web Team", contact: "" },
  { id: 19, name: "Vikash", batch: "2022", por: "Web Team", contact: "" },
  { id: 20, name: "Abhishek", batch: "2023", por: "Creative", contact: "" },
  { id: 21, name: "Amit", batch: "2023", por: "Creative", contact: "" },
  { id: 22, name: "Bhavya Jain", batch: "2023", por: "Creative", contact: "" },
  { id: 23, name: "Chanchal", batch: "2023", por: "Creative", contact: "" },
  { id: 24, name: "Sandeep", batch: "2023", por: "Creative", contact: "" },
  { id: 25, name: "Swetha", batch: "2023", por: "PR", contact: "" },
  { id: 26, name: "Meghana", batch: "2023", por: "PR", contact: "" },
  { id: 27, name: "Rohit Jauhar", batch: "2023", por: "PR", contact: "" },
  { id: 28, name: "Shreya Pathak", batch: "2023", por: "PR", contact: "" },
  { id: 29, name: "Utsav Jaiswal", batch: "2023", por: "PR", contact: "" },
  { id: 30, name: "Sonam Gupta", batch: "2023", por: "PR", contact: "" },
  { id: 31, name: "Vivek Kumar", batch: "2023", por: "PR", contact: "" },
  { id: 32, name: "Ansika", batch: "2023", por: "PR", contact: "" },
  { id: 33, name: "Subham", batch: "2023", por: "PR", contact: "" },
  { id: 34, name: "Saksham", batch: "2023", por: "PR", contact: "" },
  { id: 35, name: "Rani", batch: "2023", por: "PR", contact: "" },
  { id: 36, name: "Ritu", batch: "2023", por: "PR", contact: "" },
  { id: 37, name: "Ashutosh", batch: "2023", por: "PR", contact: "" },
  { id: 38, name: "Prashanta", batch: "2023", por: "PR", contact: "" },
  { id: 39, name: "Sunil", batch: "2023", por: "PR", contact: "" },
  { id: 40, name: "Sweety", batch: "2023", por: "PR", contact: "" },
  { id: 41, name: "Animesh", batch: "2023", por: "Web Team", contact: "" },
  { id: 42, name: "Jadav Chandan", batch: "2023", por: "Web Team", contact: "" },
  { id: 43, name: "Mohith", batch: "2023", por: "Web Team", contact: "" },
  { id: 44, name: "Sovik", batch: "2023", por: "PR", contact: "" },
  { id: 45, name: "Vishal", batch: "2023", por: "PR", contact: "" },
  { id: 46, name: "Tabish", batch: "2023", por: "PR", contact: "" },
  { id: 47, name: "Saransh", batch: "2023", por: "PR", contact: "" },
  { id: 48, name: "Sushant", batch: "2023", por: "PR", contact: "" }
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