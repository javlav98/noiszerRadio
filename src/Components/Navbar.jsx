import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import SearchBar from './Searchbar'; // Import your SearchBar component
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setMenuActive(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <h1>noiszer</h1>
          </Link>

          <SearchBar /> {/* Add your SearchBar component here */}
          
          <div className="menu-icon" onClick={toggleMenu}>
            {menuActive ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
          <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <Link to="/" onClick={closeMenu}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" onClick={closeMenu}>
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/schedule" onClick={closeMenu}>
                SCHEDULE
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/djs" onClick={closeMenu}>
                DJ'S
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" onClick={closeMenu}>
                CONTACT
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/donate" onClick={closeMenu}>
                DONATE
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
