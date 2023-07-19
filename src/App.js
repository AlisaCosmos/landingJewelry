import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import { images } from './assets/data/images';
import { createContext, useState, useEffect, useRef, useLayoutEffect } from 'react';
//import { gsap } from 'gsap';
//import ScrollTrigger from 'gsap/dist/ScrollTrigger';
//import ScrollSmoother from 'gsap/ScrollSmoother';
//import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
//import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
//import { ScrollTrigger } from 'gsap/ScrollTrigger';
//import { ScrollSmoothero } from 'gsap/ScrollSmoother';
//import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';

import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';

export const SliderContext = createContext();

function App() {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  const el = useRef();
  //const qetEl = gsap.utils.selector(el);

  useLayoutEffect(() => {
    let smoother = ScrollSmoother.create({
      smooth: 1,
      effects: true,
    });
    return () => {
      smoother.kill();
    };
  }, []);

  const [items, setItems] = useState([]);
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);
  useEffect(() => {
    setItems(images);
  }, [items]);
  return (
    <div className="App" ref={el} id="smooth-wrapper">
      <div id="smooth-content">
        <SliderContext.Provider
          value={{
            items,
            setSlide,
            slidesCount: items.length,
            slideNumbers: slide,
            touchPosition,
            setTouchPosition,
          }}>
          <header className="App-header">
            <Header />
          </header>
          <main className="">
            <Routes>
              <Route path="/" element={<MainPage />} />
            </Routes>
          </main>
          <footer className="App-header">
            <Footer />
          </footer>
        </SliderContext.Provider>
      </div>
    </div>
  );
}

export default App;
