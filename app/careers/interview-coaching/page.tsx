import Image from "next/image";

export const metadata = {
  title: "Interview Coaching | Career Compass ZM",
  description:
    "Professional interview coaching to help you master interview questions, build confidence, and present yourself effectively to employers.",
};

export default function InterviewCoachingPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid gap-14 md:grid-cols-2 items-center">

        {/* TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
            Interview Coaching
            <span className="block text-gray-800 text-2xl md:text-3xl mt-2">
              Master Your Next Interview
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Are you consistently shortlisted but never selected?
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Interviews can be intimidating — especially if you are unsure how
            to respond, how to present yourself, or what employers truly expect.
            Our interview coaching equips you with confidence, structure, and
            practical techniques to perform at your best.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/careers/interview-coaching.jpg"
            alt="Interview coaching and mock interview preparation"
            fill
            className="object-cover"
            priority
          />
        </div>

      </section>

      {/* WHAT WE COVER */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-20">

          <h2 className="text-3xl font-bold text-brand-primary mb-8">
            What Our Interview Coaching Includes
          </h2>

          <ul className="space-y-5 text-gray-700 text-lg leading-relaxed">
            <li>✔ Mastering clear and confident answers to difficult interview questions</li>
            <li>✔ Understanding what recruiters, HR teams, and hiring managers look for</li>
            <li>✔ Improving body language, tone, and professional composure</li>
            <li>✔ Structuring and presenting your career story with clarity</li>
            <li>✔ Full mock interview session to simulate real interview conditions</li>
          </ul>

        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
          Interview Coaching Sessions
        </h2>

        <p className="mt-4 text-lg text-gray-700">
          Practical coaching designed to build confidence and improve performance.
        </p>

        <div className="mt-10 space-y-3 text-xl font-semibold text-gray-900">
          <p>Virtual Session — <span className="font-bold">K200.00</span></p>
          <p>In-Person Session — <span className="font-bold">K450.00</span></p>
        </div>

      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
            Book Your Interview Coaching Session
          </h2>

          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Prepare with confidence and walk into your next interview ready.
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
            Career Compass ZM — Guiding You to Confidence. Guiding You to Opportunity.
          </p>

        </div>
      </section>

    </main>
  );
}