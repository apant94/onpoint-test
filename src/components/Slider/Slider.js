import { useState } from 'react';
import './Slider.css';
import MainPage from '../MainPage/MainPage';
import TextPage from '../TextPage/TextPage';
import BrendPage from '../BrendPage/BrendPage';

const Slider = ({ viewport, setViewport, setIsOpen }) => {
  const [touchPosition, setTouchPosition] = useState(null); //стейт местонахождения нажатия

  const left = () => {
    setViewport((currentViewport) => {
      return Math.min(currentViewport + 1024, 0);
    });
  };

  const goToNextPage = () => {
    setViewport((currentViewport) => {
      return Math.max(currentViewport - 1024, -2048);
    });
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 8) {
      goToNextPage();
    }

    if (diff < -8) {
      left();
    }

    setTouchPosition(null);
  };

  return (
    <div
      className="slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
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
