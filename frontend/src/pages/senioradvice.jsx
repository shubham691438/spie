import React from "react";

const senioradvice = () => {
  return (
    <div className="bg-gray-900 min-h-screen" id="body">
    <div
      id="heading"
      className="m-8 mt-18 text-4xl text-white text-center  p-5 rounded-lg border border-whitebg-gray bg-[length:12px_13px] bg-[linear-gradient(to_right,#212121_1px,transparent_1px),linear-gradient(to_bottom,#424242_1px,transparent_1px)]"
    ><span
    className='bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400  text-4x2 ml-1 font-serif no-underline uppercase hover:underline hover:decoration-2  hover:decoration-cyan-400"'
    >
      seniors advice
    </span>
    </div>
    <div
      id="content"
      className="text-justify text-lg text-white p-5 border-2 border-black rounded-lg leading-relaxed mx-auto w-11/12 "
    >
      <div id="point1" className="ml-3 text-1xl font-serif ">
        <strong>1st Year: Building Foundations and Adapting to College Life</strong>
        <br/>
        <br/>
        <ul>
          <li>Academics: Focus on understanding core subjects like mathematics and basic engineering concepts. Build a strong foundation as it helps in later semesters.</li>
          <li>Time Management: Learn to balance academics, extracurriculars, and personal time. Develop a disciplined routine.</li>
          <li>Skills Development: Start learning programming languages e.g., C, Python and explore tools like MATLAB if you are interested in engineering simulations..</li>
          <li>Networking: Build friendships with seniors and batchmates. Participate in clubs and societies to explore your interests and learn new skills.</li>
          <li>Health: Stay active and maintain a healthy lifestyle. Avoid overindulging in hostel life distractions.</li>
        </ul><br/>
      </div>

      <div id="point2" className="ml-2 text-1xl font-serif ">
        <strong>2. 2nd Year: Exploring and Skill Building</strong>
        <br/>
        <br/>
        <ul>
          <li>Academics: Dive deeper into your branch subjects and maintain a good CGPA for future opportunities like internships and placements.</li>
          <li>Internships: Look for small projects or internships, even unpaid ones, to gain hands-on experience.</li>
          <li>Coding and Competitions: If interested in software or analytics, participate in coding contests CodeChef, LeetCode or start exploring data analysis tools like Excel, SQL, and Python.</li>
          <li>Extracurriculars: Take leadership roles in clubs or events. These experiences enhance teamwork and management skills.</li>
          <li>Certifications: Enroll in online courses related to your branch e.g., AutoCAD, SolidWorks for mechanical; circuit design for electrical.</li>
<li>Networking: Attend college fests, conferences, and webinars. They are great opportunities for learning and networking.</li>
        </ul>
        <br/>
      </div>
      <div id="point3" className="ml-2 text-1xl font-serif ">
        <strong>3. 3rd Year: Focusing on Career Goals</strong>
        <br/>
        <br/>
        <ul>
          <li>Internships: Apply for summer internships through platforms like LinkedIn, Internshala, and the college placement cell. Internships in core or non-core fields can guide your career path.</li>
          <li>Skill Mastery: Deepen your knowledge in tools or software specific to your branch e.g., CAD tools, Ansys for mechanical; circuit simulation tools for electrical. If aiming for non-core, strengthen your coding and data analytics skills.</li>
          <li>Placements Preparation: Start preparing for placements by practicing aptitude tests, group discussions, and interviews. Use resources like AMCAT, PrepInsta, or GeeksforGeeks.</li>
          <li>Projects: Work on significant projects in your field. These demonstrate practical application of your knowledge and are impressive in interviews.</li>
          <li>Networking: Build a LinkedIn profile and connect with alumni for guidance on career options.</li>
          <li>Higher Studies: If planning for GATE, GRE, or CAT, start dedicated preparation this year.</li>
        </ul><br/>
      </div>
      <div id="point4" className="ml-2 text-1xl font-serif ">
        <strong>4. 4th Year: Placement and Transition to Professional Life</strong>
        <br/>
        <br/>
        <ul>
          <li>Placements:-Prepare for campus placements rigorously. Focus on commonly asked questions, technical skills, and soft skills.</li>
          <li>Backup Plans: If you don’t get placed initially, don’t panic. Keep applying off-campus and consider certifications or freelance work to strengthen your profile.</li>
          <li>Thesis/Final Year Project: Choose a project that aligns with your career aspirations, whether it’s core or non-core.</li>
          <li>Career Guidance: Seek advice from professors and alumni to explore job roles or higher study options.</li>
        </ul>
      </div>
    </div>
  </div>
    
);
};
export default senioradvice;