import './BrendPage.css';
import bottleImg from '../../images/brendpage/brendpage-bottle.png';

const BrendPage = () => {
  return (
    <section className='brendpage'>
      <img alt='Продукт' src={bottleImg} className='brendpage__bottle' />
      <div className='brendpage__bubble1 image'></div>
    </section>
  )
};

export default BrendPage;