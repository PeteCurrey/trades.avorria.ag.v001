"use client";

import { useState } from "react";
import { Metadata } from "next";

export default function GetStartedPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    trade: "",
    name: "",
    businessName: "",
    location: "",
    currentWebsite: "",
    package: "",
    referral: "",
    email: "",
    phone: "",
    bestTime: ""
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4); // Show confirmation
  };

  const trades = [
    "Electrician", "Plumber", "Gas Engineer", "HVAC", 
    "Builder", "Roofer", "Joiner / Carpenter", 
    "Landscaper", "Painter / Decorator", "Other"
  ];

  return (
    <div className="bg-forge-black min-h-screen pt-32 pb-24">
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        
        {step < 4 && (
          <div className="text-center mb-12">
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-4">
              Let's build your <span className="text-amber">trades website.</span>
            </h1>
            <div className="flex items-center justify-center gap-4 mt-8">
              {[1, 2, 3].map(s => (
                <div 
                  key={s} 
                  className={`h-1 w-12 rounded-full transition-colors duration-500 ${step >= s ? "bg-amber" : "bg-steel"}`} 
                />
              ))}
            </div>
          </div>
        )}

        <div className="bg-steel border border-border rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber/5 rounded-full blur-3xl pointer-events-none" />

          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="font-heading font-bold text-2xl text-white mb-8">Step 1 — Your Trade</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-muted-light mb-2">Select Your Trade</label>
                  <select 
                    className="w-full bg-forge-black border border-border rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber transition-colors"
                    value={formData.trade}
                    onChange={e => setFormData({...formData, trade: e.target.value})}
                  >
                    <option value="">Select a trade...</option>
                    {trades.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-light mb-2">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-forge-black border border-border rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber transition-colors"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-light mb-2">Business Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-forge-black border border-border rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber transition-colors"
                    placeholder="e.g. Hartley Electrical"
                    value={formData.businessName}
                    onChange={e => setFormData({...formData, businessName: e.target.value})}
                  />
                </div>
                <button 
                  onClick={nextStep}
                  disabled={!formData.trade || !formData.name}
                  className="btn-primary w-full mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue &rarr;
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="font-heading font-bold text-2xl text-white mb-8">Step 2 — Your Business</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-muted-light mb-2">Location / Area You Cover</label>
                  <input 
                    type="text" 
                    className="w-full bg-forge-black border border-border rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber transition-colors"
                    placeholder="e.g. Sheffield & South Yorkshire"
                    value={formData.location}
                    onChange={e => setFormData({...formData, location: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-light mb-2">Current Website (optional)</label>
                  <input 
                    type="text" 
                    className="w-full bg-forge-black border border-border rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber transition-colors"
                    placeholder="https://..."
                    value={formData.currentWebsite}
                    onChange={e => setFormData({...formData, currentWebsite: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-light mb-2">Package Interest</label>
                  <select 
                    className="w-full bg-forge-black border border-border rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber transition-colors"
                    value={formData.package}
                    onChange={e => setFormData({...formData, package: e.target.value})}
                  >
                    <option value="">Select a package...</option>
                    <option value="Spark">Spark</option>
                    <option value="Forge">Forge</option>
                    <option value="Titan">Titan</option>
                    <option value="Not sure">Not sure yet</option>
                  </select>
                </div>
                <div className="flex gap-4 pt-4">
                  <button onClick={prevStep} className="btn-secondary flex-grow opacity-60">Back</button>
                  <button 
                    onClick={nextStep}
                    disabled={!formData.location || !formData.package}
                    className="btn-primary flex-[2]"
                  >
                    Continue &rarr;
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="font-heading font-bold text-2xl text-white mb-8">Step 3 — Contact Details</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-muted-light mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-forge-black border border-border rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber transition-colors"
                    placeholder="name@business.com"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-light mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full bg-forge-black border border-border rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber transition-colors"
                    placeholder="07..."
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-light mb-2">Best Time to Call</label>
                  <select 
                    className="w-full bg-forge-black border border-border rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber transition-colors"
                    value={formData.bestTime}
                    onChange={e => setFormData({...formData, bestTime: e.target.value})}
                  >
                    <option value="Anytime">Anytime</option>
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                  </select>
                </div>
                <div className="flex gap-4 pt-4">
                  <button onClick={prevStep} className="btn-secondary flex-grow opacity-60">Back</button>
                  <button 
                    type="submit"
                    className="btn-primary flex-[2]"
                  >
                    Submit Request &rarr;
                  </button>
                </div>
              </form>
            </div>
          )}

          {step === 4 && (
            <div className="animate-in fade-in zoom-in duration-500 text-center py-12">
              <div className="w-20 h-20 bg-amber/10 border border-amber/30 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-heading font-bold text-3xl text-white mb-4">Request Received!</h2>
              <p className="text-muted-light text-lg mb-8 max-w-sm mx-auto">
                We'll be in touch within 1 business day to discuss your project.
              </p>
              <div className="bg-forge-black border border-border p-6 rounded-lg text-left inline-block w-full">
                <p className="text-amber font-mono text-sm mb-2 uppercase tracking-wider">What happens next?</p>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-sm text-muted-light">
                    <span className="text-amber">1.</span>
                    <span>15-minute discovery call to learn about your trade.</span>
                  </li>
                  <li className="flex gap-3 text-sm text-muted-light">
                    <span className="text-amber">2.</span>
                    <span>Detailed proposal and initial design brief.</span>
                  </li>
                  <li className="flex gap-3 text-sm text-muted-light">
                    <span className="text-amber">3.</span>
                    <span>Kick-off and build starts within 48 hours.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <p className="text-center text-muted text-xs mt-8">
          By submitting this form you agree to our privacy policy. We will only contact you regarding your enquiry.
        </p>
      </div>
    </div>
  );
}
