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
    console.log('Searching for:', searchTerm);

    if (searchTerm.toLowerCase() === 'red-cockaded woodpecker' || 'red cockaded woodpecker' || 'red-cockaded' || 'red cockaded') {
      navigate('/red-cockaded-woodpecker');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

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
        onKeyDown={handleKeyDown}
        placeholder="Search the Red-cockaded Woodpecker..."
        className="searchBar-input"
        list="birds"
      />
      <datalist id="birds">
        <option value="Red-cockaded Woodpecker" />
        <option value="Red Cockaded Woodpecker" />
        <option value="Red-cockaded" />
        <option value="Red Cockaded" />
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