import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Supplier & Statutory Registration | Career Compass ZM",
  description:
    "ZPPA supplier registration, NAPSA, NHIMA, Workers Compensation and statutory registrations for compliant, tender-ready businesses in Zambia.",
};

export default function SupplierRegistrationPage() {
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
            <span className="text-[#D4AF37]">Supplier</span>{" "}
            <span className="text-[#0F2A44]">&amp; Statutory Registration</span>
          </h1>

          <p className="mt-6 text-lg text-[#1F2937] leading-relaxed">
            Winning tenders and supplying to organisations requires more than
            registration — it requires full statutory compliance.
          </p>

          <p className="mt-4 text-[#374151] leading-relaxed">
            Career Compass ZM prepares businesses to meet supplier requirements
            for government, NGOs, corporates, and regulated institutions.
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
            src="/images/business/supplier-registration.jpg"
            alt="Supplier and statutory registration services"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* WHY SUPPLIER REGISTRATION */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-18 md:py-20">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-[#D4AF37]">Why</span>{" "}
            <span className="text-[#0F2A44]">Supplier Registration Matters</span>
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] leading-relaxed">
            Many organisations only engage suppliers who are registered, insured,
            and compliant with statutory bodies.
          </p>

          <p className="mt-4 text-[#374151] leading-relaxed">
            Without these registrations, businesses are automatically disqualified
            from tenders, contracts, and procurement processes.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-6 py-18 md:py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          <span className="text-[#D4AF37]">Registrations</span>{" "}
          <span className="text-[#0F2A44]">We Handle</span>
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <RegistrationCard
            title="ZPPA Supplier Registration"
            text="Registration with Zambia Public Procurement Authority for government and public sector tenders."
            price="K1,300"
          />
          <RegistrationCard
            title="NAPSA Registration"
            text="Mandatory social security registration for employers."
            price="K1,000"
          />
          <RegistrationCard
            title="NHIMA Registration"
            text="National Health Insurance registration for employee compliance."
            price="K1,000"
          />
          <RegistrationCard
            title="Workers Compensation"
            text="Insurance registration protecting employees against workplace risks."
            price="K1,500"
          />
        </div>
      </section>

      {/* WHO NEEDS THIS */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-18 md:py-20">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-[#D4AF37]">Who</span>{" "}
            <span className="text-[#0F2A44]">Needs Supplier Registration?</span>
          </h2>

          <p className="mt-4 text-[#374151] leading-relaxed">
            Businesses intending to supply goods or services to government
            institutions, NGOs, corporates, mines, hospitals, schools, and large
            organisations require supplier and statutory registration.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-18 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2A44]">
            Ready to become tender-ready?
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] max-w-2xl mx-auto">
            We prepare your business for supplier approval and procurement
            success.
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
            Career Compass ZM — Registered. Compliant. Tender-Ready.
          </p>
        </div>
      </section>
    </main>
  );
}

function RegistrationCard({
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