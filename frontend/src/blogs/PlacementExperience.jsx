import React from "react";

const PlacementExperience = () => {
  return (
    <div className="bg-gray-900 min-h-screen" id="body">
    <div
      id="heading"
      className="m-8 mt-18 text-4xl text-white text-center  p-5 rounded-lg border border-whitebg-gray bg-[length:12px_13px] bg-[linear-gradient(to_right,#212121_1px,transparent_1px),linear-gradient(to_bottom,#424242_1px,transparent_1px)]"
    ><span
    className='bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400  text-4x2 ml-1 font-serif no-underline uppercase hover:underline hover:decoration-2  hover:decoration-cyan-400"'
    >
       Placement Experience
    </span>
    </div>
    <div
      id="content"
      className="text-justify text-lg text-white p-5 border-2 border-black rounded-lg leading-relaxed mx-auto w-11/12 "
    >
      <div id="point1" className="ml-3 text-1xl font-serif ">
        <strong>1. Placement Statistics</strong>
        <br/>
        <br/>
        <ul>
          <li>Placement Rate: High, generally around 80-90% for core and non-core roles combined.</li>
          <li>Top Recruiters: Tata Steel, Tata Motors, L&T, Jindal Steel, Vedanta, Bajaj Auto, JSW, and Hindalco.</li>
          <li>Average Package: Ranges between 8-10 LPA depending on market trends.</li>
          <li>Highest Package: Usually crosses 20 LPA, often in non-core roles like software or consulting.</li>
          <li>Core Placement Percentage: Approximately 40–50% of the batch gets placed in core sectors.</li>
        </ul><br/>
      </div>

      <div id="point2" className="ml-2 text-1xl font-serif ">
        <strong>2. Core Sector Opportunities</strong>
        <br/>
        <br/>
        Roles Offered:----
        <ul>
          <li>Manufacturing Engineer</li>
          <li>Process Improvement Specialist</li>
          <li>Supply Chain Analyst</li>
          <li>Quality Control Engineer</li>
          <li>Production Manager</li>
        </ul>
        <br/>
      
        Skill Requirements:----
        <ul>
          <li>Knowledge of CAD/CAM and simulation tools like AutoCAD, SolidWorks, and Ansys</li>
          <li>Proficiency in Lean Manufacturing, Six Sigma, and Industrial Automation</li>
        </ul><br/>
      </div>

      <div id="point3" className="ml-2 text-1xl font-serif ">
        <strong>3. Non-Core Sector Opportunities</strong>
        <br/>
        <br/>
        Popular Sectors:
        <ul>
          <li>IT/Software</li>
          <li>Consulting</li>
          <li>Analytics</li>
        </ul>
        <br/>
        Skill Requirements:
        <ul>
          <li>Coding skills in Python, Java, or C++</li>
          <li>Data analytics tools like SQL, Power BI, and Tableau</li>
        </ul><br/>
      </div>

      <div id="point4" className="ml-2 text-1xl font-serif ">
        <strong>4. Preparation Tips</strong>
        <br/>
        <br/>
        <ul>
          <li>Focus on core technical skills like operations research, optimization techniques, and production planning</li>
          <li>Build a strong resume with relevant projects, certifications (Six Sigma, Industrial IoT)</li>
          <li>Develop coding skills for non-core roles</li>
          <li>Participate in internships, case-study competitions, and hackathons</li>
        </ul>
      </div>
    </div>
  </div>
);
};
export default PlacementExperience;
