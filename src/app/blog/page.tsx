import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips, guides, and news from the WLG Homes team — roofing advice, framing guides, electrical tips, and more for Saskatoon homeowners.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
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

      <section className="py-16 bg-[#f8fafc]" aria-labelledby="posts-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="posts-heading" className="sr-only">All Posts</h2>
          {posts.length === 0 ? (
            <p className="text-slate-500 text-center py-12">
              No posts yet — check back soon.
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
