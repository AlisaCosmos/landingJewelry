import GridBlock from '../GridBlock/GridBlock';
import { itemsContent1 } from '../../assets/data/itemsContent1';
import './SectionThird.scss';

export default function SectionThird() {
  return (
    <div className="sectionThird container">
      <div className="sectionThird__inner container__row">
        <h1 className="sectionThird__title">ut aliquip ex ea commodo consequat</h1>
        <div>
          <GridBlock items={itemsContent1} />
        </div>
      </div>
    </div>
  );
}
