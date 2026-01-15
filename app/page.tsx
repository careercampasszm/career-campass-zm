import Image from "next/image";
import {
  Briefcase,
  Building2,
  FileText,
  Megaphone,
  ShieldCheck,
} from "lucide-react";

export default function Home() {
  return (
    <main className="bg-brand-background">
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero.jpg"
            alt="Career Compass ZM consulting"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary">
            Strategic Career & Business Solutions
          </h1>

          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            Career Compass ZM helps professionals and businesses achieve
            compliance, visibility, and sustainable growth.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center text-brand-primary">
          Our Core Services
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={<Briefcase size={32} />}
            title="Careers"
            text="ATS CVs, interview coaching, profiling, recruitment support."
          />

          <ServiceCard
            icon={<Building2 size={32} />}
            title="Business & Compliance"
            text="PACRA, ZRA, Smart Invoice, statutory compliance."
          />

          <ServiceCard
            icon={<FileText size={32} />}
            title="Corporate Documentation"
            text="Company profiles, proposals, and tenders."
          />

          <ServiceCard
            icon={<Megaphone size={32} />}
            title="Branding & Advertising"
            text="Visibility campaigns, social media, and print."
          />

          <ServiceCard
            icon={<ShieldCheck size={32} />}
            title="Technical Services"
            text="CCTV, fire safety, and Starlink installation."
          />
        </div>
      </section>
    </main>
  );
}

function ServiceCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
      <div className="text-brand-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-brand-primary">{title}</h3>
      <p className="mt-3 text-gray-600">{text}</p>
    </div>
  );
}
