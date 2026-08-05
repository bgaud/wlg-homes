import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leave a Review",
  description: "Had work done by WLG Homes? Let us know how it went and leave us a review.",
  alternates: { canonical: "https://wlghomes.ca/review" },
};

// Replace with the short "Get more reviews" link from your Google Business Profile
// dashboard (Home > Get more reviews) for a true one-tap review screen. This Maps
// URL is a working fallback that lands on the listing, one extra tap from a review.
const GOOGLE_REVIEW_URL =
  "https://www.google.com/maps/place/WLG+Homes/@52.2379344,-106.6449313,9z/data=!3m1!4b1!4m6!3m5!1s0x2c693299ff943e9d:0xeed9c522fc9ab8bc!8m2!3d52.2379344!4d-106.6449313!16s%2Fg%2F11z1jxd2j4";

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61584288716942";

export default function ReviewPage() {
  return (
    <section className="py-20 bg-white min-h-[70vh] flex items-center">
      <div className="max-w-lg mx-auto px-4 sm:px-6 text-center">
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3">
          Thank You
        </p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1e2a3a] mb-4">
          How Was Your Experience?
        </h1>
        <p className="text-slate-600 leading-relaxed mb-10">
          If WLG Homes recently finished a job for you, a quick review helps other
          Saskatoon homeowners find us - and it means a lot to us directly. Takes about
          30 seconds.
        </p>

        <a
          href={GOOGLE_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-md text-lg transition-colors w-full sm:w-auto"
        >
          Leave a Google Review
        </a>

        <p className="text-slate-400 text-sm mt-6">
          Prefer Facebook?{" "}
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Leave a review there instead
          </a>
        </p>
      </div>
    </section>
  );
}
