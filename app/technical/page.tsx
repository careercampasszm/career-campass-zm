import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Technical & Infrastructure Services | Career Compass ZM",
  description:
    "Professional CCTV installation, fire safety services, Starlink internet setup, and technical support for businesses and households across Zambia.",
};

export default function TechnicalPage() {
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
            <span className="text-[#D4AF37]">Technical</span>{" "}
            <span className="text-[#0F2A44]">& Infrastructure Services</span>
          </h1>

          <p className="mt-6 text-lg text-[#1F2937] leading-relaxed">
            Career Compass ZM delivers reliable, professionally executed
            technical solutions designed to improve safety, connectivity,
            and operational efficiency.
          </p>

          <p className="mt-4 text-[#374151] leading-relaxed">
            We support businesses, institutions, and households with
            compliant installations that meet safety standards, regulatory
            expectations, and real-world operational needs.
          </p>

          {/* ACTIONS */}
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
              href="/"
              className="inline-flex items-center justify-center rounded-full px-10 py-4 font-semibold
                         bg-[#0F2A44] text-white shadow-lg transition
                         hover:bg-[#0B2034] hover:shadow-xl hover:-translate-y-[1px]"
            >
              Back Home
            </Link>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative h-[340px] md:h-[420px] rounded-3xl overflow-hidden shadow-lg border border-gray-200">
          <Image
            src="/images/technical/technical-1.jpg"
            alt="Technical services including CCTV, fire safety and connectivity"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-18 md:py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          <span className="text-[#D4AF37]">Our</span>{" "}
          <span className="text-[#0F2A44]">Technical Services</span>
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="CCTV Installation"
            text="Professional design and installation of surveillance systems for offices, institutions, retail spaces, and residential properties."
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
            text="On-site technical assessments to recommend appropriate safety, surveillance, and connectivity solutions."
            href="/technical/site-assessments"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-18 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2A44]">
            Need reliable technical installation and support?
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] max-w-2xl mx-auto leading-relaxed">
            Speak with our team and receive practical, compliant technical
            solutions delivered with professionalism and care.
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

/* SERVICE CARD — STANDARD */
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
      <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg cursor-pointer">
        <h3 className="text-lg font-extrabold text-[#D4AF37]">{title}</h3>
        <p className="mt-3 text-[#0F2A44] leading-relaxed">{text}</p>

        <p className="mt-4 text-sm font-semibold text-[#0F2A44] group-hover:text-[#D4AF37] transition">
          View Service →
        </p>
      </div>
    </Link>
  );
}