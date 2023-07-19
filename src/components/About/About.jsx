import './About.scss';
import { itemsContent } from '../../assets/data/itemsContent';
import GridBlock from '../GridBlock/GridBlock';

export default function About() {
  console.log(itemsContent, 'items about');

  console.log(itemsContent, ' about ');
  return (
    <div className="about container">
      <div className="about__inner container__row">
        <h1 className="about__title">ut aliquip ex ea commodo consequat</h1>
        <div>
          <GridBlock items={itemsContent} />
        </div>
      </div>
    </div>
  );
}
