export default function About() {
  return (
    <main className="page-wrapper">
    <div className="flex flex-col items-center justify-center min-h-[70vh] animate-fade-up max-w-4xl mx-auto">

      <div className="card p-10 md:p-16 w-full flex flex-col items-center text-center relative overflow-hidden">
        
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>

        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(59,130,246,0.15)] relative z-10">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" className="text-blue-500" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="9" cy="7" r="4" stroke="currentColor" className="text-blue-500" strokeWidth="2"/>
            <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" className="text-blue-500" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>

        <h1 className="heading-lg mb-6 relative z-10">About Us</h1>

        <div className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent mb-8 relative z-10"></div>

        <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-6 max-w-2xl relative z-10">
          We are a modern tech store focused on providing high-quality laptops for developers, gamers and creators.
        </p>
        <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-2xl relative z-10 mb-12">
          Our mission is to simplify your buying experience and help you find the perfect machine for your needs without the noise.
        </p>

        {/* Mini stats */}
        <div className="grid grid-cols-3 w-full border-t border-[var(--border)] pt-8 relative z-10">
          {[
            { n: "2014", label: "Founded" },
            { n: "50k+", label: "Happy customers" },
            { n: "120+", label: "Brands stocked" },
          ].map((s, i) => (
            <div
              key={i}
              className={`text-center ${i < 2 ? 'border-r border-[var(--border)]' : ''}`}
            >
              <div className="text-2xl md:text-3xl font-bold font-outfit text-[var(--text-primary)] mb-1">{s.n}</div>
              <div className="text-sm font-medium text-[var(--text-secondary)]">{s.label}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
    </main>
  );
}