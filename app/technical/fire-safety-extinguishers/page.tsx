import Image from "next/image";

export const metadata = {
  title: "Fire Safety & Extinguishers | Career Compass ZM",
  description:
    "Supply, installation, servicing, and maintenance of fire extinguishers for homes, offices, schools, and businesses across Zambia.",
};

export default function FireSafetyPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid gap-14 md:grid-cols-2 items-center">
        {/* TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
            Fire Safety & Extinguisher Services
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            At Career Compass ZM, we don’t just supply fire extinguishers —
            we ensure your premises are safe, compliant, and fully protected.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Our services cover supply, installation, inspection, servicing,
            and ongoing maintenance for residential, commercial, and
            institutional environments.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/technical/fire-safety.jpg"
            alt="Fire extinguisher supply and safety services"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* WHAT WE PROVIDE */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold text-brand-primary mb-12 text-center">
            What We Provide
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-gray-700">
            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                Fire Extinguisher Supply
              </h3>
              <p>
                Certified CO₂ and DCP extinguishers suitable for different
                fire risk environments.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                Free Installation
              </h3>
              <p>
                Professional on-site installation included with every purchase.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                Compliance Guidance
              </h3>
              <p>
                Support for workplace safety standards and inspection readiness.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                Servicing & Refilling
              </h3>
              <p>
                Reliable maintenance to keep your extinguishers operational.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                Homes & Businesses
              </h3>
              <p>
                Suitable for homes, offices, shops, schools, clinics, and factories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-brand-primary mb-10 text-center">
          Fire Extinguisher Pricing
        </h2>

        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-14">
          All prices include gas, free delivery, and professional installation.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <div className="border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-brand-primary mb-2">
              CO₂ Fire Extinguisher – 5kg
            </h3>
            <p className="text-gray-600 mb-4">
              Ideal for electrical equipment and server rooms.
            </p>
            <p className="text-2xl font-bold text-gray-900">
              K3,300
            </p>
          </div>

          <div className="border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-brand-primary mb-2">
              DCP Fire Extinguisher – 9kg
            </h3>
            <p className="text-gray-600 mb-4">
              Suitable for commercial and industrial use.
            </p>
            <p className="text-2xl font-bold text-gray-900">
              K1,500
            </p>
          </div>

          <div className="border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-brand-primary mb-2">
              DCP Fire Extinguisher – 4.5kg
            </h3>
            <p className="text-gray-600 mb-4">
              Ideal for offices, shops, and residential spaces.
            </p>
            <p className="text-2xl font-bold text-gray-900">
              K950
            </p>
          </div>

        </div>

        <p className="mt-12 text-center text-gray-600">
          Other fire extinguisher types and sizes available on request.
          <br />
          <span className="font-semibold text-brand-primary">
            Contact us for customised solutions.
          </span>
        </p>
      </section>

      {/* SERVICING */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl font-bold text-brand-primary mb-6">
            Servicing & Maintenance
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            Keep your fire extinguishers functional and compliant with
            professional servicing options.
          </p>

          <p className="text-2xl font-bold text-gray-900">
            K400 per unit
          </p>

          <ul className="mt-6 space-y-2 text-gray-700">
            <li>✔ On-demand servicing</li>
            <li>✔ Quarterly servicing</li>
            <li>✔ Every 6 months</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
            Secure your premises today
          </h2>

          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Speak to our team for supply, installation, or servicing of
            fire safety equipment.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="https://wa.me/260972441871"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#25D366] text-white px-12 py-4 rounded-full font-semibold shadow-lg hover:bg-[#20b954] transition"
            >
              Chat on WhatsApp
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Career Compass ZM — Your Safety Is Our Responsibility.
          </p>
        </div>
      </section>

    </main>
  );
}