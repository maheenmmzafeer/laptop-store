"use client";

export function PreOrderSection() {
  return (
    <section id="pre-order" className="panel min-h-screen bg-tech-dark flex items-center justify-center py-24 px-8 snap-start">
      <div className="max-w-3xl w-full bg-tech-darker border border-silver-900 p-12 md:p-20 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-silver-100 opacity-5 blur-[100px] rounded-full"></div>
        
        <h2 className="text-4xl md:text-6xl font-light text-silver-100 mb-4 relative z-10">
          Secure yours.
        </h2>
        <p className="text-silver-300 mb-12 font-light text-lg relative z-10">
          Pre-order the Tech Luxe laptop today. Deliveries begin next month.
        </p>
        
        <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="First Name" className="bg-tech-dark border border-silver-900 rounded-xl px-6 py-4 text-silver-100 focus:outline-none focus:border-silver-500 transition-colors" />
            <input type="text" placeholder="Last Name" className="bg-tech-dark border border-silver-900 rounded-xl px-6 py-4 text-silver-100 focus:outline-none focus:border-silver-500 transition-colors" />
          </div>
          <input type="email" placeholder="Email Address" className="w-full bg-tech-dark border border-silver-900 rounded-xl px-6 py-4 text-silver-100 focus:outline-none focus:border-silver-500 transition-colors" />
          
          <button className="w-full bg-silver-100 text-tech-dark font-bold tracking-widest uppercase rounded-xl px-6 py-5 hover:bg-silver-300 transition-colors mt-8">
            Complete Pre-Order
          </button>
        </form>
      </div>
    </section>
  );
}
