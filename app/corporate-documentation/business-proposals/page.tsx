import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business Proposals | Corporate Documentation | Career Compass ZM",
  description:
    "Professional business proposal writing services in Zambia. We develop structured, persuasive proposals for funding, partnerships, projects, and tenders.",
};

export default function BusinessProposalsPage() {
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
            <span className="text-[#D4AF37]">Business</span>{" "}
            <span className="text-[#0F2A44]">Proposals</span>
          </h1>

          <p className="mt-6 text-lg text-[#1F2937] leading-relaxed">
            A business proposal is more than a document — it is a sales,
            strategy, and credibility tool. It explains your idea, your value,
            and why you should be selected.
          </p>

          <p className="mt-4 text-[#374151] leading-relaxed">
            Career Compass ZM prepares professional, structured, and
            decision-focused business proposals that speak the language of
            funders, partners, corporates, and institutions.
          </p>

          {/* ACTIONS: WhatsApp + Back to Corporate Documentation */}
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
            src="/images/corporate-documentation/business-proposals.jpg"
            alt="Professional business proposal writing services"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* WHAT WE COVER */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-18 md:py-20">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-[#D4AF37]">What</span>{" "}
            <span className="text-[#0F2A44]">Our Proposals Include</span>
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] leading-relaxed max-w-3xl">
            We build proposals that are clear, persuasive, and decision-focused —
            designed to be understood quickly and approved confidently.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <BenefitCard text="Executive summary" />
            <BenefitCard text="Problem statement & opportunity" />
            <BenefitCard text="Business model & solution" />
            <BenefitCard text="Products or services description" />
            <BenefitCard text="Implementation plan" />
            <BenefitCard text="Market & competitor overview" />
            <BenefitCard text="Financial projections (high-level)" />
            <BenefitCard text="Risk assessment & mitigation" />
            <BenefitCard text="Clear value proposition" />
            <BenefitCard text="Professional structure & flow" />
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-6xl mx-auto px-6 py-18 md:py-24">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          <span className="text-[#D4AF37]">Pricing</span>{" "}
          <span className="text-[#0F2A44]">Packages</span>
        </h2>

        <p className="mt-4 text-center text-[#374151] max-w-3xl mx-auto">
          Select a package based on your audience — internal/client proposals or
          investor/institutional decision-makers.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {/* STANDARD */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-extrabold text-[#0F2A44]">
              Standard <span className="text-[#D4AF37]">Business Proposal</span>
            </h3>

            <ul className="mt-6 space-y-3 text-[#374151]">
              <li>✔ SMEs & startups</li>
              <li>✔ Internal or client proposals</li>
              <li>✔ Up to 15 pages</li>
            </ul>

            <p className="mt-7 text-3xl font-extrabold text-[#0F2A44]">
              K3,000
            </p>
          </div>

          {/* INVESTOR / INSTITUTIONAL */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-extrabold text-[#0F2A44]">
              Investor / <span className="text-[#D4AF37]">Institutional</span>{" "}
              Proposal
            </h3>

            <ul className="mt-6 space-y-3 text-[#374151]">
              <li>✔ Funding & partnership focused</li>
              <li>✔ Strategic & data-driven</li>
              <li>✔ Enhanced structure & persuasion</li>
            </ul>

            <p className="mt-7 text-3xl font-extrabold text-[#0F2A44]">
              K5,000
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-18 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2A44]">
            Need a winning business proposal?
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] max-w-2xl mx-auto">
            Let us help you communicate your idea clearly, professionally, and
            persuasively.
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
            Career Compass ZM — Clear Ideas. Strong Proposals. Real Results.
          </p>
        </div>
      </section>
    </main>
  );
}

function BenefitCard({ text }: { text: string }) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <p className="text-[#0F2A44] leading-relaxed">
        <span className="font-semibold text-[#D4AF37]">✔</span> {text}
      </p>

      <p className="mt-4 text-sm font-semibold text-[#0F2A44] group-hover:text-[#D4AF37] transition">
        Included →
      </p>
    </div>
  );
}