import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ATS-Optimised CV Writing | Career Compass ZM",
  description:
    "Get professionally written ATS-optimised CVs that pass Applicant Tracking Systems and increase your chances of being shortlisted.",
};

export default function ATSCVWritingPage() {
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
            <span className="text-[#D4AF37]">ATS-Optimised</span>{" "}
            <span className="text-[#0F2A44]">CV Writing</span>
          </h1>

          <p className="mt-3 text-xl md:text-2xl font-bold text-[#1F2937]">
            Get Seen. Get Shortlisted. Get Hired.
          </p>

          <p className="mt-6 text-lg text-[#1F2937] leading-relaxed">
            Most CVs are never seen by human eyes.
          </p>

          <p className="mt-4 text-[#374151] leading-relaxed">
            Before HR reviews your application, it must first pass through an{" "}
            <span className="font-semibold text-[#0F2A44]">
              Applicant Tracking System (ATS)
            </span>
            . If your CV is not ATS-friendly, it can be filtered out — even when
            you are fully qualified.
          </p>

          {/* ACTIONS: WhatsApp + Back to Careers (consistent placement) */}
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
            src="/images/careers/ats-cv.jpg"
            alt="ATS Optimised CV Writing Service"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* WHAT IS ATS */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-18 md:py-20">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-[#D4AF37]">What</span>{" "}
            <span className="text-[#0F2A44]">is ATS?</span>
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] leading-relaxed">
            Applicant Tracking Systems (ATS) are software tools used by employers
            to automatically scan, sort, and rank CVs before a recruiter reviews
            them.
          </p>

          <p className="mt-4 text-[#374151] leading-relaxed">
            Many employers in Zambia and internationally use ATS platforms such
            as:
          </p>

          <ul className="mt-5 list-disc list-inside text-[#374151] space-y-2">
            <li>TopFloor Zambia (Workable)</li>
            <li>Yalelo (PeopleHum)</li>
            <li>Google Forms (forms.gle) used by NGOs and international firms</li>
          </ul>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="max-w-5xl mx-auto px-6 py-18 md:py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          <span className="text-[#D4AF37]">The</span>{" "}
          <span className="text-[#0F2A44]">Hard Truth</span>
        </h2>

        <p className="mt-4 text-lg text-[#1F2937] leading-relaxed">
          Many professionals miss out on interviews not because they lack
          qualifications — but because their CVs cannot be properly read, scored,
          or ranked by ATS systems.
        </p>

        <p className="mt-4 text-[#374151] leading-relaxed">
          To progress, your CV must hit a required keyword and formatting
          threshold before a human ever sees it.
        </p>
      </section>

      {/* SOLUTION */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-18 md:py-20">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-[#D4AF37]">Our</span>{" "}
            <span className="text-[#0F2A44]">ATS Solution</span>
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <BenefitCard text="CVs structured to pass ATS software filters" />
            <BenefitCard text="Keyword-aligned to specific job roles" />
            <BenefitCard text="Recruiter-friendly layout and clarity" />
            <BenefitCard text="Strategic highlighting of strengths and achievements" />
            <BenefitCard text="Designed for both systems and human reviewers" />
            <BenefitCard text="Clean formatting to prevent ATS reading errors" />
          </div>
        </div>
      </section>

      {/* PRICING & CTA */}
      <section className="max-w-4xl mx-auto px-6 py-18 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          <span className="text-[#D4AF37]">ATS-Optimised</span>{" "}
          <span className="text-[#0F2A44]">CV Writing</span>
        </h2>

        <p className="mt-4 text-lg text-[#1F2937]">
          Professional CV development tailored for modern recruitment systems.
        </p>

        <p className="mt-7 text-3xl font-extrabold text-[#0F2A44]">K120.00</p>

        <div className="mt-10 flex justify-center">
          <a
            href="https://wa.me/260972441871"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full px-12 py-4 font-semibold
                       bg-[#25D366] text-white shadow-lg transition
                       hover:bg-[#20b954] hover:shadow-xl hover:-translate-y-[1px]"
          >
            Enquire on WhatsApp
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Career Compass ZM — Get Hired. Stay Guided.
        </p>
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