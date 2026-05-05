"use client";

import { Navbar } from '@/components/layout/Navbar';

export default function ProductsPage() {
  const products = [
    { name: 'Tech Luxe Pro 14"', price: '$1,999', desc: 'The perfect balance of power and portability.' },
    { name: 'Tech Luxe Pro 16"', price: '$2,499', desc: 'Maximum performance for the most demanding workflows.' },
    { name: 'Tech Luxe Studio', price: '$3,499', desc: 'Desktop-class power in a mobile form factor.' },
  ];

  return (
    <main className="min-h-screen bg-tech-dark text-silver-100 selection:bg-silver-700 selection:text-white pt-32 px-8 md:px-24">
      <Navbar />
      
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-light mb-4">Our Lineup</h1>
        <p className="text-silver-500 text-xl font-light mb-16 tracking-wide">Choose your weapon.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p, i) => {
            const urls = [
              'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
              'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
              'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2'
            ];
            const imgUrl = urls[i];
            return (
              <div key={i} className="bg-tech-darker border border-silver-900 rounded-3xl p-8 hover:border-silver-700 transition-all group cursor-pointer">
                <div className="aspect-video bg-tech-dark rounded-xl mb-8 overflow-hidden relative flex items-center justify-center border border-silver-900/50">
                  <img 
                    src={imgUrl} 
                    className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen group-hover:scale-105 transition-transform duration-500" 
                    alt={p.name} 
                  />
                </div>
                <h2 className="text-2xl font-bold text-silver-100 mb-2">{p.name}</h2>
                <p className="text-silver-300 mb-6 font-light">{p.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-light">{p.price}</span>
                  <button className="text-sm uppercase tracking-widest font-bold text-tech-dark bg-silver-100 px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    Buy
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
