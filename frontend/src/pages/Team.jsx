import React, { useState } from "react";
import Gear from "../components/Gear";
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
  { id: 41, name: "Animesh", batch: "2023", por: "CREATIVE", contact: "" },
  { id: 42, name: "Jadav Chandan", batch: "2023", por: "CREATIVE", contact: "" },
  { id: 43, name: "Mohit", batch: "2023", por: "Web Team", contact: "" },
  { id: 44, name: "Sovik", batch: "2023", por: "WEB TEAM", contact: "" },
  { id: 45, name: "Vishal", batch: "2023", por: "WEB TEAM", contact: "" },
  { id: 46, name: "Tabish", batch: "2023", por: "PR", contact: "" },
  { id: 47, name: "Saransh", batch: "2023", por: "PR", contact: "" },
  { id: 48, name: "Sushant", batch: "2023", por: "PR", contact: "" },
  {id: 49, name: "Priya sharma", batch: "2021", por: "PRESIDENT", contact:""},
  {id: 50, name: "Shanmukh", batch: "2021", por: "GENRAL SECRETARY", contact:""},
  {id: 51, name: "Atharva pratap singh", batch: "2022", por: "VICE PRESIDENT", contact:""},
  {id: 52, name: "Krishna gupta", batch: "2021", por: "TREASURER", contact:""},
  {id: 53, name: "ABHISHEK BHOUTKAR", batch: "2022", por: "VICE PRESIDENT", contact:""},
  {id: 54, name: "Shubham", batch: "2021", por: "CA HEAD", contact:""},
  {id: 55, name: "Rajni singh", batch: "2021", por: "MANAGER", contact:""},
  {id: 56, name: "Pratham kr", batch: "2021", por: "P&D HEAD", contact:""},
  {id: 57, name: "Ishika raj", batch: "2021", por: "P&D HEAD", contact:""},
  {id: 58, name: "Kishan kr", batch: "2021", por: "MANAGER", contact:""},
  {id: 59, name: "Prasanna", batch: "2022", por: "JOINT SECRETARY", contact:""},
  {id: 60, name: "Sarthak", batch: "2021", por: "PR HEAD", contact:""},
  {id: 61, name: "Shubham singh", batch: "2021", por: "WEB HEAD", contact:""},
  {id: 62, name: "Abhishek kr", batch: "2021", por: "CREATIVE HEAD", contact:""},
  {id: 63, name: "Kajal kumari", batch: "2021", por: "CREATIVE HEAD", contact:""},
  {id: 64, name: "Riya keshri", batch: "2021", por: "CULTURAL SECRETARY", contact:""},
  {id: 65, name: "Siddhart kr", batch: "2021", por: "PR HEAD", contact:""},
];

const topCards = ({ member }) => (
  <div
    className="bg-gradient-to-r from-purple-400 to-blue-400 text-white p-6 rounded-lg shadow-md w-72 text-center hover:scale-105 transition-transform"
  >
    <h2 className="text-2xl font-bold">{member.name}</h2>
    <p className="text-lg">{member.por}</p>
    <p className="text-sm">Batch: {member.batch}</p>
  </div>
);

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [selectedBatch, setSelectedBatch] = useState("all");
  const [selectedPor, setSelectedPor] = useState("all");

  const porOptions = ["all", ...new Set(members.map((member) => member.por.toUpperCase()))];

  const filteredMembers = members.filter((member) => {
    return (
      (selectedBatch === "all" || member.batch === selectedBatch) &&
      (selectedPor === "all" || member.por.toUpperCase() === selectedPor)
    );
  });

  const filt = filteredMembers.filter((member) => member.batch === "2021");

  const gearMembers = filteredMembers.filter((member) => member.batch !== "2021");

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center py-10 dark:bg-white dark:text-black">
      <h1 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-12">
        Meet Our Team
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
        <div>
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
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="por"
            className="text-xl font-medium text-gray-300 mr-4"
          >
            Filter by PoR:
          </label>
          <select
            id="por"
            className="bg-gray-800 border border-gray-600 rounded-md text-white px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500 transition-shadow"
            onChange={(e) => setSelectedPor(e.target.value)}
          >
            {porOptions
    .filter((por) => por !== "PRESIDENT" && por !== "GENERAL SECRETARY")
    .map((por) => (
      <option key={por} value={por}>
        {por}
      </option>
    ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
  <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-6">
    {filt
      .filter(
        (member) =>
          member.por === "PRESIDENT" || member.por === "GENERAL SECRETARY"
      )
      .map((member) => (
        <div
          key={member.id}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg p-4 flex flex-col items-center"
        >
          <div className="w-24 h-24 bg-white rounded-full overflow-hidden mb-4">
            <img
              src={member.photo || ""}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-lg font-bold">{member.name}</h3>
          <p className="text-sm">{member.por}</p>
          <p className="text-xs">Batch: {member.batch}</p>
        </div>
      ))}
  </div>

  {/*  Remaining 3 cards */ }
  {filt
    .filter(
      (member) =>
        member.por !== "PRESIDENT" && member.por !== "GENERAL SECRETARY"
    )
    .map((member) => (
      <div
        key={member.id}
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg p-4 flex flex-col items-center"
      >
        {/* Photo Section */}
        <div className="w-24 h-24 bg-white rounded-full overflow-hidden mb-4">
          <img
            src={member.photo || ""}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Member Details */}
        <h3 className="text-lg font-bold">{member.name}</h3>
        <p className="text-sm">{member.por}</p>
        <p className="text-xs">Batch: {member.batch}</p>
      </div>
    ))}
</div>



      {/* Gear and Member Card */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        <Gear members={gearMembers} onHover={setHoveredMember} />
        <MemberCard member={hoveredMember} />
      </div>
    </div>
  );
};

export default Team;
