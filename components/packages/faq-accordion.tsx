"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Do I need to provide content?",
    answer: "No, we write it for your trade. We have industry-specific copywriters who know exactly how to structure content for plumbers, electricians, builders, etc. to rank on Google."
  },
  {
    question: "How long does it take?",
    answer: "3 weeks from sign-off to live. We work efficiently because we specialise in this industry. Once we have your initial details, we handle the rest."
  },
  {
    question: "Can I update it myself?",
    answer: "Yes, easy CMS access is included. You can easily add new portfolio items, update text, or change images without needing to know any code."
  },
  {
    question: "What if I already have a site?",
    answer: "We migrate it completely free of charge on the Forge and Titan packages. We ensure all your existing SEO value and content is safely transferred."
  },
  {
    question: "Is TradeDesk an extra cost?",
    answer: "No, it's included as standard in our Forge and Titan packages. There are no separate subscriptions or hidden fees for the platform."
  },
  {
    question: "Do you do SEO?",
    answer: "Yes, all our packages include foundational SEO. Forge includes a 12-month local SEO strategy to dominate your area, and Titan expands this to up to 5 surrounding areas."
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto border-t border-border mt-20">
      <h3 className="font-heading font-bold text-3xl text-white my-10 text-center">Frequently Asked Questions</h3>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={`border border-border rounded-lg bg-steel overflow-hidden transition-all duration-300 ${isOpen ? "border-amber/40" : ""}`}
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
              >
                <span className={`font-medium transition-colors duration-200 ${isOpen ? "text-amber" : "text-white"}`}>
                  {faq.question}
                </span>
                <span className={`text-amber transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out`}
                style={{ maxHeight: isOpen ? "200px" : "0", opacity: isOpen ? 1 : 0, paddingBottom: isOpen ? "1.25rem" : "0" }}
              >
                <p className="text-muted-light text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
