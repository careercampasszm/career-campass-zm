import Image from "next/image";

export const metadata = {
  title: "Concept Notes Development | Career Compass ZM",
  description:
    "Professional concept note writing services for NGOs, donors, corporates, and development projects in Zambia.",
};

export default function ConceptNotesPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid gap-14 md:grid-cols-2 items-center">
        {/* TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
            Concept Notes Development
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Career Compass ZM develops clear, compelling, and funder-aligned
            concept notes that communicate your idea, impact, and value
            effectively.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Whether for NGOs, donors, corporate initiatives, or development
            projects, we help you present strong ideas that attract interest,
            approval, and funding.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/corporate-documentation/concept-notes.jpg"
            alt="Concept notes and project documentation"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* WHAT IS A CONCEPT NOTE */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-brand-primary mb-6">
            What is a Concept Note?
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            A concept note is a concise document that outlines a project idea,
            its objectives, target beneficiaries, implementation approach, and
            expected impact.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            It is commonly used to seek approval, funding interest, or
            partnership before developing a full proposal.
          </p>
        </div>
      </section>

      {/* WHAT WE COVER */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-brand-primary mb-12 text-center">
          What Our Concept Notes Include
        </h2>

        <ul className="grid gap-6 md:grid-cols-2 text-gray-700 text-lg">
          <li>✔ Problem Statement & Rationale</li>
          <li>✔ Project Objectives & Expected Outcomes</li>
          <li>✔ Target Beneficiaries & Geographic Scope</li>
          <li>✔ Implementation Strategy & Activities</li>
          <li>✔ Budget Summary (High-Level)</li>
          <li>✔ Sustainability & Impact Considerations</li>
          <li>✔ Alignment with Donor or Partner Priorities</li>
        </ul>
      </section>

      {/* PRICING */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center">
            Pricing
          </h2>

          <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-sm text-center">
            <p className="text-lg text-gray-700 mb-4">
              Concept Notes Writing
            </p>

            <p className="text-4xl font-bold text-gray-900 mb-6">
              From K2,000
            </p>

            <p className="text-gray-600">
              Final pricing depends on scope, donor requirements, and
              complexity.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
            Need a concept note that gets attention?
          </h2>

          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Let us help you turn your idea into a strong, funder-ready concept
            note.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="https://wa.me/260972441871"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#25D366] text-white px-12 py-4 rounded-full font-semibold shadow-lg hover:bg-[#20b954] hover:shadow-xl transition"
            >
              Chat on WhatsApp
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Career Compass ZM — Ideas. Strategy. Impact.
          </p>
        </div>
      </section>

    </main>
  );
}