import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Water Irrigation Setup | Agriculture Consultancy | Career Compass ZM",
  description:
    "Career Compass ZM provides professional water irrigation setup services including system design, installation, and optimisation for farms and agricultural projects in Zambia.",
};

export default function IrrigationPage() {
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
            <span className="text-[#D4AF37]">Water Irrigation</span>{" "}
            <span className="text-[#0F2A44]">Setup</span>
          </h1>

          <p className="mt-6 text-lg text-[#1F2937] leading-relaxed">
            Career Compass ZM designs and installs efficient water irrigation
            systems that help farmers maximise yields while using water
            responsibly.
          </p>

          <p className="mt-4 text-[#0F2A44] leading-relaxed">
            We assess your land, crop type, and water source to recommend
            practical irrigation solutions that support sustainable and
            profitable farming.
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
            src="/images/agriculture/irrigation.jpg"
            alt="Water irrigation system setup for farming"
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
            What We Provide
          </h2>

          <p className="mt-3 text-center text-[#0F2A44] max-w-3xl mx-auto">
            End-to-end irrigation support — from planning and selection to
            installation, optimisation, and practical guidance.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-24">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          <span className="text-[#D4AF37]">Why Proper</span>{" "}
          <span className="text-[#0F2A44]">Irrigation Matters</span>
        </h2>

        <p className="mt-6 text-lg text-[#1F2937] leading-relaxed max-w-3xl mx-auto text-center">
          A well-designed irrigation system increases yields, reduces labour,
          improves crop consistency, and protects your investment against
          unpredictable rainfall patterns.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="https://wa.me/260972441871"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full px-10 py-4 font-semibold
                       bg-[#0F2A44] text-white shadow-lg transition hover:bg-[#0B2034] hover:shadow-xl"
          >
            Request an Assessment <span className="ml-2 text-[#D4AF37]">→</span>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-[#D4AF37]">Need</span>{" "}
            <span className="text-[#0F2A44]">a reliable irrigation solution?</span>
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] max-w-2xl mx-auto">
            Talk to our agriculture consultants and get an irrigation system that
            works for your farm and your budget.
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