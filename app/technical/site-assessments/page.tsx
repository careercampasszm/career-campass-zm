import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Site Assessments | Technical & Safety Assessments | Career Compass ZM",
  description:
    "Professional site assessments for CCTV, fire safety, internet connectivity, and technical installations across Zambia.",
};

export default function SiteAssessmentsPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-24 grid gap-14 md:grid-cols-2 items-center">
        {/* TEXT */}
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#0F2A44]">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
            Technical Services
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-[#D4AF37]">Site</span>{" "}
            <span className="text-[#0F2A44]">Assessments</span>
          </h1>

          <p className="mt-6 text-lg text-[#1F2937] leading-relaxed">
            Career Compass ZM conducts professional on-site assessments to
            determine the most effective, compliant, and cost-efficient technical
            solutions for your environment.
          </p>

          <p className="mt-4 text-[#374151] leading-relaxed">
            We evaluate your space before installation to ensure correct system
            design, safety compliance, and optimal performance.
          </p>

          {/* ACTIONS: WhatsApp + Back (consistent placement) */}
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
              href="/technical"
              className="inline-flex items-center justify-center rounded-full px-10 py-4 font-semibold
                         bg-[#0F2A44] text-white shadow-lg transition
                         hover:bg-[#0B2034] hover:shadow-xl hover:-translate-y-[1px]"
            >
              Back to Technical Services
            </Link>

            <a
              href="#what-we-assess"
              className="inline-flex items-center justify-center rounded-full px-10 py-4 font-semibold
                         border border-gray-200 bg-white text-[#0F2A44] shadow-lg transition
                         hover:shadow-xl hover:-translate-y-[1px]"
            >
              What we assess <span className="ml-2 text-[#D4AF37]">↓</span>
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative h-[340px] md:h-[420px] rounded-3xl overflow-hidden shadow-lg border border-gray-200">
          <Image
            src="/images/technical/site-assessment.jpg"
            alt="Technical site assessment services"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* WHAT WE ASSESS */}
      <section
        id="what-we-assess"
        className="bg-[#F8FAFC] border-t border-gray-200"
      >
        <div className="max-w-6xl mx-auto px-6 py-18 md:py-24">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center">
            <span className="text-[#D4AF37]">What</span>{" "}
            <span className="text-[#0F2A44]">We Assess</span>
          </h2>

          <p className="mt-4 text-center text-[#374151] max-w-3xl mx-auto">
            We identify what’s needed, what’s missing, and what will work best —
            before you spend money on equipment or installation.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AssessCard
              title="CCTV Coverage"
              text="Camera placement, blind spots, lighting conditions, and recording requirements."
            />
            <AssessCard
              title="Fire Safety Readiness"
              text="Fire extinguisher placement, access routes, and compliance readiness."
            />
            <AssessCard
              title="Internet & Connectivity"
              text="Network layout, Starlink positioning, signal strength, and stability."
            />
            <AssessCard
              title="Power & Infrastructure"
              text="Power availability, cabling routes, and equipment protection."
            />
            <AssessCard
              title="Environmental Factors"
              text="Weather exposure, dust, height, access points, and physical security."
            />
            <AssessCard
              title="Quotation Accuracy"
              text="Scope definition so you get an accurate quote with no surprises later."
            />
          </div>
        </div>
      </section>

      {/* WHY SITE ASSESSMENTS MATTER */}
      <section className="max-w-6xl mx-auto px-6 py-18 md:py-24">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          <span className="text-[#D4AF37]">Why</span>{" "}
          <span className="text-[#0F2A44]">Site Assessments Matter</span>
        </h2>

        <p className="mt-4 text-center text-[#374151] max-w-3xl mx-auto">
          A good assessment prevents costly errors and ensures the installation
          is compliant, effective, and aligned to your environment.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {[
            "Prevents incorrect installations",
            "Reduces unnecessary costs",
            "Improves system effectiveness",
            "Ensures safety & compliance",
            "Enables accurate quotations",
            "Avoids repeat work and delays",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <p className="text-[#0F2A44] leading-relaxed">
                <span className="font-semibold text-[#D4AF37]">✔</span> {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-18 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2A44]">
            Need a professional site assessment?
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] max-w-2xl mx-auto">
            Let us assess your site and recommend the right technical solution
            before installation.
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
              href="/technical"
              className="inline-flex items-center justify-center rounded-full px-12 py-4 font-semibold
                         bg-[#0F2A44] text-white shadow-lg transition
                         hover:bg-[#0B2034] hover:shadow-xl hover:-translate-y-[1px]"
            >
              Back to Technical Services
            </Link>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Career Compass ZM — Assess First. Install Right.
          </p>
        </div>
      </section>
    </main>
  );
}

function AssessCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-lg font-extrabold text-[#D4AF37]">{title}</h3>
      <p className="mt-2 text-[#0F2A44] leading-relaxed">{text}</p>
      <p className="mt-4 text-sm font-semibold text-[#0F2A44] group-hover:text-[#D4AF37] transition">
        Included →
      </p>
    </div>
  );
}