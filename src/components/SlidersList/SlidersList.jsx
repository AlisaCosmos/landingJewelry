import './SlidersList.scss';
import Slide from '../Slide/Slide';
import { useContext, useRef } from 'react';
import { SliderContext } from '../../App';

export default function SlidersList() {
  const { items, scrollerRef } = useContext(SliderContext);

  console.log(scrollerRef, 'scroller');

  return (
    <div className="slidersList scroll-section-inner" ref={scrollerRef}>
      {items.map((slide, index) => {
        return <Slide key={index} data={slide} />;
      })}
    </div>
  );
}
