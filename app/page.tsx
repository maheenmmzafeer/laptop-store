import Button from "./components/Button";
import SectionHeading from "./components/SectionHeading";

export default function Home() {
  return (
    <div className="space-y-32">

      {/* ── HERO ─────────────────────────────── */}
      <section className="text-center max-w-4xl mx-auto pt-10 lg:pt-20 animate-fade-up">
        
        <div className="flex justify-center mb-8">
          <span className="badge badge-silver backdrop-blur-md bg-white/5 border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
            New arrivals just dropped
          </span>
        </div>

        <h1 className="heading-xl mb-6">
          Find Your Perfect <br/>
          <span className="text-gradient-blue font-outfit">Laptop</span>
        </h1>

        <p className="text-[var(--text-secondary)] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Curated high-performance laptops for gaming, development and everyday use all in one place.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/products" size="lg" className="w-full sm:w-auto">
            Shop Now
          </Button>
          <Button href="/about" variant="secondary" size="lg" className="w-full sm:w-auto">
            About Us
          </Button>
        </div>
      </section>

      {/* ── STATS STRIP ──────────────────────── */}
      <section className="card p-0 overflow-hidden animate-fade-up animate-fade-up-delay-1 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--border)]">
          {[
            { number: "2,400+", label: "Laptops in stock" },
            { number: "98%",    label: "Customer satisfaction" },
            { number: "24/7",   label: "Support available" },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center justify-center py-8 bg-gradient-to-b from-transparent to-[var(--surface-hover)]/30">
              <div className="text-3xl font-bold font-outfit text-[var(--text-primary)] mb-1">{s.number}</div>
              <div className="text-sm font-medium text-[var(--text-secondary)]">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURE CARDS ────────────────────── */}
      <section className="animate-fade-up animate-fade-up-delay-2">
        <SectionHeading 
          title="Why Choose Us" 
          subtitle="Everything you need, nothing you don&apos;t." 
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="card card-hover flex flex-col items-start text-left">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-500">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 font-outfit text-[var(--text-primary)]">Fast Performance</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Latest-gen processors and NVMe SSDs for buttery-smooth multitasking and instant boot times.
            </p>
          </div>

          {/* Card 2 */}
          <div className="card card-hover flex flex-col items-start text-left border-blue-500/30 bg-gradient-to-b from-blue-900/10 to-transparent relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
            <div className="badge badge-blue mb-5">Most Popular</div>
            <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center mb-6 text-white shadow-[0_4px_14px_0_rgba(59,130,246,0.39)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 font-outfit text-[var(--text-primary)]">Gaming Ready</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Dedicated high-end GPUs and high-refresh displays built for an immersive gaming experience.
            </p>
          </div>

          {/* Card 3 */}
          <div className="card card-hover flex flex-col items-start text-left">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-500">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 font-outfit text-[var(--text-primary)]">Lightweight Design</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Slim aluminium chassis laptops you&apos;ll barely notice in your bag even on long travel days.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────── */}
      <section className="animate-fade-up animate-fade-up-delay-3 max-w-5xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-700 to-blue-500 px-8 py-16 md:py-20 text-center shadow-[0_8px_32px_rgba(29,78,216,0.22)]">
          {/* Decorative shapes */}
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold font-outfit text-white mb-4 tracking-tight">
              Ready to upgrade your setup?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
              Browse our full catalogue and find the machine built for you.
            </p>
            <Button href="/products" variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-50 border-white">
              Browse Products
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}