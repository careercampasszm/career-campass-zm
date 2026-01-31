import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recruitment Support & Talent Placement | Career Compass ZM",
  description:
    "Professional recruitment support and talent placement services for businesses, NGOs, and institutions in Zambia.",
};

export default function RecruitmentSupportPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-24 grid gap-14 md:grid-cols-2 items-center">
        {/* TEXT */}
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#0F2A44]">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
            Careers
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-[#D4AF37]">Recruitment</span>{" "}
            <span className="text-[#0F2A44]">Support & Talent Placement</span>
          </h1>

          <p className="mt-3 text-xl md:text-2xl font-bold text-[#1F2937]">
            Right Talent. Right Fit. Right Time.
          </p>

          <p className="mt-6 text-[#374151] leading-relaxed">
            Career Compass ZM supports organisations with structured, ethical,
            and results-driven recruitment solutions — ensuring you engage
            candidates aligned to your role requirements, culture, and
            organisational goals.
          </p>

          {/* ACTIONS — WhatsApp + Back to Careers */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/260972441871"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-10 py-4 font-semibold
                         bg-[#25D366] text-white shadow-lg transition
                         hover:bg-[#20b954] hover:shadow-xl hover:-translate-y-[1px]"
            >
              Enquire on WhatsApp
            </a>

            <Link
              href="/careers"
              className="inline-flex items-center justify-center rounded-full px-10 py-4 font-semibold
                         bg-[#0F2A44] text-white shadow-lg transition
                         hover:bg-[#0B2034] hover:shadow-xl hover:-translate-y-[1px]"
            >
              Back to Careers
            </Link>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative h-[340px] md:h-[420px] rounded-3xl overflow-hidden shadow-lg border border-gray-200">
          <Image
            src="/images/careers/recruitment-support.jpg"
            alt="Recruitment support and talent placement services"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* SERVICE DETAILS */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-18 md:py-20">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-[#D4AF37]">What</span>{" "}
            <span className="text-[#0F2A44]">Our Recruitment Support Covers</span>
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] leading-relaxed">
            We help you recruit with clarity, speed, and professionalism — while
            protecting fairness and merit at every step.
          </p>

          <ul className="mt-8 space-y-4 text-lg text-[#1F2937] leading-relaxed">
            <li>✔ Candidate sourcing based on role requirements</li>
            <li>✔ CV and profile screening for relevance and competence</li>
            <li>✔ Shortlisting aligned to job descriptions and expectations</li>
            <li>✔ Access to our pre-profiled talent pool</li>
            <li>✔ Ethical, transparent, and merit-based recruitment process</li>
          </ul>
        </div>
      </section>

      {/* WHO IT IS FOR */}
      <section className="max-w-5xl mx-auto px-6 py-18 md:py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          <span className="text-[#D4AF37]">Who</span>{" "}
          <span className="text-[#0F2A44]">This Service Is For</span>
        </h2>

        <p className="mt-4 text-lg text-[#1F2937] leading-relaxed">
          This service is ideal for organisations that want reliable recruitment
          support without compromising standards or confidentiality:
        </p>

        <ul className="mt-6 space-y-3 text-[#1F2937] leading-relaxed">
          <li>✔ Small and medium-sized enterprises (SMEs)</li>
          <li>✔ NGOs and donor-funded programmes</li>
          <li>✔ Start-ups and social enterprises</li>
          <li>✔ Institutions recruiting interns, junior, or experienced staff</li>
        </ul>
      </section>

      {/* PRICING */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-18 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-[#D4AF37]">Recruitment</span>{" "}
            <span className="text-[#0F2A44]">Support Fees</span>
          </h2>

          <p className="mt-6 text-lg text-[#1F2937] leading-relaxed">
            Recruitment support fees are <span className="font-extrabold text-[#0F2A44]">quoted per role</span>,
            based on role complexity, seniority, and recruitment scope.
          </p>

          <p className="mt-3 text-[#374151] leading-relaxed">
            This ensures a fair, flexible, and role-appropriate process for both
            employers and candidates.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="https://wa.me/260972441871"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-12 py-4 font-semibold
                         bg-[#25D366] text-white shadow-lg transition
                         hover:bg-[#20b954] hover:shadow-xl hover:-translate-y-[1px]"
            >
              Request a Quote on WhatsApp
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Career Compass ZM — Recruit with clarity. Hire with confidence.
          </p>
        </div>
      </section>
    </main>
  );
}