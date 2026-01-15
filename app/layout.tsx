import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // 👈 THIS LINE WAS MISSING

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Career Compass ZM",
  description: "Strategic Career & Business Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-brand-background text-brand-text antialiased min-h-screen flex flex-col`}>
        
        {/* NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main className="pt-20 flex-grow">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />

      </body>
    </html>
  );
}
