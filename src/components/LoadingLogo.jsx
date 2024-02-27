import { useState, useEffect } from 'react';
import birdSpin from "../assets/bird-spin.gif";

import "../styles/LoadingLogo.css";

const LoadingLogo = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request to fetch your content.
    // Replace this with your actual loading logic.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay

    // Cleanup function to clear the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    isLoading ? (
      <div className="loading-logo">
        <img src={birdSpin} alt="Loading" />
      </div>
    ) : null
  );
};

export default LoadingLogo;