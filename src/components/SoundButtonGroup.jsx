import React from 'react';
import SoundButton from './SoundButton';

const sounds = [
  { src: 'src/assets/sounds/Calls1.mp3', callType: 'Call 1', date: '2022-01-01', citation: 'Recorded by John Doe', duration: '0:30' },
  { src: 'src/assets/sounds/Calls2.mp3', callType: 'Call 2', date: '2022-01-02', citation: 'Recorded by Jane Doe', duration: '0:45' },
  { src: 'src/assets/sounds/Calls3.mp3', callType: 'Call 3', date: '2022-01-03', citation: 'Recorded by John Doe', duration: '1:00' },
  { src: 'src/assets/sounds/Drum1.mp3', callType: 'Drum 1', date: '2022-01-04', citation: 'Recorded by Jane Doe', duration: '0:30' },
  { src: 'src/assets/sounds/JuvenileCall1.mp3', callType: 'Juvenile Call 1', date: '2022-01-05', citation: 'Recorded by John Doe', duration: '0:45' },
];

const SoundButtonGroup = () => {
  return (
    <div>
      {sounds.map((sound, index) => (
        <SoundButton key={index} {...sound} />
      ))}
    </div>
  );
};

export default SoundButtonGroup;