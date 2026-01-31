import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers | CV Writing, Interview Coaching & Recruitment Support",
  description:
    "Career Compass ZM provides ATS-optimised CV writing, interview coaching, professional profiling, internship placement, and recruitment support in Zambia.",
};

export default function CareersPage() {
  return (
    <main className="bg-white">
      {/* HERO / INTRO */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-24 grid gap-14 md:grid-cols-2 items-center">
        {/* TEXT */}
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#0F2A44]">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
            Careers
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-[#D4AF37]">Career</span>{" "}
            <span className="text-[#0F2A44]">&amp; Talent Services</span>
          </h1>

          <p className="mt-6 text-lg text-[#1F2937] leading-relaxed">
            Career Compass ZM helps professionals position themselves competitively
            in today’s job market through structured, recruiter-focused support.
          </p>

          <p className="mt-4 text-[#374151] leading-relaxed">
            Whether you’re starting out, changing careers, or targeting senior
            roles, we help you present your skills, experience, and value with
            clarity and confidence.
          </p>

          {/* ACTIONS: WhatsApp + (Optional) Back to Home */}
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
              href="/"
              className="inline-flex items-center justify-center rounded-full px-10 py-4 font-semibold
                         bg-[#0F2A44] text-white border border-white/0 shadow-lg transition
                         hover:bg-[#0B2034] hover:shadow-xl hover:-translate-y-[1px]"
            >
              Back to Home
            </Link>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative h-[340px] md:h-[420px] rounded-3xl overflow-hidden shadow-lg border border-gray-200">
          <Image
            src="/images/careers/careers-1.jpg"
            alt="Career guidance and professional development"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-28">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          <span className="text-[#D4AF37]">What</span>{" "}
          <span className="text-[#0F2A44]">We Offer</span>
        </h2>

        <p className="mt-4 text-center text-[#1F2937] max-w-3xl mx-auto">
          Select a service to view details, what’s included, and how to get started.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="ATS-Optimised CV Writing"
            text="Professionally written CVs designed to pass Applicant Tracking Systems and attract recruiters."
            href="/careers/ats-cv-writing"
          />

          <ServiceCard
            title="Interview Coaching"
            text="Mock interviews, confidence-building sessions, and employer-focused preparation."
            href="/careers/interview-coaching"
          />

          <ServiceCard
            title="Professional Profiling"
            text="Strategic positioning of your professional profile before opportunities are publicly advertised."
            href="/careers/professional-profiling"
          />

          <ServiceCard
            title="Internship & Graduate Support"
            text="Guidance and preparation for students and recent graduates entering the job market."
            href="/careers/internship-graduate-support"
          />

          <ServiceCard
            title="Recruitment Support"
            text="Candidate sourcing, screening, and role-specific placement support for employers."
            href="/careers/recruitment-support"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-[#D4AF37]">Ready</span>{" "}
            <span className="text-[#0F2A44]">to take the next step?</span>
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] max-w-2xl mx-auto">
            Speak to our consultants and receive guidance tailored to your goals.
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
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* SERVICE CARD (Premium + consistent) */
function ServiceCard({
  title,
  text,
  href,
}: {
  title: string;
  text: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition
                 hover:-translate-y-1 hover:shadow-lg"
    >
      <h3 className="text-lg font-extrabold text-[#D4AF37]">{title}</h3>
      <p className="mt-2 text-[#0F2A44] leading-relaxed">{text}</p>

      <p className="mt-4 text-sm font-semibold text-[#0F2A44] group-hover:text-[#D4AF37] transition">
        Explore →
      </p>
    </Link>
  );
}