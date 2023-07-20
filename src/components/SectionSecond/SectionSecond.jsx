import Slider from '../Slider/Slider';
import SliderNew from '../SliderNew/SliderNew';
import './SectionSecond.scss';

export default function SectionSecond() {
  return (
    <div className="sectionSecond container">
      <div className="sectionSecond__inner container__row">
        <h1 className="sectionSecond__title">Lorem ipsum dolor sit amet</h1>
        {/* <div>
          <Slider />
        </div>  */}
      </div>
      <div className="sectionSecond__sliderWrapper">
        <SliderNew />
      </div>
      {/*<div className="sectionSecond__sliderWrapper">
        <Slider />
      </div>*/}
    </div>
  );
}
