import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <Link href="/" className="font-bold text-xl text-brand-primary">
          Career Compass ZM
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/careers" className="hover:text-brand-primary">
            Careers
          </Link>
          <Link href="/business" className="hover:text-brand-primary">
            Business & Compliance
          </Link>
          <Link href="/contact" className="hover:text-brand-primary">
            Contact
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 text-sm">
          <a
            href="https://whatsapp.com/channel/0029VbBD10zAYlUQEmsINF0h"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline"
          >
            WhatsApp
          </a>

          <a
            href="https://www.linkedin.com/company/career-campass-zm/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  );
}
