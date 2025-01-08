import React from 'react';

const MetalMasterpieceRulebook = () => {
  return (
    <div className="rulebook bg-gradient-to-r from-blue-900 via-purple-900 to-gray-900 text-white p-10 rounded-xl shadow-xl max-w-5xl mx-auto my-12 border border-gray-700">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-400 tracking-wide uppercase text-white">Metal Masterpiece Rulebook</h1>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">About the event:</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
        Metal Masterpiece is an exciting competition that brings together students with a passion for engineering, design, and precision craftsmanship. In this event, participants will showcase their skills by creating unique designs using a lathe machine. From simple shapes to intricate patterns, contestants will demonstrate their creativity and technical prowess in shaping metal into stunning works of art.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Eligibility</h2>
        <ul className="list-disc list-inside text-gray-300 text-lg pl-4">
          <li>Any undergraduate student from 1st to 3rd year can participate</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Team Composition</h2>
        <ul className="list-disc list-inside text-gray-300 text-lg pl-4">
          <li>Participants can form a team of 2-4 members.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-blue-300">Event Rules</h2>
         <ul className="list-disc list-inside text-gray-300 text-lg pl-4 mb-4">
          <li>
          Each team will be given a common design theme. Themes may range from geometric shapes tonature-inspired motifs.
          </li>
          <li>
          Contestants will be provided with standard metal materials such as mild steel or others to use for their designs. Additional materials may be allowed upon request, subject to approval
          </li>
          <li>
          Teams will be given a specified time limit to complete their designs
          </li>
          <li>
            <span className="font-semibold">Presentation:</span> Each team will have the opportunity to present their finished design to the judges, explaining their inspiration, design process, and any unique features or techniques employed
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Duration</h2>
        <ul className="list-disc list-inside text-gray-300 text-lg pl-4">
          <li>
          Each team would be given 90 minutes to complete the job (It can be modified later)
           </li>
            </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Judging Criteria</h2>
       <ul className="list-disc list-inside text-gray-300 text-lg pl-4">
          <li>Creativity</li>
          <li>Technical skill</li>
          <li>Craftsmanship</li>
          <li>Adherence to the design theme</li>
          <li>Overall presentation</li>
          </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Precautions</h2>
       <ul className="list-disc list-inside text-gray-300 text-lg pl-4">
          <li>Each participant should be in shoes</li>
          <li>All participants must adhere to strict safety protocols when operating the lathe machine and handling metal materials</li>
          <li>Any type of cheating or indisciplinary activity would lead to the disqualification of the team from the event</li>
         </ul>
      </section>
    </div>
  );
};

export default MetalMasterpieceRulebook;
