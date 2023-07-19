import './MainPage.scss';
import SectionFirst from '../../components/SectionFirst/SectionFirst';
import SectionSecond from '../../components/SectionSecond/SectionSecond';
import SectionThird from '../../components/SectionThird/SectionThird';
import ScrollSection from '../../components/ScrollSection/ScrollSection';

export default function MainPage() {
  return (
    <div className="mainPage">
      <SectionFirst />
      <SectionSecond />
      <SectionThird />
    </div>
  );
}
