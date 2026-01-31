import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Practice Farming Consultancy | Career Compass ZM",
  description:
    "Career Compass ZM provides end-to-end farming consultancy services including best practice guidance, farm planning, project execution, and market-oriented production in Zambia.",
};

export default function FarmingConsultancyPage() {
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
            <span className="text-[#D4AF37]">Best Practice</span>{" "}
            <span className="text-[#0F2A44]">Farming Consultancy</span>
          </h1>

          <p className="mt-6 text-lg text-[#1F2937] leading-relaxed">
            Career Compass ZM supports farmers, investors, and agri-projects with
            practical, results-driven farming consultancy grounded in proven
            agricultural best practices.
          </p>

          <p className="mt-4 text-[#0F2A44] leading-relaxed">
            We don’t just advise — we help design, implement, supervise, and
            optimise farming projects from land preparation to harvest and market
            readiness.
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
            src="/images/agriculture/farming-consultancy.jpg"
            alt="Best practice farming consultancy services"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#D4AF37]">
            What We Support
          </h2>

          <p className="mt-3 text-center text-[#0F2A44] max-w-3xl mx-auto">
            Practical support across planning, production, optimisation, and
            market readiness — tailored to your land, crop, and objectives.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <InfoCard
              title="Farm Planning & Setup"
              text="Guidance on land use, crop selection, layout planning, and seasonal scheduling."
            />
            <InfoCard
              title="Best Practice Crop Management"
              text="Advice on planting methods, spacing, fertilisation, pest control, and yield optimisation."
            />
            <InfoCard
              title="Input & Resource Optimisation"
              text="Efficient use of seeds, fertilisers, chemicals, labour, and water to reduce costs."
            />
            <InfoCard
              title="Project-Based Farming Management"
              text="Subcontracted management of farming projects from start to harvest and sale."
            />
            <InfoCard
              title="Market-Oriented Production"
              text="Aligning production volumes and quality with market demand and buyer expectations."
            />
            <InfoCard
              title="Monitoring, Supervision & Reporting"
              text="Ongoing farm visits, progress tracking, and performance reporting."
            />
          </div>
        </div>
      </section>

      {/* SUBCONTRACTING */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-24">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          <span className="text-[#D4AF37]">Farming Project</span>{" "}
          <span className="text-[#0F2A44]">Subcontracting</span>
        </h2>

        <p className="mt-6 text-lg text-[#1F2937] leading-relaxed max-w-3xl mx-auto text-center">
          Where required, Career Compass ZM can be subcontracted to run farming
          projects on behalf of landowners, institutions, cooperatives, or
          investors — from land preparation through production to point of sale.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="https://wa.me/260972441871"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full px-10 py-4 font-semibold
                       bg-[#0F2A44] text-white shadow-lg transition hover:bg-[#0B2034] hover:shadow-xl"
          >
            Discuss a Project <span className="ml-2 text-[#D4AF37]">→</span>
          </a>
        </div>
      </section>

      {/* SPECIALISATION */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-[#D4AF37]">Special</span>{" "}
            <span className="text-[#0F2A44]">Focus Areas</span>
          </h2>

          <p className="mt-5 text-lg text-[#1F2937] max-w-3xl mx-auto leading-relaxed">
            We have strong practical experience in vegetable farming, with a
            growing specialisation in cabbage production — including planning,
            disease management, and market timing.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-[#D4AF37]">Planning</span>{" "}
            <span className="text-[#0F2A44]">or running a farming project?</span>
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] max-w-2xl mx-auto">
            Speak to our agriculture consultants and get practical, profit-focused
            guidance tailored to your land and goals.
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

/* INFO CARD */
function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-extrabold text-[#D4AF37]">{title}</h3>
      <p className="mt-2 text-[#0F2A44] leading-relaxed">{text}</p>
    </div>
  );
}