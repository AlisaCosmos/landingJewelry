import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalGallery() {
  return (
    <div>
      <section className="scroll-section-outer">
        <div>
          <div className="scroll-section-inner">
            <div className="scroll-section"></div>
            <div className="scroll-section">
              <h3>Section 2</h3>
            </div>
            <div className="scroll-section">
              <h3>Section 3</h3>
            </div>
            <div className="scroll-section">
              <h3>Section 4</h3>
            </div>
            <div className="scroll-section">
              <h3>Section 4</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
