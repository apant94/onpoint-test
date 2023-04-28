import './App.css';
import { useState } from 'react';
import MainPage from '../MainPage/MainPage';
import TextPage from '../TextPage/TextPage';
import BrendPage from '../BrendPage/BrendPage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';

function App() {
  const [isOpen, setIsOpen] = useState(false); //стейт попапа

  const onClose = () => {
    setIsOpen(false);
  }

  const backToHome = () => {
    document.getElementById('scroller').scroll(0,0)
  }

  const goToTextPage = () => {
    document.getElementById('scroller').scroll(1024,0)
  }

  return (
    <div className='page' id='scroller'>
      <Header backToHome={backToHome} />
      <div className='page__slider'>
          <MainPage goToTextPage={goToTextPage} />
          <TextPage />
          <BrendPage setIsOpen={setIsOpen} />
      </div>
      <Footer />
      <Popup isOpen={isOpen} onClose={onClose} />
    </div>
  )
}

export default App;
