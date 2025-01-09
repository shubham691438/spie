import React from 'react';

const MachinaMystiqueRulebook = () => {
  return (
    <div className="rulebook bg-gradient-to-r from-blue-900 via-purple-900 to-gray-900 text-white p-10 rounded-xl shadow-xl max-w-5xl mx-auto my-12 border border-gray-700">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-400 tracking-wide uppercase text-white">Machina Mystique Rulebook</h1>

      <section className="mb-8">
      <p className="text-gray-300 text-lg leading-relaxed">
       Welcome to <span className="text-bold text-2xl text-white">Machina Mystique</span>, a thrilling Quiz event designed to challenge your knowledge and ignite your curiosity !  
        </p>
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Event Overview</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
        Machina Mystique consists of a total of 60 questions spread over two rounds, each containing a series of questions  designed to test participants' knowledge across their mechanical reasoning and Aptitute 
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Eligibility</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Any undergraduate student from 1st to 4th year can participate
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Event Flow</h2>

        <h3 className="text-2xl font-bold mb-3 text-blue-300">Round 1</h3>
        <p className="text-gray-300 text-lg mb-4">In Round 1, participants will face 35 questions covering a wide range of topics, including basics concepts of physics, gears, pictorial theories, react questionnaire and more. Each question will be presented with multiple-choice options. Participants must select the correct answer within the given time limit. Points will be awarded based on the accuracy and speed of the responses which will contribute to the final score . </p>
        <p className="font-bold text-gray-300 text-lg leading-relaxed mb-4">
          * Candidates clearing the cut-off for round 1 only allowed to participate for Round 2 *
        </p>

        <h3 className="text-2xl font-bold mb-3 text-blue-300">Round 2</h3>
        <p className="text-gray-300 text-lg mb-4">Round 2 features 25 challenging questions, delving deeper into complex concepts and trivia. Similar to Round 1, participants will have multiple-choice options and must answer within the allotted time. Points in this round will contribute to the final score, determining the winners of the event.
        </p>
        </section>

        <section>
        <h3 className="text-2xl font-bold mb-3 text-purple-400">Scoring</h3>
        <p className="text-gray-300 text-lg mb-4"> Each correct answer in Round 1 will earn participants<span className='font-bold'> 2 point</span>. In Round 2, correct answers will be awarded <span className='font-bold'>3 points</span> each. Incorrect answers will incur penalties as<span className='font-bold'> -1</span>,<span className='font-bold'> Zero </span> points will be to unattempted question.
       </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Time Limits</h2>
        <p className="text-gray-300 text-lg mb-4"> Participants will have a specified time limit to answer each question. Failure to answer within the time limit will result in the question being marked as incorrect.
        </p>
        <p className="text-gray-300 text-lg mb-4"> Time specification for the events is as follow:</p>
        <ul className="list-disc list-inside text-gray-300 text-lg pl-4 flex flex-col gap-5">
          <li className='font-bold'>Round 1:
            <ul>
              <li>Ques 1-15: 10sec/ques</li>
              <li>Ques 16-25: 15 sec/ques</li>
              <li>Ques 25-35: 20sec/ques</li>
            </ul>
          </li>
          <li><span className='font-bold'>Round 2:</span>
          <ul>
            <li>All the<span className='font-bold'> 25</span> questions in round 2 have been allotted<span className='font-bold'> 30 sec/ques</span></li>
          </ul>
          </li>
          </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Tiebreakers</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
        In case of a tie, tiebreaker questions may be introduced to determine the final standings.
       </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Fair Play</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
        Participants are expected to maintain honesty and integrity throughout the event. Any form of cheating or misconduct will result in immediate disqualification
       </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Conclusion</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
        Machina Mystique offers a platform for participants to showcase their knowledge and quick thinking in a fun and competitive environment. May the best minds prevail, and may the quest for knowledge continue!
       </p>
      </section>
    </div>
  );
};

export default MachinaMystiqueRulebook;
