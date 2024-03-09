import React from 'react'
import './CarouselCustom.css';

function CustomPrevArrow({onClickHandler, hasPrev, label}) {
  return (
    <button type="button" onClick={onClickHandler} disabled={!hasPrev} aria-label={label} className='PrevArrow'>
      <span className="material-symbols-outlined">
        chevron_left
      </span>
    </button>
  )
}

export default CustomPrevArrow
