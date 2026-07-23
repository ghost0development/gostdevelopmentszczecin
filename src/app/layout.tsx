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

const siteUrl = "https://ghost0development.github.io/gostdevelopmentszczecin";

export const metadata: Metadata = {
  title: {
    default: "Ghost Development — Launchery Minecraft, Strony WWW, Aplikacje desktopowe | Szczecin",
    template: "%s | Ghost Development Szczecin",
  },
  description:
    "Ghost Development Szczecin — tworzymy launchery Minecraft (od 1500 PLN), strony internetowe, aplikacje desktopowe i programy. Linux Help — pomoc z Linuxem 50 PLN/h. Electron, Java, Kotlin, React. Bezpłatna konsultacja.",
  keywords: [
    "launcher minecraft", "dedykowany launcher", "launcher do serwera", "minecraft launcher Szczecin",
    "programista minecraft", "electron minecraft", "launcher desktopowy", "serwer minecraft launcher",
    "ghost development", "Szczecin", "tworzenie launcherów", "minecraft plugin", "integracja serwera minecraft",
    "launcher java", "launcher kotlin", "aplikacja desktopowa", "strona internetowa Szczecin",
    "tworzenie stron", "programy na zamówienie", "firma programistyczna Szczecin",
    "linux help", "pomoc linux", "linux konfiguracja", "linux naprawa", "linux skrypty",
  ],
  authors: [{ name: "Ghost Development" }],
  openGraph: {
    title: "Ghost Development — Launchery Minecraft, Strony WWW, Aplikacje desktopowe | Szczecin",
    description: "Tworzymy launchery Minecraft, strony internetowe, aplikacje desktopowe i programy. Szczecin. Od 1500 PLN.",
    type: "website",
    locale: "pl_PL",
    siteName: "Ghost Development",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghost Development — Launchery Minecraft, Strony WWW, Aplikacje desktopowe | Szczecin",
    description: "Launchery Minecraft, strony internetowe, aplikacje desktopowe. Szczecin. Od 1500 PLN.",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "pl": siteUrl,
    },
  },
  other: {
    "geo.region": "PL-32",
    "geo.placename": "Szczecin",
    "geo.position": "53.4285;14.5528",
    "ICBM": "53.4285, 14.5528",
  },
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}#business`,
  name: "Ghost Development",
  alternateName: ["ghostdev", "Ghost Dev", "Ghost Development Szczecin"],
  description: "Firma programistyczna w Szczecinie. Tworzymy launchery Minecraft, strony internetowe, aplikacje desktopowe i programy na zamówienie. Electron, Java, Kotlin, React.",
  url: siteUrl,
  email: "kontakt.gd.Bartoszosiej@outlook.com",
  telephone: "+48508302053",
  image: `${siteUrl}/logo.jpeg`,
  logo: `${siteUrl}/logo.jpeg`,
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
  priceRange: "1500-6000 PLN",
  paymentAccepted: "Gotówka, przelew, faktura VAT",
  currenciesAccepted: "PLN",
  areaServed: [
    { "@type": "City", name: "Szczecin" },
    { "@type": "State", name: "Zachodniopomorskie" },
    { "@type": "Country", name: "Polska" },
  ],
  foundingDate: "2026-02-09",
  sameAs: [],
  knowsAbout: [
    "tworzenie launcherów Minecraft", "Electron", "Java", "Kotlin", "React", "TypeScript",
    "aplikacje desktopowe", "strony internetowe", "programy na zamówienie",
    "integracja z serwerem Minecraft", "REST API", "WebSocket",
    "Linux", "Linux Help", "konfiguracja Linux", "bezpieczeństwo Linux", "skrypty Bash",
  ],
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
          name: "Strona internetowa",
          description: "Projektowanie i tworzenie stron internetowych — landing page, strony firmowe, sklepy internetowe.",
        },
        price: "1500-5000 PLN",
        priceCurrency: "PLN",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Aplikacja desktopowa",
          description: "Natywne aplikacje desktopowe na Windows, macOS i Linux. Electron, Kotlin, Java.",
        },
        price: "2000-6000 PLN",
        priceCurrency: "PLN",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pluginy, boty i programy",
          description: "Dedykowane pluginy Minecraft, boty Discord, skrypty i narzędzia programistyczne.",
        },
        price: "1500-4000 PLN",
        priceCurrency: "PLN",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wsparcie techniczne",
          description: "Aktualizacje, poprawki, nowe funkcje. Responsywność poniżej 24h.",
        },
        price: "100-300 PLN/mies.",
        priceCurrency: "PLN",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Linux Help",
          description: "Pomoc z każdym problemem Linux — konfiguracja, bezpieczeństwo, skrypty, naprawa. 50 PLN/h, obszerne problemy — cena indywidualna.",
        },
        price: "50 PLN/h",
        priceCurrency: "PLN",
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Ile kosztuje dedykowany launcher do Minecrafta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dedykowany launcher do Minecrafta kosztuje od 1500 PLN za wersję podstawową, 2500 PLN za zaawansowaną i 4000 PLN za premium. Cena obejmuje integrację z serwerem, custom UI i system aktualizacji.",
      },
    },
    {
      "@type": "Question",
      name: "Ile trwa realizacja launchera Minecraft?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Realizacja launchera trwa standardowo 2–4 tygodnie, zależnie od złożoności projektu. Przed rozpoczęciem podajemy dokładny harmonogram.",
      },
    },
    {
      "@type": "Question",
      name: "Ile kosztuje strona internetowa w Szczecinie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Strona internetowa w Ghost Development kosztuje od 1500 PLN (landing page), 3000 PLN (strona firmowa) do 5000 PLN (e-commerce). Cena obejmuje responsywny design, SEO i formularz kontaktowy.",
      },
    },
    {
      "@type": "Question",
      name: "Ile kosztuje aplikacja desktopowa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aplikacja desktopowa w Ghost Development kosztuje od 2000 PLN (narzędzie), 4000 PLN (zaawansowana) do 6000 PLN (system). Tworzymy aplikacje na Windows, macOS i Linux.",
      },
    },
    {
      "@type": "Question",
      name: "Co to jest Ghost Development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ghost Development to firma programistyczna z Szczecina, która tworzy launchery Minecraft, strony internetowe, aplikacje desktopowe i programy. Firma została założona w lutym 2026 roku.",
      },
    },
    {
      "@type": "Question",
      name: "Gdzie znajduje się Ghost Development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ghost Development znajduje się w Szczecinie, ul. Asnyka 3/22, 71-526. Firma świadczy usługi dla klientów z całej Polski.",
      },
    },
    {
      "@type": "Question",
      name: "Jakie technologie używa Ghost Development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ghost Development używa Electron, Java, Kotlin, TypeScript, React, Node.js i Python. Technologie dobieramy indywidualnie do projektu.",
      },
    },
    {
      "@type": "Question",
      name: "Czy Ghost Development tworzy strony internetowe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak, Ghost Development tworzy strony internetowe — landing page, strony firmowe z CMS i sklepy internetowe. Ceny zaczynają się od 1500 PLN.",
      },
    },
    {
      "@type": "Question",
      name: "Ile kosztuje pomoc z Linuxem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Linux Help kosztuje 50 PLN/h za standardowe problemy. Obszerne, złożone sprawy — cena indywidualna po analizie. Nie obejmuje administrowania bazami danych i serwerami produkcyjnymi.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Jak zamówić dedykowany launcher do Minecrafta",
  description: "Krok po kroku: jak zamówić dedykowany launcher desktopowy dla serwera Minecraft w Ghost Development.",
  step: [
    {
      "@type": "HowToStep",
      name: "Brief i analiza",
      text: "Umów bezpłatną konsultację. Rozmawiamy o Twoim serwerze, poznajemy infrastrukturę i graczy. Na tej podstawie planujemy architekturę launchera. Trwa 1–2 dni.",
      position: 1,
    },
    {
      "@type": "HowToStep",
      name: "Projekt UI/UX",
      text: "Projektujemy interfejs launchera: wireframe, mockup hi-fi, akceptacja. Dwa darmowe iteracje w cenie. Trwa 3–5 dni.",
      position: 2,
    },
    {
      "@type": "HowToStep",
      name: "Realizacja",
      text: "Programujemy launcher. Cotygodniowe demo postępów. Pełna przejrzystość — masz dostęp do repozytorium. Trwa 10–18 dni.",
      position: 3,
    },
    {
      "@type": "HowToStep",
      name: "Testing i wdrożenie",
      text: "Testy na prawdziwych graczach. Poprawki. Wdrożenie na serwer. Monitorowanie stabilności. Trwa 2–3 dni.",
      position: 4,
    },
    {
      "@type": "HowToStep",
      name: "Opieka techniczna",
      text: "Po wdrożeniu oferujemy opiekę techniczną za 150 PLN/mies. Aktualizacje, poprawki, nowe funkcje. Responsywność poniżej 24h.",
      position: 5,
    },
  ],
  totalTime: "PT4W",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Strona główna", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Cennik", item: `${siteUrl}/cennik` },
    { "@type": "ListItem", position: 3, name: "Kontakt", item: `${siteUrl}/kontakt` },
    { "@type": "ListItem", position: 4, name: "Portfolio", item: `${siteUrl}/portfolio` },
    { "@type": "ListItem", position: 5, name: "Rezerwacja", item: `${siteUrl}/rezerwacja` },
    { "@type": "ListItem", position: 6, name: "Linux Help", item: `${siteUrl}/linux-help` },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Ghost Development",
  alternateName: "ghostdev",
  url: siteUrl,
  inLanguage: "pl",
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ghost Development",
  alternateName: ["ghostdev", "Ghost Dev"],
  url: siteUrl,
  logo: `${siteUrl}/logo.jpeg`,
  image: `${siteUrl}/logo.jpeg`,
  email: "kontakt.gd.Bartoszosiej@outlook.com",
  telephone: "+48508302053",
  foundingDate: "2026-02-09",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Asnyka 3/22",
    addressLocality: "Szczecin",
    addressRegion: "Zachodniopomorskie",
    postalCode: "71-526",
    addressCountry: "PL",
  },
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+48508302053",
    contactType: "customer service",
    availableLanguage: ["Polish", "English"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
