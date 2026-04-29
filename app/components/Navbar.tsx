import Link from "next/link";
import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 glass-panel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/20 group-hover:border-blue-500/40 transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6h16M4 12h10M4 18h7" stroke="currentColor" className="text-blue-500" strokeWidth="2.2" strokeLinecap="round"/>
                <circle cx="19" cy="15" r="4" stroke="currentColor" className="text-blue-500" strokeWidth="2" fill="none"/>
                <path d="M22 18l1.5 1.5" stroke="currentColor" className="text-blue-500" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <span className="text-xl font-bold tracking-tight font-outfit text-gradient">
              TechLaptops
            </span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link className="text-[var(--text-secondary)] hover:text-white transition-colors text-sm font-medium" href="/">Home</Link>
            <Link className="text-[var(--text-secondary)] hover:text-white transition-colors text-sm font-medium" href="/products">Products</Link>
            <Link className="text-[var(--text-secondary)] hover:text-white transition-colors text-sm font-medium" href="/about">About</Link>
            <Link className="text-[var(--text-secondary)] hover:text-white transition-colors text-sm font-medium" href="/contact">Contact</Link>
            
            <div className="w-px h-6 bg-[var(--border)] mx-2"></div>

            {/* Cart CTA */}
            <Button href="/cart" variant="primary" size="sm" className="gap-2 rounded-full px-5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Cart
              <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-xs">0</span>
            </Button>
          </div>

          {/* Mobile menu button (Simplified for MVP) */}
          <div className="md:hidden flex items-center">
            <button className="text-[var(--text-secondary)] hover:text-white">
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