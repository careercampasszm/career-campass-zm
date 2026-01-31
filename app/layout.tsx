import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // ✅ IMPORTANT: Use your real domain (WhatsApp + Google previews depend on this)
  metadataBase: new URL("https://www.careercampasszm.com"),

  title: {
    default: "Career Compass ZM",
    template: "%s | Career Compass ZM",
  },

  description:
    "Career Compass ZM provides professional career services, business registration, compliance support, branding, and technical solutions across Zambia.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  // ✅ FAVICONS (ensure these exist in /public)
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },

  openGraph: {
    type: "website",
    url: "https://www.careercampasszm.com",
    siteName: "Career Compass ZM",
    title: "Career Compass ZM",
    description:
      "Strategic career, business & compliance solutions for professionals and organisations in Zambia.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Career Compass ZM – Strategic Career & Business Solutions",
      },
    ],
    locale: "en_ZM",
  },

  twitter: {
    card: "summary_large_image",
    title: "Career Compass ZM",
    description:
      "Strategic career, business & compliance solutions for professionals and organisations in Zambia.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-brand-background text-brand-text antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="pt-20 flex-grow">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}