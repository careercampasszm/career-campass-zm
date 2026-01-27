import Image from "next/image";

export const metadata = {
  title: "Corporate Reports | Career Compass ZM",
  description:
    "Professional corporate report writing services including annual reports, project reports, donor reports, and performance reports in Zambia.",
};

export default function CorporateReportsPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid gap-14 md:grid-cols-2 items-center">
        {/* TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
            Corporate Reports
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Career Compass ZM develops clear, professional, and structured
            corporate reports that communicate performance, accountability,
            and impact.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            We help organisations present information accurately, credibly,
            and in formats suitable for boards, donors, regulators, and
            stakeholders.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/corporate-documentation/corporate-reports.jpg"
            alt="Corporate and organisational reports"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* TYPES OF REPORTS */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-brand-primary mb-10">
            Types of Reports We Prepare
          </h2>

          <ul className="grid gap-6 md:grid-cols-2 text-gray-700 text-lg">
            <li>✔ Annual Reports</li>
            <li>✔ Project & Programme Reports</li>
            <li>✔ Donor & Grant Reports</li>
            <li>✔ Monitoring & Evaluation Reports</li>
            <li>✔ Performance & Impact Reports</li>
            <li>✔ Compliance & Regulatory Reports</li>
          </ul>
        </div>
      </section>

      {/* WHAT WE HANDLE */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-brand-primary mb-12 text-center">
          What We Handle
        </h2>

        <ul className="grid gap-6 md:grid-cols-2 text-gray-700 text-lg">
          <li>✔ Data structuring and analysis</li>
          <li>✔ Professional narrative and reporting language</li>
          <li>✔ Graphs, tables, and visual summaries</li>
          <li>✔ Alignment with donor or regulatory requirements</li>
          <li>✔ Editing, proofreading, and formatting</li>
          <li>✔ Executive summaries and board-ready versions</li>
        </ul>
      </section>

      {/* PRICING */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl font-bold text-brand-primary mb-8">
            Pricing
          </h2>

          <p className="text-lg text-gray-700 mb-4">
            Corporate Reports Writing
          </p>

          <p className="text-4xl font-bold text-gray-900 mb-6">
            Pricing on Request
          </p>

          <p className="text-gray-600">
            Pricing depends on report length, data complexity, design needs,
            and stakeholder requirements.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
            Need a professional corporate report?
          </h2>

          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Let us help you present your performance and impact with clarity
            and credibility.
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
            Career Compass ZM — Reporting with Integrity.
          </p>
        </div>
      </section>

    </main>
  );
}