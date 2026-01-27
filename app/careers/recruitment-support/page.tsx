import Image from "next/image";

export const metadata = {
  title: "Recruitment Support & Talent Placement | Career Compass ZM",
  description:
    "Professional recruitment support and talent placement services for businesses, NGOs, and institutions in Zambia.",
};

export default function RecruitmentSupportPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid gap-14 md:grid-cols-2 items-center">

        {/* TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
            Recruitment Support & Talent Placement
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Right Talent. Right Fit. Right Time.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Career Compass ZM supports organisations with structured, ethical,
            and results-driven recruitment solutions — ensuring you engage
            candidates who are aligned to your role requirements, culture,
            and organisational goals.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/careers/recruitment-support.jpg"
            alt="Recruitment support and talent placement services"
            fill
            className="object-cover"
            priority
          />
        </div>

      </section>

      {/* SERVICE DETAILS */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-20">

          <h2 className="text-3xl font-bold text-brand-primary mb-8">
            What Our Recruitment Support Covers
          </h2>

          <ul className="space-y-5 text-lg text-gray-700 leading-relaxed">
            <li>✔ Candidate sourcing based on role requirements</li>
            <li>✔ CV and profile screening for relevance and competence</li>
            <li>✔ Shortlisting aligned to job descriptions and expectations</li>
            <li>✔ Access to our pre-profiled talent pool</li>
            <li>✔ Ethical, transparent, and merit-based recruitment process</li>
          </ul>

        </div>
      </section>

      {/* WHO IT IS FOR */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-brand-primary mb-6">
          Who This Service Is For
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          Our recruitment support service is ideal for:
        </p>

        <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
          <li>Small and medium-sized enterprises (SMEs)</li>
          <li>NGOs and donor-funded programmes</li>
          <li>Start-ups and social enterprises</li>
          <li>Institutions recruiting interns, junior, or experienced staff</li>
        </ul>
      </section>

      {/* PRICING */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
            Recruitment Support Fees
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Recruitment support fees are <strong>quoted per role</strong>,
            based on role complexity, seniority, and recruitment scope.
          </p>

          <p className="mt-4 text-gray-600">
            This ensures a fair, flexible, and role-appropriate recruitment process
            for both employers and candidates.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
          Looking to Hire the Right Talent?
        </h2>

        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Speak with our team to discuss your recruitment needs and receive
          professional, confidential support.
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