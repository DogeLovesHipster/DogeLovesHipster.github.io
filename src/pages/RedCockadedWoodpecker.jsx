import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import References from '../components/References';
import references from '../data/references';
import NavBar from '../components/NavBar';
import AnnouncementBanner from '../components/AnnouncementBanner';
import HeadingSection from '../components/HeadingSection';
import ItemCard from '../components/ItemCard';
import itemCardData from '../data/itemCardData';
import BriefingSection from '../components/BriefingSection';
import briefingData from '../data/briefingData';
import DescriptionSection from '../components/DescriptionSection';
import descriptionData from '../data/descriptionData';
import FireEcologySection from '../components/FireEcologySection';
import fireEcologyData from '../data/fireEcologyData';
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
                        <FireEcologySection fireEcology={fireEcologyData.map(f => f.text)} />
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