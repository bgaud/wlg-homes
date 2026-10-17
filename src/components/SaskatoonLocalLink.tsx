import Link from "next/link";

export default function SaskatoonLocalLink({ href, label }: { href: string; label: string }) {
  return (
    <section className="py-10 bg-blue-50 border-y border-blue-100">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="text-slate-700 text-sm leading-relaxed mb-3">
          Looking for Saskatoon-specific permit notes, neighbourhood context, and FAQs?
        </p>
        <Link href={href} className="text-blue-700 text-sm font-bold hover:underline">
          {label} →
        </Link>
      </div>
    </section>
  );
}
