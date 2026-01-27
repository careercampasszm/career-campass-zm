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
  metadataBase: new URL("https://career-campass-zm-jy2x.vercel.app"),
  title: "Career Compass ZM | Strategic Career & Business Solutions",
  description:
    "Career Compass ZM provides professional career services, business registration, compliance support, branding, and technical solutions across Zambia.",

  // ✅ FAVICONS (make sure these files exist in /public)
  // /public/icon.png
  // /public/apple-icon.png
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" }, // optional fallback if you have it
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },

  openGraph: {
    title: "Career Compass ZM",
    description:
      "Strategic career, business & compliance solutions for professionals and organisations in Zambia.",
    url: "https://career-campass-zm-jy2x.vercel.app",
    siteName: "Career Compass ZM",
    images: [
      {
        url: "/images/hero/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Career Compass ZM – Strategic Career & Business Solutions",
      },
    ],
    locale: "en_ZM",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Career Compass ZM",
    description:
      "Strategic career, business & compliance solutions for professionals and organisations in Zambia.",
    images: ["/images/hero/hero.jpg"],
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