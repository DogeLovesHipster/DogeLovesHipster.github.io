import { useEffect, useRef, createRef } from 'react';

import Footer from '../components/Footer.jsx';
import References from '../components/References.jsx';
import references from '../data/references.js';
import NavBar from '../components/NavBar.jsx';
import AnnouncementBanner from '../components/AnnouncementBanner.jsx';
import BaseSection from '../components/BaseSection.jsx';
import sectionData from '../data/pageContent.js';
import HeadingSection from '../components/HeadingSection.jsx';
import ItemCard from '../components/ItemCard.jsx';
import itemCardData from '../data/itemCardData.js';
import VideoPlayer from '../components/VideoPlayer.jsx';
import CommentingSection from '../components/CommentingSection.jsx';
import SpaceBackground from '../components/SpaceBackground.jsx';

import '../styles/RedCockadedWoodpecker.css';

const RedCockadedWoodpecker = () => {
    const sectionRefs = useRef(sectionData.map(() => createRef()));
    
    return (
        <>
            <div className='smallDeviceNavbar'>
                <NavBar />
            </div>
            <div className='SpaceBack'>
                <SpaceBackground />
            </div>
            <div className='AligningContainer'>
                <AnnouncementBanner />
                <HeadingSection name="Red-Cockaded Woodpecker" />
                <div className='container__briefing__itemcard'>
                    {itemCardData.map((item, index) => (
                        <ItemCard key={index} item={item} />
                    ))}
            <div className='containerContent'>
                {sectionData.map((section, index) => (
                    <BaseSection 
                        ref={sectionRefs.current[index]} 
                        key={index} 
                        title={section.title} 
                        text={section.text} 
                        figure={section.figure} 
                        break={section.break} 
                    />
                ))}
                        <div className='VideoPlayer1'>
                            <h3>Informational video from PBS</h3>
                            <VideoPlayer videoUrl="https://player.pbs.org/viralplayer/3066847518/" />
                        </div>
                    </div>
                </div>
                <CommentingSection />
                <References referencesList={references} />
            </div>
            <div className="RedCockadedWoodpeckerFooter">
                <Footer />
            </div>
        </>
    );
};

export default RedCockadedWoodpecker;