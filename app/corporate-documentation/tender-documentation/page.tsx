import Image from "next/image";

export const metadata = {
  title: "Tender Documentation | Corporate Documentation | Career Compass ZM",
  description:
    "Professional tender documentation services in Zambia. We prepare compliant, structured, and competitive tender submissions for public and private sector bids.",
};

export default function TenderDocumentationPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid gap-14 md:grid-cols-2 items-center">

        {/* TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
            Tender Documentation & Bid Support
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Winning tenders is not only about price — it is about compliance,
            structure, clarity, and convincing evaluators that you understand
            the assignment.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Career Compass ZM prepares professional tender documents that meet
            mandatory requirements, align with evaluation criteria, and present
            your organisation as capable and credible.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/corporate-documentation/tender-documentation.jpg"
            alt="Professional tender documentation and bid preparation"
            fill
            className="object-cover"
            priority
          />
        </div>

      </section>

      {/* WHAT WE HANDLE */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-24">

          <h2 className="text-3xl font-bold text-brand-primary mb-10">
            What We Handle
          </h2>

          <div className="grid gap-6 md:grid-cols-2 text-gray-700">
            <ul className="space-y-4">
              <li>✔ Tender document review & interpretation</li>
              <li>✔ Compliance checklist & mandatory documents</li>
              <li>✔ Company profiles tailored to tenders</li>
              <li>✔ Methodology & technical responses</li>
              <li>✔ Work plans & implementation schedules</li>
            </ul>

            <ul className="space-y-4">
              <li>✔ Past experience & references formatting</li>
              <li>✔ Organisational capacity statements</li>
              <li>✔ Risk management & mitigation plans</li>
              <li>✔ Professional layout & submission structure</li>
              <li>✔ Final bid quality check</li>
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
              Standard Tender Support
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>✔ SMEs & routine tenders</li>
              <li>✔ Compliance-focused submissions</li>
              <li>✔ Document structuring & formatting</li>
            </ul>

            <p className="mt-6 text-xl font-bold text-gray-900">
              From K4,500
            </p>
          </div>

          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-brand-primary mb-4">
              Complex / High-Value Tenders
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Technical & financial narratives</li>
              <li>✔ Strategy-driven responses</li>
              <li>✔ Institutional & donor tenders</li>
            </ul>

            <p className="mt-6 text-xl font-bold text-gray-900">
              Pricing on Request
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
            Ready to submit a competitive tender?
          </h2>

          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Let us help you submit compliant, professional, and compelling bids.
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
            Career Compass ZM — Compliant. Competitive. Professional.
          </p>

        </div>
      </section>

    </main>
  );
}