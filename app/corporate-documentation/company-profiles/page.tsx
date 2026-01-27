import Image from "next/image";

export const metadata = {
  title: "Company Profiles | Corporate Documentation | Career Compass ZM",
  description:
    "Professional company profile writing and design services in Zambia. We help businesses present credibility, structure, and value to clients, partners, and investors.",
};

export default function CompanyProfilesPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid gap-14 md:grid-cols-2 items-center">

        {/* TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
            Company Profile Development
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            A company profile is your business identity document. It tells
            clients, partners, regulators, and investors who you are, what you
            do, and why you should be trusted.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Career Compass ZM develops professional, structured, and persuasive
            company profiles that position your organisation as credible,
            compliant, and market-ready.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/corporate-documentation/company-profiles.jpg"
            alt="Professional company profile documentation"
            fill
            className="object-cover"
            priority
          />
        </div>

      </section>

      {/* WHAT WE DO */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-24">

          <h2 className="text-3xl font-bold text-brand-primary mb-10">
            What We Deliver
          </h2>

          <div className="grid gap-6 md:grid-cols-2 text-gray-700">
            <ul className="space-y-4">
              <li>✔ Company background & legal status</li>
              <li>✔ Vision, mission & core values</li>
              <li>✔ Products & services overview</li>
              <li>✔ Organisational structure</li>
              <li>✔ Management & key personnel profiles</li>
            </ul>

            <ul className="space-y-4">
              <li>✔ Compliance & certifications section</li>
              <li>✔ Client sectors & target markets</li>
              <li>✔ Operational capacity & methodology</li>
              <li>✔ Professional formatting & layout</li>
              <li>✔ Editable & print-ready versions</li>
            </ul>
          </div>

        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-brand-primary mb-10">
          Pricing
        </h2>

        <div className="grid gap-8 md:grid-cols-2">

          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-brand-primary mb-4">
              Standard Company Profile
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Up to 10 pages</li>
              <li>✔ Suitable for SMEs & startups</li>
              <li>✔ Professional wording & structure</li>
            </ul>

            <p className="mt-6 text-xl font-bold text-gray-900">
              K2,500
            </p>
          </div>

          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-brand-primary mb-4">
              Corporate / Tender-Ready Profile
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Detailed compliance sections</li>
              <li>✔ Designed for tenders & institutions</li>
              <li>✔ Enhanced presentation & clarity</li>
            </ul>

            <p className="mt-6 text-xl font-bold text-gray-900">
              K4,000
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
            Need a professional company profile?
          </h2>

          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Let us position your organisation with clarity, credibility, and
            professionalism.
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
            Career Compass ZM — Professional. Structured. Tender-Ready.
          </p>

        </div>
      </section>

    </main>
  );
}