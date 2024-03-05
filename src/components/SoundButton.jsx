import React, { useRef } from 'react';
import { FaVolumeUp } from 'react-icons/fa';

const AudioButton = ({ audioSrc, callType, date, citation, duration }) => {
  console.log('AudioButton props:', { audioSrc, callType, date, citation, duration });


  const audioRef = useRef();

  const playSound = () => {
    console.log('Playing sound:', audioSrc);
    audioRef.current.play();
  };

  const handleError = (e) => {
    console.error('Error playing sound:', e);
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <button onClick={playSound} style={{ marginRight: '10px' }}>
        <FaVolumeUp />
      </button>
      <div>
        <p>{callType}</p>
        <p>{date}</p>
        <p>{citation}</p>
      </div>
      <audio ref={audioRef} src={audioSrc} style={{ display: 'none' }}></audio>
      <div style={{ marginLeft: 'auto' }}>
        <p>{duration}</p>
      </div>
    </div>
  );
};

export default AudioButton;