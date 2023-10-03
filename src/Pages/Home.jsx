import React from 'react';
import CarouselWithPreviews from '../Components/Carousel';

export default function Home() {
  const images = [
    'img1.jpg',
    'fugazi.jpeg',
    'nirvana.webp',
    'daft.jpeg',
    // Add more image URLs as needed
  ];

  return (
    <div>
      <CarouselWithPreviews images={images} />
    </div>
  );
}
