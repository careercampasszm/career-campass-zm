import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Corporate Branding | Career Compass ZM",
  description:
    "Professional corporate branding services including brand identity, visual systems, messaging, and brand positioning for businesses and organisations in Zambia.",
};

export default function CorporateBrandingPage() {
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
            <span className="text-[#D4AF37]">Corporate</span>{" "}
            <span className="text-[#0F2A44]">Branding</span>
          </h1>

          <p className="mt-6 text-lg text-[#1F2937] leading-relaxed">
            Corporate branding is more than a logo — it is how your organisation
            is perceived, trusted, and remembered.
          </p>

          <p className="mt-4 text-[#374151] leading-relaxed">
            Career Compass ZM helps businesses, institutions, NGOs, and growing
            brands build professional identities that communicate credibility,
            consistency, and authority.
          </p>

          {/* ACTIONS: WhatsApp + Back (HERO) */}
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
            src="/images/branding/corporate-branding.jpg"
            alt="Corporate branding and identity design"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* WHAT CORPORATE BRANDING IS */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center">
            <span className="text-[#D4AF37]">What</span>{" "}
            <span className="text-[#0F2A44]">Corporate Branding Covers</span>
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] text-center max-w-3xl mx-auto leading-relaxed">
            We align your visual identity, messaging, and brand presentation
            across all platforms so your organisation speaks with one clear,
            professional voice.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <BrandItem
              title="Brand Identity Development"
              text="Logo refinement or creation, colour systems, typography, and visual direction."
            />

            <BrandItem
              title="Brand Positioning & Messaging"
              text="Clear articulation of who you are, what you do, and why you matter."
            />

            <BrandItem
              title="Corporate Brand Guidelines"
              text="Brand rulebooks that ensure consistency across documents, media, and teams."
            />

            <BrandItem
              title="Corporate Stationery"
              text="Letterheads, email signatures, business cards, and official templates."
            />

            <BrandItem
              title="Brand Consistency Audits"
              text="Assessment and correction of inconsistent branding across platforms."
            />

            <BrandItem
              title="Rebranding & Brand Refresh"
              text="Modernising existing brands without losing credibility or recognition."
            />
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-24">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          <span className="text-[#D4AF37]">Corporate</span>{" "}
          <span className="text-[#0F2A44]">Branding Packages</span>
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {/* STARTER */}
          <PricingCard
            title="Brand Starter Package"
            price="K2,500"
            note="Ideal for startups & small businesses"
            items={[
              "Logo refinement or simple logo design",
              "Colour & font system",
              "Basic brand usage guidance",
            ]}
          />

          {/* PROFESSIONAL */}
          <PricingCard
            featured
            title="Professional Corporate Brand Package"
            badge="Most Popular"
            price="K4,500"
            note="Best for SMEs, NGOs & growing organisations"
            items={[
              "Full brand identity system",
              "Brand positioning & messaging",
              "Corporate brand guidelines",
              "Stationery & templates",
            ]}
          />

          {/* ENTERPRISE */}
          <PricingCard
            title="Enterprise & Rebranding Package"
            price="Pricing on Request"
            note="For corporates, institutions & donor-funded projects"
            items={[
              "Brand audit & strategy",
              "Full rebrand or institutional branding",
              "Cross-platform brand alignment",
              "Executive & board-ready presentation",
            ]}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-[#D4AF37]">Ready</span>{" "}
            <span className="text-[#0F2A44]">to build a brand that commands trust?</span>
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] max-w-2xl mx-auto leading-relaxed">
            Let us help you present your organisation with clarity, credibility,
            and confidence.
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
            Career Compass ZM — Build Brands That Are Taken Seriously.
          </p>
        </div>
      </section>
    </main>
  );
}

/* BRAND ITEM (Premium hover + Gold heading + Navy body) */
function BrandItem({ title, text }: { title: string; text: string }) {
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

/* PRICING CARD (Premium, consistent) */
function PricingCard({
  title,
  price,
  note,
  items,
  featured = false,
  badge,
}: {
  title: string;
  price: string;
  note: string;
  items: string[];
  featured?: boolean;
  badge?: string;
}) {
  return (
    <div
      className={[
        "rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg",
        featured ? "border-[#D4AF37]/60 ring-1 ring-[#D4AF37]/25" : "border-gray-200",
      ].join(" ")}
    >
      {badge && (
        <p className="inline-flex items-center gap-2 text-xs font-bold tracking-wide text-[#0F2A44]">
          <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
          {badge}
        </p>
      )}

      <h3 className="mt-3 text-xl font-extrabold text-[#0F2A44]">{title}</h3>

      <p className="mt-5 text-3xl font-extrabold text-[#0F2A44]">{price}</p>
      <p className="mt-2 text-sm text-gray-500">{note}</p>

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