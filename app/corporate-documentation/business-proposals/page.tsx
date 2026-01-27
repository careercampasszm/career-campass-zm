 import Image from "next/image";

export const metadata = {
  title: "Business Proposals | Corporate Documentation | Career Compass ZM",
  description:
    "Professional business proposal writing services in Zambia. We develop structured, persuasive proposals for funding, partnerships, projects, and tenders.",
};

export default function BusinessProposalsPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid gap-14 md:grid-cols-2 items-center">

        {/* TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
            Business Proposal Development
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            A business proposal is more than a document — it is a sales,
            strategy, and credibility tool. It explains your idea, your value,
            and why you should be selected.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Career Compass ZM prepares professional, structured, and
            decision-focused business proposals that speak the language of
            funders, partners, corporates, and institutions.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/corporate-documentation/business-proposals.jpg"
            alt="Professional business proposal writing services"
            fill
            className="object-cover"
            priority
          />
        </div>

      </section>

      {/* WHAT WE COVER */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-24">

          <h2 className="text-3xl font-bold text-brand-primary mb-10">
            What Our Proposals Include
          </h2>

          <div className="grid gap-6 md:grid-cols-2 text-gray-700">
            <ul className="space-y-4">
              <li>✔ Executive summary</li>
              <li>✔ Problem statement & opportunity</li>
              <li>✔ Business model & solution</li>
              <li>✔ Products or services description</li>
              <li>✔ Implementation plan</li>
            </ul>

            <ul className="space-y-4">
              <li>✔ Market & competitor overview</li>
              <li>✔ Financial projections (high-level)</li>
              <li>✔ Risk assessment & mitigation</li>
              <li>✔ Clear value proposition</li>
              <li>✔ Professional structure & flow</li>
            </ul>
          </div>

        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-brand-primary mb-10">
          Pricing
        </h2>

        <div className="grid gap-8 md:grid-cols-2">

          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-brand-primary mb-4">
              Standard Business Proposal
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>✔ SMEs & startups</li>
              <li>✔ Internal or client proposals</li>
              <li>✔ Up to 15 pages</li>
            </ul>

            <p className="mt-6 text-xl font-bold text-gray-900">
              K3,000
            </p>
          </div>

          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-brand-primary mb-4">
              Investor / Institutional Proposal
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Funding & partnership focused</li>
              <li>✔ Strategic & data-driven</li>
              <li>✔ Enhanced structure & persuasion</li>
            </ul>

            <p className="mt-6 text-xl font-bold text-gray-900">
              K5,000
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
            Need a winning business proposal?
          </h2>

          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Let us help you communicate your idea clearly, professionally, and
            persuasively.
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
            Career Compass ZM — Clear Ideas. Strong Proposals. Real Results.
          </p>

        </div>
      </section>

    </main>
  );
}