import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import PlayPauseButton from './Playbutton';
import SearchBar from './Searchbutton';
import MoreIconWithDropdown from './Moremenu';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const streamUrl = 'your_radio_stream_url'; // Replace with actual stream URL

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div >
      <nav className="navbar">
        <div className="navbar-container">
          <div className="menu-icon" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
          <Link to="/" className="navbar-logo">
            noiszer
          </Link>
          <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <NavLink
                to="/"
                exact
                activeClassName="active"
                onClick={toggleMenu}
              >
                home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                activeClassName="active"
                onClick={toggleMenu}
              >
                about
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/schedule"
                activeClassName="active"
                onClick={toggleMenu}
              >
                schedule
              </NavLink>

            </li>
            <li className="nav-item">
              <NavLink
                to="/djs"
                activeClassName="active"
                onClick={toggleMenu}
              >
                dj's
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                activeClassName="active"
                onClick={toggleMenu}
              >
                contact
              </NavLink>
            </li>


            <li className="nav-item">
              <NavLink
                to="/donate"
                activeClassName="active"
                onClick={toggleMenu}
              >
                donate
              </NavLink>

            </li>

          </ul>
          <div className="toolnav">
          <PlayPauseButton streamUrl={streamUrl} />
          <SearchBar />
          <MoreIconWithDropdown />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
