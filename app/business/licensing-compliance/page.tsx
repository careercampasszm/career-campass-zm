import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Licensing & Permits | Career Compass ZM",
  description:
    "Business permits, health permits, fire safety certificates, and operating licences for compliant businesses in Zambia.",
};

export default function LicensingCompliancePage() {
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
            <span className="text-[#D4AF37]">Licensing</span>{" "}
            <span className="text-[#0F2A44]">&amp; Operating Permits</span>
          </h1>

          <p className="mt-6 text-lg text-[#1F2937] leading-relaxed">
            Beyond registration, businesses must obtain the correct licences and
            permits to operate legally in Zambia.
          </p>

          <p className="mt-4 text-[#374151] leading-relaxed">
            Career Compass ZM assists businesses in securing mandatory operating
            permits and statutory approvals required by local authorities and
            regulators.
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
            src="/images/business/licensing-permits.jpg"
            alt="Business licensing and permits in Zambia"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* WHY LICENSING */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-18 md:py-20">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-[#D4AF37]">Why</span>{" "}
            <span className="text-[#0F2A44]">Licensing Matters</span>
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] leading-relaxed">
            Operating without the required licences exposes businesses to
            closures, fines, tender disqualification, and legal penalties.
          </p>

          <p className="mt-4 text-[#374151] leading-relaxed">
            Proper licensing confirms that your premises, operations, and
            services meet safety, health, and regulatory standards.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-6 py-18 md:py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          <span className="text-[#D4AF37]">Licences</span>{" "}
          <span className="text-[#0F2A44]">&amp; Permits We Handle</span>
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <PermitCard
            title="Business Permit"
            text="Mandatory local authority permit for legally operating businesses."
            price="K2,750"
          />
          <PermitCard
            title="Fire Safety Certificate"
            text="Certification confirming compliance with fire safety standards."
            price="K3,250"
          />
          <PermitCard
            title="Health Permit"
            text="Required for premises involved in food handling, health, or public services."
            price="K3,250"
          />
          <PermitCard
            title="Food Handlers Certificate"
            text="Certification for staff involved in food preparation and handling."
            price="K2,000"
          />
        </div>
      </section>

      {/* WHO NEEDS THIS */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-18 md:py-20">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-[#D4AF37]">Who</span>{" "}
            <span className="text-[#0F2A44]">Needs These Permits?</span>
          </h2>

          <p className="mt-4 text-[#374151] leading-relaxed">
            These licences are required for shops, restaurants, clinics,
            warehouses, factories, offices, schools, service providers, and
            regulated premises.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-18 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2A44]">
            Need help securing licences or permits?
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] max-w-2xl mx-auto">
            Let us handle the approvals while you focus on running your business.
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
            Career Compass ZM — Licensed. Approved. Operational.
          </p>
        </div>
      </section>
    </main>
  );
}

function PermitCard({
  title,
  text,
  price,
}: {
  title: string;
  text: string;
  price: string;
}) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-lg font-extrabold text-[#D4AF37]">{title}</h3>
      <p className="mt-2 text-[#0F2A44] leading-relaxed">{text}</p>

      <div className="mt-5 inline-flex items-baseline gap-2">
        <span className="text-sm font-semibold text-[#0F2A44]">Fee:</span>
        <span className="text-2xl font-extrabold text-[#0F2A44]">{price}</span>
      </div>

      <p className="mt-4 text-sm font-semibold text-[#0F2A44] group-hover:text-[#D4AF37] transition">
        Included →
      </p>
    </div>
  );
}