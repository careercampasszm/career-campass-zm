import Image from "next/image";

export default function TechnicalPage() {
  return (
    <main className="bg-brand-background">

      {/* INTRO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-2 items-center">

        {/* TEXT */}
        <div>
          <h1 className="text-4xl font-bold text-brand-primary">
            Technical & Infrastructure Services
          </h1>

          <p className="mt-6 text-lg text-gray-700">
            Career Compass ZM provides reliable technical and infrastructure
            services designed to protect your assets, ensure compliance, and
            keep your operations running smoothly across Zambia.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/technical/technical-1.jpg"
            alt="CCTV, fire safety and Starlink installation services"
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
            title="CCTV Installation & Diagnostics"
            text="Professional CCTV installation, diagnostics, upgrades, and secure remote access setup."
          />

          <ServiceCard
            title="Fire Extinguisher Supply & Servicing"
            text="Supply, installation, refilling, and scheduled servicing of fire extinguishers."
          />

          <ServiceCard
            title="Fire Safety Compliance"
            text="Fire safety certification support for offices, shops, schools, and regulated premises."
          />

          <ServiceCard
            title="Starlink Internet Installation"
            text="Professional installation of Starlink Mini and Standard kits anywhere in Zambia."
          />

          <ServiceCard
            title="System Upgrades & Maintenance"
            text="Technical audits, system optimisation, and ongoing maintenance support."
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
