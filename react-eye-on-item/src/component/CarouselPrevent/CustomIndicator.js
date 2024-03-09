import React from 'react'
import './CarouselCustom.css';

function CustomIndicator({clickHandler, isSelected, index, label}) {
  return (
    <div
    className={`indicator ${isSelected ? 'selected' : ''}`}
    aria-label={`Slide ${index + 1}`}
    onClick={clickHandler}
    onKeyDown={clickHandler}
    role="button"
    tabIndex={0}
    title={`${label} ${index + 1}`}
  />
  )
}

export default CustomIndicator
