import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Advertising Campaigns | Career Compass ZM",
  description:
    "Short-term advertising and visibility campaigns for businesses, professionals, and organisations across Zambia. Fast exposure, strong reach, and measurable engagement.",
};

export default function AdvertisingCampaignsPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-24 grid gap-14 md:grid-cols-2 items-center">
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#0F2A44]">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
            Branding &amp; Advertising
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-[#D4AF37]">Advertising</span>{" "}
            <span className="text-[#0F2A44]">Campaigns</span>
          </h1>

          <p className="mt-6 text-lg text-[#1F2937] leading-relaxed">
            Career Compass ZM delivers targeted advertising campaigns designed for
            fast visibility, awareness, and response.
          </p>

          <p className="mt-4 text-[#374151] leading-relaxed">
            We help businesses, professionals, recruiters, farmers, brands, and
            organisations get seen by the right audience, at the right time, on
            the right platforms.
          </p>

          {/* ACTIONS: WhatsApp + Back */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/260972441871"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-10 py-4 font-semibold
                         bg-[#25D366] text-white shadow-lg transition
                         hover:bg-[#20b954] hover:shadow-xl hover:-translate-y-[1px]"
            >
              Chat on WhatsApp
            </a>

            <Link
              href="/branding-advertising"
              className="inline-flex items-center justify-center rounded-full px-10 py-4 font-semibold
                         bg-[#0F2A44] text-white border border-[#0F2A44]/10 shadow-lg transition
                         hover:bg-[#0B2034] hover:shadow-xl hover:-translate-y-[1px]"
            >
              Back to Branding &amp; Advertising
            </Link>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative h-[340px] md:h-[420px] rounded-3xl overflow-hidden shadow-lg border border-gray-200">
          <Image
            src="/images/branding/advertising-campaigns.jpg"
            alt="Advertising campaigns and promotions"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* DISTRIBUTION */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-18 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center">
            <span className="text-[#D4AF37]">Where</span>{" "}
            <span className="text-[#0F2A44]">Your Content Is Distributed</span>
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] max-w-3xl mx-auto leading-relaxed">
            Your promotional content is distributed across{" "}
            <span className="font-semibold text-[#0F2A44]">
              WhatsApp, Facebook, Instagram &amp; LinkedIn
            </span>{" "}
            within a trusted and responsive ecosystem.
          </p>
        </div>
      </section>

      {/* QUICK VISIBILITY */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          <span className="text-[#D4AF37]">Quick</span>{" "}
          <span className="text-[#0F2A44]">Visibility Packages</span>
        </h2>

        <p className="mt-4 text-[#374151] max-w-3xl mx-auto text-center mb-14 leading-relaxed">
          Ideal for announcements, job posts, product launches, events,
          promotions, or testing audience response — without long-term commitment.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <PriceCard
            title="Single Blast Promotion"
            duration="Once-off"
            posts="1–2 promotional posts"
            bullets={[
              "Graphics & captions",
              "Posted on agreed platform(s)",
              "Fast turnaround (subject to queue)",
            ]}
            price="K300"
          />

          <PriceCard
            featured
            title="One-Week Visibility Package"
            duration="7 days"
            posts="4 promotional posts"
            bullets={[
              "Consistent short-term exposure",
              "Ideal for campaigns & announcements",
              "Boosts recall & engagement",
            ]}
            price="K600"
          />

          <PriceCard
            title="Two-Week Visibility Package"
            duration="14 days"
            posts="8 promotional posts"
            bullets={[
              "Stronger recall & enquiries",
              "Suitable for growing awareness",
              "Better reach spread over time",
            ]}
            price="K1,100"
          />
        </div>

        {/* ONE MONTH */}
        <div className="mt-14 max-w-3xl mx-auto rounded-3xl border border-gray-200 bg-white p-8 shadow-sm text-center transition hover:shadow-lg hover:-translate-y-1">
          <p className="inline-flex items-center gap-2 text-xs font-bold tracking-wide text-[#0F2A44]">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
            Best for sustained visibility
          </p>

          <h3 className="mt-3 text-2xl font-extrabold">
            <span className="text-[#D4AF37]">One-Month</span>{" "}
            <span className="text-[#0F2A44]">Visibility Package</span>
          </h3>

          <p className="mt-4 text-[#1F2937]">
            <span className="font-semibold">30 days</span> •{" "}
            <span className="font-semibold">16–20 promotional posts</span>
          </p>

          <p className="mt-4 text-[#374151] leading-relaxed">
            Sustained brand presence — best for credibility, sales cycles, and
            consistent engagement.
          </p>

          <p className="mt-6 text-4xl font-extrabold text-[#0F2A44]">
            K2,300
          </p>

          <p className="mt-3 text-sm text-gray-500">
            Optional paid boosting available (client-funded ads).
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-[#D4AF37]">Ready</span>{" "}
            <span className="text-[#0F2A44]">to promote your brand or campaign?</span>
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] max-w-2xl mx-auto leading-relaxed">
            Let us help you gain visibility, trust, and enquiries — fast.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="https://wa.me/260972441871"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-12 py-4 font-semibold
                         bg-[#25D366] text-white shadow-lg transition
                         hover:bg-[#20b954] hover:shadow-xl hover:-translate-y-[1px]"
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

function PriceCard({
  title,
  duration,
  posts,
  bullets,
  price,
  featured = false,
}: {
  title: string;
  duration: string;
  posts: string;
  bullets: string[];
  price: string;
  featured?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-3xl border bg-white p-8 shadow-sm transition hover:shadow-lg hover:-translate-y-1",
        featured ? "border-[#D4AF37]/60 ring-1 ring-[#D4AF37]/25" : "border-gray-200",
      ].join(" ")}
    >
      {featured && (
        <p className="inline-flex items-center gap-2 text-xs font-bold tracking-wide text-[#0F2A44]">
          <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
          Most Popular
        </p>
      )}

      <h3 className="mt-3 text-xl font-extrabold text-[#0F2A44]">{title}</h3>

      <p className="mt-4 text-[#1F2937]">
        📆 <span className="font-semibold">{duration}</span>
      </p>
      <p className="mt-2 text-[#1F2937]">
        📌 <span className="font-semibold">{posts}</span>
      </p>

      <ul className="mt-6 space-y-2 text-[#374151]">
        {bullets.map((b) => (
          <li key={b} className="leading-relaxed">
            ✔ {b}
          </li>
        ))}
      </ul>

      <p className="mt-7 text-3xl font-extrabold text-[#0F2A44]">{price}</p>
    </div>
  );
}