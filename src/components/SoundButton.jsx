import { useRef, useState } from 'react';
import { FaVolumeUp, FaPause } from 'react-icons/fa';
import CountdownTimer from './CountdownTimer';

/**
 * A component that represents an audio button.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.audioSrc - The source URL of the audio file.
 * @param {string} props.callType - The type of the call.
 * @param {string} props.date - The date of the call.
 * @param {string} props.citation - The citation for the call.
 * @param {number} props.duration - The duration of the audio file in seconds.
 * @returns {JSX.Element} The rendered AudioButton component.
 */
const AudioButton = ({ audioSrc, callType, date, citation, duration }) => {
    const audioRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleEnd = () => {
        setIsPlaying(false);
    };

    const handleError = (e) => {
        console.error('Error playing sound:', e);
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <button onClick={handlePlayPause} style={{ marginRight: '10px' }}>
                {isPlaying ? <FaPause /> : <FaVolumeUp />}
            </button>
            <div>
                <p>{callType}</p>
                <p>{date}</p>
                <p>{citation}</p>
            </div>
            <audio ref={audioRef} src={audioSrc} onEnded={handleEnd} onError={handleError} style={{ display: 'none' }}></audio>
            <div style={{ marginLeft: 'auto' }}>
                <CountdownTimer duration={duration} start={isPlaying} />
            </div>
        </div>
    );
};

export default AudioButton;