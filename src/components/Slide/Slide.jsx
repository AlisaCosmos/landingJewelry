import './Slide.scss';

export default function Slide({ data: { src, title } }) {
  return (
    <div className="slide ">
      <img
        className="slide__img"
        src={`${src}`}
        // srcSet={`${items.src} 1x, ${item.img1x} 2x`}
        alt={title}
      />
    </div>
  );
}
