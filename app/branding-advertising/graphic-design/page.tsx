import Image from "next/image";

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
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
            Graphic Design
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Career Compass ZM designs clean, professional, and
            eye-catching visuals that communicate your message clearly
            and strengthen your brand.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            From digital creatives to print-ready designs,
            we ensure consistency, clarity, and impact across all platforms.
          </p>
        </div>

        <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg">
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
          <h2 className="text-3xl font-bold text-brand-primary mb-12 text-center">
            What We Design
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-gray-700">

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                Flyers & Posters
              </h3>
              <p>
                Promotional flyers and posters for events, jobs, products, and services.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                Social Media Graphics
              </h3>
              <p>
                Branded visuals optimised for WhatsApp, Facebook, Instagram, and LinkedIn.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                Banners & Signage
              </h3>
              <p>
                Roll-up banners, pull-ups, and large-format promotional designs.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                Brochures & Profiles
              </h3>
              <p>
                Company brochures, profiles, and information packs.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                Marketing Materials
              </h3>
              <p>
                Business cards, letterheads, presentations, and branded documents.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold text-brand-primary">
          Pricing
        </h2>

        <p className="mt-6 text-lg text-gray-700">
          Pricing depends on design type, complexity, revisions,
          and intended usage (digital or print).
        </p>

        <p className="mt-4 font-semibold text-brand-primary">
          Quotes provided per design or project.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
            Need professional designs?
          </h2>

          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Let us turn your ideas into visuals that attract attention
            and communicate value.
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
            Career Compass ZM — Design with purpose.
          </p>
        </div>
      </section>

    </main>
  );
}