import './GridBlock.scss';

export default function GridBlock({ items }) {
  return (
    <div className="gridBlock">
      {items?.map((item, i) => {
        return (
          <div className={`gridBlock__item item${i + 1}`} key={i}>
            <div className={`item__col__left item__col_left${i + 1} `}>
              <div className={`item__img_wrapper item__img_wrapper${i + 1}`}>
                <img
                  className="item__img"
                  src={`${item.img}`}
                  srcSet={`${item.img} 1x, ${item.img1x} 2x`}
                  alt={item.alt}
                />
              </div>
            </div>
            <div className={`item__col__right item__colom_right${i + 1} `}>
              <div className="item__title">{item.title}</div>
              <div className="item__text">{item.text}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
