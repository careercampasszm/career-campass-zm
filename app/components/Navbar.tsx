"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Facebook, Linkedin, Instagram } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Proper WhatsApp logo (phone inside), not a chat bubble
  const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="#25D366"
        d="M16.003 3C9.383 3 4 8.383 4 15.002c0 2.64.86 5.08 2.322 7.05L4 29l7.12-2.275A11.94 11.94 0 0 0 16.003 27C22.62 27 28 21.62 28 15.002 28 8.383 22.62 3 16.003 3z"
      />
      <path
        fill="#FFF"
        d="M16.003 5.2c5.409 0 9.802 4.393 9.802 9.802 0 5.41-4.393 9.803-9.802 9.803-1.7 0-3.296-.43-4.686-1.185l-.337-.2-4.17 1.333 1.36-4.056-.22-.35a9.76 9.76 0 0 1-1.551-5.294c0-5.409 4.394-9.802 9.804-9.802z"
        opacity="0.001"
      />
      <path
        fill="#FFF"
        d="M20.874 18.28c-.215-.107-1.27-.626-1.468-.698-.197-.071-.341-.107-.484.107-.143.215-.556.698-.682.842-.125.143-.251.161-.466.054-.215-.107-.907-.334-1.727-1.064-.638-.568-1.069-1.27-1.194-1.485-.125-.215-.013-.33.094-.437.097-.097.215-.251.322-.376.107-.126.143-.215.215-.359.071-.143.036-.269-.018-.376-.054-.107-.484-1.162-.663-1.593-.174-.418-.351-.361-.484-.368l-.412-.008a.79.79 0 0 0-.573.269c-.197.215-.753.735-.753 1.79 0 1.056.77 2.076.878 2.219.107.143 1.516 2.315 3.67 3.248.51.22.907.351 1.216.45.514.164.983.141 1.354.086.412-.061 1.27-.52 1.45-1.02.179-.502.179-.933.125-1.02-.054-.09-.197-.143-.412-.251z"
      />
      <path
        fill="#FFF"
        d="M14.65 10.83c-.107 0-.287.036-.466.215-.179.18-.59.575-.59 1.4 0 .825.607 1.63.69 1.74.08.107.99 1.574 2.44 2.187.354.153.63.244.843.312.354.113.676.097.93.059.287-.043.88-.359 1.002-.706.124-.347.124-.646.086-.706-.036-.064-.134-.107-.287-.179l-.752-.368c-.107-.054-.25-.107-.358.107-.107.215-.412.575-.502.698-.09.125-.18.143-.322.09-.143-.072-.59-.215-1.126-.69-.418-.372-.7-.833-.787-.976-.09-.143-.01-.215.074-.299.074-.074.18-.18.269-.269.09-.09.107-.143.161-.251.054-.107.027-.197-.01-.269-.036-.072-.322-.95-.466-1.296-.125-.305-.287-.257-.376-.257h-.287z"
        opacity="0.001"
      />
    </svg>
  );

  return (
    <header className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* BRAND LOGO */}
        <Link
          href="/"
          aria-label="Career Compass ZM Home"
          className="flex items-center"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo-horizontal.png"
            alt="Career Compass ZM"
            width={190}
            height={44}
            priority
            className="object-contain"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#0F2A44]">
          <Link href="/careers" className="hover:text-[#D4AF37] transition-colors">
            Careers
          </Link>
          <Link href="/business" className="hover:text-[#D4AF37] transition-colors">
            Business &amp; Compliance
          </Link>
          <Link href="/technical" className="hover:text-[#D4AF37] transition-colors">
            Technical Services
          </Link>
          <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">
            Contact
          </Link>
        </nav>

        {/* DESKTOP SOCIAL ICONS */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/260972441871"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:opacity-90 transition"
          >
            <WhatsAppIcon size={20} />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61578308819683"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Facebook size={20} />
          </a>

          <a
            href="https://www.instagram.com/careercampasszm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-600 hover:text-pink-600 transition-colors"
          >
            <Instagram size={20} />
          </a>

          <a
            href="https://www.linkedin.com/company/career-campass-zm/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-600 hover:text-blue-700 transition-colors"
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
          <div className="px-6 py-6 flex flex-col gap-5 text-sm text-[#0F2A44] font-medium">
            <Link href="/careers" onClick={() => setOpen(false)} className="hover:text-[#D4AF37] transition-colors">
              Careers
            </Link>
            <Link href="/business" onClick={() => setOpen(false)} className="hover:text-[#D4AF37] transition-colors">
              Business &amp; Compliance
            </Link>
            <Link href="/technical" onClick={() => setOpen(false)} className="hover:text-[#D4AF37] transition-colors">
              Technical Services
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="hover:text-[#D4AF37] transition-colors">
              Contact
            </Link>

            {/* MOBILE SOCIAL ICONS */}
            <div className="pt-4 border-t flex items-center gap-5">
              <a
                href="https://wa.me/260972441871"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:opacity-90 transition"
              >
                <WhatsAppIcon size={22} />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61578308819683"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-blue-600 hover:opacity-80 transition"
              >
                <Facebook size={22} />
              </a>

              <a
                href="https://www.instagram.com/careercampasszm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-pink-600 hover:opacity-80 transition"
              >
                <Instagram size={22} />
              </a>

              <a
                href="https://www.linkedin.com/company/career-campass-zm/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-blue-700 hover:opacity-80 transition"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}