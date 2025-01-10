import React from 'react';

const TalkathonRulebook = () => {
  return (
    <div className="rulebook bg-gradient-to-r from-blue-900 via-purple-900 to-gray-900 text-white p-10 rounded-xl shadow-xl max-w-5xl mx-auto my-12 border border-gray-700">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-400 tracking-wide uppercase text-white">Talkathon Rulebook</h1>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Event Overview</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
        Welcome to Talkathon, an individual participation competition where participants showcase 
their conversational skills in various forms of speaking. The event combines multiple soft skills 
challenges under one roof, testing participants’ wit and confidence on general topics.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Eligibility</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
         This event invites students from all branches and years to exhibit their soft skills.
         </p>
        
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Team Composition</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
        Participation is strictly individual
         </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Event Flow</h2>

        <h3 className="text-2xl font-bold mb-3 text-blue-300">ROUND 1: Group Discussion (Structured) </h3>
        <ul className="list-inside text-gray-300 text-lg pl-4 mb-4">
          <li>
            <span className="font-bold">1. Preparation of Topic (2 minutes) :</span> Participants are introduced to the topic and given time to think and organize their 
            thoughts
          </li>
          <li>
            <span className="font-bold">2. Discussion:</span> 
            <li className='list-disc'> <span className="font-semibold">Opening Remarks:</span> Each participant delivers a 1-minute opening statement</li>
            <li className='list-disc'> <span className="font-semibold">Counterviews: </span> After everyone’s opening remarks, each participant gets an 
            additional 1 minute to present further insights or counterarguments </li>
          </li>
          <li>
            <span className="font-bold">3. Conclusion (1 minute):</span> A single participant summarizes the discussion, presenting the concluding remarks
          </li>
        </ul>
         
        <h3 className="text-2xl font-bold mb-3 text-blue-300">ROUND 2: Group Discussion (Unstructured)</h3>
        <ul className="list-inside text-gray-300 text-lg pl-4 mb-4 ">
          <li>
            <span className="font-bold">1. Preparation of Topic (2 minutes): </span> Participants brainstorm ideas, analyze the topic, and organize their thoughts.
          </li>
          <li>
            <span className="font-bold">2. Discussion Phase (15-20 minutes) </span> 
            <li> <span className="font-semibold">Opening Remarks:</span> Each participant presents a 1-minute opening statement to 
            express their initial views</li>
            <li > <span className="font-semibold">Free-flow Discussion:</span> Participants engage in an open and spontaneous 
            exchange of ideas, counter arguments, and examples. 
            <li className='list-disc'>No predetermined order for speaking; participants manage turn-taking 
            independently.</li>
            <li className='list-disc'> Active listening, collaboration, and respectful disagreement are strongly 
            encouraged.</li>
             </li>
          </li>
          <li>
            <span className="font-bold">3. Conclusion (1 minute):</span> One participant, either selected by the group or volunteering, summarizes the 
            discussion and provides concluding remarks
          </li>
        </ul>
        </section>
       
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Judging Criteria</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
        Participants will be evaluated based on:
        </p>
        <ul className="list-disc list-inside text-gray-300 text-lg pl-4">
          <li><span className='font-bold'>Communication Skills </span> – Clarity, fluency, and articulation.</li>
          <li><span className='font-bold'>Content and Knowledge</span> – Relevance and depth of ideas.</li>
          <li>
          <span className='font-bold'> Teamwork</span> – Ability to collaborate effectively. 
          </li>
          <li><span className='font-bold'>Leadership and Initiative</span>– Contribution to steering the discussion</li>
          
        </ul>
      </section>
    </div>
  );
};

export default TalkathonRulebook;
