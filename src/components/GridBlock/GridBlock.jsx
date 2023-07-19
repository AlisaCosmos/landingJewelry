import { itemsContent } from '../../assets/data/itemsContent';

import './GridBlock.scss';

export default function GridBlock({ items }) {
  //console.log(item, 'items.items grid');
  console.log(items, 'items grid');
  //console.log(data, 'data grid');
  //console.log(itemsContent, 'itemsContent');
  return (
    <div className="gridBlock">
      {items?.map((item, i) => {
        return (
          <div className={`gridBlock__item item${i + 1}`} key={i}>
            <div className={`item__col__left item__col_left${i + 1} `}>
              <div className={`item__img_wrapper item__img_wrapper${i + 1}`}>
                <img
                  className="item__img"
                  src={`${items.img}`}
                  srcSet={`${items.img} 1x, ${items.img1x} 2x`}
                  alt={items.alt}
                />
              </div>
            </div>
            <div className={`item__col__right item__colom_right${i + 1} `}>
              <div className="item__title">{items.title}</div>
              <div className="item__text">{items.text}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
