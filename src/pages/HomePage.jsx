import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import DropDownSearch from '../components/DropDownSearch';
import BirdScene from '../components/BirdScene';

import BirdLogo from '../assets/images/WikipediaBird.png';
import '../styles/HomePage.css';

const HomePage = () => {
    return (
        <>
            <BirdScene />
            <div className='content'>
                <div>
                    <h1>Welcome to Wikipedia Bird</h1>
                    <h4>The Free Encyclopedia</h4>
                </div>
                <nav>
                    <img src={BirdLogo} alt="Wikipedia Bird" className='WikipediaBirdLogo' />
                </nav>
                <div className='SearchBarHomePage'>
                    <SearchBar />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default HomePage;