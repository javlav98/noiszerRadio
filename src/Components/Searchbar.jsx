import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai'; // Import the search icon
import './Searchbar.css';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    // Pass the search text to the parent component for further processing
    onSearch(searchText);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch} className='btn'>
        <AiOutlineSearch />
      </button>
    </div>
  );
};

export default SearchBar;
