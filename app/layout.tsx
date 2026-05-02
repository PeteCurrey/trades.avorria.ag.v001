import type { Metadata } from "next";
import { Inter, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/global/lenis-provider";
import Nav from "@/components/global/nav";
import Footer from "@/components/global/footer";
import CursorGlow from "@/components/global/cursor-glow";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Avorria Trades — Websites & Management Platform for UK Tradespeople",
  description: "Premium websites and TradeDesk business platform built specifically for electricians, plumbers, gas engineers, builders and trades across the UK.",
  openGraph: {
    title: "Avorria Trades — Websites & Management Platform for UK Tradespeople",
    description: "Premium websites and TradeDesk business platform built specifically for electricians, plumbers, gas engineers, builders and trades across the UK.",
    url: "https://trades.avorria.com",
    siteName: "Avorria Trades",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} ${jetbrains.variable}`}
    >
      <body className="antialiased min-h-screen flex flex-col relative">
        <LenisProvider>
          <CursorGlow />
          <Nav />
          <main className="flex-grow flex flex-col pt-20">
            {children}
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
