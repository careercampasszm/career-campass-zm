import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Corporate Attire & Regalia | Career Compass ZM",
  description:
    "Supply and branding of corporate attire, uniforms, safety wear, and branded regalia for organisations in Zambia.",
};

export default function CorporateRegaliaPage() {
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
            <span className="text-[#D4AF37]">Corporate Attire</span>{" "}
            <span className="text-[#0F2A44]">&amp; Regalia</span>
          </h1>

          <p className="mt-6 text-lg text-[#1F2937] leading-relaxed">
            Career Compass ZM supplies and brands professional corporate attire
            and regalia that reflects your organisation’s identity, credibility,
            and standards.
          </p>

          <p className="mt-4 text-[#374151] leading-relaxed">
            From office wear to safety clothing and branded accessories, we ensure
            your team looks professional, consistent, and compliant.
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

        <div className="relative h-[340px] md:h-[420px] rounded-3xl overflow-hidden shadow-lg border border-gray-200">
          <Image
            src="/images/branding/corporate-regalia.jpg"
            alt="Corporate attire and branded regalia"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* WHAT WE SUPPLY */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center">
            <span className="text-[#D4AF37]">What</span>{" "}
            <span className="text-[#0F2A44]">We Supply &amp; Brand</span>
          </h2>

          <p className="mt-4 text-center text-[#1F2937] max-w-3xl mx-auto leading-relaxed">
            We supply key attire and regalia items and brand them to match your
            standards — ensuring consistency across teams, sites, and departments.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <InfoCard
              title="Corporate Office Wear"
              text="Shirts, t-shirts, jackets, and branded office attire."
            />
            <InfoCard
              title="Safety & Protective Wear"
              text="Reflective vests, helmets, overalls, boots, and PPE branding."
            />
            <InfoCard
              title="Uniforms"
              text="Staff uniforms for security, hospitality, retail, and field teams."
            />
            <InfoCard
              title="Promotional Regalia"
              text="Caps, bags, notebooks, pens, banners, and branded giveaways."
            />
            <InfoCard
              title="Custom Branding"
              text="Logo printing, embroidery, and colour matching to brand standards."
            />
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          <span className="text-[#D4AF37]">Pricing</span>{" "}
          <span className="text-[#0F2A44]">&amp; Quotations</span>
        </h2>

        <p className="mt-6 text-lg text-[#1F2937] leading-relaxed">
          Pricing depends on item type, quantity, branding method, and material
          specifications.
        </p>

        <p className="mt-4 font-semibold text-[#0F2A44]">
          Quotation provided on request.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-[#D4AF37]">Need</span>{" "}
            <span className="text-[#0F2A44]">branded corporate attire?</span>
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] max-w-2xl mx-auto leading-relaxed">
            Let us help you outfit your team professionally and consistently — for
            office, field, and safety environments.
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
            Career Compass ZM — Professional appearance. Trusted brand.
          </p>
        </div>
      </section>
    </main>
  );
}

/* INFO CARD (Premium hover + Gold heading + Navy body) */
function InfoCard({ title, text }: { title: string; text: string }) {
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