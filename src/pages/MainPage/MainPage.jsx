import './MainPage.scss';
import About from '../../components/About/About';
import Product from '../../components/Product/Product';
import SectionThird from '../../components/SectionThird/SectionThird';

export default function MainPage() {
  return (
    <div className="mainPage">
      <About />
      <Product />
      <SectionThird />
    </div>
  );
}
