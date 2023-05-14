import './App.css';
import { useState } from 'react';
import Slider from '../Slider/Slider';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';

function App() {
  const [isOpen, setIsOpen] = useState(false); //стейт попапа
  const [viewport, setViewport] = useState(0); //стейт отступа местонахождения в пикселях

  const onClose = () => {
    setIsOpen(false);
  };

  const backToHome = () => {
    setViewport(0);
  };

  return (
    <div className="page" id="scroller">
      <Header backToHome={backToHome} />
      <Slider
        viewport={viewport}
        setViewport={setViewport}
        setIsOpen={setIsOpen}
      />
      <Footer />
      <Popup isOpen={isOpen} onClose={onClose} />
    </div>
  );
}

export default App;
