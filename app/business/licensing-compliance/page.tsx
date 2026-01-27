import Image from "next/image";

export const metadata = {
  title: "Licensing & Permits | Career Compass ZM",
  description:
    "Business permits, health permits, fire safety certificates, and operating licences for compliant businesses in Zambia.",
};

export default function LicensingCompliancePage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid gap-14 md:grid-cols-2 items-center">

        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
            Licensing & Operating Permits
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Beyond registration, businesses must obtain the correct licences
            and permits to operate legally in Zambia.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Career Compass ZM assists businesses in securing mandatory operating
            permits and statutory approvals required by local authorities and
            regulators.
          </p>
        </div>

        <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/business/licensing-permits.jpg"
            alt="Business licensing and permits in Zambia"
            fill
            className="object-cover"
            priority
          />
        </div>

      </section>

      {/* WHY LICENSING */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-brand-primary mb-6">
            Why Licensing Matters
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Operating without the required licences exposes businesses to
            closures, fines, tender disqualification, and legal penalties.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Proper licensing confirms that your premises, operations, and
            services meet safety, health, and regulatory standards.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-brand-primary mb-12 text-center">
          Licences & Permits We Handle
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">

          <div className="bg-gray-50 border-l-4 border-brand-primary rounded-xl p-6">
            <h3 className="font-bold text-brand-primary">
              Business Permit
            </h3>
            <p className="mt-2 text-gray-700">
              Mandatory local authority permit for legally operating businesses.
            </p>
            <p className="mt-3 font-semibold text-gray-900">
              K2,750
            </p>
          </div>

          <div className="bg-gray-50 border-l-4 border-brand-primary rounded-xl p-6">
            <h3 className="font-bold text-brand-primary">
              Fire Safety Certificate
            </h3>
            <p className="mt-2 text-gray-700">
              Certification confirming compliance with fire safety standards.
            </p>
            <p className="mt-3 font-semibold text-gray-900">
              K3,250
            </p>
          </div>

          <div className="bg-gray-50 border-l-4 border-brand-primary rounded-xl p-6">
            <h3 className="font-bold text-brand-primary">
              Health Permit
            </h3>
            <p className="mt-2 text-gray-700">
              Required for premises involved in food handling, health, or public services.
            </p>
            <p className="mt-3 font-semibold text-gray-900">
              K3,250
            </p>
          </div>

          <div className="bg-gray-50 border-l-4 border-brand-primary rounded-xl p-6">
            <h3 className="font-bold text-brand-primary">
              Food Handlers Certificate
            </h3>
            <p className="mt-2 text-gray-700">
              Certification for staff involved in food preparation and handling.
            </p>
            <p className="mt-3 font-semibold text-gray-900">
              K2,000
            </p>
          </div>

        </div>
      </section>

      {/* WHO NEEDS THIS */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold text-brand-primary mb-8">
            Who Needs These Permits?
          </h2>

          <p className="text-gray-700 leading-relaxed">
            These licences are required for shops, restaurants, clinics,
            warehouses, factories, offices, schools, service providers,
            and regulated premises.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
            Need help securing licences or permits?
          </h2>

          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Let us handle the approvals while you focus on running your business.
          </p>

          <div className="mt-10">
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
            Career Compass ZM — Licensed. Approved. Operational.
          </p>

        </div>
      </section>

    </main>
  );
}