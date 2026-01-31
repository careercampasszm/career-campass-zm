import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Company Registration & PACRA | Career Compass ZM",
  description:
    "Professional company registration, PACRA compliance, tax registration, licensing and statutory setup services in Zambia.",
};

export default function CompanyRegistrationPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-24 grid gap-14 md:grid-cols-2 items-center">
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#0F2A44]">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
            Business &amp; Compliance
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-[#D4AF37]">Company Registration</span>{" "}
            <span className="text-[#0F2A44]">&amp; PACRA Compliance</span>
          </h1>

          <p className="mt-6 text-lg text-[#1F2937] leading-relaxed">
            Career Compass ZM provides end-to-end company registration and
            statutory compliance services to help businesses operate legally,
            professionally, and confidently in Zambia.
          </p>

          <p className="mt-4 text-[#374151] leading-relaxed">
            Whether you are starting a new business, preparing for tenders, or
            formalising operations, we handle the regulatory process so you can
            focus on growth.
          </p>

          {/* ACTIONS: WhatsApp + Back to Business & Compliance */}
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
              href="/business"
              className="inline-flex items-center justify-center rounded-full px-10 py-4 font-semibold
                         bg-[#0F2A44] text-white shadow-lg transition
                         hover:bg-[#0B2034] hover:shadow-xl hover:-translate-y-[1px]"
            >
              Back to Business &amp; Compliance
            </Link>
          </div>
        </div>

        <div className="relative h-[340px] md:h-[420px] rounded-3xl overflow-hidden shadow-lg border border-gray-200">
          <Image
            src="/images/business/business-registration.jpg"
            alt="Company registration and PACRA compliance services"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* WHAT IS PACRA */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-18 md:py-20">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-[#D4AF37]">What</span>{" "}
            <span className="text-[#0F2A44]">is PACRA?</span>
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] leading-relaxed">
            The Patents and Companies Registration Agency (PACRA) is the
            government body responsible for business name registration, company
            incorporation, and statutory corporate records in Zambia.
          </p>

          <p className="mt-4 text-[#374151] leading-relaxed">
            PACRA registration is the foundation of every legally recognised
            business and is required before tax registration, licensing,
            supplier registration, or tender participation.
          </p>
        </div>
      </section>

      {/* WHAT WE HANDLE */}
      <section className="max-w-6xl mx-auto px-6 py-18 md:py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          <span className="text-[#D4AF37]">What</span>{" "}
          <span className="text-[#0F2A44]">We Handle</span>
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <BenefitCard
            title="Company Incorporation"
            text="Registration of limited companies including shareholding, directors, and statutory records."
          />
          <BenefitCard
            title="Business Name Registration"
            text="Formal registration of trading names for sole traders and SMEs."
          />
          <BenefitCard
            title="Tax Registration (ZRA)"
            text="Setup of income tax, VAT, PAYE, and other applicable tax types."
          />
          <BenefitCard
            title="Statutory Bodies Registration"
            text="NAPSA, NHIMA, Workers Compensation, and compliance alignment."
          />
          <BenefitCard
            title="Tender & Supplier Readiness"
            text="ZPPA supplier registration and procurement documentation."
          />
          <BenefitCard
            title="Compliance Guidance"
            text="Structured advice to keep your business legally operational and tender-ready."
          />
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-18 md:py-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center">
            <span className="text-[#D4AF37]">Registration</span>{" "}
            <span className="text-[#0F2A44]">Packages</span>
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <PackageCard
              title="Full Company Setup Package"
              subtitle="Ideal for SMEs, suppliers, and businesses requiring full statutory compliance."
              price="K4,000"
              items={[
                "Company Incorporation Certificate",
                "Share Capital Setup",
                "ZRA Tax Registration",
                "Tax Clearance Certificate",
                "ZPPA Supplier Registration",
                "NAPSA & NHIMA",
                "Additional Tax Types",
              ]}
            />

            <PackageCard
              title="Company Registration + Basic Tax"
              subtitle="Suitable for startups and early-stage businesses."
              price="K2,750"
              items={[
                "Company Incorporation",
                "Share Capital Setup",
                "Articles & Form 3",
                "ZRA Tax Registration",
                "Tax Clearance",
              ]}
            />
          </div>

          <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 text-center">
            <p className="text-[#0F2A44] leading-relaxed">
              Need a tailored setup (e.g. industry licensing, supplier readiness,
              or additional registrations)? We provide custom scopes on request.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-18 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          <span className="text-[#D4AF37]">Ready</span>{" "}
          <span className="text-[#0F2A44]">to formalise your business?</span>
        </h2>

        <p className="mt-4 text-lg text-[#1F2937]">
          Speak to our consultants and get your business legally registered,
          compliant, and tender-ready.
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

        <p className="mt-6 text-sm text-gray-500">
          Career Compass ZM — Compliance. Credibility. Growth.
        </p>
      </section>
    </main>
  );
}

function BenefitCard({ title, text }: { title: string; text: string }) {
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

function PackageCard({
  title,
  subtitle,
  price,
  items,
}: {
  title: string;
  subtitle: string;
  price: string;
  items: string[];
}) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-xl md:text-2xl font-extrabold text-[#D4AF37]">
        {title}
      </h3>

      <p className="mt-2 text-sm md:text-base text-[#374151]">{subtitle}</p>

      <p className="mt-6 text-3xl font-extrabold text-[#0F2A44]">{price}</p>

      <ul className="mt-6 space-y-2 text-[#1F2937]">
        {items.map((item) => (
          <li key={item} className="leading-relaxed">
            <span className="font-semibold text-[#D4AF37]">✔</span>{" "}
            <span className="text-[#0F2A44]">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}