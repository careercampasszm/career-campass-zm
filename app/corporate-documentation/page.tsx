import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Corporate Documentation | Career Compass ZM",
  description:
    "Professional corporate documentation services including company profiles, business proposals, tender documentation, concept notes, corporate reports, and pitch decks.",
};

export default function CorporateDocumentationPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid gap-14 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
            Corporate Documentation
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Career Compass ZM develops high-impact corporate documents that help
            organisations communicate professionally, win opportunities, and
            position themselves competitively.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            From company profiles and proposals to tender submissions and pitch
            decks, we translate ideas, strategy, and capability into clear,
            compelling documents.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/corporate-documentation/corporate-docs.jpg"
            alt="Corporate documentation services"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 pb-28">
        <h2 className="text-3xl font-bold text-brand-primary mb-14 text-center">
          What We Develop
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

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
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
            Need professional corporate documents?
          </h2>

          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Let us help you communicate with clarity, credibility, and impact.
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
        <h3 className="text-xl font-semibold text-brand-primary">
          {title}
        </h3>
        <p className="mt-3 text-gray-600 leading-relaxed">
          {text}
        </p>
      </div>
    </Link>
  );
}