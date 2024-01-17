import React from 'react'
import { useState } from 'react';
import './BeforeAfter.css'

type Props = {beforeImage: string, afterImage: string}

function BeforeAfter({beforeImage, afterImage}: Props) {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (event) => {
    setSliderPosition(event.target.value);
  };

  return (
    <div className="before-after-container">
      <div className="image-container">
        <img
          src={beforeImage}
          alt="Before"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        />
        <img
          src={afterImage}
          alt="After"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
        />
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        className="slider"
      />
    </div>
  )
}

export default BeforeAfter;