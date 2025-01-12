import React from 'react';

const FunEventsRulebook = () => {
  return (
    <div className="rulebook bg-gradient-to-r from-blue-900 via-purple-900 to-gray-900 text-white p-10 rounded-xl shadow-xl max-w-5xl mx-auto my-12 border border-gray-700">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-400 tracking-wide uppercase text-white">Fun Events Rulebook</h1>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">ROUND-1</h2>
        <h3 className="text-2xl font-bold mb-4 text-purple-200"> Octopus Race Challenge</h3>
        <h4 className="text-2xl font-semibold mb-4 text-purple-200">Objective:</h4>
        <p className="text-gray-300 text-xl leading-relaxed">
        Teams of connected players (linked by elbows) race together over a distance of 10 or 20 meters. Midway through the race, they
 collect balls and finish by placing them into cups. The first team to complete the task wins and advances to the next round, while the
 others are eliminated  </p>
       <h4 className="text-2xl font-semibold mb-1 mt-2 text-purple-200">Rules and Guidelines</h4>
       <h4 className="text-2xl font-semibold mb-4 text-purple-200">Game Setup:</h4>
       <ul className="list-inside text-gray-300 text-xl pl-4">
        <li> <span className="font-semibold text-white">1.Materials Needed:</span>
        <li className="list-disc"> 6 balls per team</li>
        <li className="list-disc"> 6 cups per team, placed at the finish line</li>
        <li className="list-disc"> A clearly marked race track of 10–20 meters, including a halfway marker</li></li>
        <li className='mt-2 mb-1'><span className="font-semibold text-white"> 2.Team Formation:</span>
        <li className="list-disc"> Teams consist of 5 players each</li>
        <li className="list-disc"> Players connect by linking elbows to form a circle</li>
       </li>  
       <li className='mt-2 mb-1'><span className="font-semibold text-white"> 3.Starting Position:</span>
        <li className="list-disc">  Teams start at the race’s starting line, already linked by elbows</li>
        <li className="list-disc"> Balls are placed at the halfway point of the track</li>
        <li className="list-disc"> Cups are positioned at the finish line</li>
       </li>
       <li className='mt-2 mb-1'><span className="font-semibold text-white">4.Starting Signal:</span>
        <li className="list-disc"> The referee counts down from 3 and says “Start”</li> 
       </li>
        
       </ul>
       <h4 className="text-2xl font-semibold mb-4 mt-4 text-purple-200"> Gameplay Rules:</h4>
       <ul className='text-xl text-gray-300'>
        <li className='mt-2 mb-1 list-inside'> <span className="font-semibold text-white"> 1.Movement:</span>
        <li className="list-disc"> Teams must stay connected by their elbows at all times while moving</li>
        <li className="list-disc">  If the team breaks the link, they must stop and relink before continuing</li>
       </li>
        <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white"> 2.Collecting Balls:</span>
        <li className="list-disc">  At the halfway marker, the team stops to collect 6 balls</li>
        <li className="list-disc"> Only one team member can pick up a ball at a time, while still remaining linked</li>
       </li>  
       <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">  3.Finishing the Race:</span>
        <li className="list-disc"> The team continues toward the finish line with the collected balls</li>
        <li className="list-disc"> At the finish line, players must place the 6 balls into the 6 cups (one ball per cup).</li>
         </li>
       <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">4.Winning the Match:</span>
        <li className="list-disc"> The first team to place all 6 balls in the cups while staying connected wins the race</li> 
        <li className="list-disc"> If multiple teams finish at the same time, the referee may decide the winner based on time or a replay</li>
       </li>
        </ul>
        <h4 className="text-2xl font-semibold mb-3 mt-4 text-purple-200"> Elimination Rules:</h4>
       <ul className='text-xl text-gray-300'>
        <li>  1. The first-place team advances to the next round. </li>
        <li> 2.The remaining teams are eliminated from the competition</li>  
       </ul>
       <h4 className="text-2xl font-semibold mb-3 mt-4 text-purple-200">Prohibited Actions:</h4>
       <ul className='text-xl text-gray-300'>
        <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white"> 1.Teams cannot</span>
            <li className="list-disc"> Break the elbow connection intentionally</li> 
            <li className="list-disc">Use hands to carry balls or manipulate cups (except for placing balls in the cups)</li>
            <li className="list-disc"> Interfere with other teams during the race</li>
            <li className="list-disc">Any rule violation results in immediate disqualification</li></li>
        </ul>
        <h4 className="text-2xl font-semibold mb-3 mt-4 text-purple-200"> Tournament Format:</h4>
       <ul className='text-xl text-gray-300'>
        <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white"> 1.Knockout Rounds:</span>
            <li className="list-disc"> Matches are conducted in knockout format</li>
            <li className="list-disc"> The winning team from each round progresses to the next stage</li>
        </li>
        <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">2.Final Round:</span>
            <li className="list-disc">The last remaining teams compete in a final race to determine the overall champion</li>
            </li>  
       </ul>
       <h4 className="text-2xl font-semibold mb-3 mt-4 text-purple-200">Referee's Role:</h4>
       <ul className='mt-2 mb-1 list-inside text-xl text-gray-300'>
        <li className="list-disc">Ensure fair play and monitor for any rule violations</li>
            <li className="list-disc"> Confirm that the elbow link remains intact throughout the race</li>
            <li className="list-disc"> Decide the winner in case of any disputes</li>
         </ul>
       
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">ROUND-2</h2>
        <h3 className="text-2xl font-bold mb-4 text-purple-200">Eye Challenge</h3>
        <h4 className="text-2xl font-semibold mb-4 text-purple-200">Objective:</h4>
        <p className="text-gray-300 text-xl leading-relaxed">
        To maintain eye contact with an opponent without blinking. The person who blinks first is eliminated  </p>
       <h4 className="text-2xl font-semibold mb-1 mt-2 text-purple-200">Rules and Guidelines</h4>
       <h4 className="text-2xl font-semibold mb-2 text-purple-200">Game Setup:</h4>
       <ul className="list-inside text-gray-300 text-xl pl-4">
        <li className="list-disc"> Players are paired randomly for each round</li>
        <li className="list-disc"> Both players will sit or stand facing each other at a comfortable distance</li>
        <li className="list-disc">A referee or organizer will oversee the game and announce the start and end of the round</li>
         </ul>
       <h4 className="text-2xl font-semibold mb-4 mt-3 text-purple-200"> Gameplay Rules:</h4>
       <ul className=' text-xl text-gray-300'>
        <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">1.Starting Signal:</span>
        <li className="list-disc"> The referee will count down from 3 and say "Start"</li>
        <li className="list-disc"> Players must immediately begin maintaining eye contact</li>
       </li>
        <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">2.Elimination:</span>
        <li className="list-disc"> The first person to blink, look away, or close their eyes will be eliminated</li>
        <li className="list-disc"> If both players blink at the same time, the round is replayed</li>
       </li>  
       <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">3.Prohibited Actions:</span>
        <li className="list-disc"> No physical contact between players</li>
        <li className="list-disc"> No distracting gestures, noises, or actions to make the opponent blink</li>
        <li className="list-disc"> No external objects (e.g., fans or lights) can be used to influence the game</li>
         </li>
       <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">4.Duration of a Match:</span>
        <li className="list-disc">  Each round continues until one player blinks</li> 
        <li className="list-disc"> In case of long standoffs, the referee may introduce a timer (e.g., 1-minute limit) to decide the winner based on additional
        challenges (e.g., stare intensity)</li>
       </li>
        </ul>
       
        <h4 className="text-2xl font-semibold mb-4 mt-4 text-purple-200"> Tournament Format:</h4>
       <ul className=' text-xl text-gray-300'>
        <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">1.Rounds:</span>
            <li className="list-disc">The game proceeds in elimination rounds (knockout format)</li>
            <li className="list-disc">Winners from each round move to the next stage until one champion remains</li>
        </li>
        <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">2.Tie Situations:</span>
            <li className="list-disc"> If no player blinks within the given time, the round will be replayed</li>
            <li className="list-disc">The referee’s decision is final in any unclear situations</li>
            </li>  
            <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">3.Final Match:</span>
            <li className="list-disc"> The final two participants compete in a championship match</li>
           </li>  
       </ul>
       </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">ROUND-3</h2>
        <h3 className="text-2xl font-bold mb-4 text-purple-200"> Guess the Card</h3>
        <h4 className="text-2xl font-semibold mb-4 text-purple-200">Objective:</h4>
        <p className="text-gray-300 text-xl leading-relaxed">
        Players must correctly guess the name or content of a card based on hints provided by their teammate. The first player to guess correctly
        wins the round </p>
       <h4 className="text-2xl font-semibold mb-1 mt-2 text-purple-200">Rules and Guidelines</h4>
       <h4 className="text-2xl font-semibold mb-2 text-purple-200">Game Setup:</h4>
       <ul className=' text-xl text-gray-300'>
        <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">1.Materials Needed:</span>
        <li className="list-disc"> A deck of cards (can include numbers, symbols, images, or phrases)</li>
        </li>
        <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">2.Team Formation:</span>
        <li className="list-disc">Players form pairs (Player A and Player B)</li>
        <li className="list-disc">Both teams will play simultaneously</li>
       </li>  
       <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">3.Seating Arrangement:</span>
        <li className="list-disc"> Player A from each team sits opposite their teammate (Player B).</li>
        <li className="list-disc"> A referee or organizer supervises the game</li>
         </li>
       <li className='mt-3 mb-1 list-inside'><span className="font-semibold text-white">4.Gameplay Rules:</span>
        <li className='mt-2 mb-1 list-inside'><span className="font-semibold">Starting the Round:</span>
            <li className="list-disc">Player A from each team picks a card randomly from the deck without looking at it</li>
            <li className="list-disc"> Player B sees the card and provides hints to their partner (Player A) to help them guess the card. </li></li> 
        <li className="list-disc">Hints must be descriptive but cannot directly say the word, number, or symbol on the card</li>
        <li className='mt-2 mb-1 list-inside'><span className="font-semibold">Examples of allowed hints:</span>
            <li className="list-disc"> If the card shows "Heart," the hint could be "It's related to love"</li>
            <li className="list-disc"> If the card shows "King," the hint could be "A royal figure"</li>
        </li>
        <li className='mt-2 mb-1 list-inside'><span className="font-semibold">Examples of prohibited hints:</span>
            <li className="list-disc"> Saying "It starts with H"</li>
            <li className="list-disc"> Drawing shapes or using hand gestures</li>
        </li>
        </li>
        
       </ul>
       <h4 className="text-2xl font-semibold mb-2 mt-4 text-purple-200"> Guessing Rules:</h4>
       <ul className='mt-2 mb-1 list-inside text-xl text-gray-300'>
        <li className="list-disc"> Player A must say their guess aloud</li>
        <li className="list-disc"> Players can make multiple guesses, but the first correct guess wins the round</li>
       </ul>
       <h4 className="text-xl font-semibold mt-3 text-purple-200">  Simultaneous Play:</h4>
       <ul className='mt-1 mb-1 list-inside text-xl text-gray-300'>
        <li className="list-disc">  Both teams play at the same time</li>
        <li className="list-disc">The first team to correctly guess their card wins the round</li>
        </ul>
      
        <h4 className="text-2xl font-semibold mb-2 mt-4 text-purple-200">Scoring:</h4>
       <ul className='mt-3 mb-1 list-inside text-xl text-gray-300'>
        <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">1.Points:</span>
        <li className="list-disc"> A correct guess earns the team 1 point</li> 
        </li> 
        <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">2.Winning a Round</span>
            <li className="list-disc"> The team whose Player A guesses the card first wins the round</li>
        </li>
        <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">3.Tournament Format:</span>
            <li className="list-disc"> Teams play multiple rounds in a knockout or points-based system</li>
            <li className="list-disc"> The team with the most points at the end of all rounds wins the game</li>
        </li>
       </ul>
       <h4 className="text-2xl font-semibold mb-2 mt-4 text-purple-200">Prohibited Actions:</h4>
       <ul className='mt-3 list-inside text-xl text-gray-300'>
        <li className='mt-2 mb-1 list-inside'><span className="font-semibold"> Player B (hint-giver) cannot:</span>
            <li className="list-disc"> Use gestures or body language</li> 
            <li className="list-disc"> Speak in a way that directly spells out or reveals the card's name</li>
            </li>
            <li className='mt-2 mb-1 list-inside'><span className="font-semibold">Player A (guesser) cannot:</span>
            <li className="list-disc">Peek at the card</li>
            </li>
        </ul>
       </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">ROUND-4</h2>
        <h3 className="text-2xl font-bold mb-4 text-purple-200"> Pyramid Making with Balloons</h3>
        <h4 className="text-2xl font-semibold mb-4 text-purple-200">Objective:</h4>
        <p className="text-gray-300 text-xl leading-relaxed">
        Teams of connected players (linked by elbows) race together over a distance of 10 or 20 meters. Midway through the race, they collect balls and finish by placing them into cups. The first team to complete the task wins and advances to the next round, while the others are eliminated  </p>
       <h4 className="text-2xl font-semibold mb-1 mt-2 text-purple-200">Rules and Guidelines</h4>
       <h4 className="text-2xl font-semibold mb-2 text-purple-200">Game Setup:</h4>
       <ul className='mt-3 list-inside text-xl text-gray-300'>
        <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">1. Materials Needed:</span>
        <li className="list-disc"> Plastic or paper cups (6–10 cups per participant)</li>
        <li className="list-disc"> Balloons (1–2 per participant)</li>
        <li className="list-disc"> A flat surface for constructing the pyramid</li></li>
        <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">2. Player Arrangement:</span>
        <li className="list-disc">  Each player has their own set of cups and balloons.</li>
        <li className="list-disc">Players must work on separate, clearly marked areas to avoid interference</li>
       </li>  
       <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">3. Starting Signal:</span>
        <li className="list-disc"> A referee counts down from 3 and says “Start”</li>
        </li>
       
       </ul>
       <h4 className="text-2xl font-semibold mb-2 mt-3 text-purple-200"> Gameplay Rules:</h4>
       <ul className='mt-3 list-inside text-xl text-gray-300'>
        <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">1. Inflating the Balloon:</span>
        <li className="list-disc"> Players must inflate the balloon using their mouth</li>
        <li className="list-disc"> The balloon can only be inflated during the game (pre-inflated balloons are not allowed)</li>
       </li>
        <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">2. Lifting the Cups:</span>
        <li className="list-disc">  Players use the inflated balloon to lift and move the cups to the pyramid-building area</li>
        <li className="list-disc">Hands can only touch the balloon, not the cups</li>
       </li>  
       <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">3. Building the Pyramid:</span>
        <li className="list-disc">The pyramid must be constructed with the base first, typically 3–4 cups wide depending on the total number of cups</li>
        <li className="list-disc">Cups must be stacked securely, forming a complete pyramid structure</li>
         </li>
       <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">4. Winning the Match:</span>
        <li className="list-disc"> The first player to build a stable pyramid wins the match</li> 
        <li className="list-disc">Stability is determined by the pyramid standing for at least 3 seconds without collapsing</li>
       </li>
       <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">5. In Case of a Tie:</span>
        <li className="list-disc">If both players finish at the same time, the referee may ask for an additional round or introduce a time-based challenge (e.g.,
            disassembling and rebuilding the pyramid)</li> 
        </li>
        </ul>
        
       <h4 className="text-2xl font-semibold mb-2 mt-4 text-purple-200">Prohibited Actions:</h4>
       <ul className='mt-3 list-inside text-xl text-gray-300'>
        <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">1. Players cannot:</span>
            <li className="list-disc">  Touch the cups directly with their hands or any part of their body</li> 
            <li className="list-disc"> Use tools or objects other than the balloon to lift or move the cups.</li>
            <li className="list-disc">Interfere with their opponent’s setup.</li>
           </li>
           <li className='mt-2 mb-1 list-inside font-semibold text-white'>2. Any violation results in immediate disqualification</li>
        </ul>
        <h4 className="text-2xl font-semibold mb-2 mt-4 text-purple-200">Scoring and Tournament Format:</h4>
       <ul className='mt-3 list-inside text-xl text-gray-300'>
        <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">1. Match Scoring:</span>
            <li className="list-disc">Each match is won by the first player to complete a stable pyramid</li>
             </li>
        <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">2. Tournament Format:</span>
            <li className="list-disc"> Single-elimination, double-elimination, or points-based formats can be used depending on the number of participants</li>
            </li>  
       </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">ROUND-5</h2>
        <h3 className="text-2xl font-bold mb-4 text-purple-200"> Bottle Flip Challenge
        </h3>
        <h4 className="text-2xl font-semibold mb-4 text-purple-200">Objective:</h4>
        <p className="text-gray-300 text-xl leading-relaxed">
        To flip a bottle and make it land upright 13 times. The player who successfully flips the bottle 13 times first wins the match  </p>
       <h4 className="text-2xl font-semibold mb-1 mt-2 text-purple-200">Rules and Guidelines</h4>
       <h4 className="text-2xl font-semibold mb-2 text-purple-200">Game Setup:</h4>
       <ul className='mt-3 list-inside text-xl text-gray-300'>
        <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">1. Materials Needed:</span>
        <li className="list-disc"> Two identical plastic bottles filled with water (approximately 1/3 full for optimal flipping)</li>
        <li className="list-disc"> A flat and stable surface for flipping</li>
       </li>
        <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">2. Player Arrangement:</span>
        <li className="list-disc">Two players stand side by side or opposite each other with their bottles</li>
        <li className="list-disc">  A referee or organizer oversees the game to keep track of flips</li>
       </li>  
       <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">3. Starting Signal:</span>
        <li className="list-disc"> The referee counts down from 3 and says “Start”</li>
        </li>
       </ul>
       <h4 className="text-2xl font-semibold mb-3 mt-4 text-purple-200"> Gameplay Rules:</h4>
       <ul className='mt-3 list-inside text-xl text-gray-300'>
        <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">1. Flipping the Bottle:</span>
        <li className="list-disc"> Players must flip the bottle using one hand and attempt to make it land upright on the surface</li>
        <li className="list-disc"> Only one bottle flip can be attempted at a time</li>
       </li>
        <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white"> 2. Counting Successful Flips:</span>
        <li className="list-disc"> A flip counts as successful only if the bottle lands upright (standing position) and remains stable for at least 1 second</li>
        <li className="list-disc">  The referee confirms and counts successful flips</li>
       </li>  
       <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white"> 3. Winning the Match:</span>
        <li className="list-disc"> The first player to successfully flip the bottle 13 times wins the match</li>
        </li>
       <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">4. Tie Situations:</span>
        <li className="list-disc">  If both players achieve 13 flips at the same time, the match continues with a sudden-death round (e.g., the next successful flip
            wins)</li> 
        </li>
        </ul>
      
        <h4 className="text-2xl font-semibold mb-4 mt-4 text-purple-200">Prohibited Actions:</h4>
       <ul className='mt-3 list-inside text-xl text-gray-300'>
        <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">1. Players cannot:</span>
            <li className="list-disc"> Use two hands to flip the bottle.</li> 
            <li className="list-disc"> Interfere with their opponent’s flips</li>
            <li className="list-disc"> Alter the bottle’s water level during the game</li>
           </li>
           <li><span className="font-semibold text-white">2. Any violation results in immediate disqualification</span></li>
        </ul>
        <h4 className="text-2xl font-semibold mb-2 mt-3 text-purple-200">Scoring and Tournament Format:</h4>
       <ul className='mt-2 list-inside text-xl text-gray-300'>
        <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">1. Match Scoring:</span>
            <li className="list-disc"> Each match is won by the first player to complete 13 successful flips</li>
             </li>
        <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">2. Tournament Format:</span>
            <li className="list-disc"> Single-elimination, double-elimination, or points-based format can be used depending on the number of participants</li>
            </li>  
       </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">ROUND-6</h2>
        <h3 className="text-2xl font-bold mb-4 text-purple-200"> Balloon Cup Challenge
        </h3>
        <h4 className="text-2xl font-semibold mb-4 text-purple-200">Objective:</h4>
        <p className="text-gray-300 text-xl leading-relaxed">
        To complete an obstacle course by moving a cup using only air blown from a balloon, while also attempting to disrupt the opponent's
 cup to earn extra points. The player with the highest score at the end wins </p>
       <h4 className="text-2xl font-semibold mb-1 mt-2 text-purple-200">Rules and Guidelines</h4>
       <h4 className="text-2xl font-semibold mb-2 text-purple-200">Game Setup:</h4>
       <ul className='mt-3 list-inside text-xl text-gray-300'>
        <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">1. Materials Needed:</span>
        <li className="list-disc"> Plastic or paper cups (1 cup per player).</li>
        <li className="list-disc">Balloons (1 per player)</li>
        <li className="list-disc">  A clearly defined obstacle course with various challenges (e.g., zig-zag lines, ramps, or turns)</li></li>
        <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">2. Player Arrangement:</span>
        <li className="list-disc"> Two players compete simultaneously on parallel courses</li>
        <li className="list-disc">Both players have their own cups and balloons but share an overlapping play area where they can interact</li>
       </li>  
       <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">3. Starting Signal:</span>
        <li className="list-disc"> The referee counts down from 3 and says “Start”</li>
         </li>
      </ul>
       <h4 className="text-2xl font-semibold mb-2 mt-4 text-purple-200"> Gameplay Rules:</h4>
       <ul className='mt-3 list-inside text-xl text-gray-300'>
        <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">1. Moving the Cup:</span>
        <li className="list-disc"> Players must inflate their balloon and use the air to push or guide the cup through the obstacle course</li>
        <li className="list-disc">Players cannot touch the cup directly with their hands or any part of their body</li>
       </li>
        <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">2. Completing the Course:</span>
        <li className="list-disc">  A successful completion of the obstacle course earns 5 points</li>
        <li className="list-disc"> Players can reset at the starting line to attempt the course again for additional points</li>
       </li>  
       <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">3. Cup Falling:</span>
        <li className="list-disc"> If a player’s cup falls off the course, they must return to the starting line and restart</li>
        <li className="list-disc">  Points already earned are not lost</li>
         </li>
       <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">4. Disrupting the Opponent:</span>
        <li className="list-disc"> Players can use their balloon to blow air at the opponent’s cup to knock it off the course</li> 
        <li className="list-disc"> Successfully causing the opponent’s cup to fall earns 2 extra points</li>
       </li>
       <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white">5. Winning the Game:</span>
        <li className="list-disc">The player with the most points at the end of the time limit (e.g., 3–5 minutes) wins the game</li>
       </li>
        </ul>
      
       <h4 className="text-2xl font-semibold mb-2 mt-4 text-purple-200">Prohibited Actions:</h4>
       <ul className='mt-3 list-inside text-xl text-gray-300'>
        <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white"> 1. Players cannot:</span>
            <li className="list-disc"> Touch the cups directly with their hands or body</li> 
            <li className="list-disc"> Physically interfere with the opponent’s balloon or person</li>
            <li className="list-disc"> Block the opponent’s progress with physical barriers</li>
           </li>
           <li className='mt-2 mb-1'><span className="font-semibold text-white"> 2. Any violation results in a 2-point penalty</span></li>
        </ul>
        <h4 className="text-2xl font-semibold mb-2 mt-4 text-purple-200"> Scoring Summary:</h4>
       <ul className='mt-2 mb-1 list-inside text-xl text-gray-300'>
        <li> <span className="font-semibold text-white">5 Points:</span> For completing the obstacle course successfully.
             </li>
        <li><span className="font-semibold text-white"> 2 Points:</span> For causing the opponent’s cup to fall off the course </li>  
       </ul>
       <h4 className="text-2xl font-semibold mb-2 mt-4 text-purple-200">Tournament Format:</h4>
       <ul className='mt-2 mb-1 list-inside text-xl text-gray-300'>
        <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white"> 1. Rounds and Scoring:</span>
            <li className="list-disc">  Matches are conducted in rounds with a set time limit (e.g., 3–5 minutes per round)</li>
            <li className="list-disc"> Total points are tallied at the end of the round.</li>
             </li>
        <li className='mt-2 mb-1 list-inside'><span className="font-semibold text-white"> 2. Advancing Players:</span>
            <li className="list-disc"> Players with the highest scores advance to the next round.</li>
            <li className="list-disc"> In case of a tie, a sudden-death round is played where the first player to earn any points wins</li>
            </li>  
       </ul>
      </section>

     
    </div>
  );
};

export default FunEventsRulebook;
