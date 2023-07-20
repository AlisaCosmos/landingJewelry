import { useEffect, useRef, useContext } from 'react';
import { SliderContext } from '../../App';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Slide.scss';

gsap.registerPlugin(ScrollTrigger);

export default function Slide({ data: { src, title } }) {
  const { scrollerRef, triggerRef } = useContext(SliderContext);
  console.log(scrollerRef, 'scrollerRef');
  console.log(triggerRef, 'triggerRef ');
  //get arr links
  function useArrayRef() {
    const refs = useRef([]);
    refs.current = [];
    return [refs, (ref) => ref && refs.current.push(ref)];
  }
  // arr link
  const [refs, setRef] = useArrayRef();
  //console.log(refs, 'arr link');

  //useEffect(() => {
  //  gsap.to(refs.current, { rotate: 360, x: 200 });
  //}, []);

  useEffect(() => {
    const pin = gsap.fromTo(
      scrollerRef.current,
      {
        translateX: '0px',
      },
      {
        translateX: '-360px',
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          markers: true,
          start: 'top top',
          end: 'top top',
          scrub: 0.6,
          pin: true,
        },
      }, //скоько разделов
    );
    //let skillSet = gsap.utils.toArray('.skill-set');
    //console.log(skillSet, 'skillSet');
    //let to = gsap.to(skillSet, {
    //  xPercent: () => -100 * (skillSet.length - 1),
    // ease: 'none',
    // scrollTrigger: {
    //   trigger: scroller.current,
    //  markers: true,
    // pin: true,
    // pinSpacer: true,
    //scrub: 1,
    //invalidateOnRefresh: true,
    //anticipatePin: 1,
    //shap: 1 / (skillSet.length - 1),
    //end: () => '+=' + window.innerWidth,
    // },
    //});
    return () => pin.kill();
  }, []);
  return (
    <div className="slide scroll-section" ref={setRef}>
      <img
        className="slide__img"
        src={`${src}`}
        // srcSet={`${items.src} 1x, ${item.img1x} 2x`}
        alt={title}
      />
    </div>
  );
}
