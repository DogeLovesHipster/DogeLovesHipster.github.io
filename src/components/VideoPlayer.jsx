/**
 * Renders a video player component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.videoUrl - The URL of the video to be displayed.
 * @returns {JSX.Element} - The rendered video player component.
 */

const VideoPlayer = ({ videoUrl }) => {
    return (
        <iframe 
            width="512" 
            height="332" 
            src={videoUrl} 
            allowFullScreen 
            allow="encrypted-media" 
            style={{border: 0}}
        />
    );
};

export default VideoPlayer;