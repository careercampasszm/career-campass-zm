import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Company Profiles | Corporate Documentation | Career Compass ZM",
  description:
    "Professional company profile writing and design services in Zambia. We help businesses present credibility, structure, and value to clients, partners, and investors.",
};

export default function CompanyProfilesPage() {
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
            <span className="text-[#D4AF37]">Company</span>{" "}
            <span className="text-[#0F2A44]">Profiles</span>
          </h1>

          <p className="mt-6 text-lg text-[#1F2937] leading-relaxed">
            A company profile is your business identity document. It tells
            clients, partners, regulators, and investors who you are, what you
            do, and why you should be trusted.
          </p>

          <p className="mt-4 text-[#374151] leading-relaxed">
            Career Compass ZM develops professional, structured, and persuasive
            company profiles that position your organisation as credible,
            compliant, and market-ready.
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
            src="/images/corporate-documentation/company-profiles.jpg"
            alt="Professional company profile documentation"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* WHAT WE DELIVER */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-18 md:py-20">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-[#D4AF37]">What</span>{" "}
            <span className="text-[#0F2A44]">We Deliver</span>
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] leading-relaxed max-w-3xl">
            We develop structured, polished company profiles that speak to
            decision-makers and procurement standards — with clear messaging and
            professional design.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <BenefitCard text="Company background & legal status" />
            <BenefitCard text="Vision, mission & core values" />
            <BenefitCard text="Products & services overview" />
            <BenefitCard text="Organisational structure" />
            <BenefitCard text="Management & key personnel profiles" />
            <BenefitCard text="Compliance & certifications section" />
            <BenefitCard text="Client sectors & target markets" />
            <BenefitCard text="Operational capacity & methodology" />
            <BenefitCard text="Professional formatting & layout" />
            <BenefitCard text="Editable & print-ready versions" />
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-6xl mx-auto px-6 py-18 md:py-24">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          <span className="text-[#D4AF37]">Pricing</span>{" "}
          <span className="text-[#0F2A44]">Packages</span>
        </h2>

        <p className="mt-4 text-center text-[#374151] max-w-3xl mx-auto">
          Choose a package that matches your stage and audience — from SME
          profiling to tender-ready corporate documentation.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {/* STANDARD */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-extrabold text-[#0F2A44]">
              Standard <span className="text-[#D4AF37]">Company Profile</span>
            </h3>

            <ul className="mt-6 space-y-3 text-[#374151]">
              <li>✔ Up to 10 pages</li>
              <li>✔ Suitable for SMEs & startups</li>
              <li>✔ Professional wording & structure</li>
            </ul>

            <p className="mt-7 text-3xl font-extrabold text-[#0F2A44]">
              K2,500
            </p>
          </div>

          {/* CORPORATE */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-extrabold text-[#0F2A44]">
              Corporate / <span className="text-[#D4AF37]">Tender-Ready</span>{" "}
              Profile
            </h3>

            <ul className="mt-6 space-y-3 text-[#374151]">
              <li>✔ Detailed compliance sections</li>
              <li>✔ Designed for tenders & institutions</li>
              <li>✔ Enhanced presentation & clarity</li>
            </ul>

            <p className="mt-7 text-3xl font-extrabold text-[#0F2A44]">
              K4,000
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-18 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2A44]">
            Need a professional company profile?
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] max-w-2xl mx-auto">
            Let us position your organisation with clarity, credibility, and
            professionalism.
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
            Career Compass ZM — Professional. Structured. Tender-Ready.
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