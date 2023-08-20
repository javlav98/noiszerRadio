import React, { useState } from 'react';
import { FaEllipsisV, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Moremenu.css';

const MoreIconWithDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="more-icon-container">
      <button className={`more-button ${showDropdown ? 'active' : ''}`} onClick={toggleDropdown}>
        <FaEllipsisV />
      </button>
      <div className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
        <a href="https://www.facebook.com">
          <FaFacebook />
        </a>
        <a href="https://www.twitter.com">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default MoreIconWithDropdown;
