import Image from "next/image";

export const metadata = {
  title: "End-to-End Farm Project Management | Career Compass ZM",
  description:
    "Career Compass ZM provides full-cycle farm project management services from planning and setup to production, harvesting, and point of sale.",
};

export default function EndToEndFarmManagementPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid gap-14 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
            End-to-End Farm Project Management
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Career Compass ZM supports individuals, groups, and organisations
            looking to run professionally managed farming projects without
            the burden of day-to-day operational challenges.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            We are subcontracted to manage farming projects from initial
            planning and land preparation through production, harvesting,
            and final point of sale.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/agriculture/farm-project-management.jpg"
            alt="End-to-end farm project management services"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold text-brand-primary mb-14 text-center">
            What We Manage
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            <ServiceItem
              title="Project Planning & Feasibility"
              text="Crop selection, budgeting, timelines, and feasibility assessments aligned to market demand."
            />

            <ServiceItem
              title="Land Preparation & Setup"
              text="Land clearing, soil preparation, irrigation coordination, and input sourcing."
            />

            <ServiceItem
              title="Production Management"
              text="Day-to-day farm supervision, planting schedules, fertilisation, and pest control oversight."
            />

            <ServiceItem
              title="Labour & Operations Oversight"
              text="Supervision of farm workers, activity tracking, and operational reporting."
            />

            <ServiceItem
              title="Harvesting & Post-Harvest Handling"
              text="Harvest coordination, storage handling, and quality control to minimise losses."
            />

            <ServiceItem
              title="Market Linkages & Point of Sale"
              text="Connection to buyers, aggregators, or markets to ensure produce reaches the right customers."
            />

          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-brand-primary mb-10 text-center">
          Who This Service Is For
        </h2>

        <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
          <p>✔ Individuals or investors who own land but lack farming time or expertise</p>
          <p>✔ Diaspora clients seeking professionally managed farm projects</p>
          <p>✔ NGOs, cooperatives, and institutions running agricultural projects</p>
          <p>✔ Organisations piloting or scaling agricultural value-chain initiatives</p>
        </div>
      </section>

      {/* PRICING NOTE */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl font-bold text-brand-primary">
            Engagement & Pricing
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Pricing is project-based and depends on crop type, land size,
            duration, and level of management required.
          </p>

          <p className="mt-4 font-semibold text-brand-primary">
            Custom proposals available on request
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
            Want your farm professionally managed?
          </h2>

          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Let us handle the farming operations while you focus on results,
            oversight, and returns.
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
            Career Compass ZM — From soil to sale.
          </p>
        </div>
      </section>

    </main>
  );
}

/* SMALL SERVICE ITEM */
function ServiceItem({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h3 className="text-lg font-semibold text-brand-primary mb-2">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {text}
      </p>
    </div>
  );
}