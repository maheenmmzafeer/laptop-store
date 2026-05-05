"use client";

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Menu, ShoppingBag } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-6 px-8 flex items-center justify-between",
        scrolled ? "bg-tech-dark/80 backdrop-blur-md py-4 border-b border-silver-900" : "bg-transparent"
      )}
    >
      <div className="flex items-center gap-6">
        <a href="/" className="text-silver-100 hover:text-silver-300 transition-colors">
          <Menu size={24} />
        </a>
        <nav className="hidden md:flex items-center gap-6 text-xs tracking-widest uppercase text-silver-300">
          <a href="/#specs" className="hover:text-silver-100 transition-colors">Specs</a>
          <a href="/#gallery" className="hover:text-silver-100 transition-colors">Gallery</a>
          <a href="/products" className="hover:text-silver-100 transition-colors">Products</a>
        </nav>
      </div>
      
      <a href="/" className="text-xl tracking-widest font-bold text-silver-100 uppercase mix-blend-difference absolute left-1/2 -translate-x-1/2">
        Tech Luxe
      </a>
      
      <div className="flex items-center gap-6">
        <a href="/#pre-order" className="text-sm tracking-widest font-medium text-silver-300 hover:text-silver-100 uppercase transition-colors hidden md:block">
          Pre-Order
        </a>
        <button className="text-silver-100 hover:text-silver-300 transition-colors">
          <ShoppingBag size={24} />
        </button>
      </div>
    </header>
  );
}
