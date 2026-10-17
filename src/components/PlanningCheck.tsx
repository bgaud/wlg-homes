"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";

type Answers = {
  project: string;
  lot: string;
  timeline: string;
  budget: string;
  funding: string;
  mustHaves: string[];
};

const emptyAnswers: Answers = {
  project: "",
  lot: "",
  timeline: "",
  budget: "",
  funding: "",
  mustHaves: [],
};

const QUESTIONS = [
  {
    key: "project" as const,
    title: "What are you planning?",
    help: "Pick the closest match. You can change direction later.",
    options: [
      "Detached garage or full structure build",
      "New-build or addition framing",
      "Roofing",
      "Electrical (panel, wiring, or new circuits)",
      "Basement or renovation",
      "Seasonal lighting",
      "Not sure yet",
    ],
  },
  {
    key: "lot" as const,
    title: "What is the status of the lot or property?",
    help: "This is about site readiness, not a legal title check.",
    options: [
      "I have a house and need work on it",
      "I have a lot or pad ready to build on",
      "I have a lot, but no pad or foundation yet",
      "Still looking at lots or properties",
      "Not sure",
    ],
  },
  {
    key: "timeline" as const,
    title: "When would you like to start?",
    options: [
      "As soon as possible",
      "This season",
      "In the next 3-6 months",
      "6-12 months from now",
      "Just researching",
    ],
  },
  {
    key: "budget" as const,
    title: "Do you have a budget range in mind?",
    help: "Optional context only. This check does not estimate cost.",
    options: [
      "Still figuring it out",
      "Under $10,000",
      "$10,000-$25,000",
      "$25,000-$50,000",
      "$50,000-$100,000",
      "$100,000 or more",
      "Prefer not to say",
    ],
  },
  {
    key: "funding" as const,
    title: "How are you thinking about paying for the work?",
    help: "We are not a lender. This is not financial advice.",
    options: [
      "Paying as we go",
      "Financing is already arranged",
      "Pre-approved, still comparing options",
      "Still exploring options",
      "Prefer not to say",
    ],
  },
];

const MUST_HAVES = [
  "Permits handled for me",
  "One crew (no subcontracting surprises)",
  "Workshop or extra storage space",
  "Electrical ready for tools or an EV charger",
  "Finish that matches the existing home",
  "A schedule that accounts for Saskatchewan weather",
  "Not sure yet",
];

export type PlanningSummary = {
  headline: string;
  steps: string[];
  answers: Answers;
};

