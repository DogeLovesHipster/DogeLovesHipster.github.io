import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import DropDownSearch from '../components/DropDownSearch';

import BirdLogo from '../assets/images/WikipediaBird.png';
import '../styles/HomePage.css';

const HomePage = () => {
    return (
        <>
            <div className='content'>
                <div>
                    <h1>Welcome to Wikipedia Bird</h1>
                    <h4>The Free Encyclopedia</h4>
                </div>
                <div>
                    <img src={BirdLogo} alt="Wikipedia Bird" className='WikipediaBirdLogo' />
                </div>
                <div className='SearchBarHomePage'>
                    <SearchBar />
                </div>
            </div>
            <div className='Footer'>
                <Footer />
            </div>
        </>
    );
};

export default HomePage;