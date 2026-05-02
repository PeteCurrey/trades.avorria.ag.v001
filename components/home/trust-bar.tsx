"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function TrustBar() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 95%",
            once: true,
          },
        }
      );
    }
  }, []);

  const trustItems = [
    { label: "Checkatrade Partner", icon: <CheckIcon /> },
    { label: "Gas Safe Registered Websites", icon: <FlameIcon /> },
    { label: "NICEIC Accreditation Display", icon: <LightningIcon /> },
    { label: "TrustMark Integration", icon: <ShieldIcon /> },
    { label: "Google Business Profile Sync", icon: <GoogleIcon /> },
  ];

  return (
    <div ref={containerRef} className="w-full bg-steel border-y border-border overflow-hidden h-[80px] flex items-center relative z-20">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 relative h-full">
        {/* Desktop: Static Flex */}
        <div className="hidden lg:flex items-center justify-between h-full w-full">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              {item.icon}
              <span className="font-sans font-medium text-sm text-white whitespace-nowrap">{item.label}</span>
              {index < trustItems.length - 1 && (
                <div className="w-[1px] h-6 bg-border ml-6" />
              )}
            </div>
          ))}
        </div>

        {/* Mobile/Tablet: Marquee */}
        <div className="flex lg:hidden items-center h-full w-full animate-marquee">
          <div className="flex items-center gap-10 whitespace-nowrap">
            {[...trustItems, ...trustItems].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                {item.icon}
                <span className="font-sans font-medium text-sm text-white">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee > div {
          animation: marquee 20s linear infinite;
        }
      `}} />
    </div>
  );
}

// Simple SVG Icons
function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function FlameIcon() {
  return (
    <svg className="w-5 h-5 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
    </svg>
  );
}

function LightningIcon() {
  return (
    <svg className="w-5 h-5 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="w-5 h-5 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg className="w-5 h-5 text-amber" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
    </svg>
  );
}
