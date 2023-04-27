import './App.css';
import MainPage from '../MainPage/MainPage';
import TextPage from '../TextPage/TextPage';
import BrendPage from '../BrendPage/BrendPage';
import Header from '../Header/Header';

function App() {
  const backToHome = () => {
    document.getElementById('scroller').scroll(0,0)
  }

  return (
    <div className='page' id='scroller'>
      <Header backToHome={backToHome} />
      <div className='page__slider'>
          <MainPage />
          <TextPage />
          <BrendPage />
      </div>
    </div>
  )
}

export default App;
