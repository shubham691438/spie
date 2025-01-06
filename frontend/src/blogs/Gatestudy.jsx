import React from "react";

const Gatestudy = () => {
  return (
    <div className="bg-gray-900 min-h-screen" id="body">
    <div
      id="heading"
      className="m-8 mt-18 text-4xl text-white text-center  p-5 rounded-lg border border-whitebg-gray bg-[length:12px_13px] bg-[linear-gradient(to_right,#212121_1px,transparent_1px),linear-gradient(to_bottom,#424242_1px,transparent_1px)]"
    ><span
    className='bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400  text-4x2 ml-1 font-serif no-underline uppercase hover:underline hover:decoration-2  hover:decoration-cyan-400"'
    >
       gate study materials year wise  
    </span>
    </div>
    <div
      id="content"
      className="text-justify text-lg text-white p-5 border-2 border-black rounded-lg leading-relaxed mx-auto w-11/12 "
    >
      <div id="point1" className="ml-3 text-1xl font-serif ">
        <strong>1. first year</strong>
        <br/>
        <br/>
        <ul>
          <li>Focus Areas: Build a strong foundation in basic engineering and mathematics.</li>
          <li>Engineering Mathematics: Linear Algebra, Calculus, Differential Equations.</li>
          <li>Introduction to Engineering: Basics of Mechanical and Industrial Engineering concepts.</li>
          <li>Core Subjects: Physics, Chemistry, and basic branch-specific subjects.</li>
          <li>Materials:Standard textbooks like Higher Engineering Mathematics by B.S. Grewal,or Online platforms like NPTEL for basic subjects.
</li>
        </ul><br/>
      </div>

      <div id="point2" className="ml-2 text-1xl font-serif ">
        <strong>2. second year</strong>
        <br/>
        <br/>
        <ul>
          <li>Focus Areas: Core Production and Industrial Engineering PIE concepts and continued development in mathematics.</li>
          <li>Core Subjects: Material Science and Engineering,Manufacturing Processes,Industrial Engineering and Management Basics,Engineering Mathematics: Probability, Statistics, Numerical Methods</li>
          <li>Resources: NPTEL lectures on Manufacturing Processes and Material Science.</li>
          <li>Practice: Solve objective questions from GATE question banks.</li>
        </ul>
        <br/>
      </div>

      <div id="point3" className="ml-2 text-1xl font-serif ">
        <strong>3. third year</strong>
        <br/>
        <br/>
        <ul>
          <li>Focus Areas: Advanced topics in Production and Industrial Engineering and mock tests.</li>
          <li>Plan: Revise all subjects systematically with a special focus on manufacturing and industrial engineering concepts and Focus on mathematical techniques and numerical problem-solving.</li>
          <li>Practice: Solve full-length mock tests weekly, and Analyze test results and improve problem-solving strategies.</li>
        </ul>
        <br/>
      </div>

      <div id="point4" className="ml-2 text-1xl font-serif ">
        <strong>4. fourth year </strong>
        <br/>
        <br/>
        <ul>
          <li>Focus Areas: Revision and practice with a focus on weak areas.</li>
          <li>Plan: Revise all subjects systematically with a special focus on manufacturing and industrial engineering concepts, and Focus on mathematical techniques and numerical problem-solving.</li>
          <li>Practice: Solve full-length mock tests weekly,and Analyze test results and improve problem-solving strategies.
</li>
        </ul>
      </div>
    </div>
  </div>
);
};
export default Gatestudy;
