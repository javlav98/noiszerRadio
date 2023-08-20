import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Searchbutton.css';

const SearchBar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchClick = () => {
    setShowSearchBar(!showSearchBar);
  };

  const handleSearch = () => {
    // Handle the search logic here
    console.log('Search term:', searchTerm);
  };

  return (
    <div className="search-bar">
      <button className="search-icon" onClick={handleSearchClick}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <div className={`search-dropdown ${showSearchBar ? 'show' : ''}`}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
