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
  metadataBase: new URL("https://www.careercampasszm.com"),

  title: "Career Compass ZM | Strategic Career & Business Solutions",
  description:
    "Career Compass ZM provides professional career services, business registration, compliance support, branding, and technical solutions across Zambia.",

  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "Career Compass ZM",
    description:
      "Strategic career, business & compliance solutions for professionals and organisations in Zambia.",
    url: "https://www.careercampasszm.com",
    siteName: "Career Compass ZM",
    images: [
      {
        url: "https://www.careercampasszm.com/og-image.png",
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
    images: ["https://www.careercampasszm.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="pt-20 flex-grow">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}