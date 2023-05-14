import { useState } from 'react';
import './Slider.css';
import MainPage from '../MainPage/MainPage';
import TextPage from '../TextPage/TextPage';
import BrendPage from '../BrendPage/BrendPage';

const Slider = ({ viewport, setViewport, setIsOpen }) => {
  const [touchLocation, setTouchLocation] = useState(null); //стейт местонахождения нажатия
  console.log(touchLocation);

  const goToNextPage = () => {
    setViewport((currentViewport) => {
      return Math.max(currentViewport - 1024, -2048);
    });
  };

  const goToPrevPage = () => {
    setViewport((currentViewport) => {
      return Math.min(currentViewport + 1024, 0);
    });
  };

  const handleTouchStart = (event) => {
    setTouchLocation(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    if (touchLocation === null) {
      return;
    }
    console.log(event.touches[0].clientX);

    const delta = touchLocation - event.touches[0].clientX;

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
        <BrendPage setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default Slider;
