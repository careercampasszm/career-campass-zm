import { Phone, Mail, Clock } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact Us | Career Compass ZM",
  description:
    "Get in touch with Career Compass ZM for career guidance, business compliance support, and technical services across Zambia.",
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Premium background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#0F2A44]" />
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#D4AF37]/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-24 text-center">
          <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white/90">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
            Contact
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-[#D4AF37]">Get</span>{" "}
            <span className="text-white">in Touch</span>
          </h1>

          <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            We’re here to guide you — whether you’re advancing your career,
            setting up a compliant business, or implementing technical solutions.
          </p>

          <div className="mt-10 flex justify-center">
            <div className="h-[2px] w-24 bg-[#D4AF37]/80 rounded-full" />
          </div>
        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center">
            <span className="text-[#D4AF37]">Prefer</span>{" "}
            <span className="text-[#0F2A44]">direct contact?</span>
          </h2>

          <p className="mt-4 text-[#374151] text-center max-w-xl mx-auto">
            Reach us instantly using the options below.
          </p>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {/* WHATSAPP */}
            <div className="group bg-white rounded-3xl p-10 border border-gray-200 shadow-sm hover:shadow-lg transition text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center ring-1 ring-green-100">
                  <svg width="36" height="36" viewBox="0 0 32 32" fill="#25D366">
                    <path d="M16.002 3C9.383 3 4 8.383 4 15.002c0 2.647.864 5.086 2.334 7.062L4 29l7.16-2.286A11.94 11.94 0 0 0 16.002 27C22.62 27 28 21.62 28 15.002 28 8.383 22.62 3 16.002 3z" />
                    <path
                      fill="#fff"
                      d="M20.47 18.11c-.29-.15-1.71-.84-1.97-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.14-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.35-1.44-.87-.77-1.46-1.72-1.63-2.01-.17-.29-.02-.45.13-.6.14-.14.29-.35.44-.52.15-.17.2-.29.3-.49.1-.2.05-.37-.03-.52-.08-.15-.64-1.55-.88-2.13-.23-.55-.46-.48-.64-.49-.17-.01-.36-.01-.56-.01s-.52.07-.79.37c-.27.3-1.04 1.02-1.04 2.49s1.06 2.88 1.21 3.08c.15.2 2.08 3.18 5.05 4.46.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.2-.55-.35z"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="text-xl font-extrabold text-[#0F2A44]">
                WhatsApp
              </h3>

              <p className="mt-3 text-[#374151]">
                Fastest way to reach us for enquiries and consultations.
              </p>

              <div className="mt-5 inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#374151]">
                <Clock size={16} />
                Typical response time:{" "}
                <span className="text-[#0F2A44]">Instantly</span>
              </div>

              <a
                href="https://wa.me/260972441871"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center mt-7 rounded-full px-10 py-3 font-semibold
                           bg-[#25D366] text-white shadow-md transition
                           hover:bg-[#20b954] hover:shadow-lg hover:-translate-y-[1px]"
              >
                Chat on WhatsApp
              </a>

              <p className="mt-5 text-xs font-semibold text-[#D4AF37]">
                Preferred channel →
              </p>
            </div>

            {/* PHONE */}
            <div className="group bg-white rounded-3xl p-10 border border-gray-200 shadow-sm hover:shadow-lg transition text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#0F2A44]/5 flex items-center justify-center ring-1 ring-[#0F2A44]/10 text-[#0F2A44]">
                  <Phone size={28} />
                </div>
              </div>

              <h3 className="text-xl font-extrabold text-[#0F2A44]">Phone</h3>

              <p className="mt-3 text-[#374151]">
                Speak directly with our consultants.
              </p>

              <p className="mt-7 text-lg font-extrabold text-[#0F2A44]">
                +260 972 441 871
              </p>

              <div className="mt-7 rounded-2xl border border-gray-200 bg-[#F8FAFC] p-5 text-left">
                <p className="text-sm font-extrabold text-[#0F2A44] mb-3">
                  Operating Hours
                </p>

                <div className="space-y-2 text-sm text-[#374151]">
                  <p>
                    <span className="font-semibold text-[#0F2A44]">Weekdays:</span>{" "}
                    08:00 – 17:00
                  </p>
                  <p>
                    <span className="font-semibold text-[#0F2A44]">Weekends:</span>{" "}
                    09:00 – 17:00
                  </p>
                </div>
              </div>

              <p className="mt-6 text-xs font-semibold text-[#D4AF37]">
                Call for urgent needs →
              </p>
            </div>

            {/* EMAIL */}
            <div className="group bg-white rounded-3xl p-10 border border-gray-200 shadow-sm hover:shadow-lg transition text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center ring-1 ring-[#D4AF37]/20 text-[#0F2A44]">
                  <Mail size={28} />
                </div>
              </div>

              <h3 className="text-xl font-extrabold text-[#0F2A44]">Email</h3>

              <p className="mt-3 text-[#374151]">Best for detailed enquiries.</p>

              <p className="mt-7 font-extrabold text-[#0F2A44] break-all">
                careercampasszm@gmail.com
              </p>

              <div className="mt-5 inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#374151]">
                <Clock size={16} />
                We respond within{" "}
                <span className="text-[#0F2A44]">1 hour</span>
              </div>

              <p className="mt-6 text-xs font-semibold text-[#D4AF37]">
                Best for attachments →
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM (ACTIVE via Client Component) */}
      <section className="bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-24">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center">
            <span className="text-[#D4AF37]">Send</span>{" "}
            <span className="text-[#0F2A44]">Us a Message</span>
          </h2>

          <p className="mt-4 text-[#374151] text-center max-w-xl mx-auto">
            Prefer to write? Leave us a message and we’ll get back to you.
          </p>

          <ContactForm />
        </div>
      </section>

      {/* FOOTER STRIP */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-10 text-center">
          <p className="text-sm text-gray-500">
            Career Compass ZM —{" "}
            <span className="font-semibold text-[#0F2A44]">Get Guided.</span>{" "}
            <span className="font-semibold text-[#D4AF37]">Get Moving.</span>
          </p>
        </div>
      </section>
    </main>
  );
}