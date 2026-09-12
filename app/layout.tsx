import type { Metadata } from "next";
import { siteUrl } from "@/lib/site-url";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kacper | SEO Portfolio",
    template: "%s | Kacper SEO Portfolio",
  },
  description:
    "Portfolio SEO i strategii treści: case studies z automatyzacji SEO, audytu technicznego i architektury informacji.",
  keywords: [
    "seo", "technical seo", "portfolio", "content strategy", "seo audits",
    "ai seo automation",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kacper | SEO Portfolio",
    description:
      "Specjalista SEO z naciskiem na techniczne wdrożenia, automatyzację i strategię treści.",
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kacper | SEO Portfolio",
    description:
      "Case studies z automatyzacji SEO, strategii contentowej i audytów technicznych.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pl"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body><a className="skip-link" href="#main">Przejdź do treści</a><SiteHeader /><main id="main">{children}</main><SiteFooter /></body>
    </html>
  );
}
