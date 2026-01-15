import Image from "next/image";

export default function CareersPage() {
  return (
    <main className="bg-brand-background">
      
      {/* HERO / INTRO */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-2 items-center">
        
        {/* TEXT */}
        <div>
          <h1 className="text-4xl font-bold text-brand-primary">
            Career & Talent Services
          </h1>

          <p className="mt-6 text-lg text-gray-700">
            Career Compass ZM helps professionals position themselves correctly
            in competitive job markets through structured, ATS-aware, and
            recruiter-focused career support.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/careers/careers-1.jpg"
            alt="Career guidance and professional development"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <ServiceCard
            title="ATS-Tailored CV Writing"
            text="CVs designed to pass Applicant Tracking Systems and attract recruiters."
          />

          <ServiceCard
            title="Interview Coaching"
            text="Mock interviews, confidence building, and employer-focused preparation."
          />

          <ServiceCard
            title="Professional Profiling"
            text="Positioning your profile before opportunities are publicly advertised."
          />

          <ServiceCard
            title="Internship Profiling"
            text="Early-stage career support for students and recent graduates."
          />

          <ServiceCard
            title="Recruitment Support"
            text="Candidate sourcing, screening, and role-specific placement support."
          />

        </div>
      </section>
    </main>
  );
}

/* SERVICE CARD */
function ServiceCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-brand-primary">{title}</h3>
      <p className="mt-3 text-gray-600">{text}</p>
    </div>
  );
}
