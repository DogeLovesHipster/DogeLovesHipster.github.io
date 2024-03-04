import React, { useRef } from 'react';
import { FaVolumeUp } from 'react-icons/fa';

const AudioButton = ({ audioSrc, callType, date, citation, duration }) => {
  const audioRef = useRef();

  const playSound = () => {
    audioRef.current.play();
  };

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