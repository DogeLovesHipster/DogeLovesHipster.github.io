import { useState } from 'react';

import RangeMap from '../assets/images/RangeMap.jpg';
import SoundButtonGroup from './SoundButtonGroup';
import ScientificClassification from './ScientificClassification';
import ScientificClassificationData from '../data/scientificClassification.js';

import '../styles/ItemCard.css';

const ItemCard = ({ item }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isSoundGroupVisible, setSoundGroupVisible] = useState(false);

    const handleNextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % item.images.length);
    };

    const handlePreviousImage = () => {
        setCurrentImageIndex((currentImageIndex - 1 + item.images.length) % item.images.length);
    };

    const toggleSoundGroup = () => {
        setSoundGroupVisible(!isSoundGroupVisible);
    };

    return (
        <div className={`itemCard-card ${isSoundGroupVisible ? 'itemCard-card-expanded' : ''}`}>
            <h4>{item.name}</h4>
            <div className="image-slideshow">
                <button onClick={handlePreviousImage}>&lt;</button>
                <img src={item.images[currentImageIndex]} alt={item.name} />
                <button onClick={handleNextImage}>&gt;</button>
            </div>
            <p>{item.caption}</p>
            <h4>Conservation Status: {item.conservationStatus}</h4>
            <p>{item.description}</p>
            <div className="MapContainer">
                <img src={RangeMap} alt="Range Map" className='RangeMap' />
                <div className="circle"></div>
                <div className="legend">
                    <div className="color-circle"></div>
                    <span className="legend-text">Year Round</span>
                </div>
            </div>
            <div className='ScientificSection'>
                {ScientificClassificationData.map((item, index) => (
                    <ScientificClassification
                    key={index}
                    domain={item.domain}
                    kingdom={item.kingdom}
                    phylum={item.phylum}
                    class={item.class}
                    order={item.order}
                    family={item.family}
                    genus={item.genus}
                    species={item.species}
                    />
                ))}
            </div>
            <button onClick={toggleSoundGroup}>
                {isSoundGroupVisible ? 'Hide Sounds' : 'Show Sounds'}
            </button>
            {isSoundGroupVisible && (
                <div className='sound-button-group'>
                    <SoundButtonGroup sounds={item.sounds} />
                </div>
            )}
        </div>
    );
};

export default ItemCard;