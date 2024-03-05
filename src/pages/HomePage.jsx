import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import DropDownSearch from '../components/DropDownSearch';

import BirdLogo from '../assets/images/WikipediaBird.png';
import '../styles/HomePage.css';

const HomePage = () => {
    return (
        <>
        <div className='SmallMobile'>
            <h1>Birdpedia</h1>
            <h2>By Sergio Mendoza</h2>
            <img src={BirdLogo} alt="Wikipedia Bird" className='WikipediaBirdLogo' />
            <div className='HomeSearchBar'>
            <SearchBar />
            </div>
            </div>
            <div className='homeFooter'>
                <Footer />
            </div>
        </>
    );
};

export default HomePage;