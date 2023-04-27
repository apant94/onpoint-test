import './App.css';
import MainPage from '../MainPage/MainPage';
import TextPage from '../TextPage/TextPage';
import BrendPage from '../BrendPage/BrendPage';
import Header from '../Header/Header';

function App() {
  return (
    <div className='page'>
      <div className='page__slider'>
          <MainPage />
          <TextPage />
          <BrendPage />
      </div>
    </div>
  )
}

export default App;
