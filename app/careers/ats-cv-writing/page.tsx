import Image from "next/image";

export const metadata = {
  title: "ATS-Optimised CV Writing | Career Compass ZM",
  description:
    "Get professionally written ATS-optimised CVs that pass Applicant Tracking Systems and increase your chances of being shortlisted.",
};

export default function ATSCVWritingPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid gap-14 md:grid-cols-2 items-center">

        {/* TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
            ATS-Tailored CVs  
            <span className="block text-gray-800 text-2xl md:text-3xl mt-2">
              Get Seen. Get Shortlisted. Get Hired.
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Most CVs are never seen by human eyes.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Before HR reviews your application, it must first pass through
            an <strong>Applicant Tracking System (ATS)</strong>.
            If your CV is not ATS-friendly, it is filtered out — even if
            you are fully qualified.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/careers/ats-cv.jpg"
            alt="ATS Optimised CV Writing Service"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* WHAT IS ATS */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-20">

          <h2 className="text-3xl font-bold text-brand-primary mb-6">
            What is ATS?
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            Applicant Tracking Systems (ATS) are software tools used by employers
            to automatically scan, sort, and rank CVs before a recruiter reviews them.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Many employers in Zambia and internationally use ATS platforms such as:
          </p>

          <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
            <li>TopFloor Zambia (Workable)</li>
            <li>Yalelo (PeopleHum)</li>
            <li>Google Forms (forms.gle) used by NGOs and international firms</li>
          </ul>

        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-brand-primary mb-6">
          The Hard Truth
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          Many professionals miss out on interviews not because they lack
          qualifications — but because their CVs cannot be properly read,
          scored, or ranked by ATS systems.
        </p>

        <p className="mt-4 text-gray-600 leading-relaxed">
          To progress, your CV must hit a required keyword and formatting
          threshold before a human ever sees it.
        </p>
      </section>

      {/* SOLUTION */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-20">

          <h2 className="text-3xl font-bold text-brand-primary mb-8">
            Our ATS-Optimised CV Solution
          </h2>

          <ul className="space-y-4 text-gray-700 text-lg">
            <li>✔ CVs structured to pass ATS software filters</li>
            <li>✔ Keyword-aligned to specific job roles</li>
            <li>✔ Recruiter-friendly layout and clarity</li>
            <li>✔ Strategic highlighting of strengths and achievements</li>
            <li>✔ Designed for both systems and human reviewers</li>
          </ul>

        </div>
      </section>

      {/* PRICING & CTA */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
          ATS-Optimised CV Writing
        </h2>

        <p className="mt-4 text-lg text-gray-700">
          Professional CV development tailored for modern recruitment systems.
        </p>

        <p className="mt-6 text-2xl font-bold text-gray-900">
          K120.00
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