import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cabbage Farming Specialisation | Career Compass ZM",
  description:
    "Professional cabbage farming consultancy and project execution covering land preparation, planting, pest management, harvesting, and market-ready production.",
};

export default function CabbageFarmingPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-24 grid gap-14 md:grid-cols-2 items-center">
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#0F2A44]">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
            Agriculture Service
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-[#D4AF37]">Cabbage</span>{" "}
            <span className="text-[#0F2A44]">Farming Specialisation</span>
          </h1>

          <p className="mt-6 text-lg text-[#1F2937] leading-relaxed">
            Career Compass ZM offers specialised support in commercial cabbage
            production — helping farmers achieve strong yields, quality produce,
            and reliable market outcomes.
          </p>

          <p className="mt-4 text-[#0F2A44] leading-relaxed">
            We focus on proven agronomic practices, cost control, and
            market-driven production — from nursery to harvest and sale.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            {/* WhatsApp MUST stay green */}
            <a
              href="https://wa.me/260972441871"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 font-semibold
                         bg-[#25D366] text-white shadow-md transition hover:bg-[#20b954] hover:shadow-lg"
            >
              Chat on WhatsApp
            </a>

            <Link
              href="/agriculture"
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 font-semibold
                         bg-white text-[#0F2A44] border border-gray-200
                         shadow-sm transition hover:shadow-md hover:border-[#D4AF37]/50"
            >
              Back to Agriculture
            </Link>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative h-[340px] md:h-[420px] rounded-3xl overflow-hidden shadow-lg border border-gray-200">
          <Image
            src="/images/agriculture/cabbage-farming.jpg"
            alt="Commercial cabbage farming and harvesting"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* WHAT WE COVER */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#D4AF37]">
            What Our Support Covers
          </h2>

          <p className="mt-3 text-center text-[#0F2A44] max-w-3xl mx-auto">
            A practical, professional approach that reduces losses, improves
            crop consistency, and strengthens market readiness.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <InfoCard
              title="Variety Selection"
              text="Choosing varieties suited to climate, soil conditions, market demand, and production timelines."
            />
            <InfoCard
              title="Nursery & Transplanting"
              text="Seedling management, spacing, and transplanting techniques for strong plant establishment."
            />
            <InfoCard
              title="Soil & Fertility Management"
              text="Soil preparation, fertiliser scheduling, and nutrient balancing for uniform head development."
            />
            <InfoCard
              title="Pest & Disease Control"
              text="Integrated pest management strategies to reduce losses and protect crop quality."
            />
            <InfoCard
              title="Harvest Planning"
              text="Harvest timing, grading, and handling to meet market standards and maximise returns."
            />
            <InfoCard
              title="Market Readiness"
              text="Guidance on packaging, pricing, and market linkage for consistent fresh produce sales."
            />
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          <span className="text-[#D4AF37]">Why</span>{" "}
          <span className="text-[#0F2A44]">Specialised Cabbage Production?</span>
        </h2>

        <p className="mt-6 text-lg text-[#1F2937] leading-relaxed">
          Cabbage is a high-volume, fast-turnover crop — but only when managed
          professionally. Our approach reduces guesswork, controls costs, and
          improves consistency from field to market.
        </p>

        <p className="mt-4 text-[#0F2A44] leading-relaxed">
          We help you plan correctly, manage risks, and produce market-ready
          cabbage that meets buyer expectations.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-[#D4AF37]">Planning</span>{" "}
            <span className="text-[#0F2A44]">a cabbage farming project?</span>
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] max-w-2xl mx-auto">
            Speak with us for practical guidance and professional support tailored
            to your scale, budget, and objectives.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="https://wa.me/260972441871"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-12 py-4 font-semibold
                         bg-[#25D366] text-white shadow-lg transition hover:bg-[#20b954] hover:shadow-xl"
            >
              Chat on WhatsApp
            </a>
          </div>

          <p className="mt-6 text-sm text-[#0F2A44]/80">
            Career Compass ZM — Practical farming. Market-ready results.
          </p>
        </div>
      </section>
    </main>
  );
}

/* PREMIUM INFO CARD */
function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-extrabold text-[#D4AF37]">{title}</h3>
      <p className="mt-2 text-[#0F2A44] leading-relaxed">{text}</p>
    </div>
  );
}