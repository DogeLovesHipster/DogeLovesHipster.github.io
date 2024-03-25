import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import SpaceBackground from '../components/SpaceBackground';
import CommentingSection from '../components/CommentingSection';

import BirdLogo from '../assets/images/WikipediaBird.png';
import '../styles/HomePage.css';

const HomePage = () => {

    return (
        <>
        <div className='home-page'>
        <SpaceBackground />
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
            </div>
        </>
    );
};

export default HomePage;