import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css'; // Import your custom CSS for styling

const CarouselWithPreviews = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="carousel-with-previews">
      <div className="carousel-container">
        <Carousel
          selectedItem={selectedIndex}
          onChange={handleSelect}
          showArrows={true}
          showThumbs={false}
        >
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselWithPreviews;
