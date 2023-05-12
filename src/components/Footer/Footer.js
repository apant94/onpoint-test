import './Footer.css';
import logoImg from '../../images/footer.png';

const Footer = () => {
  return (
    <footer className="footer">
      <img className="footer__logo" alt="Логотип" src={logoImg} />
    </footer>
  );
};

export default Footer;
