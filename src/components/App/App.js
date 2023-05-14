import './App.css';
import { useState } from 'react';
import Slider from '../Slider/Slider';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {
  const [viewport, setViewport] = useState(0); //стейт отступа местонахождения в пикселях

  // возвращение на 1 страницу
  const backToHome = () => {
    setViewport(0);
  };

  return (
    <div className="page" id="scroller">
      <Header backToHome={backToHome} />
      <Slider viewport={viewport} setViewport={setViewport} />
      <Footer />
    </div>
  );
}

export default App;
