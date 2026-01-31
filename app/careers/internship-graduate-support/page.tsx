import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Internship & Graduate Support | Career Compass ZM",
  description:
    "Internship profiling and graduate support services that help students and fresh graduates get noticed, shortlisted, and placed faster.",
};

export default function InternshipGraduateSupportPage() {
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
            <span className="text-[#D4AF37]">Internship</span>{" "}
            <span className="text-[#0F2A44]">& Graduate Support</span>
          </h1>

          <p className="mt-3 text-xl md:text-2xl font-bold text-[#1F2937]">
            Get Profiled. Get Noticed. Get Placed Faster.
          </p>

          <p className="mt-6 text-lg text-[#1F2937] leading-relaxed">
            Most students wait for internship adverts.
          </p>

          <p className="mt-4 text-[#374151] leading-relaxed">
            Smart graduates position themselves where employers can see them
            first — even before opportunities are publicly advertised. We help
            you present professionally, be discoverable to decision-makers, and
            respond faster when internship requests come in.
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
              Get Profiled on WhatsApp
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
            src="/images/careers/internship-support.jpg"
            alt="Internship and graduate profiling support"
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
            <span className="text-[#D4AF37]">Internship Profiling</span>{" "}
            <span className="text-[#0F2A44]">(For Students & Fresh Graduates)</span>
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] leading-relaxed">
            Our internship profiling service ensures you are visible,
            discoverable, and ready to be shortlisted when employers request
            interns.
          </p>

          <ul className="mt-8 space-y-4 text-lg text-[#1F2937] leading-relaxed">
            <li>✔ Priority matching to employers requesting interns</li>
            <li>✔ Early access to internship calls — before public adverts</li>
            <li>✔ Custom profile tagging based on your field and strengths</li>
            <li>✔ Added to our internship talent pool accessed by HR teams</li>
            <li>✔ Direct engagement when a suitable match becomes available</li>
          </ul>
        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-4xl mx-auto px-6 py-18 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          <span className="text-[#D4AF37]">Internship</span>{" "}
          <span className="text-[#0F2A44]">Profiling Fee</span>
        </h2>

        <p className="mt-4 text-lg text-[#1F2937]">
          One-time profiling investment for faster visibility and placement.
        </p>

        <p className="mt-8 text-3xl font-extrabold text-[#0F2A44]">
          K300.00{" "}
          <span className="text-base font-semibold text-[#374151]">(Once-Off)</span>
        </p>

        <p className="mt-4 text-sm text-gray-500">
          Career Compass ZM — Stand Out. Get Seen. Get Chosen.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-[#D4AF37]">Ready</span>{" "}
            <span className="text-[#0F2A44]">to get noticed?</span>
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] max-w-2xl mx-auto">
            Send your details and we’ll guide you on profiling, what to prepare,
            and how we position you for internship requests.
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
              Get Profiled on WhatsApp
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Career Compass ZM — Early visibility. Better chances. Faster placement.
          </p>
        </div>
      </section>
    </main>
  );
}