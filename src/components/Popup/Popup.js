import './Popup.css';
import React from 'react';
import { useState } from 'react';

function Popup({ isOpen, onClose }) {
  const [isPink, setIsPink] = useState(false); //стейт кнопки скролла попапа

  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <button className="popup__close" onClick={onClose}></button>
      <div
        className={`popup__wrapper ${isOpen ? 'popup__wrapper_opened' : ''}`}
      >
        <div className="popup__title">
          <p className="popup__title-benefit">Преимущества</p>
          <p className="popup__title-brand">
            Brend<span className="popup__title-span">XY</span>
          </p>
        </div>
        <div className="popup__carousel">
          <div className="popup__blocks">
            <ul className="popup__block">
              <li>
                <span>01</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </li>
              <li>
                <span>02</span>
                <p>Faucibus pulvinar elementum integer enim</p>
              </li>
              <li>
                <span>03</span>
                <p>Faucibus pulvinar elementum integer enim</p>
              </li>
            </ul>
            <ul
              className={
                isPink
                  ? 'popup__block_second_opened popup__block'
                  : 'popup__block_second popup__block'
              }
            >
              <li>
                <span>04</span>
                <p>Faucibus pulvinar elementum integer enim</p>
              </li>
              <li>
                <span>05</span>
                <p>Faucibus pulvinar elementum integer enim</p>
              </li>
              <li>
                <span>06</span>
                <p>Faucibus pulvinar elementum integer enim</p>
              </li>
            </ul>
          </div>
          <div className="popup__slide-buttons">
            <button
              onClick={() => setIsPink(!isPink)}
              className="popup__slide-arrow"
            ></button>
            <div className="popup__slide-circles">
              <div
                className={`popup__slide-circle ${
                  isPink ? '' : 'popup__slide-circle_active'
                }`}
              ></div>
              <div
                className={` popup__slide-circle ${
                  isPink ? 'popup__slide-circle_active' : ''
                }`}
              ></div>
            </div>
            <button
              onClick={() => setIsPink(!isPink)}
              className="popup__slide-arrow popup__slide-arrow_type_next"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
