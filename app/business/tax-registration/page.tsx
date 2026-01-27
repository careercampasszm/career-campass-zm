import Image from "next/image";

export const metadata = {
  title: "Tax Registration & Compliance | Career Compass ZM",
  description:
    "ZRA tax registration, tax type setup, tax clearance certificates, and compliance support for businesses in Zambia.",
};

export default function TaxRegistrationPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid gap-14 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
            Tax Registration & Compliance
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Career Compass ZM helps businesses register, structure, and remain
            compliant with Zambia Revenue Authority (ZRA) requirements.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            We ensure your business is correctly registered for applicable tax
            types and supported with compliance guidance to avoid penalties,
            delays, or disqualification from tenders.
          </p>
        </div>

        <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/business/tax-registration.jpg"
            alt="ZRA tax registration and compliance services"
            fill
            className="object-cover"
            priority
          />
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
              ZRA Tax Registration
            </h3>
            <p className="mt-2 text-gray-700">
              Initial registration of businesses with Zambia Revenue Authority.
            </p>
          </div>

          <div className="bg-gray-50 border-l-4 border-brand-primary rounded-xl p-6">
            <h3 className="font-bold text-brand-primary">
              Tax Types Setup
            </h3>
            <p className="mt-2 text-gray-700">
              Registration for Income Tax, PAYE, VAT, Withholding Tax, and others.
            </p>
          </div>

          <div className="bg-gray-50 border-l-4 border-brand-primary rounded-xl p-6">
            <h3 className="font-bold text-brand-primary">
              Tax Clearance Certificates
            </h3>
            <p className="mt-2 text-gray-700">
              Processing and guidance for valid tax clearance certification.
            </p>
          </div>

          <div className="bg-gray-50 border-l-4 border-brand-primary rounded-xl p-6">
            <h3 className="font-bold text-brand-primary">
              Compliance Advisory
            </h3>
            <p className="mt-2 text-gray-700">
              Support on filing requirements, deadlines, and compliance risks.
            </p>
          </div>

          <div className="bg-gray-50 border-l-4 border-brand-primary rounded-xl p-6">
            <h3 className="font-bold text-brand-primary">
              Tender & Supplier Readiness
            </h3>
            <p className="mt-2 text-gray-700">
              Ensuring tax compliance status meets procurement requirements.
            </p>
          </div>

        </div>
      </section>

      {/* PRICING */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold text-brand-primary mb-10">
            Tax Services Pricing
          </h2>

          <ul className="grid gap-4 md:grid-cols-2 text-gray-700">
            <li>🧾 ZRA Tax Registration — <strong>K1,500</strong></li>
            <li>📄 Tax Clearance Certificate — <strong>K1,500</strong></li>
            <li>➕ Additional Tax Types — <strong>K750 each</strong></li>
            <li>📊 Compliance Advisory — <strong>On Request</strong></li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
            Need help with tax registration or compliance?
          </h2>

          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Speak to our consultants and ensure your business remains compliant,
            credible, and tender-ready.
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
            Career Compass ZM — Compliance Made Simple.
          </p>
        </div>
      </section>

    </main>
  );
}