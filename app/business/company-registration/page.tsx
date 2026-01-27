import Image from "next/image";

export const metadata = {
  title: "Company Registration & PACRA | Career Compass ZM",
  description:
    "Professional company registration, PACRA compliance, tax registration, licensing and statutory setup services in Zambia.",
};

export default function CompanyRegistrationPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid gap-14 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
            Company Registration & PACRA Compliance
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Career Compass ZM provides end-to-end company registration and
            statutory compliance services to help businesses operate legally,
            professionally, and confidently in Zambia.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Whether you are starting a new business, preparing for tenders, or
            formalising operations, we handle the regulatory process so you can
            focus on growth.
          </p>
        </div>

        <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/business/business-registration.jpg"
            alt="Company registration and PACRA compliance services"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* WHAT IS PACRA */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-brand-primary mb-6">
            What is PACRA?
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            The Patents and Companies Registration Agency (PACRA) is the
            government body responsible for business name registration,
            company incorporation, and statutory corporate records in Zambia.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            PACRA registration is the foundation of every legally recognised
            business and is required before tax registration, licensing,
            supplier registration, or tender participation.
          </p>
        </div>
      </section>

      {/* WHAT WE HANDLE */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-brand-primary mb-12 text-center">
          What We Handle
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <div className="bg-gray-50 border-l-4 border-brand-primary rounded-xl p-6">
            <h3 className="font-bold text-brand-primary">
              Company Incorporation
            </h3>
            <p className="mt-2 text-gray-700">
              Registration of limited companies including shareholding,
              directors, and statutory records.
            </p>
          </div>

          <div className="bg-gray-50 border-l-4 border-brand-primary rounded-xl p-6">
            <h3 className="font-bold text-brand-primary">
              Business Name Registration
            </h3>
            <p className="mt-2 text-gray-700">
              Formal registration of trading names for sole traders and SMEs.
            </p>
          </div>

          <div className="bg-gray-50 border-l-4 border-brand-primary rounded-xl p-6">
            <h3 className="font-bold text-brand-primary">
              Tax Registration (ZRA)
            </h3>
            <p className="mt-2 text-gray-700">
              Setup of income tax, VAT, PAYE, and other applicable tax types.
            </p>
          </div>

          <div className="bg-gray-50 border-l-4 border-brand-primary rounded-xl p-6">
            <h3 className="font-bold text-brand-primary">
              Statutory Bodies Registration
            </h3>
            <p className="mt-2 text-gray-700">
              NAPSA, NHIMA, Workers Compensation, and compliance alignment.
            </p>
          </div>

          <div className="bg-gray-50 border-l-4 border-brand-primary rounded-xl p-6">
            <h3 className="font-bold text-brand-primary">
              Tender & Supplier Readiness
            </h3>
            <p className="mt-2 text-gray-700">
              ZPPA supplier registration and documentation for procurement.
            </p>
          </div>

        </div>
      </section>

      {/* PACKAGES */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-brand-primary mb-12 text-center">
          Company Registration Packages
        </h2>

        <div className="grid gap-10 md:grid-cols-2">

          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-brand-primary mb-4">
              Full Company Setup Package
            </h3>

            <p className="text-gray-600 mb-6">
              Ideal for SMEs, suppliers, and businesses requiring full statutory
              compliance.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Company Incorporation Certificate</li>
              <li>✔ Share Capital Setup</li>
              <li>✔ ZRA Tax Registration</li>
              <li>✔ Tax Clearance Certificate</li>
              <li>✔ ZPPA Supplier Registration</li>
              <li>✔ NAPSA Registration</li>
              <li>✔ NHIMA Registration</li>
              <li>✔ Additional Tax Types</li>
            </ul>

            <p className="mt-6 text-xl font-bold">K4,000</p>
          </div>

          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-brand-primary mb-4">
              Company Registration + Basic Tax
            </h3>

            <p className="text-gray-600 mb-6">
              Suitable for startups and early-stage businesses.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Company Incorporation</li>
              <li>✔ Share Capital Setup</li>
              <li>✔ Articles & Form 3 (Stamped)</li>
              <li>✔ ZRA Tax Registration</li>
              <li>✔ Tax Clearance Certificate</li>
            </ul>

            <p className="mt-6 text-xl font-bold">K2,750</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
            Ready to register or formalise your business?
          </h2>

          <p className="mt-4 text-lg text-gray-700">
            Speak to our consultants and get your business legally registered,
            compliant, and tender-ready.
          </p>

          <div className="mt-10">
            <a
              href="https://wa.me/260972441871"
              target="_blank"
              className="bg-[#25D366] text-white px-12 py-4 rounded-full font-semibold shadow-lg hover:bg-[#20b954] transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}