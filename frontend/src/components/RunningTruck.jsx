import React, { useState, useRef } from 'react';
import BackgroundVideo from '../assets/video/movingTruck.mp4';
import PassingTruckAudio from '../assets/audio/passingTruckAudio.mp3';
import truckHorn from '../assets/audio/truckHorn.wav';
import DeliveryBoxImg from '../assets/img/deliveryBox.png';

import Draggable from 'react-draggable';

const RunningTruck = ({ setIsTruckRunning }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const videoRef = useRef(null);
  const truckHornRef = useRef(null);

  const [draggedRight, setDraggedRight] = useState(false); // Track if dragged to the right

  const playMedia = () => {
    // Play truck horn sound
    truckHornRef.current.play();

    // Check if audio and video elements exist and then play them
    if (audioRef.current && videoRef.current) {
      // Stop the truck after 7 seconds
      setTimeout(() => {
        setIsTruckRunning(false);
      }, 7000);

      // Play both audio and video
      audioRef.current.play();
      videoRef.current.play();
      setIsPlaying(true); // Set state to true to prevent button click again
    }
  };

  const handleDrag = (e, data) => {
    
   
    console.log(data.x, data.y,draggedRight);
    if (data.x > 50 && !draggedRight) {
      setDraggedRight(true);
      playMedia(); 
    }
  };

  return (
    <div>
      {/* Background Video */}
      <video
        ref={videoRef}
        className="background-video fixed min-w-[100%] min-h-[100%] right-0 bottom-0"
        loop
        muted
      >
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Draggable Box - Trigger playMedia when dragged to the right */}
      {!isPlaying && (
        <Draggable
          position={null}
          grid={[25, 25]}
          scale={1}
          onDrag={handleDrag} // Use handleDrag to track movement
        >
          <div
            style={{
              position: 'absolute',
              top: '52%',
              left: '22%',
              transform: 'translate(-50%, -50%)',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              animation: 'pulse 1.5s infinite',
            }}
          >
            <img
              src={DeliveryBoxImg}
              alt="Delivery Box"
              style={{
                width: '80px',
                height: '80px',
                objectFit: 'contain',
              }}
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
