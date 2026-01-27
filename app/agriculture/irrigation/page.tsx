import Image from "next/image";

export const metadata = {
  title: "Water Irrigation Setup | Agriculture Consultancy | Career Compass ZM",
  description:
    "Career Compass ZM provides professional water irrigation setup services including system design, installation, and optimisation for farms and agricultural projects in Zambia.",
};

export default function IrrigationPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid gap-14 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
            Water Irrigation Setup
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Career Compass ZM designs and installs efficient water irrigation
            systems that help farmers maximise yields while using water
            responsibly.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            We assess your land, crop type, and water source to recommend
            practical irrigation solutions that support sustainable
            and profitable farming.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/agriculture/irrigation.jpg"
            alt="Water irrigation system setup for farming"
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
            What We Provide
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-gray-700">

            <InfoCard
              title="Irrigation System Design"
              text="Custom irrigation planning based on land size, crop type, and water availability."
            />

            <InfoCard
              title="Drip & Sprinkler Systems"
              text="Installation of drip and sprinkler irrigation systems for efficient water distribution."
            />

            <InfoCard
              title="Water Source Assessment"
              text="Evaluation of boreholes, rivers, tanks, and reservoirs for irrigation suitability."
            />

            <InfoCard
              title="Pump & Piping Setup"
              text="Selection and installation of pumps, pipes, and fittings for reliable water flow."
            />

            <InfoCard
              title="System Optimisation"
              text="Adjustments and upgrades to improve efficiency, reduce waste, and cut costs."
            />

            <InfoCard
              title="Farmer Training & Guidance"
              text="Practical guidance on operating, maintaining, and managing irrigation systems."
            />

          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center">
          Why Proper Irrigation Matters
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
          A well-designed irrigation system increases yields, reduces labour,
          improves crop consistency, and protects your investment against
          unpredictable rainfall patterns.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
            Need a reliable irrigation solution?
          </h2>

          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Talk to our agriculture consultants and get an irrigation
            system that works for your farm and your budget.
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