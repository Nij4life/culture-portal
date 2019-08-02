import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

export default ({ pictures }) => {
  const handleOnDragStart = (e) => e.preventDefault();
  return (
    <AliceCarousel mouseDragEnabled >
      {pictures.map( picture => (
        <img 
          src={picture.picture} 
          onDragStart={handleOnDragStart} className="yours-custom-class" 
          alt={`${picture.title}`}/>
      ))}
    </AliceCarousel>
  )
}