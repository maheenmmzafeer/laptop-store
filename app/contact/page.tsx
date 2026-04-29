import PageHeader from "../components/PageHeader";
import Button from "../components/Button";

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto space-y-12">
      <PageHeader 
        title="Get in Touch" 
        subtitle="Have a question about a product or need support? Our team is here to help."
      />

      <div className="grid md:grid-cols-5 gap-10 animate-fade-up animate-fade-up-delay-1">
        
        {/* Contact Form */}
        <div className="md:col-span-3 card">
          <h2 className="text-xl font-semibold font-outfit mb-6">Send us a message</h2>
          <form className="space-y-5">
            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[var(--text-secondary)]">First Name</label>
                <input className="input-field" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[var(--text-secondary)]">Last Name</label>
                <input className="input-field" placeholder="Doe" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--text-secondary)]">Email Address</label>
              <input type="email" className="input-field" placeholder="john@example.com" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--text-secondary)]">Subject</label>
              <input className="input-field" placeholder="How can we help?" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--text-secondary)]">Message</label>
              <textarea className="input-field resize-none" rows={5} placeholder="Your message here..." />
            </div>

            <Button className="w-full" size="lg">Send Message</Button>
          </form>
        </div>

        {/* Contact Info Cards */}
        <div className="md:col-span-2 space-y-5">
          <div className="card bg-[var(--surface-hover)]/50 border-transparent hover:border-[var(--border)] group">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-semibold text-[var(--text-primary)] mb-1">Email</h3>
            <p className="text-[var(--text-secondary)] text-sm mb-2">Our friendly team is here to help.</p>
            <p className="font-medium text-blue-400">hello@techlaptops.com</p>
          </div>

          <div className="card bg-[var(--surface-hover)]/50 border-transparent hover:border-[var(--border)] group">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-semibold text-[var(--text-primary)] mb-1">Office</h3>
            <p className="text-[var(--text-secondary)] text-sm mb-2">Come say hello at our HQ.</p>
            <p className="font-medium text-blue-400">100 Tech Hub St.<br/>San Francisco, CA 94103</p>
          </div>

          <div className="card bg-[var(--surface-hover)]/50 border-transparent hover:border-[var(--border)] group">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-semibold text-[var(--text-primary)] mb-1">Phone</h3>
            <p className="text-[var(--text-secondary)] text-sm mb-2">Mon-Fri from 8am to 5pm.</p>
            <p className="font-medium text-blue-400">+1 (555) 000-0000</p>
          </div>
        </div>

      </div>
    </div>
  );
}