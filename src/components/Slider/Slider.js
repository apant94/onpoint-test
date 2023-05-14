import { useState } from 'react';
import './Slider.css';
import MainPage from '../MainPage/MainPage';
import TextPage from '../TextPage/TextPage';
import BrendPage from '../BrendPage/BrendPage';

const Slider = ({ viewport, setViewport }) => {
  const [touchLocation, setTouchLocation] = useState(null); //стейт местонахождения нажатия

  const goToNextPage = () => {
    setViewport((currentViewport) => {
      return currentViewport - 1024 < -2048 ? -2048 : currentViewport - 1024;
    });
  };

  const goToPrevPage = () => {
    setViewport((currentViewport) => {
      return currentViewport + 1024 > 0 ? 0 : currentViewport + 1024;
    });
  };

  const handleTouchStart = (event) => {
    setTouchLocation(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    const delta = touchLocation - event.touches[0].clientX;

    if (touchLocation === null) {
      return;
    }

    if (delta > 10) {
      goToNextPage();
    }

    if (delta < -10) {
      goToPrevPage();
    }

    setTouchLocation(null);
  };

  return (
    <div
      className="slider"
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
    >
      <div
        className="slider__container"
        style={{ transform: `translateX(${viewport}px)` }}
      >
        <MainPage goToNextPage={goToNextPage} />
        <TextPage viewport={viewport} />
        <BrendPage />
      </div>
    </div>
  );
};

export default Slider;
