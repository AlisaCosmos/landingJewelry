import Slider from '../Slider/Slider';
import Slider1 from '../StickySlider/StickySlider';
import './Product.scss';

export default function Product() {
  return (
    <div className="product container">
      <div className="product__inner container__row">
        <h1 className="product__title">Lorem ipsum dolor sit amet</h1>
        {/* <div>
          <Slider />
        </div>  */}
      </div>
      <div className="product__sliderWrapper">
        <Slider1 />
      </div>
    </div>
  );
}
