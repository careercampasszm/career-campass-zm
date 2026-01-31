import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Starlink Internet Installation | Career Compass ZM",
  description:
    "Professional Starlink internet installation, setup, optimisation, and support for homes, businesses, farms, and remote locations across Zambia.",
};

export default function StarlinkInstallationPage() {
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
            <span className="text-[#D4AF37]">Starlink</span>{" "}
            <span className="text-[#0F2A44]">Installation</span>
          </h1>

          <p className="mt-3 text-xl md:text-2xl font-bold text-[#1F2937]">
            Fast Setup. Clean Cabling. Stable Connectivity.
          </p>

          <p className="mt-6 text-lg text-[#1F2937] leading-relaxed">
            Career Compass ZM provides professional Starlink installation for
            clients who need fast, reliable internet — even in remote or
            underserved locations.
          </p>

          <p className="mt-4 text-[#374151] leading-relaxed">
            From homes and offices to farms, lodges, and institutions, we ensure
            your Starlink system is correctly installed, optimised, and fully
            operational.
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

            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full px-10 py-4 font-semibold
                         border border-gray-200 bg-white text-[#0F2A44] shadow-lg transition
                         hover:shadow-xl hover:-translate-y-[1px]"
            >
              View Pricing <span className="ml-2 text-[#D4AF37]">↓</span>
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative h-[340px] md:h-[420px] rounded-3xl overflow-hidden shadow-lg border border-gray-200">
          <Image
            src="/images/technical/starlink.jpg"
            alt="Starlink internet installation services"
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
            We install your Starlink properly, optimise performance, and ensure
            your network is stable and usable across your space.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Site Assessment"
              text="We assess your location to determine the best mounting position for optimal signal reception."
            />
            <FeatureCard
              title="Professional Installation"
              text="Secure mounting, clean cabling, and correct positioning of the Starlink dish."
            />
            <FeatureCard
              title="Network Setup"
              text="Router configuration, Wi-Fi setup, and basic network optimisation."
            />
            <FeatureCard
              title="Performance Optimisation"
              text="Reducing obstructions and improving stability and speed."
            />
            <FeatureCard
              title="Troubleshooting & Support"
              text="Assistance with connectivity issues and system faults."
            />
            <FeatureCard
              title="Handover & Guidance"
              text="Basic guidance on the Starlink app, best practices, and care for your setup."
            />
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-18 md:py-24">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          <span className="text-[#D4AF37]">Installation</span>{" "}
          <span className="text-[#0F2A44]">Pricing</span>
        </h2>

        <div className="mt-10 max-w-3xl mx-auto rounded-3xl border border-gray-200 bg-white p-8 md:p-10 shadow-sm text-center">
          <p className="text-lg text-[#1F2937] leading-relaxed">
            Pricing depends on location, mounting requirements, and installation
            complexity.
          </p>

          <p className="mt-6 text-xl font-extrabold text-[#0F2A44]">
            Installation fees provided on request
          </p>

          <p className="mt-3 text-[#374151]">
            Urban, peri-urban, remote & farm locations supported.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="https://wa.me/260972441871"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-12 py-4 font-semibold
                         bg-[#25D366] text-white shadow-lg transition
                         hover:bg-[#20b954] hover:shadow-xl hover:-translate-y-[1px]"
            >
              Request a Quote on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-18 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2A44]">
            Need fast, reliable internet anywhere in Zambia?
          </h2>

          <p className="mt-4 text-lg text-[#1F2937] max-w-2xl mx-auto">
            Speak to our technical team and get your Starlink system
            professionally installed and optimised.
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
              href="/technical"
              className="inline-flex items-center justify-center rounded-full px-12 py-4 font-semibold
                         bg-[#0F2A44] text-white shadow-lg transition
                         hover:bg-[#0B2034] hover:shadow-xl hover:-translate-y-[1px]"
            >
              Back to Technical Services
            </Link>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Career Compass ZM — Connectivity Without Limits.
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