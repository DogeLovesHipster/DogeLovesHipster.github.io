import { useState } from 'react';

import RangeMap from '../assets/images/RangeMap.jpg';

import '../styles/ItemCard.css';

const ItemCard = ({ item }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % item.images.length);
    };

    const handlePreviousImage = () => {
        setCurrentImageIndex((currentImageIndex - 1 + item.images.length) % item.images.length);
    };

    return (
        <div className="itemCard-card">
            <h4>{item.name}</h4>
            <div className="image-slideshow">
                <button onClick={handlePreviousImage}>&lt;</button>
                <img src={item.images[currentImageIndex]} alt={item.name} />
                <button onClick={handleNextImage}>&gt;</button>
            </div>
            <p>{item.caption}</p>
            <h3>Conservation Status: {item.conservationStatus}</h3>
            <p>{item.description}</p>
            <div className="MapContainer">
                <img src={RangeMap} alt="Range Map" className='RangeMap' />
                <div className="circle"></div>
                <div className="legend">
                    <div className="color-circle"></div>
                    <span className="legend-text">Year Round</span>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;