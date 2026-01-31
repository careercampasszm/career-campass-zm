import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CCTV Installation | Career Compass ZM",
  description:
    "Professional CCTV installation services for offices, businesses, institutions, and homes across Zambia.",
};

export default function CCTVInstallationPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-24 grid gap-14 md:grid-cols-2 items-center">
        {/* TEXT */}
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#0F2A44]">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
            Technical Services
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-[#D4AF37]">CCTV</span>{" "}
            <span className="text-[#0F2A44]">Installation</span>{" "}
            <span className="text-[#0F2A44]">Services</span>{" "}
            <span className="text-[#374151]">(TEST)</span>
          </h1>

          <p className="mt-6 text-lg text-[#1F2937] leading-relaxed">
            Career Compass ZM provides professionally designed and installed CCTV
            surveillance systems to enhance security, monitoring, and peace of mind.
          </p>

          <p className="mt-4 text-[#374151] leading-relaxed">
            We assess your premises, recommend the right camera setup, and install
            reliable systems tailored to your environment and security needs.
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
              href="/technical"
              className="inline-flex items-center justify-center rounded-full px-10 py-4 font-semibold
                         bg-[#0F2A44] text-white shadow-lg transition
                         hover:bg-[#0B2034] hover:shadow-xl hover:-translate-y-[1px]"
            >
              Back to Technical Services
            </Link>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative h-[340px] md:h-[420px] rounded-3xl overflow-hidden shadow-lg border border-gray-200">
          <Image
            src="/images/technical/cctv-installation.jpg"
            alt="CCTV installation services"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-18 md:py-24">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center">
            <span className="text-[#D4AF37]">What</span>{" "}
            <span className="text-[#0F2A44]">We Handle</span>
          </h2>

          <p className="mt-4 text-center text-[#374151] max-w-3xl mx-auto">
            We install CCTV systems with proper coverage, clean cabling, stable
            recording, and remote access — with practical training at handover.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Site Assessment"
              text="Evaluation of your premises to determine camera placement, coverage, and system requirements."
            />
            <FeatureCard
              title="Camera Supply & Installation"
              text="Supply and installation of indoor and outdoor CCTV cameras with optimal positioning."
            />
            <FeatureCard
              title="DVR / NVR Setup"
              text="Configuration of recording systems for secure video storage and playback."
            />
            <FeatureCard
              title="Remote Viewing Setup"
              text="Mobile and desktop access so you can monitor your property from anywhere."
            />
            <FeatureCard
              title="System Testing & Training"
              text="Testing, handover, and basic user guidance after installation."
            />
            <FeatureCard
              title="Maintenance & Support"
              text="Ongoing support, troubleshooting, and system upgrades when needed."
            />
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-6xl mx-auto px-6 py-18 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          <span className="text-[#D4AF37]">Pricing</span>{" "}
          <span className="text-[#0F2A44]">Guidance</span>
        </h2>

        <p className="mt-4 text-lg text-[#1F2937] max-w-3xl mx-auto">
          CCTV installation pricing depends on the number of cameras, system type,
          site complexity, and your monitoring requirements.
        </p>

        <p className="mt-6 text-xl font-bold text-[#0F2A44]">
          Pricing available on request
        </p>
      </section>

      {/* CTA */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-18 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2A44]">
            Need a reliable CCTV system?
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] max-w-2xl mx-auto">
            Talk to our team and secure your property with professionally installed
            surveillance solutions.
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
            Career Compass ZM — Safety. Visibility. Control.
          </p>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-lg font-extrabold text-[#D4AF37]">{title}</h3>
      <p className="mt-2 text-[#0F2A44] leading-relaxed">{text}</p>
      <p className="mt-4 text-sm font-semibold text-[#0F2A44] group-hover:text-[#D4AF37] transition">
        Included →
      </p>
    </div>
  );
}