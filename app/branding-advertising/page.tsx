import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Branding & Advertising | Career Compass ZM",
  description:
    "Professional branding, advertising, social media management, corporate regalia, and visibility solutions for businesses and organisations in Zambia.",
};

export default function BrandingAdvertisingPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid gap-14 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
            Branding & Advertising
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Career Compass ZM helps organisations build strong, visible,
            and professional brands that attract customers, partners,
            and opportunities.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            From brand identity and advertising campaigns to social media
            management and corporate regalia, we position your business
            for recognition and growth.
          </p>
        </div>

        <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/branding/branding-hero.jpg"
            alt="Branding and advertising services"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 pb-28">
        <h2 className="text-3xl font-bold text-brand-primary mb-14 text-center">
          What We Offer
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

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
            text="Professional branding including logos, brand identity, and visual consistency."
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
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
            Ready to strengthen your brand?
          </h2>

          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Let us help you stand out, communicate clearly,
            and attract the right audience.
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