import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pitch Decks & Presentations | Career Compass ZM",
  description:
    "Professional pitch decks and business presentations designed for investors, funders, boards, and corporate audiences in Zambia.",
};

export default function PitchDecksPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-24 grid gap-14 md:grid-cols-2 items-center">
        {/* TEXT */}
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#0F2A44]">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
            Corporate Documentation
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-[#D4AF37]">Pitch Decks</span>{" "}
            <span className="text-[#0F2A44]">& Presentations</span>
          </h1>

          <p className="mt-3 text-xl md:text-2xl font-bold text-[#1F2937]">
            Tell the right story — with clarity, numbers, and confidence.
          </p>

          <p className="mt-6 text-lg text-[#1F2937] leading-relaxed">
            We design compelling, structured, and visually professional pitch
            decks and presentations that communicate value clearly and
            confidently.
          </p>

          <p className="mt-4 text-[#374151] leading-relaxed">
            Whether you are pitching to investors, donors, partners, boards, or
            internal stakeholders, we help you present a clear narrative —
            backed by logic, data, and strategy.
          </p>

          {/* ACTIONS */}
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
              href="/corporate-documentation"
              className="inline-flex items-center justify-center rounded-full px-10 py-4 font-semibold
                         bg-[#0F2A44] text-white shadow-lg transition
                         hover:bg-[#0B2034] hover:shadow-xl hover:-translate-y-[1px]"
            >
              Back to Corporate Documentation
            </Link>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative h-[340px] md:h-[420px] rounded-3xl overflow-hidden shadow-lg border border-gray-200">
          <Image
            src="/images/corporate-documentation/pitch-decks.jpg"
            alt="Professional pitch decks and presentations"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* WHAT WE DELIVER */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-18 md:py-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center">
            <span className="text-[#D4AF37]">What</span>{" "}
            <span className="text-[#0F2A44]">We Deliver</span>
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] leading-relaxed text-center max-w-3xl mx-auto">
            Decks that are easy to follow, beautifully presented, and designed
            to make decision-makers trust your thinking.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <DeliverCard
              title="Investor Pitch Decks"
              text="Fundraising decks for startups, SMEs, and growth-stage businesses targeting investors or venture partners."
            />
            <DeliverCard
              title="Corporate & Board Presentations"
              text="Executive-ready presentations for boards, leadership updates, and internal strategy sessions."
            />
            <DeliverCard
              title="Sales & Marketing Decks"
              text="Persuasive decks designed to convert prospects and explain products or services clearly."
            />
            <DeliverCard
              title="Donor & Grant Presentations"
              text="Structured decks for NGOs and development initiatives seeking funding or partnerships."
            />
            <DeliverCard
              title="Academic & Conference Presentations"
              text="Clean, professional slide decks for conferences, workshops, and high-level engagements."
            />
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-5xl mx-auto px-6 py-18 md:py-24">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          <span className="text-[#D4AF37]">Pricing</span>{" "}
          <span className="text-[#0F2A44]">Guide</span>
        </h2>

        <p className="mt-4 text-center text-[#374151] max-w-3xl mx-auto">
          Pricing depends on slide count, complexity, and whether we’re building
          the deck from scratch or redesigning existing content.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {/* STANDARD */}
          <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="pointer-events-none absolute inset-x-0 -top-24 h-40 bg-gradient-to-b from-[#D4AF37]/20 to-transparent" />

            <h3 className="text-xl font-extrabold text-[#0F2A44]">
              Standard <span className="text-[#D4AF37]">Pitch Deck</span>
            </h3>

            <ul className="mt-6 space-y-2 text-[#374151]">
              <li>
                <span className="font-semibold text-[#D4AF37]">✔</span> Content
                structuring & storytelling
              </li>
              <li>
                <span className="font-semibold text-[#D4AF37]">✔</span>{" "}
                Professional slide design
              </li>
              <li>
                <span className="font-semibold text-[#D4AF37]">✔</span> Up to
                12–15 slides
              </li>
              <li>
                <span className="font-semibold text-[#D4AF37]">✔</span> Editable
                PowerPoint / PDF
              </li>
            </ul>

            <p className="mt-8 text-2xl font-extrabold text-[#0F2A44]">
              From K2,500
            </p>
          </div>

          {/* ADVANCED */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-extrabold text-[#0F2A44]">
              Advanced{" "}
              <span className="text-[#D4AF37]">Investor-Ready</span> Deck
            </h3>

            <ul className="mt-6 space-y-2 text-[#374151]">
              <li>
                <span className="font-semibold text-[#D4AF37]">✔</span> Strategy
                & messaging refinement
              </li>
              <li>
                <span className="font-semibold text-[#D4AF37]">✔</span> Financial
                & value proposition slides
              </li>
              <li>
                <span className="font-semibold text-[#D4AF37]">✔</span> Custom
                visuals & branding alignment
              </li>
              <li>
                <span className="font-semibold text-[#D4AF37]">✔</span> Pitch
                flow optimisation
              </li>
            </ul>

            <p className="mt-8 text-2xl font-extrabold text-[#0F2A44]">
              Pricing on Request
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-18 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2A44]">
            Ready to pitch with confidence?
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] max-w-2xl mx-auto">
            Let us help you present your idea, business, or project clearly,
            professionally, and persuasively.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
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

            <Link
              href="/corporate-documentation"
              className="inline-flex items-center justify-center rounded-full px-12 py-4 font-semibold
                         bg-[#0F2A44] text-white shadow-lg transition
                         hover:bg-[#0B2034] hover:shadow-xl hover:-translate-y-[1px]"
            >
              Back to Corporate Documentation
            </Link>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Career Compass ZM — Clarity. Structure. Impact.
          </p>
        </div>
      </section>
    </main>
  );
}

function DeliverCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <h3 className="font-extrabold text-[#0F2A44]">
        <span className="text-[#D4AF37]">●</span> {title}
      </h3>

      <p className="mt-3 text-[#374151] leading-relaxed">{text}</p>

      <p className="mt-4 text-sm font-semibold text-[#0F2A44] group-hover:text-[#D4AF37] transition">
        Included →
      </p>
    </div>
  );
}