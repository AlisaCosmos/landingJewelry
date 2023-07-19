import './SlidersList.scss';
import Slide from '../Slide/Slide';
import { useContext } from 'react';
import { SliderContext } from '../../App';

export default function SlidersList() {
  const { items } = useContext(SliderContext);
  return (
    <div className="slidersList">
      {items.map((slide, index) => {
        return <Slide key={index} data={slide} />;
      })}
    </div>
  );
}
