import Image from "next/image";

export const metadata = {
  title: "Cabbage Farming Specialisation | Career Compass ZM",
  description:
    "Professional cabbage farming consultancy and project execution covering land preparation, planting, pest management, harvesting, and market-ready production.",
};

export default function CabbageFarmingPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid gap-14 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
            Cabbage Farming Specialisation
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Career Compass ZM offers specialised support in commercial cabbage
            production, helping farmers achieve high yields, quality produce,
            and reliable market outcomes.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            We focus on proven agronomic practices, cost control, and market-driven
            production — from nursery to harvest and sale.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/agriculture/cabbage-farming.jpg"
            alt="Commercial cabbage farming and harvesting"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* WHAT WE COVER */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold text-brand-primary mb-12 text-center">
            What Our Cabbage Farming Support Covers
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-gray-700">

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                Variety Selection
              </h3>
              <p>
                Selection of cabbage varieties suited to climate, soil conditions,
                market demand, and production timelines.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                Nursery & Transplanting
              </h3>
              <p>
                Proper seedling management, spacing, and transplanting techniques
                for strong plant establishment.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                Soil & Fertility Management
              </h3>
              <p>
                Soil preparation, fertiliser schedules, and nutrient balancing
                to support uniform head development.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                Pest & Disease Control
              </h3>
              <p>
                Integrated pest management strategies to minimise losses and
                protect crop quality.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                Harvest Planning
              </h3>
              <p>
                Harvest timing, grading, and handling to meet market standards
                and maximise returns.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                Market Readiness
              </h3>
              <p>
                Guidance on packaging, pricing, and market linkage for fresh
                produce sales.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* VALUE */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold text-brand-primary">
          Why Focus on Specialised Cabbage Production?
        </h2>

        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          Cabbage is a high-volume, fast-turnover crop — but only when managed
          professionally. Our approach reduces guesswork, controls costs,
          and improves consistency from field to market.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
            Planning a cabbage farming project?
          </h2>

          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Speak with us for practical guidance and professional support
            tailored to your scale and objectives.
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
            Career Compass ZM — Practical farming. Market-ready results.
          </p>
        </div>
      </section>

    </main>
  );
}