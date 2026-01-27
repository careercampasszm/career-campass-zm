import Image from "next/image";

export const metadata = {
  title: "Professional Profiling | Career Compass ZM",
  description:
    "Get professionally profiled and positioned before jobs are advertised. Career Compass ZM connects you to recruiters and employers early.",
};

export default function ProfessionalProfilingPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid gap-14 md:grid-cols-2 items-center">

        {/* TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
            Professional Profiling
            <span className="block text-gray-800 text-2xl md:text-3xl mt-2">
              Be Seen Before the Job Is Advertised
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Most people wait for vacancies to be announced.
            <strong> Smart professionals get profiled early.</strong>
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            When recruiters and HR partners request candidates, your profile is
            already available — positioned, tagged, and ready for selection.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/careers/professional-profiling.jpg"
            alt="Professional Profiling Service"
            fill
            className="object-cover"
            priority
          />
        </div>

      </section>

      {/* WHAT PROFILING INCLUDES */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-20">

          <h2 className="text-3xl font-bold text-brand-primary mb-8">
            What Professional Profiling Includes
          </h2>

          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ ATS-compliant CV uploaded to our recruiter pool</li>
            <li>✔ Priority shortlisting to agencies and employers</li>
            <li>✔ Fast-track access to interview opportunities</li>
            <li>✔ Personalised profile tagging based on your field</li>
          </ul>

        </div>
      </section>

      {/* PRICING & CTA */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
          Professional Profiling Service
        </h2>

        <p className="mt-4 text-lg text-gray-700">
          Strategic positioning that puts opportunities within your reach.
        </p>

        <p className="mt-6 text-2xl font-bold text-gray-900">
          K300.00 <span className="text-base font-medium text-gray-600">Once-Off</span>
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
          Career Compass ZM — Where Opportunities Start Chasing You.
        </p>

      </section>

    </main>
  );
}