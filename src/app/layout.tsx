import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import CursorEffect from "@/components/CursorEffect";
import FloatingAIButton from "@/components/FloatingAIButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yaiz Browser — The Future of Browsing Starts Here.",
  description:
    "Meet Yaiz — the fastest, smartest, and most private browser ever built. AI-powered, privacy-first, and completely free.",
  keywords: [
    "browser",
    "privacy browser",
    "AI browser",
    "fast browser",
    "Yaiz",
  ],
  openGraph: {
    title: "Yaiz Browser — The Future of Browsing Starts Here.",
    description:
      "Meet Yaiz — the fastest, smartest, and most private browser ever built.",
    type: "website",
    siteName: "Yaiz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-white">
        <Navbar />
        <ScrollProgress />
        <CursorEffect />
        <main className="flex-1">{children}</main>
        <FloatingAIButton />
      </body>
    </html>
  );
}
