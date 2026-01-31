import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Interview Coaching | Career Compass ZM",
  description:
    "Professional interview coaching to help you master interview questions, build confidence, and present yourself effectively to employers.",
};

export default function InterviewCoachingPage() {
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
            <span className="text-[#D4AF37]">Interview</span>{" "}
            <span className="text-[#0F2A44]">Coaching</span>
          </h1>

          <p className="mt-3 text-xl md:text-2xl font-bold text-[#1F2937]">
            Master Your Next Interview
          </p>

          <p className="mt-6 text-lg text-[#1F2937] leading-relaxed">
            Are you consistently shortlisted but never selected?
          </p>

          <p className="mt-4 text-[#374151] leading-relaxed">
            Interviews can be intimidating — especially if you are unsure how to
            structure answers, present yourself, or respond under pressure.
            Our interview coaching equips you with confidence, clarity, and
            practical techniques to perform at your best.
          </p>

          {/* ACTIONS — consistent with ATS page */}
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
            src="/images/careers/interview-coaching.jpg"
            alt="Interview coaching and mock interview preparation"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* WHAT WE COVER */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-18 md:py-20">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-[#D4AF37]">What</span>{" "}
            <span className="text-[#0F2A44]">Our Coaching Covers</span>
          </h2>

          <ul className="mt-8 space-y-4 text-[#1F2937] text-lg leading-relaxed">
            <li>✔ Structuring confident, clear answers to difficult questions</li>
            <li>✔ Understanding what recruiters and hiring managers listen for</li>
            <li>✔ Improving body language, tone, and interview presence</li>
            <li>✔ Presenting your career story with clarity and impact</li>
            <li>✔ Full mock interview simulation with feedback</li>
          </ul>
        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-4xl mx-auto px-6 py-18 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          <span className="text-[#D4AF37]">Interview</span>{" "}
          <span className="text-[#0F2A44]">Coaching Sessions</span>
        </h2>

        <p className="mt-4 text-lg text-[#1F2937]">
          Practical coaching designed to build confidence and improve performance.
        </p>

        <div className="mt-8 space-y-3 text-xl font-semibold text-[#0F2A44]">
          <p>Virtual Session — <span className="font-extrabold">K200.00</span></p>
          <p>In-Person Session — <span className="font-extrabold">K450.00</span></p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-[#D4AF37]">Book</span>{" "}
            <span className="text-[#0F2A44]">Your Coaching Session</span>
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] max-w-2xl mx-auto">
            Walk into your next interview prepared, confident, and credible.
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
            Career Compass ZM — Confidence. Clarity. Opportunity.
          </p>
        </div>
      </section>
    </main>
  );
}