import React from 'react';

const SingingRulebook = () => {
  return (
    <div className="rulebook bg-gradient-to-r from-blue-900 via-purple-900 to-gray-900 text-white p-10 rounded-xl shadow-xl max-w-5xl mx-auto my-12 border border-gray-700">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-400 tracking-wide uppercase text-white">Singing Event Rulebook</h1>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Event Overview</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          DataHackon is a team-based competition designed to test participants' data analysis and problem-solving
          skills. The event challenges participants to derive insights and propose solutions from a given dataset,
          data visualizations, and problem statements.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Eligibility</h2>
        <ul className="list-disc list-inside text-gray-300 text-lg pl-4">
          <li>Participants can be from any branch and year (1st year to 3rd year).</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Team Composition</h2>
        <ul className="list-disc list-inside text-gray-300 text-lg pl-4">
          <li>Teams must consist of 2 to 3 members.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Event Flow</h2>

        <h3 className="text-2xl font-bold mb-3 text-blue-300">1. Problem Statement Distribution</h3>
        <p className="text-gray-300 text-lg mb-4">Details for participants based on their year:</p>
        <ul className="list-disc list-inside text-gray-300 text-lg pl-4 mb-4">
          <li>
            <span className="font-semibold">2nd and 3rd Year Participants:</span> Will receive a dataset and a problem
            statement at the start of the event (online mode).
          </li>
          <li>
            <span className="font-semibold">1st Year Participants:</span> Will receive data visualizations and problem
            statements in offline mode.
          </li>
        </ul>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Clarifications regarding the dataset, data visualizations, or problem statements can be addressed to the
          judges during the event.
        </p>

        <h3 className="text-2xl font-bold mb-3 text-blue-300">2. Analysis and Submission</h3>
        <ul className="list-disc list-inside text-gray-300 text-lg pl-4 mb-4">
          <li>
            <span className="font-semibold">2nd and 3rd Year Participants:</span> Analyze the dataset and propose
            solutions to the problem statement. Solutions must be submitted in the format specified by the organizers
            (e.g., .xlsx or .ppt).
          </li>
          <li>
            <span className="font-semibold">1st Year Participants:</span> Solve questions in offline mode based on the
            provided data visualizations and interpretations.
          </li>
        </ul>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Note: A bonus question will be circulated after the submission of the main problem statement round.
        </p>

        <h3 className="text-2xl font-bold mb-3 text-blue-300">3. Presentation</h3>
        <ul className="list-disc list-inside text-gray-300 text-lg pl-4">
          <li>
            <span className="font-semibold">2nd and 3rd Year Participants:</span> Each selected team will present their
            solutions to the judges. Presentations should cover analysis, methodology, and results.
          </li>
          <li>
            <span className="font-semibold">1st Year Participants:</span> No presentations are required.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Duration</h2>
        <ul className="list-disc list-inside text-gray-300 text-lg pl-4">
          <li>
            <span className="font-semibold">2nd and 3rd Year Participants:</span>
            <ul className="list-disc ml-6">
              <li>Analysis and Submission: 3 hours</li>
              <li>Bonus Question: 30 minutes</li>
              <li>Presentations: 10 minutes per team (for eligible teams)</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">1st Year Participants:</span> Offline event: 1 hour (solving data visual and
            interpretation questions)
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Judging Criteria</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Judges will evaluate teams based on the following:
        </p>
        <ul className="list-disc list-inside text-gray-300 text-lg pl-4">
          <li>Innovativeness and Creativity: Novelty and originality in the approach.</li>
          <li>Analytical Skills: Depth of analysis and effective use of data.</li>
          <li>
            Presentation Quality: Clarity, structure, and articulation of ideas (applicable to 2nd and 3rd years).
          </li>
          <li>Accuracy: How effectively the solution addresses the problem statement.</li>
          <li>Feasibility: Practicality and implementation potential of the solution.</li>
          <li>Bonus Question Solution Approach: Creativity and accuracy in addressing the bonus question.</li>
        </ul>
      </section>
    </div>
  );
};

export default SingingRulebook;
