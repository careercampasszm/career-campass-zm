import Image from "next/image";

export const metadata = {
  title: "Pitch Decks & Presentations | Career Compass ZM",
  description:
    "Professional pitch decks and business presentations designed for investors, funders, boards, and corporate audiences in Zambia.",
};

export default function PitchDecksPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid gap-14 md:grid-cols-2 items-center">

        {/* TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
            Pitch Decks & Presentations
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            We design compelling, structured, and visually professional pitch
            decks and presentations that communicate value clearly and
            confidently.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Whether you are pitching to investors, donors, partners, boards, or
            internal stakeholders, we help you tell the right story — backed by
            logic, numbers, and strategy.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/corporate-documentation/pitch-decks.jpg"
            alt="Professional pitch decks and presentations"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* WHAT WE DELIVER */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-24">

          <h2 className="text-3xl font-bold text-brand-primary mb-12 text-center">
            What We Deliver
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-gray-700">

            <div className="border border-gray-200 rounded-xl p-6 bg-white">
              <h3 className="font-semibold text-brand-primary mb-3">
                Investor Pitch Decks
              </h3>
              <p>
                Fundraising decks for startups, SMEs, and growth-stage
                businesses targeting investors or venture partners.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 bg-white">
              <h3 className="font-semibold text-brand-primary mb-3">
                Corporate & Board Presentations
              </h3>
              <p>
                Professional presentations for boards, executives, and internal
                strategy sessions.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 bg-white">
              <h3 className="font-semibold text-brand-primary mb-3">
                Sales & Marketing Decks
              </h3>
              <p>
                Persuasive presentations designed to convert prospects and
                explain products or services clearly.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 bg-white">
              <h3 className="font-semibold text-brand-primary mb-3">
                Donor & Grant Presentations
              </h3>
              <p>
                Structured decks for NGOs, projects, and development initiatives
                seeking funding or partnerships.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 bg-white">
              <h3 className="font-semibold text-brand-primary mb-3">
                Academic & Conference Presentations
              </h3>
              <p>
                Clear, professional slide decks for conferences, workshops, and
                high-level engagements.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-5xl mx-auto px-6 py-24">

        <h2 className="text-3xl font-bold text-brand-primary mb-10 text-center">
          Pricing Guide
        </h2>

        <div className="grid gap-8 md:grid-cols-2">

          <div className="border border-gray-200 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-brand-primary mb-4">
              Standard Pitch Deck
            </h3>

            <ul className="space-y-2 text-gray-700">
              <li>✔ Content structuring & storytelling</li>
              <li>✔ Professional slide design</li>
              <li>✔ Up to 12–15 slides</li>
              <li>✔ Editable PowerPoint / PDF</li>
            </ul>

            <p className="mt-6 text-xl font-bold text-gray-900">
              From K2,500
            </p>
          </div>

          <div className="border border-gray-200 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-brand-primary mb-4">
              Advanced / Investor-Ready Deck
            </h3>

            <ul className="space-y-2 text-gray-700">
              <li>✔ Strategy & messaging refinement</li>
              <li>✔ Financial & value proposition slides</li>
              <li>✔ Custom visuals & branding</li>
              <li>✔ Pitch flow optimisation</li>
            </ul>

            <p className="mt-6 text-xl font-bold text-gray-900">
              Pricing on Request
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
            Ready to pitch with confidence?
          </h2>

          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Let us help you present your idea, business, or project clearly,
            professionally, and persuasively.
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
            Career Compass ZM — Clarity. Structure. Impact.
          </p>

        </div>
      </section>

    </main>
  );
}