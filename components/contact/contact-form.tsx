"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "General enquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/general", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-steel border border-border rounded-2xl p-8 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber/5 rounded-full blur-3xl pointer-events-none" />
      
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <h2 className="font-heading font-bold text-2xl text-white mb-8 relative z-10">Send a quick message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-muted-light mb-2">Name</label>
                  <input required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-forge-black border border-border rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber transition-colors" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-light mb-2">Email</label>
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-forge-black border border-border rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber transition-colors" placeholder="your@email.com" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-light mb-2">Subject</label>
                <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full bg-forge-black border border-border rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber transition-colors appearance-none">
                  <option>General enquiry</option>
                  <option>Pricing question</option>
                  <option>Existing client support</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-light mb-2">Message</label>
                <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full bg-forge-black border border-border rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber transition-colors resize-none" placeholder="How can we help?" />
              </div>

              <button type="submit" disabled={loading} className="btn-primary w-full py-4 text-lg disabled:opacity-50">
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
            <div className="w-16 h-16 bg-amber/10 border border-amber/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-2xl text-white mb-2">Message Sent</h3>
            <p className="text-muted-light">We'll get back to you within one business day.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
