// src/components/Slideshow.js
import React, { useState, useEffect } from 'react';

const images = [
  '/images/vit1.jpg',
  '/images/vit2.jpg',
  '/images/vit3.jpg',
  '/images/vit4.jpg',
  '/images/vit5.jpg',
  '/images/vit6.jpg',
  '/images/vit7.jpg',
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
    <div className="relative overflow-hidden rounded-lg h-64 sm:h-96">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>

    <div className="absolute inset-0 flex justify-between items-center">
      <button
        onClick={previousSlide}
        className="bg-gray-800 text-white p-3 rounded-full bg-opacity-50 hover:bg-opacity-75 focus:outline-none ml-2"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="bg-gray-800 text-white p-3 rounded-full bg-opacity-50 hover:bg-opacity-75 focus:outline-none mr-2"
      >
        &#10095;
      </button>
    </div>
  </div>
  );
};

export default Slideshow;
