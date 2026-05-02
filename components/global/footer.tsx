import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-steel border-t border-amber/50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Column 1: About */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-1 mb-6">
              <span className="font-heading font-semibold text-2xl text-white tracking-tight">Avorria</span>
              <span className="font-heading font-semibold text-2xl text-amber tracking-tight">Trades</span>
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-6">
              The UK's specialist digital partner for tradespeople. Premium websites and complete business management, all from one provider.
            </p>
          </div>

          {/* Column 2: Work With */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6">Who We Work With</h4>
            <ul className="space-y-3">
              {["Electricians", "Plumbers", "Gas Engineers", "HVAC", "Builders", "Roofers"].map((trade) => (
                <li key={trade}>
                  <Link href={`/who-we-work-with#${trade.toLowerCase().replace(" ", "-")}`} className="text-sm text-muted hover:text-amber transition-colors">
                    {trade}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Platform */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6">Platform & Pricing</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/trades-platform" className="text-sm text-muted hover:text-amber transition-colors flex items-center gap-2">
                  TradeDesk <span className="w-1.5 h-1.5 rounded-full bg-amber inline-block"></span>
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-sm text-muted hover:text-amber transition-colors">
                  Pricing Packages
                </Link>
              </li>
              <li>
                <Link href="/whats-included" className="text-sm text-muted hover:text-amber transition-colors">
                  What's Included
                </Link>
              </li>
              <li>
                <Link href="/cities" className="text-sm text-muted hover:text-amber transition-colors">
                  Cities We Cover
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm text-muted hover:text-amber transition-colors">
                  Live Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/the-workbench" className="text-sm text-muted hover:text-amber transition-colors">
                  The Workbench (Blog)
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-sm text-muted hover:text-amber transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted hover:text-amber transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted hover:text-amber transition-colors">
                  About Avorria
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li>01246 912 840</li>
              <li>hello@avorria.com</li>
              <li className="mt-4 pt-4 border-t border-border">
                <Link href="/get-started" className="text-amber hover:text-amber-light font-medium flex items-center gap-1">
                  Get a Free Quote &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border gap-4">
          <p className="text-xs text-muted">
            &copy; {currentYear} Avorria Trades. A division of{" "}
            <a href="https://avorria.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber transition-colors underline decoration-border underline-offset-2">
              Avorria
            </a>{" "}
            — Digital Agency, Chesterfield.
          </p>
          
          <div className="flex gap-4">
            {/* Simple CSS shapes / SVGs for social icons to avoid extra dependencies if not strictly needed */}
            <a href="#" className="text-muted hover:text-amber transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-muted hover:text-amber transition-colors" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-muted hover:text-amber transition-colors" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
