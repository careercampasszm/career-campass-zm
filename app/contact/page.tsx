import { Phone, Mail } from "lucide-react";

export const metadata = {
  title: "Contact Us | Career Compass ZM",
  description:
    "Get in touch with Career Compass ZM for career guidance, business compliance support, and technical services across Zambia.",
};

export default function ContactPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-primary">
          Get in Touch
        </h1>

        <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
          We’re here to guide you — whether you’re advancing your career,
          setting up a compliant business, or implementing technical solutions.
        </p>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <h2 className="text-3xl font-bold text-brand-primary text-center">
            Prefer direct contact?
          </h2>

          <p className="mt-4 text-gray-700 text-center max-w-xl mx-auto">
            Reach us instantly using the options below.
          </p>

          <div className="mt-16 grid gap-10 md:grid-cols-3">

            {/* WHATSAPP */}
            <div className="bg-white rounded-2xl p-10 border border-gray-200 shadow-sm hover:shadow-lg transition text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                  <svg width="36" height="36" viewBox="0 0 32 32" fill="#25D366">
                    <path d="M16.002 3C9.383 3 4 8.383 4 15.002c0 2.647.864 5.086 2.334 7.062L4 29l7.16-2.286A11.94 11.94 0 0 0 16.002 27C22.62 27 28 21.62 28 15.002 28 8.383 22.62 3 16.002 3z"/>
                    <path fill="#fff" d="M20.47 18.11c-.29-.15-1.71-.84-1.97-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.14-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.35-1.44-.87-.77-1.46-1.72-1.63-2.01-.17-.29-.02-.45.13-.6.14-.14.29-.35.44-.52.15-.17.2-.29.3-.49.1-.2.05-.37-.03-.52-.08-.15-.64-1.55-.88-2.13-.23-.55-.46-.48-.64-.49-.17-.01-.36-.01-.56-.01s-.52.07-.79.37c-.27.3-1.04 1.02-1.04 2.49s1.06 2.88 1.21 3.08c.15.2 2.08 3.18 5.05 4.46.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.2-.55-.35z"/>
                  </svg>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-brand-primary">
                WhatsApp
              </h3>

              <p className="mt-3 text-gray-600">
                Fastest way to reach us for enquiries and consultations.
              </p>

              <a
                href="https://wa.me/260972441871"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 bg-[#25D366] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-[#20b954] hover:shadow-lg transition"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* PHONE */}
            <div className="bg-white rounded-2xl p-10 border border-gray-200 shadow-sm hover:shadow-lg transition text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-brand-primary">
                  <Phone size={28} />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-brand-primary">
                Phone
              </h3>

              <p className="mt-3 text-gray-600">
                Speak directly with our consultants.
              </p>

              <p className="mt-6 font-semibold text-gray-800">
                +260 972 441 871
              </p>
            </div>

            {/* EMAIL */}
            <div className="bg-white rounded-2xl p-10 border border-gray-200 shadow-sm hover:shadow-lg transition text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center text-brand-primary">
                  <Mail size={28} />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-brand-primary">
                Email
              </h3>

              <p className="mt-3 text-gray-600">
                Best for detailed enquiries.
              </p>

              <p className="mt-6 font-semibold text-gray-800 break-all">
                careercampasszm@gmail.com
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT FORM (UI ONLY) */}
      <section className="max-w-4xl mx-auto px-6 py-28">
        <h2 className="text-3xl font-bold text-brand-primary text-center">
          Send Us a Message
        </h2>

        <p className="mt-4 text-gray-700 text-center max-w-xl mx-auto">
          Prefer to write? Leave us a message and we’ll get back to you.
        </p>

        <form className="mt-12 grid gap-6">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary"
          />

          <select
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-primary"
          >
            <option>Career Services</option>
            <option>Business & Compliance</option>
            <option>Technical Services</option>
          </select>

          <textarea
            rows={5}
            placeholder="Your message"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary"
          />

          <button
            type="button"
            className="w-full bg-brand-primary text-white py-4 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Send Message
          </button>

        </form>
      </section>

    </main>
  );
}