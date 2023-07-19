import './About.scss';

import GridBlock from '../GridBlock/GridBlock';
//import { itemsContent } from '../../assets/data/itemsContent';
import { useEffect, useState } from 'react';

export default function About() {
  //const [items, setItems] = useState(itemsContent);
  //const items = itemsContent;
  const itemsContent = [
    {
      img: require('../../assets/imgs/aboutLeftDesk@2.png'),
      img1x: require('../../assets/imgs/aboutLeftDesk@1.png'),
      title: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit'],
      alt: 'img__content',
      text: [
        'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      ],
    },
    {
      img: require('../../assets/imgs/aboutRightDesk@2.png'),
      img1x: require('../../assets/imgs/aboutRightDesk@1.png'),
      alt: 'img__content',
      title: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit'],
      text: [
        'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      ],
    },
  ];

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
