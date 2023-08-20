import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footerNav">
      <ul className='ulFooter'>
          <li className="footer-item">
            <NavLink to="/"> Home </NavLink>
          </li>
          <li className="footer-item">
            <NavLink to="/about"> About</NavLink>
          </li>
          <li className="footer-item">
            <NavLink to="/schedule"> Schedule </NavLink>
          </li>
          <li className="footer-item">
            <NavLink to="/djs"> Djs </NavLink>
          </li>
          <li className="footer-item">
            <NavLink to="/contact"> Contact</NavLink>
          </li> 
          <li className="footer-item">
            <NavLink to="/donate"> Donate </NavLink>
          </li>
        </ul>
        <p className='Copyrights'>© 2023 Noiszer</p>
      </div>
    </footer>
  );
};

export default Footer;