import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Graphic Design | Career Compass ZM",
  description:
    "Professional graphic design services including flyers, posters, brochures, banners, and marketing materials for brands and organisations in Zambia.",
};

export default function GraphicDesignPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid gap-14 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-[#D4AF37]">Graphic</span>{" "}
            <span className="text-[#0F2A44]">Design</span>
          </h1>

          <p className="mt-6 text-lg text-[#1F2937] leading-relaxed">
            Career Compass ZM designs clean, professional, and eye-catching
            visuals that communicate your message clearly and strengthen your
            brand.
          </p>

          <p className="mt-4 text-[#374151] leading-relaxed">
            From digital creatives to print-ready designs, we ensure consistency,
            clarity, and impact across all platforms.
          </p>

          {/* ACTIONS: WhatsApp + Back (Premium + consistent hover/lift) */}
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

        <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <Image
            src="/images/branding/graphic-design.jpg"
            alt="Professional graphic design services"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* WHAT WE DESIGN */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center">
            <span className="text-[#D4AF37]">What</span>{" "}
            <span className="text-[#0F2A44]">We Design</span>
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-[#1F2937]">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm transition hover:shadow-lg hover:-translate-y-1">
              <h3 className="font-semibold text-[#0F2A44] mb-2">
                Flyers &amp; Posters
              </h3>
              <p className="text-[#374151] leading-relaxed">
                Promotional flyers and posters for events, jobs, products, and
                services.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm transition hover:shadow-lg hover:-translate-y-1">
              <h3 className="font-semibold text-[#0F2A44] mb-2">
                Social Media Graphics
              </h3>
              <p className="text-[#374151] leading-relaxed">
                Branded visuals optimised for WhatsApp, Facebook, Instagram, and
                LinkedIn.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm transition hover:shadow-lg hover:-translate-y-1">
              <h3 className="font-semibold text-[#0F2A44] mb-2">
                Banners &amp; Signage
              </h3>
              <p className="text-[#374151] leading-relaxed">
                Roll-up banners, pull-ups, and large-format promotional designs.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm transition hover:shadow-lg hover:-translate-y-1">
              <h3 className="font-semibold text-[#0F2A44] mb-2">
                Brochures &amp; Profiles
              </h3>
              <p className="text-[#374151] leading-relaxed">
                Company brochures, profiles, and information packs.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm transition hover:shadow-lg hover:-translate-y-1">
              <h3 className="font-semibold text-[#0F2A44] mb-2">
                Marketing Materials
              </h3>
              <p className="text-[#374151] leading-relaxed">
                Business cards, letterheads, presentations, and branded documents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          <span className="text-[#D4AF37]">Pricing</span>{" "}
          <span className="text-[#0F2A44]">Guidance</span>
        </h2>

        <p className="mt-6 text-lg text-[#1F2937]">
          Pricing depends on design type, complexity, revisions, and intended
          usage (digital or print).
        </p>

        <p className="mt-4 font-semibold text-[#0F2A44]">
          Quotes provided per design or project.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-[#D4AF37]">Need</span>{" "}
            <span className="text-[#0F2A44]">professional designs?</span>
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] max-w-2xl mx-auto">
            Let us turn your ideas into visuals that attract attention and
            communicate value.
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
            Career Compass ZM — Design with purpose.
          </p>
        </div>
      </section>
    </main>
  );
}