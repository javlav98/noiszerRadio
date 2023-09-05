import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaPlay, FaPause, FaTimes } from 'react-icons/fa'; // Import play, pause, menu, and close icons
import Marquee from './marquee';

import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); // Track play/pause state
  const streamUrl = 'your_radio_stream_url'; // Replace with actual stream URL

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const togglePlayPause = () => {
    // Add logic here to play or pause audio based on the isPlaying state
    // Toggle the isPlaying state accordingly
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <Marquee />
      <nav className="navbar">
        <div className="navbar-container">
          <div className="menu-icon" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
          <Link to="/" className="navbar-logo">
            noiszer
          </Link>
          <div className="toolnav" onClick={togglePlayPause}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </div>
        </div>
      </nav>
      <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <li className="nav-item">
          <NavLink to="/" exact activeClassName="active" onClick={toggleMenu}>
            home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" activeClassName="active" onClick={toggleMenu}>
            about
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/schedule" activeClassName="active" onClick={toggleMenu}>
            schedule
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/djs" activeClassName="active" onClick={toggleMenu}>
            dj's
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activeClassName="active" onClick={toggleMenu}>
            contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/donate" activeClassName="active" onClick={toggleMenu}>
            donate
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
