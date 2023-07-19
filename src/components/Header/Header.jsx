import './Header.scss';
import LogoIcon from '../../assets/imgs/logo_icon.svg';
import CallIcon from '../../assets/imgs/icon_call.svg';

export default function Header() {
  return (
    <div className="header container">
      <div className="header__inner container__row">
        <div className="header__logo">
          <div className="header__logo_wrapper">
            <img src={LogoIcon} />
          </div>
        </div>
        <div className="header__contacts contact__contact">
          <div className="contacts__number">
            <span>
              <a href="tel:+74954954954">
                <span className="contacts__number_desc ">+7(495) 495-49-54 </span>
                <img src={CallIcon} className="contacts__number_mob" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
