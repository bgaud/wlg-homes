"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  BUDGET_OPTIONS,
  PROJECT_TYPES,
  TIMELINE_OPTIONS,
} from "@/lib/site";

interface FormState {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  timeline: string;
  budget: string;
  message: string;
  company: string;
}

const emptyForm: FormState = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  location: "",
  timeline: "",
  budget: "",
  message: "",
  company: "",
};

const fieldClass =
  "w-full min-h-11 border border-slate-300 rounded-lg px-3 py-2.5 text-base sm:text-sm bg-white text-[#1e2a3a] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500";

export default function ContactForm() {
  const router = useRouter();
  const startedAt = useRef(Date.now());
  const [form, setForm] = useState<FormState>(emptyForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source: "quote",
          startedAt: startedAt.current,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
      setForm(emptyForm);
      router.push("/contact/thanks");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 relative"
      noValidate
      aria-label="Quote request form"
    >
      <div className="hp-field" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          value={form.company}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-[#1e2a3a] mb-1">
            Full name <span aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            aria-required="true"
            autoComplete="name"
            placeholder="Jane Smith"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-[#1e2a3a] mb-1">
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            aria-required="true"
            autoComplete="email"
            inputMode="email"
            placeholder="jane@example.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-[#1e2a3a] mb-1">
            Phone <span aria-hidden="true">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            aria-required="true"
            autoComplete="tel"
            inputMode="tel"
            placeholder="306-000-0000"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="projectType" className="block text-sm font-semibold text-[#1e2a3a] mb-1">
            Project type <span aria-hidden="true">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            value={form.projectType}
            onChange={handleChange}
            required
            aria-required="true"
            className={fieldClass}
          >
            <option value="">Select a project type</option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="location" className="block text-sm font-semibold text-[#1e2a3a] mb-1">
            Lot or location <span aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={form.location}
            onChange={handleChange}
            required
            aria-required="true"
            autoComplete="address-level2"
            placeholder="Neighbourhood, city, or lot"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="timeline" className="block text-sm font-semibold text-[#1e2a3a] mb-1">
            Timeline <span aria-hidden="true">*</span>
          </label>
          <select
            id="timeline"
            name="timeline"
            value={form.timeline}
            onChange={handleChange}
            required
            aria-required="true"
            className={fieldClass}
          >
            <option value="">When do you want to start?</option>
            {TIMELINE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="budget" className="block text-sm font-semibold text-[#1e2a3a] mb-1">
          Budget range <span className="font-normal text-slate-500">(optional)</span>
        </label>
        <select
          id="budget"
          name="budget"
          value={form.budget}
          onChange={handleChange}
          className={fieldClass}
        >
          <option value="">Select a range if you have one</option>
          {BUDGET_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <p className="mt-1 text-xs text-slate-500">
          This helps us prepare for the conversation. It is not a quote.
        </p>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-[#1e2a3a] mb-1">
          Project details <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          aria-required="true"
          rows={5}
          placeholder="What are you hoping to build or fix? Lot status, must-haves, and anything else we should know."
          className={`${fieldClass} resize-y min-h-[8rem]`}
        />
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm"
        >
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full min-h-12 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-semibold py-3 px-6 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        aria-busy={status === "loading"}
      >
        {status === "loading" ? "Sending…" : "Request a free estimate"}
      </button>

      <p className="text-xs text-slate-400 text-center">
        By submitting this form, you agree to our{" "}
        <a href="/privacy" className="underline hover:text-slate-600 transition-colors">
          Privacy Policy
        </a>
        . We use your information only to respond to your enquiry.
      </p>
    </form>
  );
}
