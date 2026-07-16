"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const categories = [
  {
    id: "launchery",
    label: "Launchery Minecraft",
    desc: "Dedykowane launchery desktopowe dla serwerów",
    tiers: [
      {
        name: "Podstawowy",
        price: "1 500",
        desc: "Podłączenie do serwera, auto-update, custom UI",
        features: [
          "Integracja z REST API serwera",
          "Automatyczna aktualizacja",
          "Custom interfejs graficzny",
          "Zarządzanie wersjami Minecraft",
          "Logowanie graczy",
        ],
      },
      {
        name: "Zaawansowany",
        price: "2 500",
        desc: "Whitelist, multi-channel, zaawansowane integracje",
        features: [
          "Wszystko z Podstawowego",
          "Whitelist i lista graczy",
          "Multi-channel (serwery)",
          "Integracja z Discord Rich Presence",
          "Powiadomienia push",
          "Panel administracyjny",
        ],
        popular: true,
      },
      {
        name: "Premium",
        price: "4 000",
        desc: "Wszystko + natywne pluginy, anti-cheat, full custom",
        features: [
          "Wszystko z Zaawansowanego",
          "Natywne pluginy MC",
          "Anti-cheat integracja",
          "Pełna personalizacja UI",
          "System płatności",
          "Dedykowane wsparcie",
        ],
      },
    ],
    maintenance: "150–200 PLN/mies.",
  },
  {
    id: "strony",
    label: "Strony internetowe",
    desc: "Profesjonalne strony dla firm i projektów",
    tiers: [
      {
        name: "Landing Page",
        price: "1 500",
        desc: "Jednostronicowa strona wizytówkowa",
        features: [
          "Responsywny design",
          "Formularz kontaktowy",
          "Mapa Google / integracje",
          "Optymalizacja SEO",
          "Certyfikat SSL",
        ],
      },
      {
        name: "Strona firmowa",
        price: "3 000",
        desc: "Wielostronicowa strona z CMS",
        features: [
          "Do 5 podstron",
          "System zarządzania treścią",
          "Blog / aktualności",
          "Formularz z powiadomieniami",
          "Analityka ruchu",
          "Optymalizacja SEO",
        ],
        popular: true,
      },
      {
        name: "E-commerce",
        price: "5 000",
        desc: "Sklep internetowy z płatnościami online",
        features: [
          "Wszystko ze Strony firmowej",
          "Katalog produktów",
          "Koszyk i płatności online",
          "Panel zamówienia",
          "Powiadomienia e-mail",
          "Integracja z kurierami",
        ],
      },
    ],
    maintenance: "100–200 PLN/mies.",
  },
  {
    id: "desktop",
    label: "Aplikacje desktopowe",
    desc: "Natywne aplikacje na Windows, macOS, Linux",
    tiers: [
      {
        name: "Narzędzie",
        price: "2 000",
        desc: "Prosta aplikacja do jednego zadania",
        features: [
          "Natywny interfejs",
          "Automatyczne aktualizacje",
          "Eksport danych",
          "Powiadomienia systemowe",
          "Windows / macOS",
        ],
      },
      {
        name: "Zaawansowana",
        price: "4 000",
        desc: "Aplikacja z wieloma modułami i integracjami",
        features: [
          "Wszystko z Narzędzia",
          "Wiele modułów",
          "Integracja z API",
          "Baza danych lokalnej",
          "Tryb offline",
          "Aktualizacje push",
        ],
        popular: true,
      },
      {
        name: "System",
        price: "6 000",
        desc: "Pełny system desktopowy z backendem",
        features: [
          "Wszystko z Zaawansowanej",
          "Własny backend",
          "Synchronizacja w chmurze",
          "Wieloużytkownikowość",
          "Zaawansowane raporty",
          "Priorytetowe wsparcie",
        ],
      },
    ],
    maintenance: "200–300 PLN/mies.",
  },
  {
    id: "programy",
    label: "Programy",
    desc: "Pluginy, boty, skrypty i narzędzia",
    tiers: [
      {
        name: "Plugin / Bot",
        price: "1 500",
        desc: "Dedykowany plugin MC lub bot Discord",
        features: [
          "Plugin Spigot / Paper / BungeeCord",
          "LUB bot Discord (Node.js / Python)",
          "Komendy i config",
          "Dokumentacja",
          "Aktualizacje 30 dni",
        ],
      },
      {
        name: "Skrypt",
        price: "2 500",
        desc: "Zaawansowany skrypt z integracjami",
        features: [
          "Wszystko z Plugin / Bot",
          "Integracja z API zewnętrznym",
          "Panel konfiguracyjny",
          "Logowanie i statystyki",
          "Automatyzacja zadań",
        ],
        popular: true,
      },
      {
        name: "System",
        price: "4 000",
        desc: "Pełny system z frontendem i backendem",
        features: [
          "Wszystko ze Skryptu",
          "Własny panel webowy",
          "Baza danych",
          "Autoryzacja użytkowników",
          "API REST",
          "Wsparcie 60 dni",
        ],
      },
    ],
    maintenance: "150–250 PLN/mies.",
  },
];

