import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Technical Services | CCTV, Fire Safety & Starlink Installation",
  description:
    "Career Compass ZM provides professional CCTV installation, fire safety services, Starlink internet setup, and technical support for businesses and households across Zambia.",
};

export default function TechnicalPage() {
  return (
    <main className="bg-white">
      {/* HERO / INTRO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid gap-14 md:grid-cols-2 items-center">
        {/* TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
            Technical & Infrastructure Services
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Career Compass ZM delivers reliable, well-executed technical solutions
            designed to improve safety, connectivity, and operational efficiency.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            We support businesses, institutions, and households with professionally
            installed systems that meet safety standards, regulatory expectations,
            and real-world operational needs.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative h-[340px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/technical/technical-1.jpg"
            alt="Technical installation services including CCTV and fire safety"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 pb-28">
        <h2 className="text-3xl font-bold text-brand-primary mb-14 text-center">
          Our Technical Services
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="CCTV Installation"
            text="Professional design and installation of surveillance systems for offices, retail spaces, institutions, and residential properties."
            href="/technical/cctv-installation"
          />

          <ServiceCard
            title="Fire Safety & Extinguishers"
            text="Supply, installation, inspection, and servicing of fire extinguishers and essential workplace safety equipment."
            href="/technical/fire-safety-extinguishers"
          />

          <ServiceCard
            title="Starlink Internet Installation"
            text="Expert Starlink setup delivering stable, high-speed internet in urban, peri-urban, and remote locations."
            href="/technical/starlink-installation"
          />

          <ServiceCard
            title="Safety Compliance Support"
            text="Guidance on fire safety requirements, inspections, and compliance with workplace safety standards."
            href="/technical/safety-compliance"
          />

          <ServiceCard
            title="Maintenance & Technical Support"
            text="Ongoing system servicing, troubleshooting, and scheduled maintenance to ensure long-term reliability."
            href="/technical/maintenance-support"
          />

          <ServiceCard
            title="Site Assessments"
            text="On-site assessments to recommend appropriate technical, safety, and connectivity solutions based on your environment."
            href="/technical/site-assessments"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
            Need reliable technical installation and support?
          </h2>

          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Speak with our team and receive practical, compliant technical solutions
            delivered with professionalism and care.
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

/* SERVICE CARD */
function ServiceCard({
  title,
  text,
  href,
}: {
  title: string;
  text: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition cursor-pointer">
        <h3 className="text-xl font-semibold text-brand-primary">{title}</h3>
        <p className="mt-3 text-gray-600 leading-relaxed">{text}</p>
      </div>
    </Link>
  );
}