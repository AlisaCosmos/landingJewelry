import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import { images } from './assets/data/images';
import { createContext, useState, useEffect, useRef, useLayoutEffect } from 'react';

export const SliderContext = createContext();

function App() {
  const [items, setItems] = useState([]);
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);
  //slider
  const scrollerRef = useRef();
  const triggerRef = useRef();

  useEffect(() => {
    setItems(images);
  }, [items]);
  return (
    <div className="App">
      <SliderContext.Provider
        value={{
          triggerRef,
          scrollerRef,
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
  );
}

export default App;
