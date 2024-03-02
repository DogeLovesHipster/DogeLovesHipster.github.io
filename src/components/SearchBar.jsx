import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import '../styles/SearchBar.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const navigate = useNavigate();

  const handleSearch = () => {
    // Perform search logic here
    console.log('Searching for:', searchTerm);

    // Navigate to Red-cockaded Woodpecker page if searchTerm matches
    if (searchTerm.toLowerCase() === 'red-cockaded woodpecker') {
      navigate('/red-cockaded-woodpecker'); // Use navigate instead of history.push
    }
  };

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  // Update display text of selected option
  useEffect(() => {
    const selectElement = document.querySelector('.searchBar-select');
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    selectedOption.text = selectedLanguage.toUpperCase();
  }, [selectedLanguage]);

  return (
    <div className="searchBar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search the Red-cockaded Woodpecker..."
        className="searchBar-input"
        list="birds"
      />
      <datalist id="birds">
        <option value="Red-cockaded Woodpecker" />
      </datalist>
      <select value={selectedLanguage} onChange={handleLanguageChange} className="searchBar-select">
        <option value="en">EN</option>
      </select>
      <button onClick={handleSearch} className="searchBar-button">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default SearchBar;