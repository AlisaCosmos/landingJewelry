import './SectionFirst.scss';
import { itemsContent } from '../../assets/data/itemsContent';
import GridBlock from '../GridBlock/GridBlock';

export default function SectionFirst() {
  return (
    <div className="sectionFirst container">
      <div className="sectionFirst__inner container__row">
        <h1 className="sectionFirst__title">ut aliquip ex ea commodo consequat</h1>
        <div>
          <GridBlock items={itemsContent} />
        </div>
      </div>
    </div>
  );
}
