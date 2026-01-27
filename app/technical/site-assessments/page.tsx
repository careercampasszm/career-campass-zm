import Image from "next/image";

export const metadata = {
  title: "Site Assessments | Technical & Safety Assessments | Career Compass ZM",
  description:
    "Professional site assessments for CCTV, fire safety, internet connectivity, and technical installations across Zambia.",
};

export default function SiteAssessmentsPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid gap-14 md:grid-cols-2 items-center">

        {/* TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
            Site Assessments
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Career Compass ZM conducts professional on-site assessments
            to determine the most effective, compliant, and cost-efficient
            technical solutions for your environment.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            We evaluate your space before installation to ensure correct
            system design, safety compliance, and optimal performance.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/technical/site-assessment.jpg"
            alt="Technical site assessment services"
            fill
            className="object-cover"
            priority
          />
        </div>

      </section>

      {/* WHAT WE ASSESS */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-24">

          <h2 className="text-3xl font-bold text-brand-primary mb-12 text-center">
            What We Assess
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-gray-700">

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                CCTV Coverage
              </h3>
              <p>
                Camera placement, blind spots, lighting conditions,
                and recording requirements.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                Fire Safety Readiness
              </h3>
              <p>
                Fire extinguisher placement, access routes,
                and compliance readiness.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                Internet & Connectivity
              </h3>
              <p>
                Network layout, Starlink positioning,
                signal strength, and stability.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                Power & Infrastructure
              </h3>
              <p>
                Power availability, cabling routes,
                and equipment protection.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                Environmental Factors
              </h3>
              <p>
                Weather exposure, dust, height, access
                points, and physical security.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* WHY SITE ASSESSMENTS MATTER */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-brand-primary mb-10 text-center">
          Why Site Assessments Matter
        </h2>

        <div className="grid gap-6 md:grid-cols-2 text-gray-700 max-w-4xl mx-auto">
          <p>✔ Prevents incorrect installations</p>
          <p>✔ Reduces unnecessary costs</p>
          <p>✔ Improves system effectiveness</p>
          <p>✔ Ensures safety & compliance</p>
          <p>✔ Enables accurate quotations</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
            Need a professional site assessment?
          </h2>

          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Let us assess your site and recommend the right
            technical solution before installation.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="https://wa.me/260972441871"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#25D366] text-white px-12 py-4 rounded-full font-semibold shadow-lg hover:bg-[#20b954] transition"
            >
              Chat on WhatsApp
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Career Compass ZM — Assess First. Install Right.
          </p>

        </div>
      </section>

    </main>
  );
}