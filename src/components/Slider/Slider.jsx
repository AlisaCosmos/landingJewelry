import { createContext, useContext, useEffect, useState } from 'react';

import './Slider.scss';
import SlidersList from '../SlidersList/SlidersList';
import { SliderContext } from '../../App';

export default function Slider() {
  const { items, setSlide, touchPosition, setTouchPosition } = useContext(SliderContext);
  const changeSlide = (direction = 1) => {
    let slideNumber = 0;
  };

  const goToSlide = (number) => {
    setSlide(number % items.lenght);
  };
  //получили координаты первой точки косания
  const onTouchStart = (e) => {
    const touchDown = console.log(e.touches[0].clientX);
    setTouchPosition(touchDown);
  };
  const onTouchMove = (e) => {
    if (touchPosition === null) {
      return;
    }
    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;
    if (direction > 10) {
    }
    if (direction > -10) {
    }
    setTouchPosition(null);
  };

  return (
    <div className="slider container__row" onTouchStart={onTouchStart} onTouchMove={onTouchMove}>
      <div className="slider__viewport">
        <div className="slider__horizontalContainer">
          <SlidersList />
        </div>
      </div>
    </div>
  );
}
