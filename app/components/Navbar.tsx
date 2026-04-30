import Link from "next/link";
import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      <div className="glass-nav rounded-[2rem] px-5 md:px-8 py-3">
        <div className="flex items-center justify-between h-14">
          
          {/* Brand Group */}
          <Link href="/" className="flex items-center group cursor-pointer">
            <span className="text-xl font-bold tracking-tight font-outfit text-white group-hover:text-blue-400 transition-colors duration-300">
              TechLaptops
            </span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-1">
              {[
                { label: 'Home', href: '/' },
                { label: 'Products', href: '/products' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <Link 
                  key={link.label}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-semibold text-slate-400 hover:text-white transition-all duration-300 group rounded-xl hover:bg-white/5"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            <div className="w-px h-6 bg-white/10 mx-1"></div>

            {/* Cart Button */}
            <Button href="/cart" variant="primary" size="sm" className="gap-2 rounded-xl px-5 h-10 shadow-lg shadow-blue-900/20">
              <div className="relative">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[9px] font-black text-blue-600">0</span>
              </div>
              <span className="hidden lg:inline text-xs uppercase tracking-widest font-black">Cart</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 text-white hover:bg-white/10 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
