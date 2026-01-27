import Image from "next/image";

export const metadata = {
  title: "Best Practice Farming Consultancy | Career Compass ZM",
  description:
    "Career Compass ZM provides end-to-end farming consultancy services including best practice guidance, farm planning, project execution, and market-oriented production in Zambia.",
};

export default function FarmingConsultancyPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid gap-14 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
            Best Practice Farming Consultancy
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Career Compass ZM supports farmers, investors, and agri-projects
            with practical, results-driven farming consultancy grounded in
            proven agricultural best practices.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            We don’t just advise — we help design, implement, supervise,
            and optimise farming projects from land preparation
            to harvest and market readiness.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/agriculture/farming-consultancy.jpg"
            alt="Best practice farming consultancy services"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold text-brand-primary mb-12 text-center">
            What We Support
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-gray-700">

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
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center">
          Farming Project Subcontracting
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
          Where required, Career Compass ZM can be subcontracted to run
          farming projects on behalf of landowners, institutions,
          cooperatives, or investors — from land preparation
          through production to point of sale.
        </p>
      </section>

      {/* SPECIALISATION */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl font-bold text-brand-primary mb-6">
            Special Focus Areas
          </h2>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We have strong practical experience in vegetable farming,
            with a growing specialisation in cabbage production,
            including planning, disease management, and market timing.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
            Planning or running a farming project?
          </h2>

          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Speak to our agriculture consultants and get practical,
            profit-focused guidance tailored to your land and goals.
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
        </div>
      </section>

    </main>
  );
}

/* INFO CARD */
function InfoCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h3 className="font-semibold text-brand-primary mb-2">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {text}
      </p>
    </div>
  );
}