import Image from "next/image";

export const metadata = {
  title: "Supplier & Statutory Registration | Career Compass ZM",
  description:
    "ZPPA supplier registration, NAPSA, NHIMA, Workers Compensation and statutory registrations for compliant, tender-ready businesses in Zambia.",
};

export default function SupplierRegistrationPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid gap-14 md:grid-cols-2 items-center">

        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
            Supplier & Statutory Registration
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Winning tenders and supplying to organisations requires more than
            registration — it requires full statutory compliance.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Career Compass ZM prepares businesses to meet supplier requirements
            for government, NGOs, corporates, and regulated institutions.
          </p>
        </div>

        <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/business/supplier-registration.jpg"
            alt="Supplier and statutory registration services"
            fill
            className="object-cover"
            priority
          />
        </div>

      </section>

      {/* WHY SUPPLIER REGISTRATION */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-brand-primary mb-6">
            Why Supplier Registration Matters
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Many organisations only engage suppliers who are registered,
            insured, and compliant with statutory bodies.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Without these registrations, businesses are automatically
            disqualified from tenders, contracts, and procurement processes.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-brand-primary mb-12 text-center">
          Registrations We Handle
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">

          <div className="bg-gray-50 border-l-4 border-brand-primary rounded-xl p-6">
            <h3 className="font-bold text-brand-primary">
              ZPPA Supplier Registration
            </h3>
            <p className="mt-2 text-gray-700">
              Registration with Zambia Public Procurement Authority for
              government and public sector tenders.
            </p>
            <p className="mt-3 font-semibold text-gray-900">
              K1,300
            </p>
          </div>

          <div className="bg-gray-50 border-l-4 border-brand-primary rounded-xl p-6">
            <h3 className="font-bold text-brand-primary">
              NAPSA Registration
            </h3>
            <p className="mt-2 text-gray-700">
              Mandatory social security registration for employers.
            </p>
            <p className="mt-3 font-semibold text-gray-900">
              K1,000
            </p>
          </div>

          <div className="bg-gray-50 border-l-4 border-brand-primary rounded-xl p-6">
            <h3 className="font-bold text-brand-primary">
              NHIMA Registration
            </h3>
            <p className="mt-2 text-gray-700">
              National Health Insurance registration for employee compliance.
            </p>
            <p className="mt-3 font-semibold text-gray-900">
              Included / On Request
            </p>
          </div>

          <div className="bg-gray-50 border-l-4 border-brand-primary rounded-xl p-6">
            <h3 className="font-bold text-brand-primary">
              Workers Compensation
            </h3>
            <p className="mt-2 text-gray-700">
              Insurance registration protecting employees against workplace risks.
            </p>
            <p className="mt-3 font-semibold text-gray-900">
              K1,500
            </p>
          </div>

        </div>
      </section>

      {/* WHO NEEDS THIS */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold text-brand-primary mb-8">
            Who Needs Supplier Registration?
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Businesses intending to supply goods or services to government
            institutions, NGOs, corporates, mines, hospitals, schools, and
            large organisations require supplier and statutory registration.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
            Ready to become tender-ready?
          </h2>

          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            We prepare your business for supplier approval and procurement success.
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
            Career Compass ZM — Registered. Compliant. Tender-Ready.
          </p>

        </div>
      </section>

    </main>
  );
}