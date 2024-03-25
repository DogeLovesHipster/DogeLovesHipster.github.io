import SoundButton from './SoundButton';

/**
 * Renders a group of sound buttons.
 *
 * @component
 * @param {Object[]} sounds - An array of sound objects.
 * @returns {JSX.Element} The rendered SoundButtonGroup component.
 */

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