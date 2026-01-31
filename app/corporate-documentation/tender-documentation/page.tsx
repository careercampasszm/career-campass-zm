import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tender Documentation | Corporate Documentation | Career Compass ZM",
  description:
    "Professional tender documentation services in Zambia. We prepare compliant, structured, and competitive tender submissions for public and private sector bids.",
};

export default function TenderDocumentationPage() {
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
            <span className="text-[#D4AF37]">Tender</span>{" "}
            <span className="text-[#0F2A44]">Documentation</span>
          </h1>

          <p className="mt-3 text-xl md:text-2xl font-bold text-[#1F2937]">
            Bid Support That Wins on Compliance, Clarity, and Credibility.
          </p>

          <p className="mt-6 text-lg text-[#1F2937] leading-relaxed">
            Winning tenders is not only about price — it is about compliance,
            structure, clarity, and convincing evaluators that you understand
            the assignment.
          </p>

          <p className="mt-4 text-[#374151] leading-relaxed">
            Career Compass ZM prepares professional tender documents that meet
            mandatory requirements, align with evaluation criteria, and present
            your organisation as capable and credible.
          </p>

          {/* ACTIONS: WhatsApp + Back to Corporate Documentation */}
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
            src="/images/corporate-documentation/tender-documentation.jpg"
            alt="Professional tender documentation and bid preparation"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* WHAT WE HANDLE */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-18 md:py-20">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-[#D4AF37]">What</span>{" "}
            <span className="text-[#0F2A44]">We Handle</span>
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] leading-relaxed max-w-3xl">
            We interpret requirements, structure your response, and package your
            submission so evaluators can score you easily and confidently.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <BenefitCard text="Tender document review & interpretation" />
            <BenefitCard text="Compliance checklist & mandatory documents" />
            <BenefitCard text="Company profiles tailored to tenders" />
            <BenefitCard text="Methodology & technical responses" />
            <BenefitCard text="Work plans & implementation schedules" />
            <BenefitCard text="Past experience & references formatting" />
            <BenefitCard text="Organisational capacity statements" />
            <BenefitCard text="Risk management & mitigation plans" />
            <BenefitCard text="Professional layout & submission structure" />
            <BenefitCard text="Final bid quality check" />
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-6xl mx-auto px-6 py-18 md:py-24">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          <span className="text-[#D4AF37]">Pricing</span>{" "}
          <span className="text-[#0F2A44]">Options</span>
        </h2>

        <p className="mt-4 text-center text-[#374151] max-w-3xl mx-auto">
          Fees depend on tender complexity, submission volume, and the required
          technical/financial narrative.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {/* STANDARD */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-extrabold text-[#0F2A44]">
              Standard <span className="text-[#D4AF37]">Tender Support</span>
            </h3>

            <ul className="mt-6 space-y-3 text-[#374151]">
              <li>✔ SMEs & routine tenders</li>
              <li>✔ Compliance-focused submissions</li>
              <li>✔ Document structuring & formatting</li>
            </ul>

            <p className="mt-7 text-3xl font-extrabold text-[#0F2A44]">
              From K4,500
            </p>
          </div>

          {/* COMPLEX */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-extrabold text-[#0F2A44]">
              Complex / <span className="text-[#D4AF37]">High-Value</span>{" "}
              Tenders
            </h3>

            <ul className="mt-6 space-y-3 text-[#374151]">
              <li>✔ Technical & financial narratives</li>
              <li>✔ Strategy-driven responses</li>
              <li>✔ Institutional & donor tenders</li>
            </ul>

            <p className="mt-7 text-3xl font-extrabold text-[#0F2A44]">
              Pricing on Request
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-18 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2A44]">
            Ready to submit a competitive tender?
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] max-w-2xl mx-auto">
            Let us help you submit compliant, professional, and compelling bids.
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
            Career Compass ZM — Compliant. Competitive. Professional.
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