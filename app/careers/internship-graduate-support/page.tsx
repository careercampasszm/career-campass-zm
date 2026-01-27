import Image from "next/image";

export const metadata = {
  title: "Internship & Graduate Support | Career Compass ZM",
  description:
    "Internship profiling and graduate support services that help students and fresh graduates get noticed, shortlisted, and placed faster.",
};

export default function InternshipGraduateSupportPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid gap-14 md:grid-cols-2 items-center">

        {/* TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
            Internship & Graduate Support
            <span className="block text-gray-800 text-2xl md:text-3xl mt-2">
              Get Profiled. Get Noticed. Get Placed Faster.
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Most students wait for internship adverts.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Smart graduates position themselves where employers can see them
            first — even before opportunities are publicly advertised.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/careers/internship-support.jpg"
            alt="Internship and graduate profiling support"
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
            Internship Profiling (For Students & Fresh Graduates)
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            Our internship profiling service ensures you are visible,
            discoverable, and shortlisted earlier when employers request interns.
          </p>

          <ul className="space-y-5 text-gray-700 text-lg">
            <li>✔ Priority matching to employers requesting interns</li>
            <li>✔ Early access to internship calls — before public adverts</li>
            <li>✔ Custom professional profile tag based on your field and strengths</li>
            <li>✔ Added to our internship talent pool accessed by HR teams</li>
            <li>✔ Direct engagement when a suitable match becomes available</li>
          </ul>

        </div>
      </section>

      {/* PRICING & CTA */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
          Internship Profiling Fee
        </h2>

        <p className="mt-4 text-lg text-gray-700">
          One-time profiling investment for faster visibility and placement.
        </p>

        <p className="mt-6 text-2xl font-bold text-gray-900">
          K300.00 (Once-Off)
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
            Get Profiled on WhatsApp
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Career Compass ZM — Stand Out. Get Seen. Get Chosen.
        </p>

      </section>

    </main>
  );
}