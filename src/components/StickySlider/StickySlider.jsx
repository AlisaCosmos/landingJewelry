import { FreeMode, Navigation, Mousewheel, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { useRef, useState } from 'react';
// import Swiper styles
import 'swiper/scss';
import './StickySlider.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';
import 'swiper/css/free-mode';

//import Swiper from 'react-id-swiper';
//import 'swiper/swiper.scss';
//import 'swiper/css/swiper.css';
//import 'react-id-swiper/lib/styles/css/swiper.scss';
//import { images as data } from '../Slider/images';
import { useContext } from 'react';
import { SliderContext } from '../../App';

const Slider1 = () => {
  const { items } = useContext(SliderContext);
  const swiper = useSwiper();
  //console.log(swiper);
  //const params = {
  //  modules: [Navigation, Pagination, Scrollbar, A11y],
  //  navigation: {navigation},
  //  pagination:{clickable: true },
  //  scrollbar: {draggable: true },
  //  spaceBetween: 40,
  //  slidesPerView: 5,
  //};
  return (
    <Swiper
      className="swiper"
      modules={[FreeMode, Mousewheel, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={5.5}
      slidesPerGroup={5}
      //slidesPerColumn={1}
      slidesOffsetBefore={260}
      slidesOffsetAfter={260}
      //speed={800}
      //centeredSlides={true}
      freeMode={true}
      mousewheel={true}
      //navigation
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      //onSwiper={(swiper) => console.log(swiper, 'onSwiper')}
      //onSlideChange={() => console.log('slide change')}
    >
      {items.map((item, idx) => (
        <SwiperSlide key={idx}>
          <img
            className="slide__img"
            src={`${item.src}`}
            // srcSet={`${items.src} 1x, ${item.img1x} 2x`}
            alt={item.title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider1;
