import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Agriculture & Farming Consultancy | Career Compass ZM",
  description:
    "Career Compass ZM provides practical agriculture and farming consultancy services including irrigation setup, best-practice farming, project management, and crop specialisation in Zambia.",
};

export default function AgriculturePage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid gap-14 md:grid-cols-2 items-center">
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#0F2A44]">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
            Agriculture • Advisory • Delivery
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-[#D4AF37]">Agriculture</span>{" "}
            <span className="text-[#0F2A44]">&amp; Farming Consultancy</span>
          </h1>

          <p className="mt-6 text-lg text-[#1F2937] leading-relaxed">
            <span className="text-[#0F2A44] font-semibold">Career Compass ZM</span>{" "}
            supports farmers, agribusinesses, and landowners with practical,
            results-driven agricultural consultancy services.
          </p>

          <p className="mt-4 text-[#0F2A44] leading-relaxed">
            From irrigation systems and best-practice farming to managing full
            farming projects from land preparation to market, we help you farm
            smarter, sustainably, and profitably.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#agri-services"
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 font-semibold
                         bg-[#0F2A44] text-white border border-[#0F2A44]/20
                         shadow-md transition hover:shadow-lg hover:bg-[#0B2034]"
            >
              Explore Services <span className="ml-2 text-[#D4AF37]">→</span>
            </a>

            {/* WhatsApp must stay green */}
            <a
              href="https://wa.me/260972441871"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 font-semibold
                         bg-[#25D366] text-white shadow-md transition hover:bg-[#20b954] hover:shadow-lg"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <div className="relative h-[360px] rounded-3xl overflow-hidden shadow-lg border border-gray-200">
            <Image
              src="/images/agriculture/agriculture-hero.jpg"
              alt="Agriculture and farming consultancy services"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="mt-4 mx-auto h-px w-24 bg-[#D4AF37]/45" />
        </div>
      </section>

      {/* SERVICES */}
      <section id="agri-services" className="max-w-7xl mx-auto px-6 pb-28">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-center text-[#D4AF37]">
          Our Agriculture Services
        </h2>

        <p className="text-center text-[#0F2A44] max-w-3xl mx-auto">
          Structured advisory and hands-on support to improve yield, reduce waste,
          and grow farm profitability.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="Water Irrigation Setup"
            text="Design and setup of efficient irrigation systems to optimise water use and crop yields."
            href="/agriculture/irrigation"
          />

          <ServiceCard
            title="Best Practice Farming Consultancy"
            text="Guidance on crop selection, soil management, planting cycles, and farm optimisation."
            href="/agriculture/best-practice-farming"
          />

          <ServiceCard
            title="End-to-End Farm Project Management"
            text="Subcontracted management from planning and planting to harvesting and point of sale."
            href="/agriculture/farm-project-management"
          />

          <ServiceCard
            title="Cabbage Farming Specialisation"
            text="Specialist consultancy in commercial cabbage farming, from nursery to market-ready produce."
            href="/agriculture/cabbage-farming"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-[#D4AF37]">Ready</span>{" "}
            <span className="text-[#0F2A44]">to improve your farm performance?</span>
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] max-w-2xl mx-auto">
            Speak with our agriculture consultants and turn your land into a
            productive, profitable operation.
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

          <p className="mt-4 text-sm text-[#0F2A44]/80">
            Typical response time: same day (working hours).
          </p>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({
  title,
  text,
  href,
}: {
  title: string;
  text: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm
                 hover:shadow-xl hover:-translate-y-1 transition"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-extrabold text-[#D4AF37] leading-snug">
          {title}
        </h3>

        <span className="text-[#0F2A44] group-hover:text-[#D4AF37] transition font-semibold">
          →
        </span>
      </div>

      <p className="mt-3 text-[#0F2A44] leading-relaxed">{text}</p>

      <p className="mt-4 text-sm font-semibold text-[#0F2A44] group-hover:text-[#D4AF37] transition">
        Explore
      </p>
    </Link>
  );
}