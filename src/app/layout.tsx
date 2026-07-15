import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import ScrollToTop from "@/components/ScrollToTop";
import CalendlyBadge from "@/components/CalendlyBadge";
import EasterEgg from "@/components/EasterEgg";
import { SoundProvider } from "@/components/Sound";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ghost Development — Dedykowane launchery do Minecrafta",
  description:
    "Projektujemy i budujemy dedykowane launchery desktopowe dla serwerów Minecraft. Electron, Java, Kotlin — dopasowujemy technologię do Twoich potrzeb.",
  keywords: ["minecraft", "launcher", "dedykowany launcher", "electron", "serwer minecraft", "ghost development", "Szczecin"],
  authors: [{ name: "Ghost Development" }],
  openGraph: {
    title: "Ghost Development — Dedykowane launchery do Minecrafta",
    description: "Projektujemy i budujemy dedykowane launchery desktopowe dla serwerów Minecraft.",
    type: "website",
    locale: "pl_PL",
    siteName: "Ghost Development",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghost Development — Dedykowane launchery do Minecrafta",
    description: "Projektujemy i budujemy dedykowane launchery desktopowe dla serwerów Minecraft.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Ghost Development",
  description: "Projektujemy i budujemy dedykowane launchery desktopowe dla serwerów Minecraft.",
  url: "https://ghostdev.pl",
  email: "kontakt.gd.Bartoszosiej@outlook.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Asnyka 3/22",
    addressLocality: "Szczecin",
    postalCode: "71-526",
    addressCountry: "PL",
  },
  telephone: "+48508302053",
  priceRange: "1500-4000 PLN",
  serviceType: ["Dedykowany launcher", "Integracja z serwerem", "Wsparcie techniczne"],
  areaServed: "PL",
  foundingDate: "2024",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="mesh">
        <div className="noise" />
        <SoundProvider>
          <Preloader />
          <Navbar />
          {children}
          <ScrollToTop />
          <CalendlyBadge />
          <EasterEgg />
        </SoundProvider>
      </body>
    </html>
  );
}
