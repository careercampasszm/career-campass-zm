import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business & Compliance Services | Career Compass ZM",
  description:
    "Career Compass ZM provides business registration, PACRA compliance, licensing, tax registration, and corporate support services in Zambia.",
};

export default function BusinessPage() {
  return (
    <main className="bg-white">
      {/* HERO / INTRO */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-24 grid gap-14 md:grid-cols-2 items-center">
        {/* TEXT */}
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#0F2A44]">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
            Business & Compliance
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-[#D4AF37]">Business</span>{" "}
            <span className="text-[#0F2A44]">& Compliance Services</span>
          </h1>

          <p className="mt-6 text-lg text-[#1F2937] leading-relaxed">
            Career Compass ZM supports entrepreneurs, SMEs, and growing
            organisations with structured business registration, statutory
            compliance, and operational readiness.
          </p>

          <p className="mt-4 text-[#374151] leading-relaxed">
            From incorporation to licensing and regulatory compliance, we ensure
            your business is legally established, professional, and ready to
            operate or bid for opportunities.
          </p>

          {/* ACTIONS — WhatsApp + Jump to Services */}
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

            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full px-10 py-4 font-semibold
                         bg-[#0F2A44] text-white shadow-lg transition
                         hover:bg-[#0B2034] hover:shadow-xl hover:-translate-y-[1px]"
            >
              Explore Services <span className="ml-2 text-[#D4AF37]">↓</span>
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative h-[340px] md:h-[420px] rounded-3xl overflow-hidden shadow-lg border border-gray-200">
          <Image
            src="/images/business/business-compliance.jpg"
            alt="Business and regulatory compliance services in Zambia"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center">
            <span className="text-[#D4AF37]">What</span>{" "}
            <span className="text-[#0F2A44]">We Support</span>
          </h2>

          <p className="mt-4 text-center text-[#1F2937] max-w-3xl mx-auto">
            Choose an area below to view full details, requirements, and next
            steps. Each service opens its own page.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="Company Registration & PACRA"
              text="Business name registration, company incorporation, share capital setup, and statutory documentation."
              href="/business/company-registration"
            />

            <ServiceCard
              title="Tax Registration & Compliance"
              text="ZRA tax registration, tax types, tax clearance certificates, and compliance guidance."
              href="/business/tax-registration"
            />

            <ServiceCard
              title="Licensing & Permits"
              text="Business permits, health permits, fire safety certificates, and operating licences."
              href="/business/licensing-compliance"
            />

            <ServiceCard
              title="Supplier & Statutory Registration"
              text="ZPPA supplier registration, NAPSA, NHIMA, Workers Compensation, and sector licences."
              href="/business/supplier-registration"
            />

            <ServiceCard
              title="Corporate Compliance Support"
              text="Ongoing compliance advisory to keep your business legally operational and tender-ready."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-[#D4AF37]">Ready</span>{" "}
            <span className="text-[#0F2A44]">to formalise your business?</span>
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] max-w-2xl mx-auto">
            Speak to our consultants and get your business registered, compliant,
            and ready to operate.
          </p>

          <div className="mt-10 flex justify-center">
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
          </div>
        </div>
      </section>
    </main>
  );
}

/* SERVICE CARD */
function ServiceCard({
  title,
  text,
  href,
}: {
  title: string;
  text: string;
  href?: string;
}) {
  const card = (
    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-lg font-extrabold text-[#D4AF37]">{title}</h3>
      <p className="mt-2 text-[#0F2A44] leading-relaxed">{text}</p>
      <p className="mt-4 text-sm font-semibold text-[#0F2A44] group-hover:text-[#D4AF37] transition">
        Explore →
      </p>
    </div>
  );

  return href ? <Link href={href}>{card}</Link> : card;
}