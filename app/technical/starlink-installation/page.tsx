import Image from "next/image";

export const metadata = {
  title: "Starlink Internet Installation | Career Compass ZM",
  description:
    "Professional Starlink internet installation, setup, optimisation, and support for homes, businesses, farms, and remote locations across Zambia.",
};

export default function StarlinkInstallationPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid gap-14 md:grid-cols-2 items-center">

        {/* TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
            Starlink Internet Installation & Optimisation
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Career Compass ZM provides professional Starlink installation
            services for clients who need fast, reliable internet — even
            in remote or underserved locations.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            From homes and offices to farms, lodges, and institutions,
            we ensure your Starlink system is correctly installed,
            optimised, and fully operational.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/technical/starlink.jpg"
            alt="Starlink internet installation services"
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

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                Site Assessment
              </h3>
              <p>
                We assess your location to determine the best mounting
                position for optimal signal reception.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                Professional Installation
              </h3>
              <p>
                Secure mounting, cabling, and proper alignment of the
                Starlink dish.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                Network Setup
              </h3>
              <p>
                Router configuration, Wi-Fi setup, and basic network
                optimisation.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                Performance Optimisation
              </h3>
              <p>
                Reducing obstructions and improving stability and speed.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                Troubleshooting & Support
              </h3>
              <p>
                Assistance with connectivity issues and system faults.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-brand-primary mb-10 text-center">
          Installation Pricing
        </h2>

        <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl p-10 shadow-sm text-center">
          <p className="text-lg text-gray-700 mb-6">
            Pricing depends on location, mounting requirements, and
            installation complexity.
          </p>

          <p className="text-xl font-semibold text-brand-primary">
            Installation fees provided on request
          </p>

          <p className="mt-4 text-gray-600">
            (Urban, peri-urban, remote & farm locations supported)
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
            Need fast, reliable internet anywhere in Zambia?
          </h2>

          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Speak to our technical team and get your Starlink system
            professionally installed and optimised.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="https://wa.me/260972441871"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#25D366] text-white px-12 py-4 rounded-full font-semibold shadow-lg hover:bg-[#20b954] transition"
            >
              Chat on WhatsApp
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Career Compass ZM — Connectivity Without Limits.
          </p>

        </div>
      </section>

    </main>
  );
}