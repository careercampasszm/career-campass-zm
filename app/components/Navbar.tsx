"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Facebook, Linkedin, Instagram } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="#25D366"
      aria-hidden="true"
    >
      <path d="M16.002 3C9.383 3 4 8.383 4 15.002c0 2.647.864 5.086 2.334 7.062L4 29l7.16-2.286A11.94 11.94 0 0 0 16.002 27C22.62 27 28 21.62 28 15.002 28 8.383 22.62 3 16.002 3zm0 21.818a9.79 9.79 0 0 1-4.998-1.374l-.358-.213-4.25 1.357 1.389-4.14-.232-.373a9.78 9.78 0 1 1 8.45 4.743zm5.498-7.496c-.299-.15-1.764-.871-2.038-.971-.274-.1-.473-.15-.672.15-.199.299-.772.971-.946 1.17-.174.199-.349.224-.648.075-.299-.15-1.262-.465-2.404-1.48-.888-.791-1.488-1.768-1.662-2.067-.174-.299-.018-.46.131-.609.134-.133.299-.349.448-.523.149-.174.199-.299.299-.498.1-.199.05-.373-.025-.523-.075-.15-.672-1.62-.921-2.219-.243-.583-.49-.504-.672-.513-.174-.009-.373-.011-.573-.011s-.523.075-.797.373c-.274.299-1.047 1.023-1.047 2.493s1.072 2.889 1.221 3.088c.149.199 2.11 3.223 5.113 4.523.714.308 1.27.492 1.703.63.716.228 1.368.196 1.883.119.574-.085 1.764-.721 2.013-1.418.249-.697.249-1.296.174-1.418-.075-.123-.274-.199-.573-.349z" />
    </svg>
  );

  return (
    <header className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-lg font-bold text-brand-primary">
          Career Compass ZM
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/careers" className="hover:text-brand-primary">Careers</Link>
          <Link href="/business" className="hover:text-brand-primary">Business & Compliance</Link>
          <Link href="/technical" className="hover:text-brand-primary">Technical Services</Link>
          <Link href="/contact" className="hover:text-brand-primary">Contact</Link>
        </nav>

        {/* DESKTOP SOCIAL ICONS */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/260972441871"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:opacity-80 transition"
          >
            <WhatsAppIcon />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61578308819683"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            <Facebook size={20} />
          </a>

          <a
            href="https://www.instagram.com/careercampasszm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-600 hover:text-pink-600 transition"
          >
            <Instagram size={20} />
          </a>

          <a
            href="https://www.linkedin.com/company/career-campass-zm/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-600 hover:text-blue-700 transition"
          >
            <Linkedin size={20} />
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-6 flex flex-col gap-5 text-sm">

            <Link href="/careers" onClick={() => setOpen(false)}>Careers</Link>
            <Link href="/business" onClick={() => setOpen(false)}>Business & Compliance</Link>
            <Link href="/technical" onClick={() => setOpen(false)}>Technical Services</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>

            {/* MOBILE SOCIAL ICONS */}
            <div className="pt-4 border-t flex items-center gap-5">
              <a
                href="https://wa.me/260972441871"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:opacity-80"
              >
                <WhatsAppIcon size={22} />
              </a>

              <Facebook size={22} className="text-blue-600" />
              <Instagram size={22} className="text-pink-600" />
              <Linkedin size={22} className="text-blue-700" />
            </div>

          </div>
        </div>
      )}
    </header>
  );
}