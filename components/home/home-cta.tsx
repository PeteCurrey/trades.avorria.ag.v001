import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-forge-black">
      {/* Amber radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[800px] bg-amber-glow/30 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <h2 className="font-heading font-extrabold text-5xl md:text-[64px] leading-[1.1] tracking-[-0.03em] text-white mb-6">
          Ready to win more jobs online?
        </h2>
        
        <p className="text-xl text-muted-light max-w-[600px] mx-auto mb-12">
          Join hundreds of tradespeople across the UK with a website that works as hard as they do.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/get-started" className="btn-primary">
            Get a Free Quote &rarr;
          </Link>
          <Link href="/packages" className="btn-ghost text-base font-medium">
            See Our Packages
          </Link>
        </div>
      </div>
    </section>
  );
}
