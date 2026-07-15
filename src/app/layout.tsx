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
  title: "Ghost Development — Dedykowane launchery do Minecrafta | Szczecin",
  description:
    "Tworzymy dedykowane launchery desktopowe dla serwerów Minecraft w Szczecinie. Electron, Java, Kotlin. Od 1500 PLN. Bezpłatna konsultacja.",
  keywords: [
    "launcher minecraft", "dedykowany launcher", "launcher do serwera", "minecraft launcher Szczecin",
    "programista minecraft", "electron minecraft", "launcher desktopowy", "serwer minecraft launcher",
    "ghost development", "Szczecin", "tworzenie launcherów", "minecraft plugin", "integracja serwera minecraft",
    "launcher java", "launcher kotlin", "aplikacja desktopowa minecraft",
  ],
  authors: [{ name: "Ghost Development" }],
  openGraph: {
    title: "Ghost Development — Dedykowane launchery do Minecrafta | Szczecin",
    description: "Tworzymy dedykowane launchery desktopowe dla serwerów Minecraft. Szczecin. Od 1500 PLN.",
    type: "website",
    locale: "pl_PL",
    siteName: "Ghost Development",
    url: "https://ghost0development.github.io/gostdevelopmentszczecin",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghost Development — Dedykowane launchery do Minecrafta | Szczecin",
    description: "Tworzymy dedykowane launchery desktopowe dla serwerów Minecraft. Szczecin. Od 1500 PLN.",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "geo.region": "PL-32",
    "geo.placename": "Szczecin",
    "geo.position": "53.4285;14.5528",
    "ICBM": "53.4285, 14.5528",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://ghost0development.github.io/gostdevelopmentszczecin",
  name: "Ghost Development",
  alternateName: "ghostdev",
  description: "Tworzymy dedykowane launchery desktopowe dla serwerów Minecraft. Electron, Java, Kotlin. Od projektu po wdrożenie i opiekę techniczną.",
  url: "https://ghost0development.github.io/gostdevelopmentszczecin",
  email: "kontakt.gd.Bartoszosiej@outlook.com",
  telephone: "+48508302053",
  image: "https://ghost0development.github.io/gostdevelopmentszczecin/logo.jpeg",
  logo: "https://ghost0development.github.io/gostdevelopmentszczecin/logo.jpeg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Asnyka 3/22",
    addressLocality: "Szczecin",
    addressRegion: "Zachodniopomorskie",
    postalCode: "71-526",
    addressCountry: "PL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.4285,
    longitude: 14.5528,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  priceRange: "1500-4000 PLN",
  paymentAccepted: "Gotówka, przelew, faktura VAT",
  currenciesAccepted: "PLN",
  serviceType: ["Dedykowany launcher", "Integracja z serwerem", "Wsparcie techniczne"],
  areaServed: {
    "@type": "Country",
    name: "Polska",
  },
  foundingDate: "2026-02-09",
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Usługi Ghost Development",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dedykowany launcher do Minecrafta",
          description: "Projektowanie i budowa dedykowanego launchera desktopowego dla serwera Minecraft. Electron, Java, Kotlin.",
        },
        price: "1500-4000 PLN",
        priceCurrency: "PLN",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Integracja z ekosystemem serwera Minecraft",
          description: "REST API, WebSocket, RCON. Automatyczna synchronizacja z backendem serwera.",
        },
        price: "w cenie launchera",
        priceCurrency: "PLN",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wsparcie techniczne launchera",
          description: "Aktualizacje, poprawki, nowe funkcje. Responsywność poniżej 24h.",
        },
        price: "100-200 PLN/mies.",
        priceCurrency: "PLN",
      },
    ],
  },
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
