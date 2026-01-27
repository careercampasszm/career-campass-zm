import Image from "next/image";

export const metadata = {
  title: "Safety Compliance Support | Career Compass ZM",
  description:
    "Workplace safety compliance support including fire safety guidance, inspections, documentation, and regulatory readiness for businesses in Zambia.",
};

export default function SafetyCompliancePage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid gap-14 md:grid-cols-2 items-center">

        {/* TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
            Safety Compliance Support
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Career Compass ZM supports businesses, institutions, and
            organisations to meet essential workplace safety and fire
            compliance requirements.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            We help you understand safety expectations, prepare for
            inspections, and maintain a compliant, risk-aware working
            environment.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/technical/safety-compliance.jpg"
            alt="Workplace safety compliance and inspections"
            fill
            className="object-cover"
            priority
          />
        </div>

      </section>

      {/* WHAT WE SUPPORT */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-24">

          <h2 className="text-3xl font-bold text-brand-primary mb-12 text-center">
            What We Support
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-gray-700">

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                Fire Safety Readiness
              </h3>
              <p>
                Guidance on extinguisher placement, fire points, and
                minimum safety standards.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                Workplace Inspections Preparation
              </h3>
              <p>
                Support in preparing premises for council, fire, or
                regulatory inspections.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                Safety Documentation Support
              </h3>
              <p>
                Assistance with safety registers, compliance checklists,
                and internal safety records.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                Risk Identification
              </h3>
              <p>
                Identifying safety gaps and practical mitigation
                recommendations.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                Ongoing Compliance Advice
              </h3>
              <p>
                Continuous advisory support as your operations grow or
                change.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* WHO IT’S FOR */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-brand-primary mb-10 text-center">
          Who This Is For
        </h2>

        <div className="grid gap-6 md:grid-cols-2 text-gray-700 max-w-4xl mx-auto">
          <p>✔ Offices & Corporate Buildings</p>
          <p>✔ Shops, Restaurants & Warehouses</p>
          <p>✔ Schools & Training Institutions</p>
          <p>✔ Clinics, NGOs & Faith Organisations</p>
          <p>✔ Factories & Industrial Sites</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
            Need help meeting safety requirements?
          </h2>

          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Let our team guide you toward a safer, compliant, and
            inspection-ready workplace.
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
            Career Compass ZM — Safety. Compliance. Confidence.
          </p>

        </div>
      </section>

    </main>
  );
}