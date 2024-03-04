import SearchBar from '../components/SearchBar.jsx';
import Footer from '../components/Footer.jsx';
import References from '../components/References.jsx';
import references from '../data/references.js';
import NavBar from '../components/NavBar.jsx';
import AnnouncementBanner from '../components/AnnouncementBanner.jsx';
import HeadingSection from '../components/HeadingSection.jsx';
import ItemCard from '../components/ItemCard.jsx';
import itemCardData from '../data/itemCardData.js';
import BriefingSection from '../components/BriefingSection.jsx';
import briefingData from '../data/briefingData.js';
import DescriptionSection from '../components/DescriptionSection.jsx';
import descriptionData from '../data/descriptionData.js';
import FireEcologySection from '../components/FireEcologySection.jsx';
import fireEcologyData from '../data/fireEcologyData.js';
import CommentingSection from '../components/CommentingSection.jsx';

import '../styles/RedCockadedWoodpecker.css';

const RedCockadedWoodpecker = () => {
    return (
        <>
            <NavBar />
            <div className='AligningContainer'>
                <AnnouncementBanner />
                <HeadingSection name="Red-Cockaded Woodpecker" />
                <div className='container__briefing__itemcard'>
                    {itemCardData.map((item, index) => (
                        <ItemCard key={index} item={item} />
                    ))}
                    <div className='containerContent'>
                        <BriefingSection briefings={briefingData.map(b => b.text)} />
                        <DescriptionSection descriptions={descriptionData.map(d => d.text)} />
                        <FireEcologySection fireEcology={fireEcologyData} />
                    </div>
                </div>
                <CommentingSection />
                <References referencesList={references} />
            </div>
            <Footer />
        </>
    );
};

export default RedCockadedWoodpecker;