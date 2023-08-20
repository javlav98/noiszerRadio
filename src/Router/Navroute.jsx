import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Schedule from '../Pages/Schedule';
import Djs from '../Pages/Djs';
import Contact from '../Pages/Contact';
import Donate from '../Pages/Donate';
import Footer from '../Components/Footer';

const Navroute = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/djs" element={<Djs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Navroute;