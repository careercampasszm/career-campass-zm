import Link from "next/link";
import {
  Briefcase,
  Building2,
  FileText,
  Megaphone,
  ShieldCheck,
  Tractor,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="relative">
      {/* ================= HERO (FULL-BLEED, IMAGE-LED) ================= */}
      <section className="relative h-[78vh] md:h-[88vh] overflow-hidden">
        {/* Full-bleed background image (leave image alone) */}
        <img
          src="/images/hero/hero-bg.jpg"
          alt="Career Compass ZM — professionals across careers, compliance, technical services, and agriculture"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "center 35%" }}
        />

        {/* Subtle readability overlay (charcoal tint, NOT heavy) */}
        <div className="absolute inset-0 bg-[#0B1220]/20" />

        {/* Bottom-right single button */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6">
          <div className="absolute bottom-8 right-6 md:bottom-10 md:right-10">
            <a
              href="#positioning"
              className="inline-flex items-center justify-center rounded-full px-9 py-4 font-semibold
                         bg-[#0F2A44]/85 text-white backdrop-blur-sm border border-white/25
                         shadow-lg transition hover:bg-[#0F2A44] hover:shadow-xl"
            >
              Explore Services <span className="ml-2 text-[#D4AF37]">↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= POSITIONING (HEADINGS GOLD, BODY NAVY/CHARCOAL) ================= */}
      <section id="positioning" className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          {/* Headline: keep wording, give it life (Gold + Navy) */}
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-center">
            <span className="text-[#D4AF37]">Strategic Career</span>{" "}
            <span className="text-[#0F2A44]">&amp; Business Solutions in Zambia</span>
          </h1>

          {/* Supporting: navy/charcoal, not black */}
          <p className="mt-5 text-center text-[#1F2937] max-w-3xl mx-auto leading-relaxed">
            <span className="text-[#0F2A44] font-semibold">Career Compass ZM</span>{" "}
            helps professionals and organisations achieve compliance, credibility,
            visibility, and sustainable growth — through expert documentation,
            branding, technical services, and agriculture consultancy.
          </p>

          {/* subtle divider for premium spacing */}
          <div className="mt-10 mx-auto h-px w-24 bg-[#D4AF37]/40" />
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="bg-white">
        <div className="max-w-7xl mx-auto px-6 pb-20">
          {/* Gold heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#D4AF37]">
            Our Core Services
          </h2>

          {/* Navy/charcoal subtext */}
          <p className="mt-4 text-center text-[#0F2A44] max-w-3xl mx-auto">
            Choose a service area to learn more. Each category opens a full landing
            page with details, pricing, and next steps.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              href="/careers"
              icon={<Briefcase />}
              title="Careers"
              text="ATS CVs, interview coaching, profiling, and recruitment support."
            />

            <ServiceCard
              href="/business"
              icon={<Building2 />}
              title="Business & Compliance"
              text="PACRA, ZRA, Smart Invoice, and statutory compliance services."
            />

            <ServiceCard
              href="/corporate-documentation"
              icon={<FileText />}
              title="Corporate Documentation"
              text="Company profiles, proposals, tender docs, concept notes, reports."
            />

            <ServiceCard
              href="/branding-advertising"
              icon={<Megaphone />}
              title="Branding & Advertising"
              text="Visibility campaigns, social media management, and design."
            />

            <ServiceCard
              href="/technical"
              icon={<ShieldCheck />}
              title="Technical Services"
              text="CCTV installation, fire safety services, and Starlink setup."
            />

            <ServiceCard
              href="/agriculture"
              icon={<Tractor />}
              title="Agriculture Consultancy"
              text="Irrigation setup, best practice farming, and farm project management."
            />
          </div>
        </div>
      </section>

      {/* ================= CTA (STRONGER, SCOPE-ACCURATE) ================= */}
      <section className="bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="rounded-3xl bg-white border border-gray-200 p-10 md:p-14 text-center shadow-sm">
            <h3 className="text-2xl md:text-3xl font-extrabold">
              <span className="text-[#D4AF37]">Get positioned</span>{" "}
              <span className="text-[#0F2A44]">for opportunity, compliance, and growth.</span>
            </h3>

            <p className="mt-4 text-[#1F2937] max-w-3xl mx-auto leading-relaxed">
              We support professionals with career documents and interview readiness,
              and help organisations with business registration, statutory compliance,
              corporate documentation, branding, and technical solutions — so your
              work is credible, visible, and ready for real opportunities.
            </p>

            <div className="mt-8">
              <a
                href="https://wa.me/260972441871"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full px-10 py-4 font-semibold shadow-lg transition
                           bg-[#D4AF37] text-[#0F2A44] hover:brightness-95 hover:shadow-xl"
              >
                Speak to a Consultant
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({
  icon,
  title,
  text,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm
                 hover:shadow-xl hover:-translate-y-1 transition"
    >
      <div className="mb-4 text-[#0F2A44] group-hover:text-[#D4AF37] transition">
        {icon}
      </div>

      {/* Gold title, navy/charcoal body */}
      <h3 className="text-xl font-extrabold text-[#D4AF37]">{title}</h3>

      <p className="mt-3 text-[#0F2A44] leading-relaxed">{text}</p>

      <p className="mt-4 text-sm font-semibold text-[#0F2A44] group-hover:text-[#D4AF37] transition">
        Explore →
      </p>
    </Link>
  );
}