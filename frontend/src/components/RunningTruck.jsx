import React, { useState, useRef } from 'react';
import BackgroundVideo from '../assets/video/movingTruck.mp4';
import PassingTruckAudio from '../assets/audio/passingTruckAudio.mp3';
import truckHorn from '../assets/audio/truckHorn.wav';
import DeliveryBoxImg from '../assets/img/deliveryBox.png';
import PointingDownIcon from '../assets/img/pointingDown.png';

import Draggable from 'react-draggable';

const RunningTruck = ({ setIsTruckRunning }) => {

  sessionStorage.setItem('runningTruckLoaded', true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const videoRef = useRef(null);
  const truckHornRef = useRef(null);

  const [draggedRight, setDraggedRight] = useState(false); // Track if dragged to the right
  const [isDragging, setIsDragging] = useState(false);

  const handleStart = () => {
    setIsDragging(true); // Update state when dragging starts
  };

  const handleStop = () => {
    setIsDragging(false); // Revert state when dragging stops
  };

  const playMedia = () => {
    // Play truck horn sound
    truckHornRef.current.play();

    // Check if audio and video elements exist and then play them
    if (audioRef.current && videoRef.current) {
      // Stop the truck after 7 seconds
      setTimeout(() => {
        setIsTruckRunning(false);
      }, 6500);

      // Play both audio and video
      audioRef.current.play();
      videoRef.current.play();
      setIsPlaying(true); // Set state to true to prevent button click again
    }
  };


  const handleDrag = (e, data) => {
    
    e.preventDefault();
   
    console.log(data.x, data.y,draggedRight);
    if (data.x > 50 && data.y>=-75 && !draggedRight) {
      setDraggedRight(true);
      playMedia(); 
    }
  };

  return (
    <div >
    {/* Instruction Text */}
    {!isPlaying && (
      <div className="fixed bottom-[30%] md:bottom-0 sm:top-[450px] left-1/2 z-20 ">
        <div className="transform -translate-x-1/2 bg-black bg-opacity-60 text-white text-base sm:text-lg px-3 sm:px-4 py-2 rounded-md text-center">
        To visit the website drag the box into truck !
        </div>
        {/* <img
          src={PointingDownIcon}
          className="transform -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 object-contain z-20 animate-bounce"
        /> */}
      </div>
    )}

  {/* Background Video */}
  <video
    ref={videoRef}
    className="fixed min-w-full min-h-full right-0 bottom-0 bg-black"
    loop
    muted
  >
    <source src={BackgroundVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Draggable Box - Trigger playMedia when dragged to the right */}
  {!isPlaying && (
    <Draggable
     
      handle=".handle"
      defaultPosition={{ x: 0, y: 0 }}
      position={null}
      grid={[25, 25]}
      scale={1}
      onDrag={handleDrag} 
      onStart={handleStart}
      onStop={handleStop}

    >
      <div className={`handle absolute top-1/2 left-8 md:left-1/4 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center animate-pulse ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}>
        <img
          src={DeliveryBoxImg}
          alt="Delivery Box"
          className="w-12 h-12 md:w-20 md:h-20 object-contain z-0"
          draggable="false" ondragstart="return false"
        />
      </div>
    </Draggable>
  )}


  {/* Audio Elements */}
  <audio ref={truckHornRef}>
    <source src={truckHorn} type="audio/mpeg" />
  </audio>
  <audio ref={audioRef} loop>
    <source src={PassingTruckAudio} type="audio/mpeg" />
    Your browser does not support the audio element.
  </audio>
</div>
  );
};

export default RunningTruck;
