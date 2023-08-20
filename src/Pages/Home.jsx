import React from 'react'

function Background() {
  return (
    <div style={{
      backgroundImage: `url("smoke.jpg")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      width: '100vw',
      color: 'white',
      border: '0.1px solid black',
    }}>
      
    </div>
  )
}


export default function Home() {
  return (
    <div>
      <Background />
      
    </div>
  )
}
