export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">

        {/* Brand */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            Career Compass ZM
          </h3>
          <p className="mt-3 text-sm leading-relaxed">
            Strategic career, business & compliance solutions designed to
            position you for growth, credibility, and opportunity.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/careers" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="/business" className="hover:underline">
                Business & Compliance
              </a>
            </li>
            <li>
              <a href="/technical" className="hover:underline">
                Technical Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold text-white mb-3">
            Connect With Us
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://whatsapp.com/channel/0029VbBD10zAYlUQEmsINF0h"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                WhatsApp Channel
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61578308819683"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/careercampasszm"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/career-campass-zm/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Career Compass ZM. All rights reserved.
      </div>
    </footer>
  );
}