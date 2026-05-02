import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Avorria Trades",
  description: "Get in touch with the Avorria Trades team in Chesterfield. We specialize in websites and management platforms for UK tradespeople.",
};

export default function ContactPage() {
  return (
    <div className="bg-forge-black min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Info */}
          <div className="flex flex-col">
            <h1 className="font-heading font-extrabold text-5xl md:text-[64px] leading-[1.1] text-white mb-8">
              Let's talk <br />
              <span className="text-amber">shop.</span>
            </h1>
            <p className="text-xl text-muted-light max-w-[480px] mb-12 leading-relaxed">
              Whether you're a sole trader or a multi-van operation, we're here to help you win more jobs online.
            </p>

            <div className="space-y-12">
              <div>
                <h3 className="font-heading font-bold text-white text-xl mb-4">Direct Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-steel border border-border flex items-center justify-center group-hover:border-amber transition-colors">
                      <svg className="w-5 h-5 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="text-white text-lg font-mono">01246 912 840</span>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-steel border border-border flex items-center justify-center group-hover:border-amber transition-colors">
                      <svg className="w-5 h-5 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-white text-lg">hello@avorria.com</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-heading font-bold text-white text-xl mb-4">Location</h3>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-steel border border-border flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-muted-light text-lg">
                    Innovation House,<br />
                    Chesterfield, S41 0BJ<br />
                    United Kingdom
                  </p>
                </div>
              </div>

              <div>
                <p className="text-muted text-sm italic">
                  Avorria Trades is a division of Avorria — Digital Agency.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-steel border border-border rounded-2xl p-8 md:p-12">
            <h2 className="font-heading font-bold text-2xl text-white mb-8">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-muted-light mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-forge-black border border-border rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber transition-colors"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-light mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full bg-forge-black border border-border rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber transition-colors"
                    placeholder="07..."
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-light mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-forge-black border border-border rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber transition-colors"
                  placeholder="name@business.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-light mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-forge-black border border-border rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button className="btn-primary w-full">Send Message &rarr;</button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
