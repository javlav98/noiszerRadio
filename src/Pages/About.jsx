import React from 'react';
import './About.css';

function Header() {
  return (
    <div>
      <img src="banner2.png" alt="Description of the image" />
    </div>
  );
}

export default function About() {
  return (
    <div>
      <Header /> {/* Include your Header component */}
      <h1>About Page</h1>
    </div>
  );
}
