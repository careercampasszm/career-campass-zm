export default function ContactPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      {/* PAGE INTRO */}
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold text-blue-900">
          Contact Career Compass ZM
        </h1>

        <p className="mt-6 text-lg text-gray-700">
          Reach out to us for career guidance, business compliance support,
          documentation, or professional consultation. We respond promptly
          and guide you clearly.
        </p>
      </header>

      {/* CONTACT OPTIONS */}
      <section className="mt-16 grid gap-8 md:grid-cols-2">
        <div className="border rounded-lg p-8 bg-white">
          <h2 className="text-2xl font-semibold text-blue-900">
            Talk to Us on WhatsApp
          </h2>
          <p className="mt-3 text-gray-600">
            Fastest way to reach us for enquiries, bookings, and guidance.
          </p>

          <a
            href="https://wa.me/260972441871"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-blue-900 text-white px-6 py-3 rounded font-medium hover:bg-blue-800 transition"
          >
            Chat on WhatsApp
          </a>
        </div>

        <div className="border rounded-lg p-8 bg-white">
          <h2 className="text-2xl font-semibold text-blue-900">
            Email Us
          </h2>
          <p className="mt-3 text-gray-600">
            For detailed enquiries, documents, or formal communication.
          </p>

          <a
            href="mailto:careercampasszm@gmail.com"
            className="inline-block mt-6 border border-blue-900 text-blue-900 px-6 py-3 rounded font-medium hover:bg-blue-50 transition"
          >
            careercampasszm@gmail.com
          </a>
        </div>
      </section>

      {/* SOCIALS */}
      <section className="mt-20 bg-gray-100 rounded-lg p-10">
        <h2 className="text-2xl font-semibold text-gray-900">
          Connect With Us
        </h2>

        <p className="mt-3 text-gray-600">
          Follow Career Compass ZM on social platforms for opportunities,
          updates, and insights.
        </p>

        <div className="mt-6 flex gap-6 text-blue-900 font-medium">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>

          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Facebook
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Instagram
          </a>
        </div>
      </section>
    </main>
  );
}
