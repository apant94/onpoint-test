import './BrendPage.css';
import bottleImg from '../../images/brendpage/brendpage-bottle.png';
import eatImage from '../../images/brendpage/brendpage-eat.png';
import calendarImage from '../../images/brendpage/brendpage-calendar.png';

const BrendPage = () => {
  return (
    <section className='brendpage'>
      <img alt='Продукт' src={bottleImg} className='brendpage__bottle' />
      <div className='brendpage__bubble1 image'></div>
      <div className='brendpage__bubble2 image'></div>
      <div className='brendpage__bubble3 image'></div>
      <div className='brendpage__bubble8 image'></div>
      <div className='brendpage__bubble4 image'></div>
      <div className='brendpage__bubble5 image'></div>
      <div className='brendpage__bubble6 image'></div>
      <div className='brendpage__bubble7 image'></div>
      <h2 className='brendpage__title'>КЛЮЧЕВОЕ СООБЩЕНИЕ</h2>
      <h3 className='brendpage__subtitle'>BREND<span className='brendpage__subtitle-span'>XY</span></h3>
      <div className="brendpage__container">
        <div className="brendpage__window-eat">
          <img
            className="brendpage__window-eat-icon"
            src={eatImage}
            alt="Иконка блюда"
          />
          <p className="brendpage__window-text brendpage__window-text_type_eat">
            Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus
            vestibulum lorem sed risus ultricies
          </p>
        </div>
        <div className="brendpage__window-calendar">
          <img
            className="brendpage__window-calendar-icon"
            src={calendarImage}
            alt="Иконка календаря"
          />
          <p className="brendpage__window-text brendpage__window-text_type_calendar">
            A arcu cursus vitae
          </p>
        </div>
        <button className='brendpage__button'></button>
      </div>
    </section>
  )
};

export default BrendPage;