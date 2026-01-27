import Image from "next/image";

export const metadata = {
  title: "Advertising Campaigns | Career Compass ZM",
  description:
    "Short-term advertising and visibility campaigns for businesses, professionals, and organisations across Zambia. Fast exposure, strong reach, and measurable engagement.",
};

export default function AdvertisingCampaignsPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid gap-14 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
            Advertising Campaigns
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Career Compass ZM delivers targeted advertising campaigns designed
            for fast visibility, awareness, and response.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            We help businesses, professionals, recruiters, farmers, brands, and
            organisations get seen by the right audience, at the right time, on
            the right platforms.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/branding/advertising-campaigns.jpg"
            alt="Advertising campaigns and promotions"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* DISTRIBUTION */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-brand-primary mb-6">
            Where Your Content Is Distributed
          </h2>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Your promotional content is distributed across
            <strong> WhatsApp, Facebook, Instagram & LinkedIn</strong> within a
            trusted and responsive ecosystem.
          </p>
        </div>
      </section>

      {/* QUICK VISIBILITY */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-brand-primary mb-6 text-center">
          Quick Visibility Packages
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto text-center mb-14">
          Ideal for announcements, job posts, product launches, events,
          promotions, or testing audience response — without long-term
          commitment.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {/* SINGLE BLAST */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-brand-primary mb-4">
              Single Blast Promotion
            </h3>

            <ul className="space-y-2 text-gray-700">
              <li>📆 Once-off</li>
              <li>📌 1–2 promotional posts</li>
              <li>✔ Graphics & captions</li>
              <li>✔ Posted on agreed platform(s)</li>
            </ul>

            <p className="mt-6 text-2xl font-bold text-gray-900">
              K300
            </p>
          </div>

          {/* ONE WEEK */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-brand-primary mb-4">
              One-Week Visibility Package
            </h3>

            <ul className="space-y-2 text-gray-700">
              <li>📆 7 days</li>
              <li>📌 4 promotional posts</li>
              <li>✔ Consistent short-term exposure</li>
              <li>✔ Ideal for campaigns & announcements</li>
            </ul>

            <p className="mt-6 text-2xl font-bold text-gray-900">
              K600
            </p>
          </div>

          {/* TWO WEEKS */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-brand-primary mb-4">
              Two-Week Visibility Package
            </h3>

            <ul className="space-y-2 text-gray-700">
              <li>📆 14 days</li>
              <li>📌 8 promotional posts</li>
              <li>✔ Stronger recall & enquiries</li>
              <li>✔ Suitable for growing awareness</li>
            </ul>

            <p className="mt-6 text-2xl font-bold text-gray-900">
              K1,100
            </p>
          </div>

        </div>

        {/* ONE MONTH */}
        <div className="mt-14 max-w-3xl mx-auto border border-gray-200 rounded-2xl p-8 shadow-sm text-center">
          <h3 className="text-2xl font-semibold text-brand-primary mb-4">
            One-Month Visibility Package
          </h3>

          <p className="text-gray-700 mb-4">
            📆 30 days • 📌 16–20 promotional posts
          </p>

          <p className="text-gray-600 mb-6">
            Sustained brand presence — best for credibility, sales cycles, and
            consistent engagement.
          </p>

          <p className="text-3xl font-bold text-gray-900">
            K2,300
          </p>

          <p className="mt-4 text-sm text-gray-500">
            Optional paid boosting available (client-funded ads)
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
            Ready to promote your brand or campaign?
          </h2>

          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Let us help you gain visibility, trust, and enquiries — fast.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="https://wa.me/260972441871"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#25D366] text-white px-12 py-4 rounded-full font-semibold shadow-lg hover:bg-[#20b954] hover:shadow-xl transition"
            >
              Chat on WhatsApp
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Career Compass ZM — Visibility. Growth. Conversion.
          </p>
        </div>
      </section>

    </main>
  );
}