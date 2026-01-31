import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tax Registration & Compliance | Career Compass ZM",
  description:
    "ZRA tax registration, tax type setup, tax clearance certificates, and compliance support for businesses in Zambia.",
};

export default function TaxRegistrationPage() {
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
            <span className="text-[#D4AF37]">Tax Registration</span>{" "}
            <span className="text-[#0F2A44]">&amp; Compliance</span>
          </h1>

          <p className="mt-6 text-lg text-[#1F2937] leading-relaxed">
            Career Compass ZM helps businesses register, structure, and remain
            compliant with Zambia Revenue Authority (ZRA) requirements.
          </p>

          <p className="mt-4 text-[#374151] leading-relaxed">
            We ensure your business is correctly registered for applicable tax
            types and supported with compliance guidance to avoid penalties,
            delays, or disqualification from tenders.
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
            src="/images/business/tax-registration.jpg"
            alt="ZRA tax registration and compliance services"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* WHAT WE HANDLE */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-18 md:py-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center">
            <span className="text-[#D4AF37]">What</span>{" "}
            <span className="text-[#0F2A44]">We Handle</span>
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "ZRA Tax Registration",
                text: "Initial registration of businesses with Zambia Revenue Authority.",
              },
              {
                title: "Tax Types Setup",
                text: "Registration for Income Tax, PAYE, VAT, Withholding Tax, and other applicable tax types.",
              },
              {
                title: "Tax Clearance Certificates",
                text: "Processing support and guidance for valid tax clearance certification.",
              },
              {
                title: "Compliance Advisory",
                text: "Support on filing requirements, deadlines, and compliance risks.",
              },
              {
                title: "Tender & Supplier Readiness",
                text: "Ensuring your tax compliance status meets procurement requirements.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-lg font-extrabold text-[#D4AF37]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[#0F2A44] leading-relaxed">{item.text}</p>

                <p className="mt-4 text-sm font-semibold text-[#0F2A44] group-hover:text-[#D4AF37] transition">
                  Included →
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-6xl mx-auto px-6 py-18 md:py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          <span className="text-[#D4AF37]">Tax</span>{" "}
          <span className="text-[#0F2A44]">Services Pricing</span>
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <PriceCard label="ZRA Tax Registration" price="K1,500" />
          <PriceCard label="Tax Clearance Certificate" price="K1,500" />
          <PriceCard label="Additional Tax Types" price="K750 each" />
          <PriceCard label="Compliance Advisory" price="On Request" />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-18 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2A44]">
            Need help with tax registration or compliance?
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] max-w-2xl mx-auto">
            Speak to our consultants and ensure your business remains compliant,
            credible, and tender-ready.
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
            Career Compass ZM — Compliance Made Simple.
          </p>
        </div>
      </section>
    </main>
  );
}

function PriceCard({ label, price }: { label: string; price: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold text-[#0F2A44]">{label}</p>
      <p className="mt-2 text-2xl font-extrabold text-[#D4AF37]">{price}</p>
    </div>
  );
}