"use client";

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';

export function EditorialFeature() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    // Parallax background
    gsap.to('.parallax-bg', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
      y: '20%',
      ease: 'none'
    });

    // Text reveal
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.from('.feature-p', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      },
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      delay: 0.2,
      ease: 'power3.out'
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-tech-dark flex items-center overflow-hidden py-32 px-8 md:px-24 snap-start">
      <div className="parallax-bg absolute right-0 top-1/4 w-1/2 h-[120%] bg-gradient-to-bl from-silver-900 to-transparent opacity-50 blur-3xl rounded-full transform rotate-12 -z-10"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto z-10">
        <div ref={textRef} className="flex flex-col gap-8">
          <h2 ref={titleRef} className="text-4xl md:text-6xl font-light tracking-tight text-silver-100 leading-tight">
            Design that <br />
            <span className="font-bold text-silver-300">defies gravity.</span>
          </h2>
          
          <div className="h-[1px] w-12 bg-silver-500 feature-p"></div>
          
          <p className="feature-p text-silver-300 text-lg md:text-xl font-light leading-relaxed">
            Crafted from a single block of aerospace-grade aluminum. 
            The chassis is impossibly thin, yet rigid enough to withstand the most demanding workflows.
          </p>
          
          <p className="feature-p text-silver-500 text-base md:text-lg font-light leading-relaxed">
            Every curve and chamfer has been precision-engineered to catch the light, creating a profile that looks fast even when standing still.
          </p>
        </div>
        
        <div className="relative aspect-square flex items-center justify-center feature-p group">
          <div className="absolute inset-0 bg-gradient-to-tr from-silver-900/50 to-transparent rounded-full blur-2xl"></div>
          <div className="relative z-10 w-full h-full border border-silver-700/30 rounded-full flex items-center justify-center bg-tech-darker/50 backdrop-blur-sm overflow-hidden">
            <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80" alt="Laptop Side Profile" className="absolute w-[120%] h-auto max-w-none opacity-80 mix-blend-screen group-hover:scale-110 transition-transform duration-700" />
            <div className="text-center relative z-20 mt-32 mix-blend-difference">
              <span className="block text-7xl font-bold text-silver-100">12</span>
              <span className="block text-sm tracking-widest text-silver-500 uppercase mt-4 font-bold">Millimeters Thin</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
