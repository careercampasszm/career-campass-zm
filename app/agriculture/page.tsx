import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Agriculture & Farming Consultancy | Career Compass ZM",
  description:
    "Career Compass ZM provides practical agriculture and farming consultancy services including irrigation setup, best-practice farming, project management, and crop specialisation in Zambia.",
};

export default function AgriculturePage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid gap-14 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
            Agriculture & Farming Consultancy
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Career Compass ZM supports farmers, agribusinesses, and landowners
            with practical, results-driven agricultural consultancy services.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            From irrigation systems and best-practice farming to managing
            full farming projects from land preparation to market, we help
            you farm smarter, sustainably, and profitably.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/agriculture/agriculture-hero.jpg"
            alt="Agriculture and farming consultancy services"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 pb-28">
        <h2 className="text-3xl font-bold text-brand-primary mb-14 text-center">
          Our Agriculture Services
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <ServiceCard
            title="Water Irrigation Setup"
            text="Design and setup of efficient irrigation systems to optimise water use and crop yields."
            href="/agriculture/irrigation"
          />

          <ServiceCard
            title="Best Practice Farming Consultancy"
            text="Professional guidance on crop selection, soil management, planting cycles, and farm optimisation."
            href="/agriculture/best-practice-farming"
          />

          <ServiceCard
            title="End-to-End Farm Project Management"
            text="Subcontracted management of farming projects from planning and planting to harvesting and point of sale."
            href="/agriculture/farm-project-management"
          />

          <ServiceCard
            title="Cabbage Farming Specialisation"
            text="Specialist consultancy in commercial cabbage farming, from nursery to market-ready produce."
            href="/agriculture/cabbage-farming"
          />

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
            Ready to improve your farm performance?
          </h2>

          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Speak with our agriculture consultants and turn your land
            into a productive, profitable operation.
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