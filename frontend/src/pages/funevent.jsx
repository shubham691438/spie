import React from "react";

const funevent = () => {
  return (
    <div className="bg-gray-900 min-h-screen" id="body">
    <div
      id="heading"
      className="m-8 mt-18 text-4xl text-white text-center  p-5 rounded-lg border border-whitebg-gray bg-[length:12px_13px] bg-[linear-gradient(to_right,#212121_1px,transparent_1px),linear-gradient(to_bottom,#424242_1px,transparent_1px)]"
    ><span
    className='bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400  text-4x2 ml-1 font-serif no-underline uppercase hover:underline hover:decoration-2  hover:decoration-cyan-400"'
    >
       fun events Experience
    </span>
    </div>
    <div
      id="content"
      className="text-justify text-lg text-white p-5 border-2 border-black rounded-lg leading-relaxed mx-auto w-11/12 "
    >
      <div id="point1" className="ml-3 text-1xl font-serif ">
        <strong>1. Musical Chair Madness</strong>
        <br/>
        <br/>
        <ul>
          <li>Chairs were arranged in a circle, with one fewer chair than the number of participants. The music system blasted peppy tunes, and the excitement was palpable.</li>
          <li>Everyone circled the chairs, laughing and strategizing while trying not to bump into each other.</li>
          <li>The sudden stops in the music led to a hilarious scramble for seats, with some diving and others sliding into chairs.</li>
          <li>One player mistook a chair for someone’s lap in the chaos and ended up creating a chain of laughter among the crowd.</li>
        </ul><br/>
      </div>

      <div id="point2" className="ml-2 text-1xl font-serif ">
        <strong>2. Criss-Cross with Bottles</strong>
        <br/>
        <br/>
        <ul>
          <li>Bottles filled with water were placed in a zigzag pattern on the ground. Participants had to navigate through them blindfolded while balancing a ball on a spoon.</li>
          <li>Participants wobbled and giggled as their friends gave confusing directions like Go left! No, I mean your right!</li>
          <li>Many ended up knocking over bottles, earning cheers and playful jeers from the audience.</li>
          <li>One participant completed the course but accidentally walked straight into the organizer holding a tray of props, spilling everything and causing a wave of laughter.</li>
        </ul>
        <br/>
      </div>
      <div id="point4" className="ml-2 text-2xl font-serif ">
        <strong>These fun events were filled with laughter, camaraderie, and unforgettable moments that brought everyone closer and lightened the mood. They’re a testament to the joy of simple, creative games!</strong>
      </div>
    </div>
  </div>
);
};
export default funevent;