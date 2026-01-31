import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Professional Profiling | Career Compass ZM",
  description:
    "Get professionally profiled and positioned before jobs are advertised. Career Compass ZM connects you to recruiters and employers early.",
};

export default function ProfessionalProfilingPage() {
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
            <span className="text-[#D4AF37]">Professional</span>{" "}
            <span className="text-[#0F2A44]">Profiling</span>
          </h1>

          <p className="mt-3 text-xl md:text-2xl font-bold text-[#1F2937]">
            Be Seen Before the Job Is Advertised
          </p>

          <p className="mt-6 text-lg text-[#1F2937] leading-relaxed">
            Most people wait for vacancies to be announced.{" "}
            <span className="font-semibold text-[#0F2A44]">
              Smart professionals position early.
            </span>
          </p>

          <p className="mt-4 text-[#374151] leading-relaxed">
            When recruiters and HR partners request candidates, your profile is
            already available — structured, tagged, and ready for selection.
            This increases your chances of being considered{" "}
            <span className="font-semibold text-[#0F2A44]">
              before opportunities go public.
            </span>
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
            src="/images/careers/professional-profiling.jpg"
            alt="Professional profiling service"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* WHAT PROFILING INCLUDES */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-18 md:py-20">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-[#D4AF37]">What</span>{" "}
            <span className="text-[#0F2A44]">Professional Profiling Includes</span>
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] leading-relaxed">
            We structure your profile in a way that recruiters can quickly scan,
            understand your value, and match you to relevant opportunities.
          </p>

          <ul className="mt-8 space-y-4 text-lg text-[#1F2937] leading-relaxed">
            <li>✔ ATS-compliant CV prepared and ready for recruiter screening</li>
            <li>✔ Profile tagging based on your industry, skills, and role targets</li>
            <li>✔ Priority shortlisting when employers request candidates</li>
            <li>✔ Faster access to interview opportunities when matches arise</li>
          </ul>
        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-4xl mx-auto px-6 py-18 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          <span className="text-[#D4AF37]">Professional</span>{" "}
          <span className="text-[#0F2A44]">Profiling Service</span>
        </h2>

        <p className="mt-4 text-lg text-[#1F2937]">
          Strategic positioning that puts opportunities within your reach.
        </p>

        <p className="mt-8 text-3xl font-extrabold text-[#0F2A44]">
          K300.00{" "}
          <span className="text-base font-semibold text-[#374151]">Once-Off</span>
        </p>

        <p className="mt-4 text-sm text-gray-500">
          Career Compass ZM — Where opportunities start noticing you early.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-[#D4AF37]">Ready</span>{" "}
            <span className="text-[#0F2A44]">to be positioned?</span>
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] max-w-2xl mx-auto">
            Send your details and we will guide you on profiling, formatting,
            and next steps.
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
              Enquire on WhatsApp
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Career Compass ZM — Positioning. Visibility. Opportunity.
          </p>
        </div>
      </section>
    </main>
  );
}