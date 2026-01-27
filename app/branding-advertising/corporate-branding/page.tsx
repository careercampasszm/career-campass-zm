import Image from "next/image";

export const metadata = {
  title: "Corporate Branding | Career Compass ZM",
  description:
    "Professional corporate branding services including brand identity, visual systems, messaging, and brand positioning for businesses and organisations in Zambia.",
};

export default function CorporateBrandingPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid gap-14 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
            Corporate Branding
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Corporate branding is more than a logo — it is how your organisation
            is perceived, trusted, and remembered.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Career Compass ZM helps businesses, institutions, NGOs, and growing
            brands build professional identities that communicate credibility,
            consistency, and authority.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/branding/corporate-branding.jpg"
            alt="Corporate branding and identity design"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* WHAT CORPORATE BRANDING IS */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center">
            What Corporate Branding Covers
          </h2>

          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-16">
            We align your visual identity, messaging, and brand presentation
            across all platforms so your organisation speaks with one clear,
            professional voice.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-gray-700">

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
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-brand-primary mb-12 text-center">
          Corporate Branding Packages
        </h2>

        <div className="grid gap-10 md:grid-cols-3">

          {/* STARTER */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-brand-primary mb-4">
              Brand Starter Package
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Logo refinement or simple logo design</li>
              <li>✔ Colour & font system</li>
              <li>✔ Basic brand usage guidance</li>
            </ul>

            <p className="mt-6 text-xl font-bold text-gray-900">
              K2,500
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Ideal for startups & small businesses
            </p>
          </div>

          {/* PROFESSIONAL */}
          <div className="border-2 border-brand-primary rounded-2xl p-8 shadow-md">
            <h3 className="text-2xl font-semibold text-brand-primary mb-4">
              Professional Corporate Brand Package ⭐
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Full brand identity system</li>
              <li>✔ Brand positioning & messaging</li>
              <li>✔ Corporate brand guidelines</li>
              <li>✔ Stationery & templates</li>
            </ul>

            <p className="mt-6 text-xl font-bold text-gray-900">
              K4,500
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Best for SMEs, NGOs & growing organisations
            </p>
          </div>

          {/* ENTERPRISE */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-brand-primary mb-4">
              Enterprise & Rebranding Package
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Brand audit & strategy</li>
              <li>✔ Full rebrand or institutional branding</li>
              <li>✔ Cross-platform brand alignment</li>
              <li>✔ Executive & board-ready presentation</li>
            </ul>

            <p className="mt-6 text-xl font-bold text-gray-900">
              Pricing on Request
            </p>

            <p className="mt-2 text-sm text-gray-500">
              For corporates, institutions & donor-funded projects
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
            Ready to build a brand that commands trust?
          </h2>

          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Let us help you present your organisation with clarity,
            credibility, and confidence.
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
            Career Compass ZM — Build Brands That Are Taken Seriously.
          </p>
        </div>
      </section>

    </main>
  );
}

/* BRAND ITEM */
function BrandItem({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h3 className="font-semibold text-brand-primary mb-2">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {text}
      </p>
    </div>
  );
}