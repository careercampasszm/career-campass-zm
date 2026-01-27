import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Business & Compliance Services | Career Compass ZM",
  description:
    "Career Compass ZM provides business registration, PACRA compliance, licensing, tax registration, and corporate support services in Zambia.",
};

export default function BusinessPage() {
  return (
    <main className="bg-white">

      {/* HERO / INTRO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid gap-14 md:grid-cols-2 items-center">

        {/* TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
            Business & Compliance Services
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Career Compass ZM supports entrepreneurs, SMEs, and growing
            organisations with structured business registration, statutory
            compliance, and operational readiness.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            From incorporation to licensing and regulatory compliance, we
            ensure your business is legally established, professional, and
            ready to operate or bid for opportunities.
          </p>
        </div>

        {/* IMAGE — UPDATED */}
        <div className="relative h-[340px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/business/business-compliance.jpg"
            alt="Business and regulatory compliance services in Zambia"
            fill
            className="object-cover"
            priority
          />
        </div>

      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 pb-28">
        <h2 className="text-3xl font-bold text-brand-primary mb-14 text-center">
          What We Support
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

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
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
            Ready to formalise your business?
          </h2>

          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Speak to our consultants and get your business registered,
            compliant, and ready to operate.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="https://wa.me/260972441871"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center
                bg-[#25D366] text-white
                px-12 py-4
                rounded-full
                font-semibold
                shadow-lg
                hover:bg-[#20b954]
                hover:shadow-xl
                transition
              "
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
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition cursor-pointer">
      <h3 className="text-xl font-semibold text-brand-primary">
        {title}
      </h3>
      <p className="mt-3 text-gray-600 leading-relaxed">
        {text}
      </p>
    </div>
  );

  return href ? <Link href={href}>{card}</Link> : card;
}