export default function CennikPage() {
  const [active, setActive] = useState("launchery");
  const cat = categories.find((c) => c.id === active)!;

  return (
    <section className="min-h-screen px-5 sm:px-6 md:px-10 lg:px-16 pt-24 md:pt-40 pb-20">
      <div className="max-w-[1320px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-text transition-colors mb-8"
          >
            ← Strona główna
          </Link>

          <span className="mono text-[10px] text-muted uppercase tracking-[0.3em] block mb-3">Cennik</span>
          <h1 className="text-[clamp(2.25rem,5vw,4.5rem)] font-bold tracking-[-0.04em] leading-[1] mb-4">
            Ile to <span className="accent">kosztuje?</span>
          </h1>
          <p className="text-muted text-[15px] leading-relaxed max-w-lg mb-12">
            Przejrzyste ceny, bez ukrytych kosztów. Wybierz kategorię i sprawdź.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-5 py-2.5 text-sm rounded-sm transition-all duration-200 ${
                active === c.id
                  ? "bg-accent text-bg font-semibold"
                  : "bg-surface border border-border text-muted hover:text-text hover:border-border-strong"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Category description */}
        <motion.p
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-sm text-muted mb-10"
        >
          {cat.desc}
        </motion.p>

        {/* Pricing tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border max-w-5xl">
          {cat.tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`bg-bg p-8 flex flex-col relative ${
                tier.popular ? "ring-1 ring-accent/20" : ""
              }`}
            >
              {tier.popular && (
                <span className="absolute top-4 right-4 mono text-[8px] text-accent uppercase tracking-[0.2em] bg-accent/10 px-2.5 py-1 rounded-sm">
                  Najpopularniejszy
                </span>
              )}

              <div className="mb-6">
                <span className="text-sm font-medium block mb-1">{tier.name}</span>
                <span className="mono text-[9px] text-muted/50 block mb-4">{tier.desc}</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold tracking-[-0.03em]">{tier.price}</span>
                  <span className="text-sm text-muted">PLN</span>
                </div>
              </div>

              <div className="h-px bg-border mb-6" />

              <ul className="space-y-2.5 flex-1 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted">
                    <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/kontakt"
                className={`group w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-sm transition-all ${
                  tier.popular
                    ? "bg-accent text-bg hover:shadow-[0_0_24px_rgba(200,255,0,0.2)]"
                    : "border border-border text-muted hover:border-accent/30 hover:text-text"
                }`}
              >
                Zamów wycenę
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Maintenance note */}
        <motion.div
          key={active + "-maint"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="mt-8 max-w-5xl p-6 bg-surface border border-border-strong"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="mono text-[9px] text-muted uppercase tracking-[0.3em] block mb-1">Wsparcie techniczne</span>
              <span className="text-sm">Opieka po projekcie — aktualizacje, monitoring, nowe funkcje.</span>
            </div>
            <span className="mono text-lg font-semibold whitespace-nowrap">{cat.maintenance}</span>
          </div>
        </motion.div>

        {/* FAQ-like note */}
        <div className="mt-12 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {[
            { q: "Zaliczka", a: "50% na start, 50% po odbiorze. Bez zaliczki nie rozpoczynamy pracy." },
            { q: "Czas realizacji", a: "2–4 tygodnie w zależności od złożoności. Dokładny termin po wycenie." },
            { q: "Zmiany w trakcie", a: "Drobne poprawki w cenie. Duże zmiany wyceniamy osobno." },
            { q: "Faktura VAT", a: "Wystawiamy faktury VAT. Dla firm z UE — reverse charge." },
          ].map((item) => (
            <div key={item.q} className="bg-bg p-6">
              <span className="text-sm font-medium block mb-1">{item.q}</span>
              <span className="text-sm text-muted leading-relaxed">{item.a}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
