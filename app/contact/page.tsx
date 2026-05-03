import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Avorria Trades",
  description: "Get in touch with the Avorria Trades team. Email hello@avorria.com — we respond within one business day.",
};

export default function ContactPage() {
  return (
    <div className="bg-forge-black min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero */}
        <section className="mb-16">
          <h1 className="font-heading font-extrabold text-5xl md:text-[64px] leading-[1.1] tracking-[-0.03em] text-white mb-6">
            Get in <span className="text-amber">touch.</span>
          </h1>
          <p className="text-xl text-muted-light max-w-2xl">
            Whether you've got questions about a package, want to discuss a custom build, or just want to chat about your trade — we're here.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column — Contact Info */}
          <div className="space-y-8">
            <div className="bg-steel border border-border rounded-2xl p-8">
              <h2 className="font-heading font-bold text-2xl text-white mb-8">Contact Information</h2>
              
              <div className="space-y-6">


                <a href="mailto:hello@avorria.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-amber/10 text-amber flex items-center justify-center text-xl group-hover:bg-amber group-hover:text-forge-black transition-colors">
                    ✉️
                  </div>
                  <div>
                    <div className="text-sm text-muted mb-1">Email</div>
                    <div className="text-lg font-medium text-white group-hover:text-amber transition-colors">hello@avorria.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber/10 text-amber flex items-center justify-center text-xl">
                    🕒
                  </div>
                  <div>
                    <div className="text-sm text-muted mb-1">Office Hours</div>
                    <div className="text-lg font-medium text-white">Mon–Fri, 9am–5:30pm</div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-border">
                <p className="text-sm text-muted mb-4">Prefer to fill in a form?</p>
                <Link href="/get-started" className="btn-secondary w-full flex justify-center py-3">
                  Get Started Form →
                </Link>
              </div>
            </div>

            {/* Map Mock */}
            <div className="bg-steel border border-border rounded-2xl p-4 aspect-video flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-forge-black/20 to-forge-black/60 pointer-events-none" />
              <div className="relative z-10 flex flex-col items-center">
                <div className="text-4xl mb-2 animate-[float_4s_ease-in-out_infinite]">📍</div>
                <div className="bg-forge-black/80 backdrop-blur border border-border px-4 py-2 rounded shadow-2xl">
                  <p className="text-sm font-medium text-white">Chesterfield, Derbyshire</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Quick Form */}
          <div>
            <div className="bg-steel border border-border rounded-2xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber/5 rounded-full blur-3xl pointer-events-none" />
              
              <h2 className="font-heading font-bold text-2xl text-white mb-8 relative z-10">Send a quick message</h2>
              
              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-muted-light mb-2">Name</label>
                    <input type="text" className="w-full bg-forge-black border border-border rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber transition-colors" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-light mb-2">Email</label>
                    <input type="email" className="w-full bg-forge-black border border-border rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber transition-colors" placeholder="your@email.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-light mb-2">Subject</label>
                  <select className="w-full bg-forge-black border border-border rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber transition-colors appearance-none">
                    <option>General enquiry</option>
                    <option>Pricing question</option>
                    <option>Existing client support</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-light mb-2">Message</label>
                  <textarea rows={5} className="w-full bg-forge-black border border-border rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber transition-colors resize-none" placeholder="How can we help?" />
                </div>

                <button type="button" className="btn-primary w-full py-4 text-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
