import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { remark } from "remark";
import remarkHtml from "remark-html";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const processed = await remark().use(remarkHtml).process(post.content);
  const html = processed.toString();

  const formatted = post.date
    ? new Date(post.date).toLocaleDateString("en-CA", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <>
      <section className="bg-[#1e2a3a] text-white py-20 px-4" aria-labelledby="post-heading">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="text-blue-400 text-sm hover:underline mb-4 inline-block"
            aria-label="Back to all blog posts"
          >
            ← Back to Blog
          </Link>
          {formatted && (
            <time dateTime={post.date} className="block text-slate-400 text-sm mb-2">
              {formatted}
            </time>
          )}
          <h1 id="post-heading" className="text-3xl sm:text-4xl font-extrabold">
            {post.title}
          </h1>
        </div>
      </section>

      <article className="py-16 bg-white" aria-labelledby="post-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div
            className="prose prose-lg prose-slate max-w-none
              prose-headings:text-[#1e2a3a] prose-headings:font-bold
              prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3
              prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-5
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-[#1e2a3a]
              prose-ul:space-y-2 prose-li:text-slate-600"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <div className="mt-10 pt-8 border-t border-slate-200">
            <Link
              href="/blog"
              className="text-blue-600 text-sm font-semibold hover:underline"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
