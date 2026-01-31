import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Corporate Documentation | Career Compass ZM",
  description:
    "Professional corporate documentation services including company profiles, business proposals, tender documentation, concept notes, corporate reports, and pitch decks.",
};

export default function CorporateDocumentationPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-24 grid gap-14 md:grid-cols-2 items-center">
        {/* TEXT */}
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#0F2A44]">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
            Corporate Documentation
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-[#D4AF37]">Corporate</span>{" "}
            <span className="text-[#0F2A44]">Documentation</span>
          </h1>

          <p className="mt-6 text-lg text-[#1F2937] leading-relaxed">
            Career Compass ZM develops high-impact corporate documents that help
            organisations communicate professionally, win opportunities, and
            position themselves competitively.
          </p>

          <p className="mt-4 text-[#374151] leading-relaxed">
            From company profiles and proposals to tender submissions and pitch
            decks, we translate ideas, strategy, and capability into clear,
            compelling documents.
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
            src="/images/corporate-documentation/corporate-docs.jpg"
            alt="Corporate documentation services"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 pb-18 md:pb-28">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          <span className="text-[#D4AF37]">What</span>{" "}
          <span className="text-[#0F2A44]">We Develop</span>
        </h2>

        <p className="mt-4 text-center text-[#374151] max-w-3xl mx-auto">
          Executive-ready documents built for credibility, persuasion, and
          decision-makers — with clean structure and strong storytelling.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="Company Profiles"
            text="Professional company profiles that clearly communicate your identity, capacity, and value."
            href="/corporate-documentation/company-profiles"
          />

          <ServiceCard
            title="Business Proposals"
            text="Structured, persuasive proposals designed to win clients, partnerships, and funding."
            href="/corporate-documentation/business-proposals"
          />

          <ServiceCard
            title="Tender Documentation"
            text="Compliant and well-structured tender responses aligned to evaluation criteria."
            href="/corporate-documentation/tender-documentation"
          />

          <ServiceCard
            title="Concept Notes"
            text="Clear, concise concept notes for projects, donors, NGOs, and corporate initiatives."
            href="/corporate-documentation/concept-notes"
          />

          <ServiceCard
            title="Corporate Reports"
            text="Professional reports including annual reports, project reports, and impact reports."
            href="/corporate-documentation/corporate-reports"
          />

          <ServiceCard
            title="Pitch Decks & Presentations"
            text="Investor-ready pitch decks and executive presentations with strong storytelling."
            href="/corporate-documentation/pitch-decks-presentations"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-18 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2A44]">
            Need professional corporate documents?
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] max-w-2xl mx-auto">
            Let us help you communicate with clarity, credibility, and impact.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
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

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full px-12 py-4 font-semibold
                         bg-[#0F2A44] text-white shadow-lg transition
                         hover:bg-[#0B2034] hover:shadow-xl hover:-translate-y-[1px]"
            >
              Back Home
            </Link>
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
    <Link href={href} className="group">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <h3 className="text-xl font-extrabold text-[#0F2A44] group-hover:text-[#D4AF37] transition">
          {title}
        </h3>

        <p className="mt-3 text-[#374151] leading-relaxed">{text}</p>

        <p className="mt-4 text-sm font-semibold text-[#0F2A44] group-hover:text-[#D4AF37] transition">
          View service →
        </p>
      </div>
    </Link>
  );
}