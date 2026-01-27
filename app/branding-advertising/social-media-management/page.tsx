import Image from "next/image";

export const metadata = {
  title: "Social Media Management | Career Compass ZM",
  description:
    "Professional social media management services including content creation, posting, audience engagement, and brand growth for businesses in Zambia.",
};

export default function SocialMediaManagementPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid gap-14 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
            Social Media Management
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            For brands that want consistency, growth, and authority.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Career Compass ZM manages your social media professionally —
            from content planning and posting to engagement and brand
            storytelling — so your business stays visible, credible,
            and competitive.
          </p>
        </div>

        <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/branding/social-media-management.jpg"
            alt="Social media management services"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* WHAT WE HANDLE */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold text-brand-primary mb-12 text-center">
            What We Handle
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-gray-700">

            <Feature
              title="Content Planning"
              text="Strategic monthly content calendars aligned to your brand goals and audience."
            />

            <Feature
              title="Branded Graphics & Captions"
              text="Professionally designed posts with consistent messaging and visual identity."
            />

            <Feature
              title="Posting & Scheduling"
              text="Reliable posting schedules across agreed platforms for steady visibility."
            />

            <Feature
              title="Engagement Management"
              text="Comment moderation, inbox responses, and audience interaction."
            />

            <Feature
              title="Brand Positioning & Storytelling"
              text="Content that builds trust, authority, and long-term brand recall."
            />

          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-brand-primary mb-14 text-center">
          Social Media Management Packages
        </h2>

        <div className="grid gap-10 md:grid-cols-3">

          {/* STARTER */}
          <Package
            title="Starter Presence Package"
            price="K1,500 / month"
            subtitle="Ideal for individuals & small businesses"
            items={[
              "2–3 posts per week",
              "Branded graphics & captions",
              "Basic engagement support",
              "Page consistency & visibility",
            ]}
          />

          {/* GROWTH */}
          <Package
            title="Growth & Engagement Package ⭐"
            price="K2,200 / month"
            subtitle="Most scalable option for SMEs"
            items={[
              "3–4 posts per week",
              "Graphics + reels / short videos",
              "Comment & inbox engagement",
              "Content planning & positioning",
            ]}
          />

          {/* SALES */}
          <Package
            title="Sales & Brand Authority Package"
            price="K3,500 / month"
            subtitle="Best for revenue-focused brands"
            items={[
              "5–6 posts per week",
              "Campaigns, offers & storytelling",
              "Lead-focused content strategy",
              "Optional cross-promotion within Career Compass ZM network",
            ]}
          />

        </div>

        <p className="mt-12 text-center text-gray-600 max-w-3xl mx-auto">
          💡 Many clients start with short-term visibility packages or basic
          management, then upgrade to full social media management for
          sustained growth, credibility, and conversions.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
            Ready to grow your brand online?
          </h2>

          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Let us manage your social media while you focus on running
            and growing your business.
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

          <p className="mt-6 text-sm text-gray-500">
            Career Compass ZM — Visibility. Trust. Sales.
          </p>
        </div>
      </section>

    </main>
  );
}

/* COMPONENTS */

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-white border rounded-xl p-6">
      <h3 className="font-semibold text-brand-primary mb-2">{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Package({
  title,
  price,
  subtitle,
  items,
}: {
  title: string;
  price: string;
  subtitle: string;
  items: string[];
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <h3 className="text-xl font-semibold text-brand-primary">{title}</h3>
      <p className="mt-1 text-sm text-gray-600">{subtitle}</p>

      <p className="mt-4 text-2xl font-bold text-gray-900">{price}</p>

      <ul className="mt-6 space-y-2 text-gray-700">
        {items.map((item) => (
          <li key={item}>✔ {item}</li>
        ))}
      </ul>
    </div>
  );
}