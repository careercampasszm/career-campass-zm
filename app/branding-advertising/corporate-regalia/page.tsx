import Image from "next/image";

export const metadata = {
  title: "Corporate Attire & Regalia | Career Compass ZM",
  description:
    "Supply and branding of corporate attire, uniforms, safety wear, and branded regalia for organisations in Zambia.",
};

export default function CorporateRegaliaPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid gap-14 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
            Corporate Attire & Regalia
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Career Compass ZM supplies and brands professional corporate
            attire and regalia that reflects your organisation’s identity,
            credibility, and standards.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            From office wear to safety clothing and branded accessories,
            we ensure your team looks professional, consistent,
            and compliant.
          </p>
        </div>

        <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/branding/corporate-regalia.jpg"
            alt="Corporate attire and branded regalia"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* WHAT WE SUPPLY */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold text-brand-primary mb-12 text-center">
            What We Supply & Brand
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-gray-700">

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                Corporate Office Wear
              </h3>
              <p>
                Shirts, t-shirts, jackets, and branded office attire.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                Safety & Protective Wear
              </h3>
              <p>
                Reflective vests, helmets, overalls, boots, and PPE branding.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                Uniforms
              </h3>
              <p>
                Staff uniforms for security, hospitality, retail, and field teams.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                Promotional Regalia
              </h3>
              <p>
                Caps, bags, notebooks, pens, banners, and branded giveaways.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                Custom Branding
              </h3>
              <p>
                Logo printing, embroidery, and colour matching to brand standards.
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
          Pricing depends on item type, quantity, branding method,
          and material specifications.
        </p>

        <p className="mt-4 font-semibold text-brand-primary">
          Quotation provided on request.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
            Need branded corporate attire?
          </h2>

          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Let us help you outfit your team professionally and consistently.
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
            Career Compass ZM — Professional appearance. Trusted brand.
          </p>
        </div>
      </section>

    </main>
  );
}