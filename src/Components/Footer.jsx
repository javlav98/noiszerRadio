import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaSpotify} from "react-icons/fa6";
import './Footer.css';

const Footer = () => {
  return (
    <footer>
     <ul className='iconContainer'>
       <li className='iconSm'> 
        <a><FaLinkedin/></a>
        </li>
        <li className='iconSm'>
        <a><FaGithub/></a>
        </li>
        <li className='iconSm'>
        <a><FaSpotify/></a>
        </li>
     </ul>
      <div className="footerNav">
      <ul className='ulFooter'>
          <li className="footer-item">
            <NavLink to="/"> Home </NavLink>
          </li>
          <li className="footer-item">
            <NavLink to="/about"> About</NavLink>
          </li>
          <li className="footer-item">
            <NavLink to="/Projects"> Projects </NavLink>
          </li>
          <li className="footer-item">
            <NavLink to="/contact"> Contact </NavLink>
          </li>
        </ul>
        <p className='Copyrights'>© 2021 Javier L.</p>
      </div>
    </footer>
  );
};

export default Footer;