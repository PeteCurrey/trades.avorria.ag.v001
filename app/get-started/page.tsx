"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const trades = [
  { label: "Electrician", icon: "⚡" },
  { label: "Plumber", icon: "🔧" },
  { label: "Gas Engineer", icon: "🔥" },
  { label: "HVAC", icon: "❄️" },
  { label: "Builder", icon: "🏗️" },
  { label: "Roofer", icon: "🏠" },
  { label: "Joiner", icon: "🪚" },
  { label: "Landscaper", icon: "🌿" },
  { label: "Other", icon: "+" },
];

type FormData = {
  trade: string;
  name: string;
  businessName: string;
  location: string;
  coverageAreas: string;
  hasWebsite: string;
  currentWebsite: string;
  package: string;
  referral: string;
  email: string;
  phone: string;
  bestTime: string;
  notes: string;
};

const emptyForm: FormData = {
  trade: "", name: "", businessName: "", location: "",
  coverageAreas: "", hasWebsite: "", currentWebsite: "",
  package: "", referral: "", email: "", phone: "",
  bestTime: "Anytime", notes: "",
};

export default function GetStartedPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const set = (k: keyof FormData, v: string) => setForm(prev => ({ ...prev, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch {}
    setSubmitted(true);
  };

  const stepVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <div className="bg-forge-black min-h-screen pt-28 pb-24">
      <div className="max-w-2xl mx-auto px-6">

        {!submitted && (
          <>
            {/* Hero */}
            <div className="text-center mb-12">
              <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-4">
                Let's build your <span className="text-amber">trades website.</span>
              </h1>
              <p className="text-muted-light text-lg">Three quick steps and we'll be in touch within one business day.</p>

              {/* Progress bar */}
              <div className="flex items-center justify-center gap-3 mt-10">
                {[1, 2, 3].map(s => (
                  <div key={s} className="flex items-center gap-3">
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold transition-all duration-500 ${
                      step > s ? "bg-amber text-forge-black" :
                      step === s ? "bg-amber text-forge-black ring-4 ring-amber/30" :
                      "bg-steel border border-border text-muted"
                    }`}>
                      {step > s ? "✓" : s}
                    </div>
                    <span className={`text-xs font-medium hidden sm:block ${step === s ? "text-amber" : "text-muted"}`}>
                      {s === 1 ? "Your Trade" : s === 2 ? "Your Business" : "Contact"}
                    </span>
                    {s < 3 && <div className={`hidden sm:block h-px w-10 transition-colors duration-500 ${step > s ? "bg-amber" : "bg-border"}`} />}
                  </div>
                ))}
              </div>
            </div>

            {/* Form card */}
            <div className="bg-steel border border-border rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber/5 rounded-full blur-3xl pointer-events-none" />

              <AnimatePresence mode="wait">
                {/* ── Step 1 ── */}
                {step === 1 && (
                  <motion.div key="step1" variants={stepVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
                    <h2 className="font-heading font-bold text-xl text-white mb-8">Step 1 — Your Trade</h2>

                    <label className="block text-sm font-medium text-muted-light mb-4">What's your trade?</label>
                    <div className="grid grid-cols-3 gap-3 mb-8">
                      {trades.map(t => (
                        <button
                          key={t.label}
                          type="button"
                          onClick={() => set("trade", t.label)}
                          className={`relative flex flex-col items-center gap-2 p-4 rounded border text-sm font-medium transition-all duration-200 ${
                            form.trade === t.label
                              ? "bg-amber/10 border-amber text-amber"
                              : "bg-forge-black border-border text-muted hover:border-amber/40 hover:text-white"
                          }`}
                        >
                          {form.trade === t.label && (
                            <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-amber rounded-full flex items-center justify-center text-[9px] text-forge-black font-bold">✓</span>
                          )}
                          <span className="text-2xl">{t.icon}</span>
                          <span className="text-xs text-center leading-tight">{t.label}</span>
                        </button>
                      ))}
                    </div>

                    <div className="space-y-4 mb-8">
                      <div>
                        <label className="block text-sm font-medium text-muted-light mb-2">Your name</label>
                        <input type="text" value={form.name} onChange={e => set("name", e.target.value)}
                          placeholder="Full name"
                          className="w-full bg-forge-black border border-border rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber transition-colors placeholder:text-muted/50" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-muted-light mb-2">Business name</label>
                        <input type="text" value={form.businessName} onChange={e => set("businessName", e.target.value)}
                          placeholder="e.g. Hartley Electrical or Sole Trader"
                          className="w-full bg-forge-black border border-border rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber transition-colors placeholder:text-muted/50" />
                      </div>
                    </div>

                    <button onClick={() => setStep(2)} disabled={!form.trade || !form.name}
                      className="btn-primary w-full disabled:opacity-40 disabled:cursor-not-allowed">
                      Continue →
                    </button>
                  </motion.div>
                )}

                {/* ── Step 2 ── */}
                {step === 2 && (
                  <motion.div key="step2" variants={stepVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
                    <h2 className="font-heading font-bold text-xl text-white mb-8">Step 2 — Your Business</h2>
                    <div className="space-y-5 mb-8">
                      <div>
                        <label className="block text-sm font-medium text-muted-light mb-2">Where are you based?</label>
                        <input type="text" value={form.location} onChange={e => set("location", e.target.value)}
                          placeholder="e.g. Sheffield, South Yorkshire"
                          className="w-full bg-forge-black border border-border rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber transition-colors placeholder:text-muted/50" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-muted-light mb-2">Which areas do you cover?</label>
                        <input type="text" value={form.coverageAreas} onChange={e => set("coverageAreas", e.target.value)}
                          placeholder="e.g. Sheffield + 20 mile radius"
                          className="w-full bg-forge-black border border-border rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber transition-colors placeholder:text-muted/50" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-muted-light mb-3">Do you have a website now?</label>
                        <div className="flex gap-3">
                          {["Yes", "No"].map(opt => (
                            <button key={opt} type="button" onClick={() => set("hasWebsite", opt)}
                              className={`flex-1 py-3 rounded-sm border text-sm font-medium transition-all ${
                                form.hasWebsite === opt ? "bg-amber/10 border-amber text-amber" : "bg-forge-black border-border text-muted hover:border-amber/40"
                              }`}>{opt}</button>
                          ))}
                        </div>
                      </div>
                      {form.hasWebsite === "Yes" && (
                        <div>
                          <label className="block text-sm font-medium text-muted-light mb-2">Current website URL</label>
                          <input type="url" value={form.currentWebsite} onChange={e => set("currentWebsite", e.target.value)}
                            placeholder="https://..."
                            className="w-full bg-forge-black border border-border rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber transition-colors placeholder:text-muted/50" />
                        </div>
                      )}
                      <div>
                        <label className="block text-sm font-medium text-muted-light mb-3">Which package interests you?</label>
                        <div className="space-y-2">
                          {[
                            { label: "Spark", price: "£999 + £69/mo" },
                            { label: "Forge", price: "£1,799 + £99/mo" },
                            { label: "Titan", price: "£3,499 + £179/mo" },
                            { label: "Not sure yet", price: "" },
                          ].map(pkg => (
                            <label key={pkg.label} className={`flex items-center justify-between p-4 rounded-sm border cursor-pointer transition-all ${
                              form.package === pkg.label ? "bg-amber/10 border-amber" : "bg-forge-black border-border hover:border-amber/40"
                            }`}>
                              <div className="flex items-center gap-3">
                                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${form.package === pkg.label ? "border-amber" : "border-muted"}`}>
                                  {form.package === pkg.label && <div className="w-2 h-2 rounded-full bg-amber" />}
                                </div>
                                <span className={`text-sm font-medium ${form.package === pkg.label ? "text-amber" : "text-white"}`}>{pkg.label}</span>
                              </div>
                              {pkg.price && <span className="font-mono text-xs text-muted">{pkg.price}</span>}
                              <input type="radio" name="package" value={pkg.label} checked={form.package === pkg.label} onChange={() => set("package", pkg.label)} className="sr-only" />
                            </label>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-muted-light mb-2">How did you hear about us?</label>
                        <select value={form.referral} onChange={e => set("referral", e.target.value)}
                          className="w-full bg-forge-black border border-border rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber transition-colors">
                          <option value="">Select...</option>
                          {["Google", "Recommendation", "Social media", "Avorria", "Other"].map(o => <option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button onClick={() => setStep(1)} className="btn-secondary opacity-70 flex-grow">← Back</button>
                      <button onClick={() => setStep(3)} disabled={!form.location || !form.package}
                        className="btn-primary flex-[2] disabled:opacity-40 disabled:cursor-not-allowed">Continue →</button>
                    </div>
                  </motion.div>
                )}

                {/* ── Step 3 ── */}
                {step === 3 && (
                  <motion.div key="step3" variants={stepVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
                    <h2 className="font-heading font-bold text-xl text-white mb-8">Step 3 — Contact Details</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-muted-light mb-2">Email address</label>
                        <input type="email" required value={form.email} onChange={e => set("email", e.target.value)}
                          placeholder="name@yourbusiness.com"
                          className="w-full bg-forge-black border border-border rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber transition-colors placeholder:text-muted/50" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-muted-light mb-2">Phone number</label>
                        <input type="tel" required value={form.phone} onChange={e => set("phone", e.target.value)}
                          placeholder="07..."
                          className="w-full bg-forge-black border border-border rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber transition-colors placeholder:text-muted/50" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-muted-light mb-3">Best time to call</label>
                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                          {["Morning", "Afternoon", "Evening", "Anytime"].map(t => (
                            <label key={t} className={`text-center py-3 rounded-sm border text-sm cursor-pointer transition-all ${
                              form.bestTime === t ? "bg-amber/10 border-amber text-amber" : "bg-forge-black border-border text-muted hover:border-amber/40"
                            }`}>
                              {t}
                              <input type="radio" name="bestTime" value={t} checked={form.bestTime === t} onChange={() => set("bestTime", t)} className="sr-only" />
                            </label>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-muted-light mb-2">Anything else? <span className="opacity-50">(optional)</span></label>
                        <textarea rows={3} value={form.notes} onChange={e => set("notes", e.target.value)}
                          placeholder="Tell us anything useful — size of business, urgent timeline, etc."
                          className="w-full bg-forge-black border border-border rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber transition-colors resize-none placeholder:text-muted/50" />
                      </div>
                      <div className="flex gap-4 pt-2">
                        <button type="button" onClick={() => setStep(2)} className="btn-secondary opacity-70 flex-grow">← Back</button>
                        <button type="submit" className="btn-primary flex-[2]">Submit Enquiry →</button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Trust strip */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 text-sm text-muted">
              <span className="flex items-center gap-2"><span>🔒</span> Your details are private</span>
              <span className="hidden sm:block w-1 h-1 bg-border rounded-full" />
              <span className="flex items-center gap-2"><span>📞</span> No pushy sales calls</span>
              <span className="hidden sm:block w-1 h-1 bg-border rounded-full" />
              <span className="flex items-center gap-2"><span>⚡</span> Reply within 1 business day</span>
            </div>
          </>
        )}

        {/* ── Success Screen ── */}
        {submitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-amber/10 border border-amber/30 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="font-heading font-extrabold text-4xl text-white mb-4">Request received.</h2>
            <p className="text-muted-light text-xl mb-12 max-w-sm mx-auto">
              We'll be in touch within one business day to discuss your project.
            </p>
            <div className="bg-steel border border-border rounded-xl p-8 text-left max-w-md mx-auto">
              <p className="font-mono text-amber text-xs uppercase tracking-wider mb-6">What happens next</p>
              <ol className="space-y-5">
                {[
                  { n: "1", title: "Discovery Call", body: "A 15-minute call to understand your trade, your goals, and your area." },
                  { n: "2", title: "Tailored Proposal", body: "We'll send a detailed quote and initial design brief within 48 hours." },
                  { n: "3", title: "Build Starts", body: "Once approved, your website is live in 3 weeks." },
                ].map(s => (
                  <li key={s.n} className="flex gap-4">
                    <span className="w-7 h-7 rounded-full bg-amber/10 border border-amber/30 text-amber font-mono text-sm flex items-center justify-center shrink-0">{s.n}</span>
                    <div>
                      <p className="font-heading font-semibold text-white mb-1">{s.title}</p>
                      <p className="text-muted text-sm">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
