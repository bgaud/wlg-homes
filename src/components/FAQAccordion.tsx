"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do you offer free estimates?",
    a: "Yes — we provide free, no-obligation estimates for all projects. Reach out through our contact form or give us a call and we'll schedule a time to visit your site.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Absolutely. WLG Homes carries full liability insurance and our electricians are licensed with the Saskatchewan electrical authority. We pull all required permits so your project is fully compliant.",
  },
  {
    q: "What areas do you serve?",
    a: "We are based in Saskatoon, SK and serve the greater Saskatoon area including surrounding communities. Contact us if you're unsure whether we cover your location.",
  },
  {
    q: "How long does a typical renovation take?",
    a: "It depends on the scope. A basement framing project can take 2–4 days depending on the size, while a full home renovation would completely depend on the scope of work. We'll give you a detailed timeline during your estimate.",
  },
  {
    q: "Do you handle permits?",
    a: "Yes. We manage the permit process on your behalf for all work that requires it — including electrical, structural framing, and major renovations — so you don't have to deal with the paperwork.",
  },
  {
    q: "What is your referral program?",
    a: "Refer a friend or neighbour to WLG Homes and when that job is completed, you'll receive $150 off your next project. No limits — every referral counts.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3" role="list">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border border-slate-200 rounded-lg overflow-hidden"
          role="listitem"
        >
          <button
            className="w-full flex justify-between items-center px-5 py-4 text-left font-semibold text-[#1e2a3a] hover:bg-slate-50 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset"
            aria-expanded={open === i}
            aria-controls={`faq-answer-${i}`}
            id={`faq-question-${i}`}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span>{faq.q}</span>
            <svg
              className={`w-5 h-5 text-blue-500 flex-shrink-0 ml-3 transition-transform ${open === i ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            id={`faq-answer-${i}`}
            role="region"
            aria-labelledby={`faq-question-${i}`}
            hidden={open !== i}
            className="px-5 pb-4 text-slate-600 text-sm leading-relaxed"
          >
            {faq.a}
          </div>
        </div>
      ))}
    </div>
  );
}
