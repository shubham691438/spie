import React from 'react';

const MiniSharkTankRulebook = () => {
  return (
    <div className="rulebook bg-gradient-to-r from-blue-900 via-purple-900 to-gray-900 text-white p-10 rounded-xl shadow-xl max-w-5xl mx-auto my-12 border border-gray-700">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-400 tracking-wide uppercase text-white">Mini Shark Tank Rulebook</h1>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">About the event:</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
        Mini Shark Tank is an exciting platform designed to cultivate the entrepreneurial spirit in college students. This event offers aspiring innovators the chance to pitch their startup ideas to a panel of seasoned judges, gaining valuable feedback and insights. 
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Eligibility</h2>
        <ul className="list-disc list-inside text-gray-300 text-lg pl-4">
          <li>Any undergraduate student from 1st to 3rd year can participate.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Team Composition</h2>
        <ul className="list-disc list-inside text-gray-300 text-lg pl-4">
          <li>Participants can form a team of 1-2 members.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Event Rules</h2>
        <ul className="list-disc list-inside text-gray-300 text-lg pl-4 mb-4">
          <li>
            <span className="font-semibold">Submission: </span> Teams must submit their startup pitch deck comprising 7-8 slides in PPT format by submission Deadline (to be declared). The pitch deck should contain the teams’ vision, 
          </li>
          <li>
            <span className="font-semibold">Presentation Time: </span>Each team will be allotted 12-15 minutes to present their idea to the panel of judges.
          </li>
          <li>
            <span className="font-semibold">Q&A Session:</span>Following each presentation, there will be a brief Q&A session between the judges and the presenting team.
          </li>
          <li>
            <span className="font-semibold">Decisions:</span>The decisions will be based upon the judges.
          </li>
        </ul>
       

        <h3 className="text-2xl font-bold mb-3 text-blue-300">Key points of pitch deck:</h3>
        <ul className="list-disc list-inside text-gray-300 text-lg pl-4 mb-4">
          <li>
            <span className="font-semibold">Teams’ vision</span> 
            </li>
          <li>
            <span className="font-semibold">Problem statement</span> 
          </li>
          <li>
            <span className="font-semibold">Solution to the problem</span> 
          </li>
          <li>
            <span className="font-semibold">Market analysis</span> 
          </li>
          <li>
            <span className="font-semibold">Marketing strategy</span> 
          </li>
        </ul>

      </section>

     

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Judging Criteria</h2>
       
        <ul className="list-disc list-inside text-gray-300 text-lg pl-4">
          <li>Practicality and feasibility of the idea</li>
          <li>Uniqueness of idea</li>
          <li>Identification of the problem </li>
          <li>Relevance of the solution with the problem</li>
          <li>Applicability for gaining profits in industry</li>
        </ul>
      </section>
    </div>
  );
};

export default MiniSharkTankRulebook;
