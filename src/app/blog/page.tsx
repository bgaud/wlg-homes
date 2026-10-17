import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/blog";
import { breadcrumbList } from "@/lib/schema";

const FEATURED_GUIDES = [
  "saskatoon-garage-building-permit",
  "saskatoon-basement-development-permit",
  "how-long-does-a-garage-build-take-saskatoon",
  "planning-a-basement-development-saskatoon",
  "hiring-a-garage-builder-saskatoon",
  "electrical-permits-saskatoon",
];

const breadcrumbSchema = breadcrumbList([
  { name: "Home", url: "https://wlghomes.ca" },
  { name: "Blog", url: "https://wlghomes.ca/blog" },
]);

export const metadata: Metadata = {
  title: "Blog - Saskatoon Trades Tips & Guides",
  description:
    "Tips, guides, and news from the WLG Homes team - roofing advice, framing guides, electrical tips, and more for Saskatoon homeowners.",
  alternates: { canonical: "https://wlghomes.ca/blog" },
  openGraph: {
    title: "Blog - Saskatoon Trades Tips & Guides",
    description:
      "Tips, guides, and news from the WLG Homes team - roofing advice, framing guides, electrical tips, and more for Saskatoon homeowners.",
    url: "https://wlghomes.ca/blog",
    images: [{ url: "/images/hero.png", width: 1200, height: 630, alt: "WLG Homes blog - Saskatoon trades tips" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Saskatoon Trades Tips & Guides",
    description:
      "Tips, guides, and news from the WLG Homes team - roofing advice, framing guides, electrical tips, and more for Saskatoon homeowners.",
    images: ["/images/hero.png"],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featured = FEATURED_GUIDES.map((slug) => posts.find((p) => p.slug === slug)).filter(
    (p): p is NonNullable<typeof p> => Boolean(p)
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="bg-[#1e2a3a] text-white py-20 px-4" aria-labelledby="blog-hero-heading">
        <div className="max-w-3xl mx-auto text-center">
          <h1 id="blog-hero-heading" className="text-4xl sm:text-5xl font-extrabold mb-4">
            WLG Homes Blog
          </h1>
          <p className="text-slate-300 text-lg">
            Practical advice from Saskatoon&rsquo;s trades experts.
          </p>
        </div>
      </section>

      {featured.length > 0 && (
        <section className="py-12 sm:py-16 bg-white" aria-labelledby="guides-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="guides-heading" className="text-2xl font-extrabold text-[#1e2a3a] mb-2">
              Saskatoon homeowner guides
            </h2>
            <p className="text-slate-600 text-sm mb-8 max-w-3xl">
              Permits, planning, and hiring notes with links to City of Saskatoon and TSASK pages. These are not a substitute for the official rules.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((post) => (
                <BlogCard key={post.slug} {...post} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-[#f8fafc]" aria-labelledby="posts-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="posts-heading" className="text-2xl font-extrabold text-[#1e2a3a] mb-8">
            All posts
          </h2>
          {posts.length === 0 ? (
            <p className="text-slate-500 text-center py-12">
              No posts yet - check back soon.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard key={post.slug} {...post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
