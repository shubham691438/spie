import React, { useState } from "react";
import Gear from "../components/Gear";
import MemberCard from "../components/MemberCard";
import Member2 from "../components/Member2";

const members = [
  { id: 1, name: "Shresth", batch: "2022", por: "CA", contact: "", src: "/core-1.png", alt: "1" },
  { id: 2, name: "Vedha", batch: "2022", por: "CA", contact: "", src: "/core-2.png", alt: "2" },
  { id: 3, name: "Ashish", batch: "2022", por: "CA", contact: "", src: "/core-3.png", alt: "3" },
  { id: 4, name: "Srinjoy", batch: "2022", por: "CA", contact: "", src: "/core-4.png", alt: "4" },
  { id: 5, name: "Shreya", batch: "2022", por: "Creative", contact: "", src: "/core-5.png", alt: "5" },
  { id: 6, name: "Sumani", batch: "2022", por: "Creative", contact: "", src: "/core-6.png", alt: "6" },
  { id: 7, name: "Ankit", batch: "2022", por: "Creative", contact: "", src: "/core-7.png", alt: "7" },
  { id: 8, name: "Janani", batch: "2022", por: "Creative", contact: "", src: "/core-8.png", alt: "8" },
  { id: 9, name: "Seema", batch: "2022", por: "Creative", contact: "", src: "/core-9.png", alt: "9" },
  { id: 10, name: "Prasanna", batch: "2022", por: "Creative", contact: "", src: "/core-10.png", alt: "10" },
  { id: 11, name: "Chandan", batch: "2022", por: "Creative", contact: "", src: "/core-11.png", alt: "11" },
  { id: 12, name: "Aditya Raj", batch: "2022", por: "Creative", contact: "", src: "/core-12.png", alt: "12" },
  { id: 13, name: "Kaveri", batch: "2022", por: "Creative", contact: "", src: "/core-13.png", alt: "13" },
  { id: 14, name: "Roshan", batch: "2022", por: "Creative", contact: "", src: "/core-14.png", alt: "14" },
  { id: 15, name: "Arnav", batch: "2022", por: "Web Team", contact: "", src: "/core-15.png", alt: "15" },
  { id: 16, name: "Pranjal", batch: "2022", por: "Web Team", contact: "", src: "/core-16.png", alt: "16" },
  { id: 17, name: "Raj Lucky", batch: "2022", por: "Web Team", contact: "", src: "/core-17.png", alt: "17" },
  { id: 18, name: "Krishna Kant", batch: "2022", por: "Web Team", contact: "", src: "/core-18.png", alt: "18" },
  { id: 19, name: "Vikash", batch: "2022", por: "Web Team", contact: "", src: "/core-19.png", alt: "19" },
  { id: 20, name: "Abhishek", batch: "2023", por: "Creative", contact: "", src: "/core-20.png", alt: "20" },
  { id: 21, name: "Amit", batch: "2023", por: "Creative", contact: "", src: "/core-21.png", alt: "21" },
  { id: 22, name: "Bhavya Jain", batch: "2023", por: "Creative", contact: "", src: "/core-22.png", alt: "22" },
  { id: 23, name: "Chanchal", batch: "2023", por: "Creative", contact: "", src: "/core-23.png", alt: "23" },
  { id: 24, name: "Sandeep", batch: "2023", por: "Creative", contact: "", src: "/core-24.png", alt: "24" },
  { id: 25, name: "Swetha", batch: "2023", por: "PR", contact: "", src: "/core-25.png", alt: "25" },
  { id: 26, name: "Meghana", batch: "2023", por: "PR", contact: "", src: "/core-26.png", alt: "26" },
  { id: 27, name: "Rohit Jauhar", batch: "2023", por: "PR", contact: "", src: "/core-27.png", alt: "27" },
  { id: 28, name: "Shreya Pathak", batch: "2023", por: "PR", contact: "", src: "/core-28.png", alt: "28" },
  { id: 29, name: "Utsav Jaiswal", batch: "2023", por: "PR", contact: "", src: "/core-29.png", alt: "29" },
  { id: 30, name: "Sonam Gupta", batch: "2023", por: "PR", contact: "", src: "/core-30.png", alt: "30" },
  { id: 31, name: "Vivek Kumar", batch: "2023", por: "PR", contact: "", src: "/core-31.png", alt: "31" },
  { id: 32, name: "Ansika", batch: "2023", por: "PR", contact: "", src: "/core-32.png", alt: "32" },
  { id: 33, name: "Subham", batch: "2023", por: "PR", contact: "", src: "/core-33.png", alt: "33" },
  { id: 34, name: "Saksham", batch: "2023", por: "PR", contact: "", src: "/core-34.png", alt: "34" },
  { id: 35, name: "Rani", batch: "2023", por: "PR", contact: "", src: "/core-35.png", alt: "35" },
  { id: 36, name: "Ritu", batch: "2023", por: "PR", contact: "", src: "/core-36.png", alt: "36" },
  { id: 37, name: "Ashutosh", batch: "2023", por: "PR", contact: "", src: "/core-37.png", alt: "37" },
  { id: 38, name: "Prashanta", batch: "2023", por: "PR", contact: "", src: "/core-38.png", alt: "38" },
  { id: 39, name: "Sunil", batch: "2023", por: "PR", contact: "", src: "/core-39.png", alt: "39" },
  { id: 40, name: "Sweety", batch: "2023", por: "PR", contact: "", src: "/core-40.png", alt: "40" },
  { id: 41, name: "Animesh", batch: "2023", por: "CREATIVE", contact: "", src: "/core-41.png", alt: "41" },
  { id: 42, name: "Jadav Chandan", batch: "2023", por: "CREATIVE", contact: "", src: "/core-42.png", alt: "42" },
  { id: 43, name: "Mohit", batch: "2023", por: "Web Team", contact: "", src: "/core-43.png", alt: "43" },
  { id: 44, name: "Sovik", batch: "2023", por: "WEB TEAM", contact: "", src: "/core-44.png", alt: "44" },
  { id: 45, name: "Vishal", batch: "2023", por: "WEB TEAM", contact: "", src: "/core-45.png", alt: "45" },
  { id: 46, name: "Tabish", batch: "2023", por: "PR", contact: "", src: "/core-46.png", alt: "46" },
  { id: 47, name: "Saransh", batch: "2023", por: "PR", contact: "", src: "/core-47.png", alt: "47" },
  { id: 48, name: "Sushant", batch: "2023", por: "PR", contact: "", src: "/core-48.png", alt: "48" },
  { id: 49, name: "Priya sharma", batch: "2021", por: "President", contact: "", src: "/core-49.png", alt: "49" },
  { id: 50, name: "Shanmukh", batch: "2021", por: "General Secretary", contact: "", src: "/core-50.png", alt: "50" },
  { id: 51, name: "Atharva pratap singh", batch: "2022", por: "VICE PRESIDENT", contact: "", src: "/core-51.png", alt: "51" },
  { id: 52, name: "Krishna gupta", batch: "2021", por: "Treasurer", contact: "", src: "/core-52.png", alt: "52" },
  { id: 53, name: "ABHISHEK BHOUTKAR", batch: "2022", por: "VICE PRESIDENT", contact: "", src: "/core-53.png", alt: "53" },
  { id: 54, name: "Shubham", batch: "2021", por: "CA Head", contact: "", src: "/core-54.png", alt: "54" },
  { id: 55, name: "Rajni singh", batch: "2021", por: "Manager", contact: "", src: "/core-55.png", alt: "55" },
  { id: 56, name: "Pratham kr", batch: "2021", por: "P&D Head", contact: "", src: "/core-56.png", alt: "56" },
  { id: 57, name: "Ishika raj", batch: "2021", por: "P&D Head", contact: "", src: "/core-57.png", alt: "57" },
  { id: 58, name: "Kishan kr", batch: "2021", por: "Manager", contact: "", src: "/core-58.png", alt: "58" },
  { id: 59, name: "Prasanna", batch: "2022", por: "Joint Secretary", contact: "", src: "/core-59.png", alt: "59" },
  { id: 60, name: "Sarthak", batch: "2021", por: "PR Head", contact: "", src: "/core-60.png", alt: "60" },
  { id: 61, name: "Shubham singh", batch: "2021", por: "Web Head", contact: "", src: "/core-61.png", alt: "61" },
  { id: 62, name: "Abhishek kr", batch: "2021", por: "Creative Head", contact: "", src: "/core-62.png", alt: "62" },
  { id: 63, name: "Kajal kumari", batch: "2021", por: "Creative Head", contact: "", src: "/core-63.png", alt: "63" },
  { id: 64, name: "Riya keshri", batch: "2021", por: "Cultural Secretary", contact: "", src: "/core-64.png", alt: "64" },
  { id: 65, name: "Siddhart kr", batch: "2021", por: "PR Head", contact: "", src: "/core-65.png", alt: "65" },
];


