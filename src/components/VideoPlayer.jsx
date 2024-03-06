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