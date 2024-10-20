import React, { useState } from 'react';
import carPhoto1 from '../assets/carPhoto1.jpg';
import carPhoto2 from '../assets/carPhoto2.jpg';
import carPhoto3 from '../assets/carPhoto3.jpg';

const photos = [carPhoto1, carPhoto2, carPhoto3]; // Array to hold the images

const PhotographyGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentIndex(0); // Reset the index when closing
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % photos.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
  };

  return (
    <>
      <div className="photo-gallery">
        {photos.map((photo, index) => (
          <img
            src={photo}
            alt={`Car ${index + 1}`}
            className="small-photo"
            onClick={() => openModal(index)}
            key={index}
          />
        ))}
      </div>

      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-button" onClick={closeModal}>X</button>
          <button className="next-button" onClick={nextImage}>❯</button>
            <img src={photos[currentIndex]} alt={`Car ${currentIndex + 1}`} className="large-photo" />
            <button className="prev-button" onClick={prevImage}>❮</button>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotographyGallery;
