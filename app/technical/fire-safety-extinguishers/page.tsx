import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fire Safety & Extinguishers | Career Compass ZM",
  description:
    "Supply, installation, servicing, and maintenance of fire extinguishers for homes, offices, schools, and businesses across Zambia.",
};

export default function FireSafetyPage() {
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
            <span className="text-[#D4AF37]">Fire Safety</span>{" "}
            <span className="text-[#0F2A44]">& Extinguishers</span>
          </h1>

          <p className="mt-3 text-xl md:text-2xl font-bold text-[#1F2937]">
            Safe. Compliant. Inspection-Ready.
          </p>

          <p className="mt-6 text-lg text-[#1F2937] leading-relaxed">
            At Career Compass ZM, we don’t just supply fire extinguishers — we
            ensure your premises are safe, compliant, and fully protected.
          </p>

          <p className="mt-4 text-[#374151] leading-relaxed">
            Our services cover supply, installation, inspection, servicing, and
            ongoing maintenance for residential, commercial, and institutional
            environments.
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
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full px-10 py-4 font-semibold
                         border border-gray-200 bg-white text-[#0F2A44] shadow-lg transition
                         hover:shadow-xl hover:-translate-y-[1px]"
            >
              View Pricing <span className="ml-2 text-[#D4AF37]">↓</span>
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative h-[340px] md:h-[420px] rounded-3xl overflow-hidden shadow-lg border border-gray-200">
          <Image
            src="/images/technical/fire-safety.jpg"
            alt="Fire extinguisher supply and safety services"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* WHAT WE PROVIDE */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-18 md:py-24">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center">
            <span className="text-[#D4AF37]">What</span>{" "}
            <span className="text-[#0F2A44]">We Provide</span>
          </h2>

          <p className="mt-4 text-center text-[#374151] max-w-3xl mx-auto">
            We supply certified extinguishers, install them professionally, and
            keep your equipment serviced — so you stay protected and compliant.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Fire Extinguisher Supply"
              text="Certified CO₂ and DCP extinguishers suitable for different fire risk environments."
            />
            <FeatureCard
              title="Free Installation"
              text="Professional on-site installation included with every purchase."
            />
            <FeatureCard
              title="Compliance Guidance"
              text="Support for workplace safety standards and inspection readiness."
            />
            <FeatureCard
              title="Servicing & Refilling"
              text="Reliable maintenance to keep your extinguishers operational."
            />
            <FeatureCard
              title="Homes & Businesses"
              text="Suitable for homes, offices, shops, schools, clinics, and factories."
            />
            <FeatureCard
              title="Site Assessment"
              text="We advise on correct placement, quantity, and risk-based coverage."
            />
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-18 md:py-24">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          <span className="text-[#D4AF37]">Fire Extinguisher</span>{" "}
          <span className="text-[#0F2A44]">Pricing</span>
        </h2>

        <p className="mt-4 text-lg text-[#1F2937] text-center max-w-3xl mx-auto">
          All prices include gas, free delivery, and professional installation.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <PriceCard
            title="CO₂ Fire Extinguisher – 5kg"
            desc="Ideal for electrical equipment and server rooms."
            price="K3,300"
          />

          <PriceCard
            title="DCP Fire Extinguisher – 9kg"
            desc="Suitable for commercial and industrial use."
            price="K1,500"
          />

          <PriceCard
            title="DCP Fire Extinguisher – 4.5kg"
            desc="Ideal for offices, shops, and residential spaces."
            price="K950"
          />
        </div>

        <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
          <p className="text-[#374151] leading-relaxed">
            Other fire extinguisher types and sizes are available on request.
            <br />
            <span className="font-semibold text-[#0F2A44]">
              Contact us for customised solutions.
            </span>
          </p>
        </div>
      </section>

      {/* SERVICING */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-18 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-[#D4AF37]">Servicing</span>{" "}
            <span className="text-[#0F2A44]">& Maintenance</span>
          </h2>

          <p className="mt-4 text-lg text-[#1F2937]">
            Keep your fire extinguishers functional and compliant with
            professional servicing options.
          </p>

          <p className="mt-7 text-3xl font-extrabold text-[#0F2A44]">
            K400 DCP & K500 CO2 <span className="text-base font-semibold text-[#374151]">per unit</span>
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3 text-left">
            <MiniCard text="On-demand servicing" />
            <MiniCard text="Quarterly servicing" />
            <MiniCard text="Every 6 months" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-18 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2A44]">
            Secure your premises today
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] max-w-2xl mx-auto">
            Speak to our team for supply, installation, or servicing of fire
            safety equipment.
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
            Career Compass ZM — Your Safety Is Our Responsibility.
          </p>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ title, text }: { title: string; text: string }) {
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

function PriceCard({
  title,
  desc,
  price,
}: {
  title: string;
  desc: string;
  price: string;
}) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-xl font-extrabold text-[#D4AF37]">{title}</h3>
      <p className="mt-2 text-[#374151] leading-relaxed">{desc}</p>

      <p className="mt-6 text-3xl font-extrabold text-[#0F2A44]">{price}</p>

      <p className="mt-4 text-sm font-semibold text-[#0F2A44] group-hover:text-[#D4AF37] transition">
        Included →
      </p>
    </div>
  );
}

function MiniCard({ text }: { text: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <p className="text-[#0F2A44] leading-relaxed">
        <span className="font-semibold text-[#D4AF37]">✔</span> {text}
      </p>
    </div>
  );
}