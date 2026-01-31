import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Corporate Reports | Career Compass ZM",
  description:
    "Professional corporate report writing services including annual reports, project reports, donor reports, and performance reports in Zambia.",
};

export default function CorporateReportsPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-24 grid gap-14 md:grid-cols-2 items-center">
        {/* TEXT */}
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#0F2A44]">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
            Corporate Documentation
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-[#D4AF37]">Corporate</span>{" "}
            <span className="text-[#0F2A44]">Reports</span>
          </h1>

          <p className="mt-3 text-xl md:text-2xl font-bold text-[#1F2937]">
            Clear reporting. Strong accountability. Credible impact.
          </p>

          <p className="mt-6 text-lg text-[#1F2937] leading-relaxed">
            Career Compass ZM develops clear, professional, and structured
            corporate reports that communicate performance, accountability, and
            impact.
          </p>

          <p className="mt-4 text-[#374151] leading-relaxed">
            We help organisations present information accurately, credibly, and
            in formats suitable for boards, donors, regulators, and
            stakeholders.
          </p>

          {/* ACTIONS */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/260972441871"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-10 py-4 font-semibold
                         bg-[#25D366] text-white shadow-lg transition
                         hover:bg-[#20b954] hover:shadow-xl hover:-translate-y-[1px]"
            >
              Chat on WhatsApp
            </a>

            <Link
              href="/corporate-documentation"
              className="inline-flex items-center justify-center rounded-full px-10 py-4 font-semibold
                         bg-[#0F2A44] text-white shadow-lg transition
                         hover:bg-[#0B2034] hover:shadow-xl hover:-translate-y-[1px]"
            >
              Back to Corporate Documentation
            </Link>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative h-[340px] md:h-[420px] rounded-3xl overflow-hidden shadow-lg border border-gray-200">
          <Image
            src="/images/corporate-documentation/corporate-reports.jpg"
            alt="Corporate and organisational reports"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* TYPES OF REPORTS */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-18 md:py-20">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-[#D4AF37]">Types</span>{" "}
            <span className="text-[#0F2A44]">of Reports We Prepare</span>
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] leading-relaxed max-w-4xl">
            From board-level reporting to donor submissions, we structure your
            information so stakeholders can quickly understand outcomes,
            delivery, and value.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <BenefitCard text="Annual Reports" />
            <BenefitCard text="Project & Programme Reports" />
            <BenefitCard text="Donor & Grant Reports" />
            <BenefitCard text="Monitoring & Evaluation Reports" />
            <BenefitCard text="Performance & Impact Reports" />
            <BenefitCard text="Compliance & Regulatory Reports" />
          </div>
        </div>
      </section>

      {/* WHAT WE HANDLE */}
      <section className="max-w-6xl mx-auto px-6 py-18 md:py-24">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          <span className="text-[#D4AF37]">What</span>{" "}
          <span className="text-[#0F2A44]">We Handle</span>
        </h2>

        <p className="mt-4 text-center text-[#374151] max-w-3xl mx-auto">
          We support you end-to-end — from structuring content to polishing the
          final report for professional presentation.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <BenefitCard text="Data structuring and analysis" />
          <BenefitCard text="Professional narrative and reporting language" />
          <BenefitCard text="Graphs, tables, and visual summaries" />
          <BenefitCard text="Alignment with donor or regulatory requirements" />
          <BenefitCard text="Editing, proofreading, and formatting" />
          <BenefitCard text="Executive summaries and board-ready versions" />
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-18 md:py-24">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center">
            <span className="text-[#D4AF37]">Pricing</span>{" "}
            <span className="text-[#0F2A44]">for Corporate Reports</span>
          </h2>

          <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-10 shadow-sm text-center relative overflow-hidden">
            {/* subtle premium accent */}
            <div className="pointer-events-none absolute inset-x-0 -top-24 h-40 bg-gradient-to-b from-[#D4AF37]/20 to-transparent" />

            <p className="text-lg text-[#374151] mb-3">Corporate Reports Writing</p>

            <p className="text-4xl md:text-5xl font-extrabold text-[#0F2A44]">
              Pricing on <span className="text-[#D4AF37]">Request</span>
            </p>

            <p className="mt-5 text-[#6B7280]">
              Pricing depends on report length, data complexity, design needs,
              and stakeholder requirements.
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href="https://wa.me/260972441871"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full px-12 py-4 font-semibold
                           bg-[#0F2A44] text-white shadow-lg transition
                           hover:bg-[#0B2034] hover:shadow-xl hover:-translate-y-[1px]"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-18 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2A44]">
            Need a professional corporate report?
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] max-w-2xl mx-auto">
            Let us help you present your performance and impact with clarity
            and credibility.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/260972441871"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-12 py-4 font-semibold
                         bg-[#25D366] text-white shadow-lg transition
                         hover:bg-[#20b954] hover:shadow-xl hover:-translate-y-[1px]"
            >
              Chat on WhatsApp
            </a>

            <Link
              href="/corporate-documentation"
              className="inline-flex items-center justify-center rounded-full px-12 py-4 font-semibold
                         bg-[#0F2A44] text-white shadow-lg transition
                         hover:bg-[#0B2034] hover:shadow-xl hover:-translate-y-[1px]"
            >
              Back to Corporate Documentation
            </Link>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Career Compass ZM — Reporting with Integrity.
          </p>
        </div>
      </section>
    </main>
  );
}

function BenefitCard({ text }: { text: string }) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <p className="text-[#0F2A44] leading-relaxed">
        <span className="font-semibold text-[#D4AF37]">✔</span> {text}
      </p>

      <p className="mt-4 text-sm font-semibold text-[#0F2A44] group-hover:text-[#D4AF37] transition">
        Included →
      </p>
    </div>
  );
}