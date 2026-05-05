"use client";

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import { Cpu, MemoryStick, Battery, Wifi } from 'lucide-react';

export function SpecsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.from('.spec-card', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
      },
      y: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out'
    });
  }, { scope: sectionRef });

  const specs = [
    { icon: <Cpu size={32} />, title: 'M14 Pro Chip', desc: '16-core CPU, 40-core GPU with dedicated neural engine.' },
    { icon: <MemoryStick size={32} />, title: '128GB Unified Memory', desc: 'Bandwidth up to 800GB/s for seamless multitasking.' },
    { icon: <Battery size={32} />, title: '24-Hour Battery', desc: 'All-day performance with fast-charge capability.' },
    { icon: <Wifi size={32} />, title: 'Wi-Fi 7', desc: 'Next-generation connectivity with multi-link operation.' },
  ];

  return (
    <section ref={sectionRef} id="specs" className="panel min-h-screen bg-tech-darker flex flex-col justify-center py-24 px-8 md:px-24 snap-start">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-sm tracking-[0.3em] text-silver-500 uppercase mb-4">Specifications</h2>
        <h3 className="text-4xl md:text-6xl font-light text-silver-100 mb-16">
          Uncompromised <span className="font-bold">power.</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specs.map((spec, i) => (
            <div key={i} className="spec-card bg-tech-dark border border-silver-900 p-8 rounded-2xl hover:border-silver-700 transition-colors group">
              <div className="text-silver-300 mb-6 group-hover:text-silver-100 transition-colors">
                {spec.icon}
              </div>
              <h4 className="text-xl font-bold text-silver-100 mb-3">{spec.title}</h4>
              <p className="text-silver-500 font-light leading-relaxed">{spec.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
