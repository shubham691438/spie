import React from 'react';

const ChainZenithRulebook = () => {
  return (
    <div className="rulebook bg-gradient-to-r from-blue-900 via-purple-900 to-gray-900 text-white p-10 rounded-xl shadow-xl max-w-5xl mx-auto my-12 border border-gray-700">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-400 tracking-wide uppercase text-white">Chain-Zenith Rulebook</h1>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">About the Event</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
        Chain Zenith is an immersive competition for students aspiring to careers in logistics, supply chain, operations, and consultancy. It offers participants to tackle real-world challenges under time constraints, sharpen problem-solving and communication skills, and gain hands-on insights into the industry's dynamics.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Eligibility</h2>
        <ul className="list-disc list-inside text-gray-300 text-lg pl-4">
          <li>Any undergraduate student from 1st to 4th year can participate</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Team Composition</h2>
        <ul className="list-disc list-inside text-gray-300 text-lg pl-4">
          <li>Participants can form a team of 1-2 members</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Event Flow</h2>
        <p className="text-gray-300 text-lg mb-4">The competition will unfold in two rounds: </p>
        <h3 className="text-2xl font-bold mb-3 text-blue-300">Round 1: Case study analysis:</h3>
        <ul className="list-disc list-inside text-gray-300 text-lg pl-4 mb-4">
          <li>
          The participants will analyse the case study given to them and craft the presentation
          </li>
          </ul>
          <h3 className="text-2xl font-bold mb-3 text-blue-300">Round 2: Presentation:</h3>
        <ul className="list-disc list-inside text-gray-300 text-lg pl-4 mb-4">
          <li>
          The participants have to present the solution in-front of the judges
          </li>
          </ul>
       
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Duration</h2>
        <ul className="list-disc list-inside text-gray-300 text-lg pl-4">
         {/* <ul className="list-disc ml-6"> */}
              <li>Analysing and crafting presentation: 3 hours</li>
              <li>Presenting the solution: 10-15 minutes</li>
              {/* </ul> */}
         </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Judging Criteria</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Judges will evaluate teams based on the following:
        </p>
        <ul className="list-disc list-inside text-gray-300 text-lg pl-4">
          <li>Practicality and feasibility of the solution</li>
          <li>Relevance of the solution with the problem</li>
          <li>Optimality of the solution</li>
         
        </ul>
      </section>
    </div>
  );
};

export default ChainZenithRulebook;
