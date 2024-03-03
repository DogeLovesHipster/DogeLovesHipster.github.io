import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import References from '../components/References';
import references from '../data/references';
import NavBar from '../components/NavBar';
import AnnouncementBanner from '../components/AnnouncementBanner';
import HeadingSection from '../components/HeadingSection';
import ItemCard from '../components/ItemCard';
import itemCardData from '../data/itemCardData';

import '../styles/RedCockadedWoodpecker.css';


const RedCockadedWoodpecker = () => {
    return (
        <>
            <NavBar />
            <AnnouncementBanner />
            <HeadingSection name="Red-Cockaded Woodpecker" />
            <div>
                {itemCardData.map((item, index) => (
                    <ItemCard key={index} item={item} />
                ))}
            </div>
            <References referencesList={references} />
            <Footer />
        </>
    );
};

export default RedCockadedWoodpecker;