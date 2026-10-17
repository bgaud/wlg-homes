import Link from "next/link";

interface LocalCtasProps {
  estimateLabel?: string;
  className?: string;
  invert?: boolean;
}

export default function LocalCtas({
  estimateLabel = "Get a Free Estimate",
  className = "",
  invert = false,
}: LocalCtasProps) {
  const primary = invert
    ? "inline-flex items-center justify-center min-h-12 bg-white text-blue-700 hover:bg-blue-50 font-bold px-7 py-3.5 rounded-md transition-colors text-center"
    : "inline-flex items-center justify-center min-h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-md transition-colors text-center";
  const secondary = invert
    ? "inline-flex items-center justify-center min-h-12 border-2 border-white/60 text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-md transition-colors text-center"
    : "inline-flex items-center justify-center min-h-12 border-2 border-[#1e2a3a] text-[#1e2a3a] hover:bg-slate-50 font-semibold px-7 py-3.5 rounded-md transition-colors text-center";

  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <Link href="/contact" className={primary}>
        {estimateLabel}
      </Link>
      <Link href="/planning-check" className={secondary}>
        Start a Planning Check
      </Link>
    </div>
  );
}
