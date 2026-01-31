import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Branding & Advertising | Career Compass ZM",
  description:
    "Professional branding, advertising, social media management, corporate regalia, and visibility solutions for businesses and organisations in Zambia.",
};

export default function BrandingAdvertisingPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-24 grid gap-14 md:grid-cols-2 items-center">
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#0F2A44]">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
            Branding & Visibility
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-[#D4AF37]">Branding</span>{" "}
            <span className="text-[#0F2A44]">& Advertising</span>
          </h1>

          <p className="mt-6 text-lg text-[#1F2937] leading-relaxed">
            Career Compass ZM helps organisations build strong, visible, and
            professional brands that attract customers, partners, and real
            opportunities.
          </p>

          <p className="mt-4 text-[#0F2A44] leading-relaxed">
            From brand identity and advertising campaigns to social media
            management and corporate regalia, we position your business for
            recognition and growth.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/260972441871"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 font-semibold
                         bg-[#25D366] text-white shadow-md transition hover:bg-[#20b954] hover:shadow-lg"
            >
              Chat on WhatsApp
            </a>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 font-semibold
                         bg-white text-[#0F2A44] border border-gray-200
                         shadow-sm transition hover:shadow-md hover:border-[#D4AF37]/50"
            >
              Back to Home
            </Link>
          </div>
        </div>

        <div className="relative h-[340px] md:h-[420px] rounded-3xl overflow-hidden shadow-lg border border-gray-200">
          <Image
            src="/images/branding/branding-hero.jpg"
            alt="Branding and advertising services"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#D4AF37]">
            What We Offer
          </h2>

          <p className="mt-3 text-center text-[#0F2A44] max-w-3xl mx-auto">
            Choose an area below to view service details, deliverables, and how
            to get started.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="Social Media Management"
              text="Content planning, posting, engagement, and growth strategies for business visibility."
              href="/branding-advertising/social-media-management"
            />

            <ServiceCard
              title="Advertising Campaigns"
              text="Digital and print advertising designed to drive awareness, leads, and sales."
              href="/branding-advertising/advertising-campaigns"
            />

            <ServiceCard
              title="Corporate Branding"
              text="Professional branding including logos, brand identity, and consistent visual systems."
              href="/branding-advertising/corporate-branding"
            />

            <ServiceCard
              title="Corporate Attire & Regalia"
              text="Supply and branding of uniforms, safety wear, and corporate regalia."
              href="/branding-advertising/corporate-regalia"
            />

            <ServiceCard
              title="Graphic Design"
              text="Design of flyers, posters, brochures, banners, and marketing materials."
              href="/branding-advertising/graphic-design"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-[#D4AF37]">Ready</span>{" "}
            <span className="text-[#0F2A44]">to strengthen your brand?</span>
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] max-w-2xl mx-auto">
            Let us help you stand out, communicate clearly, and attract the right
            audience — with branding that looks credible and marketing that gets
            attention.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="https://wa.me/260972441871"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-12 py-4 font-semibold
                         bg-[#25D366] text-white shadow-lg transition hover:bg-[#20b954] hover:shadow-xl"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* PREMIUM SERVICE CARD */
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
    <Link
      href={href}
      className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm
                 hover:shadow-lg hover:-translate-y-1 transition"
    >
      <h3 className="text-lg font-extrabold text-[#D4AF37]">{title}</h3>
      <p className="mt-2 text-[#0F2A44] leading-relaxed">{text}</p>
      <p className="mt-4 text-sm font-semibold text-[#0F2A44] group-hover:text-[#D4AF37] transition">
        Explore →
      </p>
    </Link>
  );
}