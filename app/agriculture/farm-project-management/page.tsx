import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "End-to-End Farm Project Management | Career Compass ZM",
  description:
    "Career Compass ZM provides full-cycle farm project management services from planning and setup to production, harvesting, and point of sale.",
};

export default function EndToEndFarmManagementPage() {
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
            <span className="text-[#D4AF37]">End-to-End</span>{" "}
            <span className="text-[#0F2A44]">Farm Project Management</span>
          </h1>

          <p className="mt-6 text-lg text-[#1F2937] leading-relaxed">
            Career Compass ZM supports individuals, groups, and organisations
            looking to run professionally managed farming projects without the
            burden of day-to-day operational challenges.
          </p>

          <p className="mt-4 text-[#0F2A44] leading-relaxed">
            We can be subcontracted to manage farming projects from initial
            planning and land preparation through production, harvesting, and
            point of sale.
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
            src="/images/agriculture/farm-project-management.jpg"
            alt="End-to-end farm project management services"
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
            What We Manage
          </h2>

          <p className="mt-3 text-center text-[#0F2A44] max-w-3xl mx-auto">
            A structured, accountable approach — with planning, supervision,
            reporting, and delivery from soil to sale.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <InfoCard
              title="Project Planning & Feasibility"
              text="Crop selection, budgeting, timelines, and feasibility assessments aligned to market demand."
            />
            <InfoCard
              title="Land Preparation & Setup"
              text="Land clearing, soil preparation, irrigation coordination, and input sourcing."
            />
            <InfoCard
              title="Production Management"
              text="Farm supervision, planting schedules, fertilisation, and pest/disease control oversight."
            />
            <InfoCard
              title="Labour & Operations Oversight"
              text="Supervision of farm workers, activity tracking, and simple operational reporting."
            />
            <InfoCard
              title="Harvesting & Post-Harvest Handling"
              text="Harvest coordination, storage handling, and quality control to minimise losses."
            />
            <InfoCard
              title="Market Linkages & Point of Sale"
              text="Connecting to buyers/markets so produce reaches the right customers at the right time."
            />
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-24">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          <span className="text-[#D4AF37]">Who</span>{" "}
          <span className="text-[#0F2A44]">This Service Is For</span>
        </h2>

        <div className="mt-10 max-w-4xl mx-auto grid gap-4">
          <BulletItem text="Individuals or investors who own land but lack farming time or expertise" />
          <BulletItem text="Diaspora clients seeking professionally managed farm projects" />
          <BulletItem text="NGOs, cooperatives, and institutions running agricultural projects" />
          <BulletItem text="Organisations piloting or scaling agricultural value-chain initiatives" />
        </div>
      </section>

      {/* PRICING NOTE */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-[#D4AF37]">Engagement</span>{" "}
            <span className="text-[#0F2A44]">& Pricing</span>
          </h2>

          <p className="mt-6 text-lg text-[#1F2937] leading-relaxed">
            Pricing is project-based and depends on crop type, land size,
            duration, and the level of management required.
          </p>

          <p className="mt-4 font-semibold text-[#0F2A44]">
            Custom proposals available on request.
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
            Career Compass ZM — From soil to sale.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-[#D4AF37]">Want</span>{" "}
            <span className="text-[#0F2A44]">your farm professionally managed?</span>
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] max-w-2xl mx-auto">
            Let us handle operations while you focus on oversight, performance,
            and returns — with structured reporting and accountable delivery.
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

/* PREMIUM BULLET ITEM */
function BulletItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#D4AF37]" />
      <p className="text-[#0F2A44] leading-relaxed">{text}</p>
    </div>
  );
}