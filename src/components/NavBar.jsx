import BirdLogo from '../assets/images/WikipediaBird.png';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <a href="/">
        <div className="navbar__logo">
          <img src={BirdLogo} alt="Wikipedia Bird" className='WikipediaBirdLogoNavbar'/>
        </div>
      </a>
      <ul className="navbar__links">
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;