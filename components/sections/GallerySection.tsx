"use client";

import { useRef } from 'react';

export function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const images = [
    { url: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', title: 'Tactile Keyboard' },
    { url: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', title: 'Retina Display' },
    { url: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', title: 'Precision Trackpad' }
  ];

  return (
    <section ref={sectionRef} id="gallery" className="panel h-screen bg-tech-dark flex flex-col justify-center overflow-hidden snap-start">
      <div className="px-8 md:px-24 mb-12 shrink-0">
        <h2 className="text-sm tracking-[0.3em] text-silver-500 uppercase mb-4">Gallery</h2>
        <h3 className="text-4xl md:text-6xl font-light text-silver-100">
          Precision in <span className="font-bold">every detail.</span>
        </h3>
      </div>
      
      <div className="flex gap-8 px-8 md:px-24 w-full overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide">
        {images.map((img, i) => (
          <div key={i} className="w-[85vw] md:w-[60vw] h-[50vh] bg-tech-darker border border-silver-900 rounded-3xl overflow-hidden relative flex-shrink-0 flex items-center justify-center group snap-center">
            <img 
              src={img.url} 
              alt={img.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-tech-dark via-tech-dark/20 to-transparent"></div>
            <span className="absolute bottom-8 left-8 text-silver-100 tracking-widest uppercase font-bold drop-shadow-lg z-10">{img.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
