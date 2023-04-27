import './Header.css';
import homeImg from '../../images/brendpage-home.png';
import stripeImg from '../../images/brendpage-stripe.png'

const Header = ({backToHome}) => {
  

  return (
    <header className='header'>
      <img alt='Домой' className='header__home' src={homeImg} onClick={backToHome}/>
      <img alt='Разделитель' className='header__stripe' src={stripeImg}/>
      <p className='header__logo'>PROJECT</p>
    </header>
  )
};

export default Header;