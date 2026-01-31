import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Safety Compliance Support | Career Compass ZM",
  description:
    "Workplace safety compliance support including fire safety guidance, inspections, documentation, and regulatory readiness for businesses in Zambia.",
};

export default function SafetyCompliancePage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-24 grid gap-14 md:grid-cols-2 items-center">
        {/* TEXT */}
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#0F2A44]">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
            Technical Services
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-[#D4AF37]">Safety</span>{" "}
            <span className="text-[#0F2A44]">Compliance Support</span>
          </h1>

          <p className="mt-3 text-xl md:text-2xl font-bold text-[#1F2937]">
            Inspection-Ready. Risk-Aware. Fully Supported.
          </p>

          <p className="mt-6 text-lg text-[#1F2937] leading-relaxed">
            Career Compass ZM supports businesses, institutions, and
            organisations to meet essential workplace safety and fire compliance
            requirements.
          </p>

          <p className="mt-4 text-[#374151] leading-relaxed">
            We help you understand safety expectations, prepare for inspections,
            and maintain a compliant, risk-aware working environment.
          </p>

          {/* ACTIONS: WhatsApp + Back (consistent placement) */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/260972441871"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-10 py-4 font-semibold
                         bg-[#25D366] text-white shadow-lg transition
                         hover:bg-[#20b954] hover:shadow-xl hover:-translate-y-[1px]"
            >
              Chat on WhatsApp
            </a>

            <Link
              href="/technical"
              className="inline-flex items-center justify-center rounded-full px-10 py-4 font-semibold
                         bg-[#0F2A44] text-white shadow-lg transition
                         hover:bg-[#0B2034] hover:shadow-xl hover:-translate-y-[1px]"
            >
              Back to Technical Services
            </Link>

            <a
              href="#who-its-for"
              className="inline-flex items-center justify-center rounded-full px-10 py-4 font-semibold
                         border border-gray-200 bg-white text-[#0F2A44] shadow-lg transition
                         hover:shadow-xl hover:-translate-y-[1px]"
            >
              Who it’s for <span className="ml-2 text-[#D4AF37]">↓</span>
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative h-[340px] md:h-[420px] rounded-3xl overflow-hidden shadow-lg border border-gray-200">
          <Image
            src="/images/technical/safety-compliance.jpg"
            alt="Workplace safety compliance and inspections"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* WHAT WE SUPPORT */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-18 md:py-24">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center">
            <span className="text-[#D4AF37]">What</span>{" "}
            <span className="text-[#0F2A44]">We Support</span>
          </h2>

          <p className="mt-4 text-center text-[#374151] max-w-3xl mx-auto">
            Practical support that helps your workplace meet safety expectations,
            reduce risk, and stay prepared for inspections.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <SupportCard
              title="Fire Safety Readiness"
              text="Guidance on extinguisher placement, fire points, and minimum safety standards."
            />
            <SupportCard
              title="Inspection Preparation"
              text="Support in preparing premises for council, fire, or regulatory inspections."
            />
            <SupportCard
              title="Safety Documentation"
              text="Assistance with safety registers, compliance checklists, and internal safety records."
            />
            <SupportCard
              title="Risk Identification"
              text="Identifying safety gaps and practical mitigation recommendations."
            />
            <SupportCard
              title="Ongoing Compliance Advice"
              text="Continuous advisory support as your operations grow or change."
            />
            <SupportCard
              title="Corrective Action Support"
              text="Help to address gaps raised during inspections and improve readiness."
            />
          </div>
        </div>
      </section>

      {/* WHO IT’S FOR */}
      <section id="who-its-for" className="max-w-6xl mx-auto px-6 py-18 md:py-24">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          <span className="text-[#D4AF37]">Who</span>{" "}
          <span className="text-[#0F2A44]">This Is For</span>
        </h2>

        <p className="mt-4 text-center text-[#374151] max-w-3xl mx-auto">
          Ideal for organisations that want to stay safe, reduce incidents, and
          remain inspection-ready.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {[
            "Offices & Corporate Buildings",
            "Shops, Restaurants & Warehouses",
            "Schools & Training Institutions",
            "Clinics, NGOs & Faith Organisations",
            "Factories & Industrial Sites",
            "Farms, Lodges & Remote Operations",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <p className="text-[#0F2A44] leading-relaxed">
                <span className="font-semibold text-[#D4AF37]">✔</span> {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-18 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2A44]">
            Need help meeting safety requirements?
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] max-w-2xl mx-auto">
            Let our team guide you toward a safer, compliant, and
            inspection-ready workplace.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/260972441871"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-12 py-4 font-semibold
                         bg-[#25D366] text-white shadow-lg transition
                         hover:bg-[#20b954] hover:shadow-xl hover:-translate-y-[1px]"
            >
              Chat on WhatsApp
            </a>

            <Link
              href="/technical"
              className="inline-flex items-center justify-center rounded-full px-12 py-4 font-semibold
                         bg-[#0F2A44] text-white shadow-lg transition
                         hover:bg-[#0B2034] hover:shadow-xl hover:-translate-y-[1px]"
            >
              Back to Technical Services
            </Link>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Career Compass ZM — Safety. Compliance. Confidence.
          </p>
        </div>
      </section>
    </main>
  );
}

function SupportCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-lg font-extrabold text-[#D4AF37]">{title}</h3>
      <p className="mt-2 text-[#0F2A44] leading-relaxed">{text}</p>
      <p className="mt-4 text-sm font-semibold text-[#0F2A44] group-hover:text-[#D4AF37] transition">
        Included →
      </p>
    </div>
  );
}