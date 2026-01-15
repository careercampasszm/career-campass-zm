import Image from "next/image";

export default function BusinessPage() {
  return (
    <main className="bg-brand-background">

      {/* INTRO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-2 items-center">

        {/* TEXT */}
        <div>
          <h1 className="text-4xl font-bold text-brand-primary">
            Business & Compliance Services
          </h1>

          <p className="mt-6 text-lg text-gray-700">
            Career Compass ZM supports businesses, SMEs, and organisations with
            registration, compliance, documentation, and operational readiness —
            ensuring you are legal, professional, and tender-ready.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/business/business-1.jpg"
            alt="Business registration and compliance consulting"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <ServiceCard
            title="Business Registration (PACRA)"
            text="Business names, limited companies, NGOs, dormant company reactivation, and certificate renewals."
          />

          <ServiceCard
            title="ZRA & Tax Services"
            text="Tax registration, returns, VAT, PAYE, turnover tax, and Smart Invoice compliance."
          />

          <ServiceCard
            title="Statutory Compliance"
            text="NAPSA, NHIMA, Workers Compensation, ZPPA, EIZ, NCC and sector registrations."
          />

          <ServiceCard
            title="Company Profiles & Proposals"
            text="Professional company profiles, investor decks, and business proposals."
          />

          <ServiceCard
            title="Tender Support"
            text="Structuring and packaging tender documents for public and private procurement."
          />

          <ServiceCard
            title="Operational Readiness"
            text="Preparing your business to meet legal, operational, and corporate standards."
          />

        </div>
      </section>

    </main>
  );
}

/* SERVICE CARD */
function ServiceCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-brand-primary">{title}</h3>
      <p className="mt-3 text-gray-600">{text}</p>
    </div>
  );
}
