import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "We Built a Garage from Scratch — Here's How It Went",
  description:
    "From a poured concrete pad to finished siding and shingles — a full detached garage build in Saskatoon, told in photos and video. Plus homeowners who made the whole week one to remember.",
  alternates: { canonical: "https://wlghomes.ca/blog/garage-build-saskatoon" },
  openGraph: {
    title: "We Built a Garage from Scratch — Here's How It Went",
    description:
      "From concrete pad to finished siding and shingles. A WLG Homes garage build in Saskatoon, told in photos and video.",
    type: "article",
    url: "https://wlghomes.ca/blog/garage-build-saskatoon",
    images: [
      {
        url: "/images/garage-build/08-finished.jpg",
        width: 1200,
        height: 900,
        alt: "Finished detached garage built by WLG Homes in Saskatoon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "We Built a Garage from Scratch — Here's How It Went",
    description:
      "From concrete pad to finished siding and shingles. A WLG Homes garage build in Saskatoon.",
    images: ["/images/garage-build/08-finished.jpg"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "We Built a Garage from Scratch — Here's How It Went",
  description:
    "From a poured concrete pad to finished siding and shingles — a full detached garage build in Saskatoon, told in photos and video.",
  image: "https://wlghomes.ca/images/garage-build/08-finished.jpg",
  url: "https://wlghomes.ca/blog/garage-build-saskatoon",
  datePublished: "2026-06-28",
  dateModified: "2026-06-28",
  author: {
    "@type": "Organization",
    name: "WLG Homes",
    url: "https://wlghomes.ca",
  },
  publisher: {
    "@type": "Organization",
    name: "WLG Homes",
    url: "https://wlghomes.ca",
    logo: {
      "@type": "ImageObject",
      url: "https://wlghomes.ca/images/logo.png",
    },
  },
};

export default function GarageBuildPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="bg-[#1e2a3a] text-white py-20 px-4" aria-labelledby="post-heading">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="text-blue-400 text-sm hover:underline mb-4 inline-block"
            aria-label="Back to all blog posts"
          >
            ← Back to Blog
          </Link>
          <time dateTime="2026-06-28" className="block text-slate-400 text-sm mb-2">
            June 28, 2026
          </time>
          <h1 id="post-heading" className="text-3xl sm:text-4xl font-extrabold">
            We Built a Garage from Scratch &mdash; Here&rsquo;s How It Went
          </h1>
          <p className="text-slate-400 text-sm mt-2">By WLG Homes</p>
        </div>
      </section>

      {/* Article */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Summary */}
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-5 mb-10">
            <p className="text-blue-800 font-semibold text-sm uppercase tracking-wide mb-1">Summary</p>
            <p className="text-blue-700 text-sm leading-relaxed">
              From a poured concrete pad to finished siding and shingles &mdash; a full detached garage build in Saskatoon, told in photos and video. Plus homeowners who made the whole week one to remember.
            </p>
          </div>

          {/* Prose */}
          <div className="prose prose-lg prose-slate max-w-none prose-headings:text-[#1e2a3a] prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-5 prose-strong:text-[#1e2a3a]">

            <p>
              There are jobs you show up to and just know it&rsquo;s going to be a good week. The scope is clear, the site is ready, and within the first ten minutes of being there you get a read on the kind of people you&rsquo;re working for. This garage build was one of those jobs &mdash; and honestly, it might be one of our favourites since we started WLG Homes.
            </p>

            <h2>Day One: Concrete Pad and First Impressions</h2>

            <p>
              The homeowners had the concrete pad poured and cured well before we arrived, which is exactly how you want to start a garage build. No waiting, no scheduling around trades you don&rsquo;t control. We showed up, the slab was there, it was square, and we got to work.
            </p>
            <p>
              Before we&rsquo;d finished unloading the truck, the homeowner walked out with coffees. Not the kind you grab at a gas station on the way &mdash; actual good coffee, made at home. That&rsquo;s a small thing, but it tells you something. These were people who paid attention to the people working on their property. That energy carried through the entire job.
            </p>
            <p>
              We snapped our layout lines on the slab, cut our plates, and started standing walls. By the end of day one, four walls were up and braced. There&rsquo;s something genuinely satisfying about watching a pile of lumber turn into a building in a single day.
            </p>

            <h2>Framing the Roof</h2>

            <p>
              Day two was all about the roof structure. We set our ridge, cut our commons, and started working our way down from the peak. Setting rafters on a well-framed building goes fast when the walls are plumb and the layout is right &mdash; and this one was.
            </p>
          </div>

          {/* Photo 1: Rafter work */}
          <figure className="my-10">
            <div className="relative w-full max-w-lg mx-auto rounded-xl overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <Image
                src="/images/garage-build/01-rafter.jpg"
                alt="WLG Homes crew setting roof rafters during garage framing in Saskatoon"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 512px"
              />
            </div>
            <figcaption className="text-center text-slate-400 text-sm mt-3 italic">
              Setting rafters on day two &mdash; the roof structure coming together quickly.
            </figcaption>
          </figure>

          <div className="prose prose-lg prose-slate max-w-none prose-headings:text-[#1e2a3a] prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-5 prose-strong:text-[#1e2a3a]">
            <p>
              Once the rafters were set and the ridge was locked in, we moved to sheathing the deck. OSB across the full span, every sheet fastened properly. By the time we climbed down, the garage had a real roof &mdash; not just a structure, but a weathertight shape.
            </p>
            <p>
              The homeowners came out to watch the sheathing go on. They were the kind of clients who asked good questions and actually listened to the answers. We walked them through what we were doing and why at each step, and they were genuinely interested in understanding the build. Those conversations make the day go faster.
            </p>
          </div>

          {/* Photos 2+3: Roof framing exterior + interior */}
          <div className="grid sm:grid-cols-2 gap-4 my-10">
            <figure>
              <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <Image
                  src="/images/garage-build/02-roof-framing.jpg"
                  alt="Completed roof framing with Tyvek house wrap beginning on walls of Saskatoon garage build"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <figcaption className="text-slate-400 text-sm mt-2 italic text-center">
                Roof deck sheathed, house wrap starting on the walls.
              </figcaption>
            </figure>
            <figure>
              <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <Image
                  src="/images/garage-build/03-interior.jpg"
                  alt="Interior view of completed roof rafter structure inside Saskatoon detached garage"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <figcaption className="text-slate-400 text-sm mt-2 italic text-center">
                Looking up from inside &mdash; clean span, solid structure.
              </figcaption>
            </figure>
          </div>

          <div className="prose prose-lg prose-slate max-w-none prose-headings:text-[#1e2a3a] prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-5 prose-strong:text-[#1e2a3a]">
            <h2>House Wrap</h2>

            <p>
              With the deck sheathed and the walls squared up, we wrapped the building in Tyvek. This step gets rushed on some job sites and it shouldn&rsquo;t be &mdash; house wrap is what stands between your framing and every rainstorm until the siding goes on. Every seam gets taped, every corner gets detailed. We don&rsquo;t skip it.
            </p>
            <p>
              That afternoon, the homeowner brought out lunch. Full spread &mdash; sandwiches, cold drinks, the works. The crew ate well. It might sound like a small thing but when someone goes out of their way to take care of you like that, you notice it. You just want to do good work for people like that.
            </p>
          </div>

          {/* Photo 4: Full Tyvek */}
          <figure className="my-10">
            <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <Image
                src="/images/garage-build/04-tyvek.jpg"
                alt="Full Tyvek HomeWrap installed on detached garage walls in Saskatoon before siding"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
            <figcaption className="text-center text-slate-400 text-sm mt-3 italic">
              House wrap complete &mdash; every seam taped, every corner detailed.
            </figcaption>
          </figure>

          <div className="prose prose-lg prose-slate max-w-none prose-headings:text-[#1e2a3a] prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-5 prose-strong:text-[#1e2a3a]">
            <h2>Siding</h2>

            <p>
              The homeowners had chosen white vertical steel siding with dark trim &mdash; clean, modern, and built to handle a Saskatchewan winter without maintenance headaches. Steel siding goes on fast when you&rsquo;re set up properly, but the details are what separate a good job from a great one: the J-channels, the corners, every cut at every penetration.
            </p>
            <p>
              We set up our brake and started working our way around the building. Panel by panel, it started looking like a finished garage.
            </p>
          </div>

          {/* Photos 5+6: Siding start + progress */}
          <div className="grid sm:grid-cols-2 gap-4 my-10">
            <figure>
              <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <Image
                  src="/images/garage-build/05-siding-start.jpg"
                  alt="White vertical steel siding installation beginning on Saskatoon garage build"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <figcaption className="text-slate-400 text-sm mt-2 italic text-center">
                First panels going on in the evening light.
              </figcaption>
            </figure>
            <figure>
              <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <Image
                  src="/images/garage-build/06-siding-progress.jpg"
                  alt="Crew installing vertical steel siding panels on detached garage in Saskatoon"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <figcaption className="text-slate-400 text-sm mt-2 italic text-center">
                Working our way around the building, panel by panel.
              </figcaption>
            </figure>
          </div>

          <div className="prose prose-lg prose-slate max-w-none prose-headings:text-[#1e2a3a] prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-5 prose-strong:text-[#1e2a3a]">
            <p>
              The homeowners were out checking progress regularly. Not hovering &mdash; just genuinely excited to watch their garage take shape. They brought out cold drinks on the hot afternoon stretch, which nobody complained about. By the end of the day the siding was most of the way around and it was looking sharp.
            </p>

            <h2>Shingles and the Final Push</h2>

            <p>
              While the last siding panels were going on, part of the crew moved to the roof. Dark architectural shingles &mdash; proper ice-and-water shield at the eaves, synthetic underlayment across the full deck, drip edge on every perimeter edge. The same way we&rsquo;d do it on any roof we want to last.
            </p>
            <p>
              The whole build had this momentum to it. Nobody was dragging their feet, nobody was watching the clock. When a job is fun and the clients are good, the days go by fast.
            </p>
          </div>

          {/* Photo 7: Siding nearly complete */}
          <figure className="my-10">
            <div className="relative w-full max-w-lg mx-auto rounded-xl overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <Image
                src="/images/garage-build/07-siding-panel.jpg"
                alt="White vertical steel siding nearly complete on detached garage with window in Saskatoon"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 512px"
              />
            </div>
            <figcaption className="text-center text-slate-400 text-sm mt-3 italic">
              Siding wrapping up &mdash; you can start to see the finished product taking shape.
            </figcaption>
          </figure>

          {/* Photo 8: Final crew shot */}
          <figure className="my-10">
            <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/images/garage-build/08-finished.jpg"
                alt="WLG Homes crew with completed detached garage in Saskatoon — white steel siding, dark shingles, dark trim"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>
            <figcaption className="text-center text-slate-400 text-sm mt-3 italic">
              The crew, the trucks, and a finished garage. A good way to end a week.
            </figcaption>
          </figure>

          <div className="prose prose-lg prose-slate max-w-none prose-headings:text-[#1e2a3a] prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-5 prose-strong:text-[#1e2a3a]">
            <h2>The Finished Product</h2>

            <p>
              Start to finish, this garage came together exactly the way a job should. Good weather, a clear scope, and homeowners who genuinely appreciated the work being done. White vertical steel siding, dark trim, dark architectural shingles &mdash; it turned out exactly what they asked for, and then some.
            </p>
            <p>
              Jobs like this are why we started WLG Homes. Not just to build things, but to build them well for people who care about the result. If you&rsquo;ve got a garage build on your mind, we&rsquo;d love to talk.
            </p>
          </div>

          {/* Back link */}
          <div className="mt-10 pt-8 border-t border-slate-200">
            <Link href="/blog" className="text-blue-600 text-sm font-semibold hover:underline">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </article>

      {/* Video */}
      <section className="py-16 bg-[#f8fafc]" aria-labelledby="video-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2
            id="video-heading"
            className="text-2xl sm:text-3xl font-extrabold text-[#1e2a3a] text-center mb-2"
          >
            Watch the Build
          </h2>
          <p className="text-slate-500 text-center text-sm mb-8">
            The finished garage &mdash; start to end in under a minute.
          </p>
          <div className="rounded-xl overflow-hidden shadow-lg bg-black">
            <video
              controls
              className="w-full"
              preload="metadata"
              aria-label="Time-lapse video of WLG Homes garage build in Saskatoon from framing to finished product"
            >
              <source src="/videos/garage-build-finished.mov" type="video/quicktime" />
              <source src="/videos/garage-build-finished.mp4" type="video/mp4" />
              Your browser does not support video playback.
            </video>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1e2a3a] text-white text-center" aria-labelledby="garage-cta-heading">
        <div className="max-w-2xl mx-auto px-4">
          <h2 id="garage-cta-heading" className="text-3xl font-extrabold mb-4">
            Want a Garage Like This?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            We build detached garages in Saskatoon and surrounding areas &mdash; framing, siding, roofing, and electrical all under one roof. Free estimates, owners on every job.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-md transition-colors"
            >
              Get a Free Estimate
            </Link>
            <Link
              href="/services/framing"
              className="inline-block border-2 border-white/60 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-md transition-colors"
            >
              Our Framing Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
