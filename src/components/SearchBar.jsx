import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import '../styles/SearchBar.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleSearch = () => {
    // Perform search logic here
    console.log('Searching for:', searchTerm);
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
        placeholder="Search a Bird..."
        className="searchBar-input"
      />
      <select value={selectedLanguage} onChange={handleLanguageChange} className="searchBar-select">
        <option value="en">EN</option>
        <option value="es">ES</option>
        <option value="fr">FR</option>
      </select>
      <button onClick={handleSearch} className="searchBar-button">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default SearchBar;