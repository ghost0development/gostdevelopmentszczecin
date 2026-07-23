"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Terminal, Clock, AlertTriangle } from "lucide-react";
import Link from "next/link";

const problems = [
  {
    category: "Instalacja i konfiguracja",
    items: [
      "Instalacja i konfiguracja dystrybucji Linux",
      "Konfiguracja sieci (statyczne IP, DNS, VPN, firewalle)",
      "Zarządzanie pakietami i repozytoriami",
      "Konfiguracja środowiska deweloperskiego",
      "Dual-boot i zarządzanie partycjami",
    ],
  },
  {
    category: "Bezpieczeństwo",
    items: [
      "Audyt bezpieczeństwa systemu",
      "Konfiguracja SELinux / AppArmor",
      "Zarządzanie uprawnieniami i sudo",
      "Szyfrowanie dysków i plików",
      "Konfiguracja SSH i kluczy kryptograficznych",
    ],
  },
  {
    category: "Automatyzacja i skrypty",
    items: [
      "Pisanie skryptów Bash / Python",
      "Crontaby i harmonogramy zadań",
      "Automatyzacja zadań administracyjnych",
      "Monitorowanie systemu i alerting",
      "Konfiguracja CI/CD na Linuxie",
    ],
  },
  {
    category: "Naprawa i optymalizacja",
    items: [
      "Diagnostyka błędów systemowych",
      "Optymalizacja wydajności",
      "Zarządzanie processami i zasobami",
      "Naprawa bootloadera i startu systemu",
      "Odzyskiwanie danych",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Opisz problem",
    desc: "Napisz czego dotyczy problem. Im więcej szczegółów, tym szybciej pomogę.",
  },
  {
    step: "02",
    title: "Wycena",
    desc: "Po analizie podaję szacowany czas i koszt. Przy prostych problemach — stała cena.",
  },
  {
    step: "03",
    title: "Rozwiązanie",
    desc: "Pracuję nad problemem. Mogę łączyć się zdalnie lub prowadzić konsultację na żywo.",
  },
  {
    step: "04",
    title: "Weryfikacja",
    desc: "Sprawdzamy razem, czy problem został rozwiązany. Dokumentuję rozwiązanie.",
  },
];

export default function LinuxHelpContent() {
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

          <div className="flex items-center gap-3 mb-4">
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, type: "spring" }}
              className="dot"
            />
            <span className="mono text-[10px] text-muted uppercase tracking-[0.3em]">Usługa</span>
          </div>
          <h1 className="text-[clamp(2.25rem,5vw,4.5rem)] font-bold tracking-[-0.04em] leading-[1] mb-4">
            Linux <span className="accent">Help</span>
          </h1>
          <p className="text-muted text-[15px] leading-relaxed max-w-lg mb-12">
            Pomoc z każdym problemem w Linuxie. Konfiguracja, bezpieczeństwo, skrypty, naprawa.
            Bez zabawy w administrowanie baz danych i serwerów produkcyjnych.
          </p>
        </motion.div>

        {/* Pricing card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-border max-w-5xl mb-16"
        >
          {/* Main price */}
          <div className="lg:col-span-7 bg-bg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="w-5 h-5 text-accent" />
              <span className="mono text-[10px] text-muted uppercase tracking-[0.3em]">Stawka godzinowa</span>
            </div>
            <div className="flex items-baseline gap-3 mb-2">
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-[clamp(3rem,6vw,5rem)] font-bold tracking-[-0.04em] leading-none"
              >
                50
              </motion.span>
              <span className="text-muted text-lg">PLN/h netto</span>
            </div>
            <span className="mono text-[10px] text-muted/40 uppercase tracking-[0.2em] block mb-8">
              Obszerny problem · Stała stawka
            </span>

            <div className="h-px bg-border mb-8" />

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <div>
                  <span className="text-sm font-medium block">Standardowe problemy</span>
                  <span className="text-[13px] text-muted/50">50 PLN/h — stała stawka, bez niespodzianek</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <div>
                  <span className="text-sm font-medium block">Obszerne problemy</span>
                  <span className="text-[13px] text-muted/50">Cena indywidualna — wycena po analizie</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - what's excluded */}
          <div className="lg:col-span-5 bg-bg p-8 md:p-10 flex flex-col justify-between">
            <div>
              <span className="mono text-[9px] text-muted uppercase tracking-[0.3em] block mb-4">Nie obejmuje</span>
              <ul className="space-y-2.5">
                {[
                  "Administrowanie bazami danych",
                  "Zarządzanie serwerami produkcyjnymi",
                  "Hosting i utrzymanie infrastruktury",
                  "Konfiguracja serwerów gier (poza konsultacją)",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-[13px] text-muted/50">
                    <span className="w-1 h-1 bg-red-500/40 rounded-full shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/kontakt"
              className="group mt-8 relative w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-accent text-bg text-sm font-semibold hover:shadow-[0_0_40px_rgba(200,255,0,0.25)] transition-all duration-300 rounded-sm overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/0 group-hover/btn:bg-white/10 transition-colors duration-300" />
              <span className="relative z-10">Poproś o pomoc</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <p className="mt-3 text-center mono text-[9px] text-muted/30 uppercase tracking-[0.2em]">
              Odpowiedź w ciągu 24h
            </p>
          </div>
        </motion.div>

        {/* Problems grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, type: "spring" }}
              className="dot"
            />
            <span className="mono text-[10px] text-muted uppercase tracking-[0.3em]">Co mogę naprawić</span>
          </div>
          <h2 className="text-[clamp(1.75rem,3.5vw,3rem)] font-bold tracking-[-0.035em] leading-[1.05] max-w-2xl mb-12">
            Każdy problem z Linuxem.
            <br />
            <span className="text-muted">Poza bazami danych i serwerami.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border max-w-5xl">
            {problems.map((cat, ci) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: ci * 0.08 }}
                className="bg-bg p-6 md:p-8"
              >
                <span className="text-sm font-semibold block mb-4">{cat.category}</span>
                <ul className="space-y-2.5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13px] text-muted">
                      <Check className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, type: "spring" }}
              className="dot"
            />
            <span className="mono text-[10px] text-muted uppercase tracking-[0.3em]">Jak to działa</span>
          </div>
          <h2 className="text-[clamp(1.75rem,3.5vw,3rem)] font-bold tracking-[-0.035em] leading-[1.05] max-w-xl mb-12">
            Cztery kroki
            <br />
            <span className="text-muted">do rozwiązania.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-border max-w-5xl">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-bg p-6 md:p-8"
              >
                <span className="mono text-[11px] text-accent/30 block mb-3">{p.step}</span>
                <span className="text-sm font-semibold block mb-2">{p.title}</span>
                <span className="text-[13px] text-muted leading-relaxed">{p.desc}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ-like notes */}
        <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {[
            { q: "Szybkie problemy", a: "Standardowe problemy — 50 PLN/h. Obszerne, złożone sprawy — cena indywidualna po analizie problemu." },
            { q: "Konsultacja zdalna", a: "Możemy łączyć się przez SSH, screen share lub po prostu rozmawiać. Wybierasz formę, która Ci pasuje." },
            { q: "Dokumentacja", a: "Po soluciónie dostajesz krótką dokumentację: co było zrobione i jak działa. Żebyś w przyszłości wiedział co i jak." },
            { q: "Czas reakcji", a: "Odpowiadam w ciągu 24h. Pilne problemy — staram się reagować szybciej." },
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
