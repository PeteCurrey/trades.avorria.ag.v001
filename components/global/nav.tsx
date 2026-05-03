"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/who-we-work-with", label: "Who We Work With" },
  { href: "/packages", label: "Packages" },
  { href: "/whats-included", label: "What's Included" },
  { href: "/trades-platform", label: "TradeDesk" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/the-workbench", label: "The Workbench" },
];

const moreLinks = [
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-forge-black/80 backdrop-blur-md border-b border-border">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="Avorria Trades Home">
            <span className="font-heading font-bold text-white text-lg tracking-tight group-hover:text-amber transition-colors">
              Avorria <span className="text-amber">Trades</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  pathname === link.href ? "text-amber" : "text-muted hover:text-white"
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-amber transition-all duration-300 ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
            ))}

            {/* More dropdown */}
            <div className="relative">
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className="text-sm font-medium text-muted hover:text-white transition-colors flex items-center gap-1"
              >
                More
                <svg className={`w-3 h-3 transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-8 bg-steel border border-border rounded-lg p-2 min-w-[160px] shadow-xl"
                    onMouseLeave={() => setMoreOpen(false)}
                  >
                    {moreLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMoreOpen(false)}
                        className="block px-4 py-2.5 text-sm text-muted hover:text-white hover:bg-steel-light rounded transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/get-started" className="btn-primary text-sm py-2.5">
              Get Started →
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-6 h-0.5 bg-amber rounded-full" />
            <span className="block w-6 h-0.5 bg-amber rounded-full" />
            <span className="block w-4 h-0.5 bg-amber rounded-full" />
          </button>
        </nav>
      </header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-forge-black z-50 flex flex-col p-6 lg:hidden"
          >
            {/* Top row */}
            <div className="flex justify-between items-center mb-12">
              <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5">
                <span className="font-heading font-bold text-white text-lg tracking-tight">
                  Avorria <span className="text-amber">Trades</span>
                </span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-amber text-2xl leading-none hover:bg-steel transition-colors"
                aria-label="Close menu"
              >
                ×
              </button>
            </div>

            {/* Nav links */}
            <div className="flex flex-col gap-4 flex-grow">
              {[...navLinks, ...moreLinks].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ delay: i * 0.06, duration: 0.35 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`font-heading font-bold text-3xl block py-1 transition-colors duration-200 ${
                      pathname === link.href ? "text-amber" : "text-white hover:text-amber"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.35 }}
              className="mt-auto pt-8 border-t border-border"
            >
              <Link
                href="/get-started"
                onClick={() => setMobileOpen(false)}
                className="btn-primary w-full flex items-center justify-center text-base py-4"
              >
                Get Started →
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
