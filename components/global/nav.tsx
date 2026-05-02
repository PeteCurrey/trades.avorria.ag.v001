"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Who We Work With", href: "/who-we-work-with" },
    { name: "Packages", href: "/packages" },
    { name: "What's Included", href: "/whats-included" },
    { name: "TradeDesk", href: "/trades-platform", isNew: true },
    { name: "Portfolio", href: "/portfolio" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-forge-black/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 z-50">
            <span className="font-heading font-semibold text-2xl text-white tracking-tight">Avorria</span>
            <span className="font-heading font-semibold text-2xl text-amber tracking-tight">Trades</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  pathname === link.href ? "text-white" : "text-muted hover:text-white"
                } group`}
              >
                {link.name}
                {link.isNew && (
                  <span className="absolute -top-1 -right-2 w-1.5 h-1.5 rounded-full bg-amber" />
                )}
                {/* Underline draw animation */}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-amber transition-all duration-300 ease-out group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4 z-50">
            <Link href="/get-started" className="btn-primary hidden md:inline-flex text-sm px-5 py-2.5">
              Get Started &rarr;
            </Link>
            
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2 group"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-[2px] bg-white transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-[8px]" : ""}`} />
              <span className={`block w-6 h-[2px] bg-white transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-[2px] bg-white transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-forge-black flex flex-col pt-24 px-6 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-6 mt-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-heading font-semibold text-3xl text-white border-b border-border-amber pb-4 flex items-center justify-between"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <span>{link.name}</span>
              {link.isNew && (
                <span className="text-amber text-sm font-mono bg-amber/10 px-2 py-1 rounded">NEW</span>
              )}
            </Link>
          ))}
          <Link
            href="/get-started"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-heading font-semibold text-3xl text-amber pt-4"
          >
            Get Started &rarr;
          </Link>
        </nav>
      </div>
    </>
  );
}
