import Link from "next/link";

interface BlogCardProps {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

export default function BlogCard({ slug, title, date, excerpt }: BlogCardProps) {
  const formatted = date
    ? new Date(date).toLocaleDateString("en-CA", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <article className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow flex flex-col gap-3">
      {formatted && (
        <time dateTime={date} className="text-xs text-slate-400 uppercase tracking-wider">
          {formatted}
        </time>
      )}
      <h3 className="text-[#1e2a3a] font-bold text-lg leading-snug">
        <Link
          href={`/blog/${slug}`}
          className="hover:text-blue-600 transition-colors focus-visible:underline"
        >
          {title}
        </Link>
      </h3>
      {excerpt && <p className="text-slate-500 text-sm leading-relaxed">{excerpt}</p>}
      <Link
        href={`/blog/${slug}`}
        className="text-blue-600 text-sm font-semibold hover:underline mt-auto"
        aria-label={`Read more about ${title}`}
      >
        Read more →
      </Link>
    </article>
  );
}
