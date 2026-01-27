import Image from "next/image";

export const metadata = {
  title: "Maintenance & Technical Support | Career Compass ZM",
  description:
    "Ongoing maintenance, technical support, troubleshooting, and system servicing for CCTV, fire safety equipment, and connectivity solutions in Zambia.",
};

export default function MaintenanceSupportPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid gap-14 md:grid-cols-2 items-center">

        {/* TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
            Maintenance & Technical Support
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Career Compass ZM provides dependable maintenance and technical
            support to ensure your systems remain operational, safe,
            and effective over time.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            We don’t just install — we stay with you through routine
            servicing, fault resolution, and performance optimisation.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/technical/maintenance-support.jpg"
            alt="Technical maintenance and support services"
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
            What We Maintain & Support
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-gray-700">

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                CCTV Systems
              </h3>
              <p>
                Camera servicing, system checks, recording issues,
                upgrades, and optimisation.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                Fire Safety Equipment
              </h3>
              <p>
                Inspection reminders, extinguisher servicing coordination,
                and safety readiness support.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                Internet & Connectivity
              </h3>
              <p>
                Starlink troubleshooting, signal optimisation,
                and system performance checks.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                Fault Diagnosis
              </h3>
              <p>
                Identification and resolution of technical faults
                affecting operations.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                Preventive Maintenance
              </h3>
              <p>
                Scheduled servicing to reduce downtime and extend
                system lifespan.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* WHO IT’S FOR */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-brand-primary mb-10 text-center">
          Who This Service Is For
        </h2>

        <div className="grid gap-6 md:grid-cols-2 text-gray-700 max-w-4xl mx-auto">
          <p>✔ Offices & Corporate Facilities</p>
          <p>✔ Retail Stores & Warehouses</p>
          <p>✔ Schools & Institutions</p>
          <p>✔ Residential Properties</p>
          <p>✔ NGOs, Clinics & Faith Organisations</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
            Need reliable ongoing technical support?
          </h2>

          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Keep your systems running smoothly with professional
            maintenance and responsive support.
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
            Career Compass ZM — Reliable Systems. Ongoing Support.
          </p>

        </div>
      </section>

    </main>
  );
}