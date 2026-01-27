import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Careers | CV Writing, Interview Coaching & Recruitment Support",
  description:
    "Career Compass ZM provides ATS-optimised CV writing, interview coaching, professional profiling, internship placement, and recruitment support in Zambia.",
};

export default function CareersPage() {
  return (
    <main className="bg-white">

      {/* HERO / INTRO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid gap-14 md:grid-cols-2 items-center">

        {/* TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
            Career & Talent Services
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Career Compass ZM helps professionals position themselves
            competitively in today’s job market through structured,
            recruiter-focused career support.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Whether you are starting out, changing careers, or targeting senior
            roles, we help you present your skills, experience, and value with
            clarity and confidence.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative h-[340px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/careers/careers-1.jpg"
            alt="Career guidance and professional development"
            fill
            className="object-cover"
            priority
          />
        </div>

      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 pb-28">
        <h2 className="text-3xl font-bold text-brand-primary mb-14 text-center">
          What We Offer
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

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
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
            Ready to take the next step in your career?
          </h2>

          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Speak to our consultants and receive guidance tailored to your goals.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="https://wa.me/260972441871"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center
                bg-[#25D366] text-white
                px-12 py-4
                rounded-full
                font-semibold
                shadow-lg
                hover:bg-[#20b954]
                hover:shadow-xl
                transition
              "
            >
              Chat on WhatsApp
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}

/* SERVICE CARD (LINK-AWARE) */
function ServiceCard({
  title,
  text,
  href,
}: {
  title: string;
  text: string;
  href?: string;
}) {
  const card = (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition cursor-pointer">
      <h3 className="text-xl font-semibold text-brand-primary">
        {title}
      </h3>
      <p className="mt-3 text-gray-600 leading-relaxed">
        {text}
      </p>
    </div>
  );

  return href ? <Link href={href}>{card}</Link> : card;
}