export function buildPlanningSummary(answers: Answers): PlanningSummary {
  const steps: string[] = [];

  if (answers.lot === "Still looking at lots or properties") {
    steps.push(
      "Confirm the community first. WLG Homes works in Saskatoon, Warman, Martensville, Delisle, and Prince Albert. If you are elsewhere in the greater Saskatoon area, ask whether the job is a fit before you spend time on drawings."
    );
  } else if (answers.lot === "I have a lot, but no pad or foundation yet") {
    steps.push(
      "A full garage or structure build usually starts with the concrete pad. WLG Homes coordinates the pad pour and cure, then frames, sides, roofs, and wires the building with the same crew. If you already have a pad, framing can start from there."
    );
  } else if (answers.lot === "I have a lot or pad ready to build on") {
    steps.push(
      "If the pad is poured and cured, the next conversation is scope: size, siding, roofing, and whether you want basic electrical or extra circuits. A standard double garage shell can be closed in quickly once the pad is ready; extras add time."
    );
  } else {
    steps.push(
      "Start with a free site visit so the owners can see the house or structure in person. Estimates are no-obligation, and they will tell you plainly whether the work is a fit."
    );
  }

  if (answers.project === "Detached garage or full structure build") {
    steps.push(
      "For a full build, typical talking points are size (single, double, or oversized with a workshop), whether the pad is done, and which permits you need. Building and electrical permits are handled by WLG Homes where the work requires them."
    );
  } else if (answers.project === "New-build or addition framing") {
    steps.push(
      "Framing for new builds and additions is core work for the crew. Bring any drawings you have, and ask about Saskatchewan Building Code snow and wind loads, openings, and how electrical and roofing will sequence if you want those trades in-house too."
    );
  } else if (answers.project === "Roofing") {
    steps.push(
      "A roofing conversation in Saskatoon usually starts with a look at the existing shingles, flashing, and ventilation. The team can repair or replace, and they build for freeze-thaw and snow load. A free estimate is the way to get a real scope, not a guess from a checklist."
    );
  } else if (answers.project === "Electrical (panel, wiring, or new circuits)") {
    steps.push(
      "Electrical work is done by licensed electricians. If you are adding load (a hot tub, workshop, or EV charger) or still have an older panel, a site visit is the right next step. Permits and inspection are part of the process when the work requires them."
    );
  } else if (answers.project === "Basement or renovation") {
    steps.push(
      "Basement framing can be a short on-site window; a fuller renovation depends entirely on scope. Ask for a walkthrough so you get a timeline that matches the actual work, not a generic number."
    );
  } else if (answers.project === "Seasonal lighting") {
    steps.push(
      "Holiday lighting is booked before the rush. Ask about install, maintenance, and takedown as a package so you are not scrambling in November."
    );
  } else {
    steps.push(
      "If you are still deciding, that is fine. A short call or the quote form with what you know (property, rough idea, timing) is enough for WLG Homes to point you toward the right service."
    );
  }

  if (
    answers.timeline === "As soon as possible" ||
    answers.timeline === "This season"
  ) {
    steps.push(
      "You want to start soon. Reach out now for a free estimate so the crew can look at weather, permits, and the current schedule. Saskatchewan seasons are short; waiting until you have every detail often costs a weather window."
    );
  } else if (answers.timeline === "Just researching") {
    steps.push(
      "You are early, which is a good time to collect facts. Read the service pages, look at recent work, and use a free estimate when you want a real conversation. This checklist is not a substitute for a site visit."
    );
  }

  if (answers.funding === "Still exploring options") {
    steps.push(
      "If funding is still open, get a written estimate first so you are planning around a real scope. WLG Homes is not a lender and cannot advise on mortgages, construction loans, or pre-approval."
    );
  }

  if (answers.mustHaves.includes("Permits handled for me")) {
    steps.push(
      "You want permits handled. WLG Homes manages the permit process for work that requires it, including electrical, structural framing, and major renovations, and coordinates inspections."
    );
  }
  if (answers.mustHaves.includes("One crew (no subcontracting surprises)")) {
    steps.push(
      "You want one crew. Framing, roofing, and electrical sit under one roof here, with the owners on the job site rather than a chain of subcontractors."
    );
  }
  if (answers.mustHaves.includes("Electrical ready for tools or an EV charger")) {
    steps.push(
      "If you want workshop power or EV-ready wiring, say so up front. Licensed electricians can plan a sub-panel, 240V circuit, or charger wiring as part of a build or an upgrade, subject to the existing service."
    );
  }

  const unique = [...new Set(steps)];

  let headline = "Here is a practical next-step plan based on what you told us.";
  if (answers.lot === "Still looking at lots or properties") {
    headline = "You are still choosing a site. Lock the location, then talk scope.";
  } else if (answers.project === "Detached garage or full structure build") {
    headline = "A full build is a sequenced project. Pad, permits, then the shell.";
  } else if (answers.timeline === "Just researching") {
    headline = "You are gathering information. Use this as a checklist, not a quote.";
  }

  return { headline, steps: unique, answers };
}

function summaryToMessage(summary: PlanningSummary): string {
  const a = summary.answers;
  return [
    summary.headline,
    "",
    "Answers:",
    `Project: ${a.project}`,
    `Lot / site: ${a.lot}`,
    `Timeline: ${a.timeline}`,
    `Budget range: ${a.budget}`,
    `Funding: ${a.funding}`,
    `Must-haves: ${a.mustHaves.join("; ") || "None selected"}`,
    "",
    "Suggested next steps:",
    ...summary.steps.map((step, i) => `${i + 1}. ${step}`),
  ].join("\n");
}

const fieldClass =
  "w-full min-h-11 border border-slate-300 rounded-lg px-3 py-2.5 text-base sm:text-sm bg-white text-[#1e2a3a] focus:outline-none focus:ring-2 focus:ring-blue-500";

