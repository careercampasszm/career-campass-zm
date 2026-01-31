import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Social Media Management | Career Compass ZM",
  description:
    "Professional social media management services including content creation, posting, audience engagement, and brand growth for businesses in Zambia.",
};

export default function SocialMediaManagementPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-24 grid gap-14 md:grid-cols-2 items-center">
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#0F2A44]">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
            Branding & Advertising
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-[#D4AF37]">Social Media</span>{" "}
            <span className="text-[#0F2A44]">Management</span>
          </h1>

          <p className="mt-6 text-lg text-[#1F2937] leading-relaxed">
            For brands that want consistency, growth, and authority.
          </p>

          <p className="mt-4 text-[#0F2A44] leading-relaxed">
            Career Compass ZM manages your social media professionally — from
            content planning and posting to engagement and brand storytelling —
            so your business stays visible, credible, and competitive.
          </p>

          <div className="mt-8">
            <a
              href="https://wa.me/260972441871"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-10 py-4 font-semibold
                         bg-[#25D366] text-white shadow-lg transition hover:bg-[#20b954] hover:shadow-xl"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="relative h-[340px] md:h-[420px] rounded-3xl overflow-hidden shadow-lg border border-gray-200">
          <Image
            src="/images/branding/social-media-management.jpg"
            alt="Social media management services"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* WHAT WE HANDLE */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#D4AF37]">
            What We Handle
          </h2>

          <p className="mt-3 text-center text-[#0F2A44] max-w-3xl mx-auto">
            We run your pages like a proper brand function — consistent, on-message,
            and designed to build trust.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Feature
              title="Content Planning"
              text="Strategic monthly content calendars aligned to your brand goals and audience."
            />

            <Feature
              title="Branded Graphics & Captions"
              text="Professionally designed posts with consistent messaging and visual identity."
            />

            <Feature
              title="Posting & Scheduling"
              text="Reliable posting schedules across agreed platforms for steady visibility."
            />

            <Feature
              title="Engagement Management"
              text="Comment moderation, inbox responses, and audience interaction."
            />

            <Feature
              title="Brand Positioning & Storytelling"
              text="Content that builds trust, authority, and long-term brand recall."
            />
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          <span className="text-[#D4AF37]">Social Media</span>{" "}
          <span className="text-[#0F2A44]">Management Packages</span>
        </h2>

        <p className="mt-3 text-center text-[#1F2937] max-w-3xl mx-auto">
          Choose a package based on your stage of growth. Most clients start small,
          then upgrade as visibility and enquiries increase.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          <Package
            title="Starter Presence Package"
            price="K1,500 / month"
            subtitle="Ideal for individuals & small businesses"
            items={[
              "2–3 posts per week",
              "Branded graphics & captions",
              "Basic engagement support",
              "Page consistency & visibility",
            ]}
          />

          <Package
            featured
            title="Growth & Engagement Package"
            price="K2,200 / month"
            subtitle="Most scalable option for SMEs"
            items={[
              "3–4 posts per week",
              "Graphics + reels / short videos",
              "Comment & inbox engagement",
              "Content planning & positioning",
            ]}
          />

          <Package
            title="Sales & Brand Authority Package"
            price="K3,500 / month"
            subtitle="Best for revenue-focused brands"
            items={[
              "5–6 posts per week",
              "Campaigns, offers & storytelling",
              "Lead-focused content strategy",
              "Optional cross-promotion within Career Compass ZM network",
            ]}
          />
        </div>

        <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 text-center">
          <p className="text-[#0F2A44] leading-relaxed">
            💡 Many clients start with short-term visibility packages or basic
            management, then upgrade to full social media management for sustained
            growth, credibility, and conversions.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-[#D4AF37]">Ready</span>{" "}
            <span className="text-[#0F2A44]">to grow your brand online?</span>
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] max-w-2xl mx-auto">
            Let us manage your social media while you focus on running and growing
            your business.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="https://wa.me/260972441871"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-12 py-4 font-semibold
                         bg-[#25D366] text-white shadow-lg transition hover:bg-[#20b954] hover:shadow-xl"
            >
              Chat on WhatsApp
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Career Compass ZM — Visibility. Trust. Sales.
          </p>
        </div>
      </section>
    </main>
  );
}

/* COMPONENTS */

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-lg font-extrabold text-[#D4AF37]">{title}</h3>
      <p className="mt-2 text-[#0F2A44] leading-relaxed">{text}</p>
      <p className="mt-4 text-sm font-semibold text-[#0F2A44] group-hover:text-[#D4AF37] transition">
        Included →
      </p>
    </div>
  );
}

function Package({
  title,
  price,
  subtitle,
  items,
  featured = false,
}: {
  title: string;
  price: string;
  subtitle: string;
  items: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg",
        featured ? "border-[#D4AF37]/60 ring-1 ring-[#D4AF37]/25" : "border-gray-200",
      ].join(" ")}
    >
      {featured && (
        <p className="inline-flex items-center gap-2 text-xs font-bold tracking-wide text-[#0F2A44]">
          <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
          Most Popular
        </p>
      )}

      <h3 className="mt-3 text-xl font-extrabold text-[#D4AF37]">{title}</h3>
      <p className="mt-1 text-sm text-[#0F2A44]">{subtitle}</p>

      <p className="mt-5 text-3xl font-extrabold text-[#0F2A44]">{price}</p>

      <ul className="mt-6 space-y-2 text-[#1F2937]">
        {items.map((item) => (
          <li key={item} className="leading-relaxed">
            ✔ {item}
          </li>
        ))}
      </ul>
    </div>
  );
}