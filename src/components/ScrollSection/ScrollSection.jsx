import './ScrollSection.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import SectionSecond from '../SectionSecond/SectionSecond';
import SectionFirst from '../SectionFirst/SectionFirst';
import SectionThird from '../SectionThird/SectionThird';

export default function ScrollSection() {
  // add animation
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: '-300vw',
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: '2000 top',
          scrub: 0.6,
          pin: true,
        },
      },
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div className="scrollSection">
      <div>
        <SectionFirst />
      </div>
      <div className="scrollSection__outer">
        <div ref={triggerRef}>
          <div ref={sectionRef} className="scrollSection__inner">
            <SectionSecond />
          </div>
        </div>
      </div>
      <div>
        <SectionThird />
      </div>
    </div>
  );
}