export default function PlanningCheck() {
  const startedAt = useRef(Date.now());
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(emptyAnswers);
  const [summary, setSummary] = useState<PlanningSummary | null>(null);
  const [emailOpen, setEmailOpen] = useState(false);
  const [emailForm, setEmailForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  const totalSteps = QUESTIONS.length + 1;
  const onMustHaves = step === QUESTIONS.length;
  const progress = summary ? 100 : Math.round(((step + 1) / (totalSteps + 1)) * 100);

  const canContinue = useMemo(() => {
    if (summary) return false;
    if (onMustHaves) return answers.mustHaves.length > 0;
    const key = QUESTIONS[step].key;
    return Boolean(answers[key]);
  }, [answers, onMustHaves, step, summary]);

  const selectOption = (key: keyof Omit<Answers, "mustHaves">, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const toggleMustHave = (value: string) => {
    setAnswers((prev) => {
      if (value === "Not sure yet") {
        return { ...prev, mustHaves: prev.mustHaves.includes(value) ? [] : [value] };
      }
      const withoutUnsure = prev.mustHaves.filter((item) => item !== "Not sure yet");
      const next = withoutUnsure.includes(value)
        ? withoutUnsure.filter((item) => item !== value)
        : [...withoutUnsure, value];
      return { ...prev, mustHaves: next };
    });
  };

  const goNext = () => {
    if (onMustHaves) {
      setSummary(buildPlanningSummary(answers));
      return;
    }
    setStep((s) => Math.min(s + 1, QUESTIONS.length));
  };

  const goBack = () => {
    if (summary) {
      setSummary(null);
      return;
    }
    setStep((s) => Math.max(s - 1, 0));
  };

  const handleEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!summary) return;
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: emailForm.name,
          email: emailForm.email,
          phone: emailForm.phone,
          company: emailForm.company,
          message: summaryToMessage(summary),
          projectType: answers.project,
          location: answers.lot,
          timeline: answers.timeline,
          budget: answers.budget,
          source: "planning-check",
          startedAt: startedAt.current,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-8">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600 mb-2">
          {summary ? "Your summary" : `Step ${step + 1} of ${totalSteps}`}
        </p>
        <div
          className="h-1.5 rounded-full bg-slate-100 overflow-hidden"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Planning check progress"
        >
          <div
            className="h-full bg-[#c9a84c] rounded-full transition-[width] duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {!summary && !onMustHaves && (
        <fieldset>
          <legend className="font-heading text-2xl font-semibold text-[#1e2a3a] mb-2">
            {QUESTIONS[step].title}
          </legend>
          {QUESTIONS[step].help && (
            <p className="text-sm text-slate-500 mb-4">{QUESTIONS[step].help}</p>
          )}
          <div className="grid gap-2">
            {QUESTIONS[step].options.map((option) => {
              const selected = answers[QUESTIONS[step].key] === option;
              return (
                <label
                  key={option}
                  className={`flex items-center gap-3 min-h-12 px-4 py-3 rounded-xl border cursor-pointer transition-colors ${
                    selected
                      ? "border-blue-600 bg-blue-50 text-[#1e2a3a]"
                      : "border-slate-200 hover:border-blue-300 hover:bg-slate-50"
                  }`}
                >
                  <input
                    type="radio"
                    name={QUESTIONS[step].key}
                    value={option}
                    checked={selected}
                    onChange={() => selectOption(QUESTIONS[step].key, option)}
                    className="mt-0.5 shrink-0"
                  />
                  <span className="text-sm sm:text-[0.95rem] leading-snug">{option}</span>
                </label>
              );
            })}
          </div>
        </fieldset>
      )}

      {!summary && onMustHaves && (
        <fieldset>
          <legend className="font-heading text-2xl font-semibold text-[#1e2a3a] mb-2">
            What matters most on this project?
          </legend>
          <p className="text-sm text-slate-500 mb-4">Select all that apply.</p>
          <div className="grid gap-2">
            {MUST_HAVES.map((option) => {
              const selected = answers.mustHaves.includes(option);
              return (
                <label
                  key={option}
                  className={`flex items-center gap-3 min-h-12 px-4 py-3 rounded-xl border cursor-pointer transition-colors ${
                    selected
                      ? "border-blue-600 bg-blue-50 text-[#1e2a3a]"
                      : "border-slate-200 hover:border-blue-300 hover:bg-slate-50"
                  }`}
                >
                  <input
                    type="checkbox"
                    name="mustHaves"
                    value={option}
                    checked={selected}
                    onChange={() => toggleMustHave(option)}
                    className="mt-0.5 shrink-0"
                  />
                  <span className="text-sm sm:text-[0.95rem] leading-snug">{option}</span>
                </label>
              );
            })}
          </div>
        </fieldset>
      )}

      {summary && (
        <div>
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#1e2a3a] mb-4">
            {summary.headline}
          </h2>
          <ol className="space-y-4 mb-8">
            {summary.steps.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 w-7 h-7 rounded-full bg-[#1e2a3a] text-white text-sm font-semibold flex items-center justify-center">
                  {i + 1}
                </span>
                <p className="text-slate-600 leading-relaxed pt-0.5">{item}</p>
              </li>
            ))}
          </ol>

          <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950 mb-8">
            This is a planning checklist, not a quote, cost estimate, or financial or legal
            advice. Timelines and scope are confirmed in person. WLG Homes does not provide
            lending, permit-law, or real-estate advice.
          </div>

          {status === "success" ? (
            <div
              role="status"
              className="rounded-xl border border-green-200 bg-green-50 px-4 py-4 text-green-900"
            >
              <p className="font-semibold mb-1">Summary emailed.</p>
              <p className="text-sm">
                Check your inbox, and we will follow up within one business day. You can also{" "}
                <Link href="/contact" className="underline font-semibold">
                  request a free estimate
                </Link>{" "}
                or call{" "}
                <a href="tel:13062706616" className="underline font-semibold">
                  1-306-270-6616
                </a>
                .
              </p>
            </div>
          ) : (
            <>
              {!emailOpen ? (
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => setEmailOpen(true)}
                    className="min-h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    Email me this summary
                  </button>
                  <Link
                    href="/contact"
                    className="min-h-12 inline-flex items-center justify-center border-2 border-[#1e2a3a] text-[#1e2a3a] hover:bg-[#1e2a3a] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    Request a free estimate
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleEmail} className="space-y-4 relative">
                  <div className="hp-field" aria-hidden="true">
                    <label htmlFor="check-company">Company</label>
                    <input
                      id="check-company"
                      name="company"
                      value={emailForm.company}
                      onChange={(e) =>
                        setEmailForm((prev) => ({ ...prev, company: e.target.value }))
                      }
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>
                  <p className="text-sm text-slate-600">
                    We will email your summary and a copy to the WLG Homes team so they can
                    follow up. Same spam protections as the quote form.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="check-name" className="block text-sm font-semibold mb-1">
                        Name <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="check-name"
                        required
                        autoComplete="name"
                        className={fieldClass}
                        value={emailForm.name}
                        onChange={(e) =>
                          setEmailForm((prev) => ({ ...prev, name: e.target.value }))
                        }
                      />
                    </div>
                    <div>
                      <label htmlFor="check-email" className="block text-sm font-semibold mb-1">
                        Email <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="check-email"
                        type="email"
                        required
                        autoComplete="email"
                        className={fieldClass}
                        value={emailForm.email}
                        onChange={(e) =>
                          setEmailForm((prev) => ({ ...prev, email: e.target.value }))
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="check-phone" className="block text-sm font-semibold mb-1">
                      Phone <span className="font-normal text-slate-500">(optional)</span>
                    </label>
                    <input
                      id="check-phone"
                      type="tel"
                      autoComplete="tel"
                      className={fieldClass}
                      value={emailForm.phone}
                      onChange={(e) =>
                        setEmailForm((prev) => ({ ...prev, phone: e.target.value }))
                      }
                    />
                  </div>
                  {status === "error" && (
                    <div role="alert" className="text-sm text-red-700">
                      {errorMsg}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full min-h-12 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-semibold rounded-lg"
                  >
                    {status === "loading" ? "Sending…" : "Email my summary"}
                  </button>
                </form>
              )}
            </>
          )}
        </div>
      )}

      {!summary && (
        <div className="mt-6 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={goBack}
            disabled={step === 0}
            className="min-h-11 px-4 py-2 text-sm font-semibold text-slate-600 hover:text-[#1e2a3a] disabled:opacity-40"
          >
            Back
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={!canContinue}
            className="min-h-12 min-w-[140px] bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            {onMustHaves ? "See my plan" : "Continue"}
          </button>
        </div>
      )}

      {summary && (
        <button
          type="button"
          onClick={goBack}
          className="mt-6 text-sm font-semibold text-slate-500 hover:text-[#1e2a3a]"
        >
          Change my answers
        </button>
      )}
    </div>
  );
}