const Team = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [selectedBatch, setSelectedBatch] = useState("All");
  const [selectedPor, setSelectedPor] = useState("All");

  const porOptions = ["All", ...new Set(members.map((member) => member.por.toUpperCase()))];

  const fixedMembers = members.filter((member) => member.batch === "2021");

  const president = fixedMembers.find((member) => member.por.toLowerCase() === "president");
  const generalSecretary = fixedMembers.find((member) => member.por.toLowerCase() === "general secretary");
  const treasurer = fixedMembers.find((member) => member.por.toLowerCase() === "treasurer");
  const otherMembers = fixedMembers.filter(
    (member) =>
      member.por.toLowerCase() !== "president" &&
      member.por.toLowerCase() !== "general secretary" &&
      member.por.toLowerCase() !== "treasurer"
  );

  const filteredMembers = members.filter((member) => {
    return (
      (selectedBatch === "All" || member.batch === selectedBatch) &&
      (selectedPor === "All" || member.por.toUpperCase() === selectedPor)
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center py-10 dark:bg-white dark:text-black">
      <h1 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-12">
        Meet Our Team
      </h1>

      {/* Fixed 2021 Batch Members */}
      <div className="grid grid-cols-1 gap-6 mb-6">
        {/* President in the center of the first row */}
        {president && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div></div>
            <div
              key={president.id}
            >
              <Member2 member={president} />
            </div>
            <div></div>
          </div>
        )}

        {/* General Secretary and Treasurer in the second row */}
{(generalSecretary || treasurer) && (
  <div className="md:flex justify-center gap-10 mb-6">
    {generalSecretary && (
      <div
        key={generalSecretary.id}
      >
        <Member2 member={generalSecretary} />
      </div>
    )}
    {treasurer && (
      <div
        key={treasurer.id}
      >
        <Member2 member={treasurer} />
      </div>
    )}
  </div>
)}



        {/* Other members in subsequent rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherMembers.map((member) => (
            <div
              key={member.id}
             
            >
              <Member2 member={member} />
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
        <div>
          <label htmlFor="batch" className="text-xl font-medium text-gray-300 mr-4">
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
          <label htmlFor="por" className="text-xl font-medium text-gray-300 mr-4">
            Filter by PoR:
          </label>
          <select
            id="por"
            className="bg-gray-800 border border-gray-600 rounded-md text-white px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500 transition-shadow"
            onChange={(e) => setSelectedPor(e.target.value)}
          >
            {porOptions.map((por) => (
              <option key={por} value={por}>
                {por}
              </option>
            ))}
          </select>
        </div>
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
