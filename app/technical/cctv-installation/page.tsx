import Image from "next/image";

export const metadata = {
  title: "CCTV Installation | Career Compass ZM",
  description:
    "Professional CCTV installation services for offices, businesses, institutions, and homes across Zambia.",
};

export default function CCTVInstallationPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid gap-14 md:grid-cols-2 items-center">

        {/* TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
            CCTV Installation Services
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Career Compass ZM provides professionally designed and installed
            CCTV surveillance systems to enhance security, monitoring,
            and peace of mind.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            We assess your premises, recommend the right camera setup,
            and install reliable systems tailored to your environment
            and security needs.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/technical/cctv-installation.jpg"
            alt="CCTV installation services"
            fill
            className="object-cover"
            priority
          />
        </div>

      </section>

      {/* WHAT WE DO */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-24">

          <h2 className="text-3xl font-bold text-brand-primary mb-12 text-center">
            What We Handle
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-gray-700">

            <ServiceItem
              title="Site Assessment"
              text="Evaluation of your premises to determine camera placement, coverage, and system requirements."
            />

            <ServiceItem
              title="Camera Supply & Installation"
              text="Supply and installation of indoor and outdoor CCTV cameras with optimal positioning."
            />

            <ServiceItem
              title="DVR / NVR Setup"
              text="Configuration of recording systems for secure video storage and playback."
            />

            <ServiceItem
              title="Remote Viewing Setup"
              text="Mobile and desktop access so you can monitor your property from anywhere."
            />

            <ServiceItem
              title="System Testing & Training"
              text="Testing, handover, and basic user guidance after installation."
            />

            <ServiceItem
              title="Maintenance & Support"
              text="Ongoing support, troubleshooting, and system upgrades when needed."
            />

          </div>

        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold text-brand-primary mb-6">
          Pricing
        </h2>

        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          CCTV installation pricing depends on the number of cameras,
          system type, site complexity, and client requirements.
        </p>

        <p className="mt-4 text-xl font-semibold text-brand-primary">
          Pricing available on request
        </p>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
            Need a reliable CCTV system?
          </h2>

          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Talk to our team and secure your property with professionally
            installed surveillance solutions.
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
            Career Compass ZM — Safety. Visibility. Control.
          </p>

        </div>
      </section>

    </main>
  );
}

/* SMALL SERVICE ITEM */
function ServiceItem({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h3 className="font-semibold text-brand-primary mb-2">
        {title}
      </h3>
      <p>{text}</p>
    </div>
  );
}