import { useState, useEffect } from 'react';
import images from '../../src/data/bannerImages.js';

import '../styles/AnnouncementBanner.css';

const AnnouncementBanner = () => {
    const [showBanner, setShowBanner] = useState(true);
    const [bannerImage, setBannerImage] = useState(null);

    useEffect(() => {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        setBannerImage(randomImage);
    }, []);

    const handleClose = () => {
        const bannerElement = document.querySelector('.announcement-banner');
        bannerElement.style.transform = 'scaleY(0)';
        setTimeout(() => setShowBanner(false), 300);
    };

    return (
        <>
            {showBanner && bannerImage && (
                <div className="announcement-banner" style={{ backgroundImage: `url(${bannerImage.image})` }}>
                    <a href={bannerImage.redirect} className="banner-link">
                        <p>{bannerImage.text}</p>
                        <button className="close-button" onClick={handleClose}>
                            X
                        </button>
                    </a>
                </div>
            )}
        </>
    );
}

export default AnnouncementBanner;