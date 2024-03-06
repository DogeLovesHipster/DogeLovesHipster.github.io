import React from 'react';
import SoundButton from './SoundButton';

const SoundButtonGroup = ({ sounds }) => {
    return (
        <>
            {sounds.map((sound, index) => (
                <SoundButton
                    key={index}
                    audioSrc={sound.src}
                    callType={sound.callType}
                    date={sound.date}
                    citation={sound.citation}
                    duration={sound.duration}
                />
            ))}
        </>
    );
};

export default SoundButtonGroup;