import React from 'react';

function Background() {
  return (
    <div
      style={{
        backgroundImage: `url("smoke.jpg")`, // Replace with the path to your background image
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
        color: 'white',
        border: '0.1px solid black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '48px', // Adjust the font size as needed
      }}
    >
      {/* Content for your background */}
      
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Background />
    </div>
  );
}
