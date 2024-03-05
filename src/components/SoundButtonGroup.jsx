import SoundButton from './SoundButton';

const SoundButtonGroup = ({ sounds }) => {
  return (
    <div>
      {sounds.map((sound, index) => (
        <SoundButton key={index} audioSrc={sound.src} {...sound} />
      ))}
    </div>
  );
};

export default SoundButtonGroup;