"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

const options = {
  launcher: [
    { label: "Podstawowy", desc: "Podłączenie do serwera, auto-update, custom UI", price: 1500 },
    { label: "Zaawansowany", desc: "Whitelist, multi-channel, zaawansowane integracje", price: 2500 },
    { label: "Premium", desc: "Wszystko + natywne pluginy, anti-cheat, full custom", price: 4000 },
  ],
  design: [
    { label: "Standardowy", desc: "Nasz projekt, Twoje kolory", price: 0 },
    { label: "Customowy", desc: "Indywidualny design UI/UX", price: 500 },
    { label: "Premium UI", desc: "Animacje, mikro-interakcje, pełna personalizacja", price: 1000 },
  ],
  maintenance: [
    { label: "Bez wsparcia", desc: "Tylko launcher, sam zarządzasz", price: 0 },
    { label: "Podstawowe", desc: "Aktualizacje + monitoring", price: 100 },
    { label: "Pełne wsparcie", desc: "24/7, nowe funkcje, priorytet", price: 200 },
  ],
};

export default function PriceCalculator() {
  const [launcher, setLauncher] = useState(0);
  const [design, setDesign] = useState(0);
  const [maintenance, setMaintenance] = useState(0);

  const total = options.launcher[launcher].price + options.design[design].price + options.maintenance[maintenance].price;
  const firstMonth = total > 0 ? options.launcher[launcher].price / 2 : 0;

  return (
    <section className="section grid-bg">
      <div className="container">
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
            <span className="mono text-[10px] text-muted uppercase tracking-[0.3em]">Kalkulator</span>
          </div>
          <h2 className="text-[clamp(2rem,4.5vw,4rem)] font-bold tracking-[-0.035em] leading-[1.05]">
            Oblicz <span className="accent">koszt.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-border max-w-5xl">
          {/* Options */}
          <div className="lg:col-span-7 bg-bg p-8 md:p-10 space-y-8">
            {/* Launcher type */}
            <div>
              <span className="mono text-[9px] text-muted uppercase tracking-[0.3em] block mb-4">Typ launchera</span>
              <div className="space-y-2">
                {options.launcher.map((opt, i) => (
                  <button
                    key={opt.label}
                    onClick={() => setLauncher(i)}
                    className={`w-full text-left p-4 border rounded-sm transition-all duration-200 ${
                      launcher === i
                        ? "border-accent/40 bg-accent/5"
                        : "border-border hover:border-border-strong"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                          launcher === i ? "border-accent bg-accent" : "border-border-strong"
                        }`}>
                          {launcher === i && <Check className="w-2.5 h-2.5 text-bg" />}
                        </span>
                        <div>
                          <span className="text-sm font-medium">{opt.label}</span>
                          <span className="block text-[12px] text-muted/50">{opt.desc}</span>
                        </div>
                      </div>
                      <span className="mono text-sm font-semibold">
                        {opt.price > 0 ? `${opt.price.toLocaleString("pl-PL")} PLN` : "—"}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Design */}
            <div>
              <span className="mono text-[9px] text-muted uppercase tracking-[0.3em] block mb-4">Design</span>
              <div className="space-y-2">
                {options.design.map((opt, i) => (
                  <button
                    key={opt.label}
                    onClick={() => setDesign(i)}
                    className={`w-full text-left p-4 border rounded-sm transition-all duration-200 ${
                      design === i
                        ? "border-accent/40 bg-accent/5"
                        : "border-border hover:border-border-strong"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                          design === i ? "border-accent bg-accent" : "border-border-strong"
                        }`}>
                          {design === i && <Check className="w-2.5 h-2.5 text-bg" />}
                        </span>
                        <div>
                          <span className="text-sm font-medium">{opt.label}</span>
                          <span className="block text-[12px] text-muted/50">{opt.desc}</span>
                        </div>
                      </div>
                      <span className="mono text-sm font-semibold">
                        {opt.price > 0 ? `+${opt.price.toLocaleString("pl-PL")} PLN` : "—"}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Maintenance */}
            <div>
              <span className="mono text-[9px] text-muted uppercase tracking-[0.3em] block mb-4">Wsparcie techniczne</span>
              <div className="space-y-2">
                {options.maintenance.map((opt, i) => (
                  <button
                    key={opt.label}
                    onClick={() => setMaintenance(i)}
                    className={`w-full text-left p-4 border rounded-sm transition-all duration-200 ${
                      maintenance === i
                        ? "border-accent/40 bg-accent/5"
                        : "border-border hover:border-border-strong"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                          maintenance === i ? "border-accent bg-accent" : "border-border-strong"
                        }`}>
                          {maintenance === i && <Check className="w-2.5 h-2.5 text-bg" />}
                        </span>
                        <div>
                          <span className="text-sm font-medium">{opt.label}</span>
                          <span className="block text-[12px] text-muted/50">{opt.desc}</span>
                        </div>
                      </div>
                      <span className="mono text-sm font-semibold">
                        {opt.price > 0 ? `+${opt.price} PLN/mies` : "—"}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-5 bg-bg p-8 md:p-10 flex flex-col">
            <span className="mono text-[9px] text-muted uppercase tracking-[0.3em] block mb-6">Podsumowanie</span>

            <div className="space-y-4 flex-1">
              <div className="flex justify-between text-sm">
                <span className="text-muted">Launcher</span>
                <span>{options.launcher[launcher].price.toLocaleString("pl-PL")} PLN</span>
              </div>
              {options.design[design].price > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Design</span>
                  <span>+{options.design[design].price.toLocaleString("pl-PL")} PLN</span>
                </div>
              )}
              {options.maintenance[maintenance].price > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Wsparcie</span>
                  <span>{options.maintenance[maintenance].price} PLN/mies.</span>
                </div>
              )}

              <div className="h-px bg-border my-4" />

              <div className="flex justify-between items-baseline">
                <span className="text-sm text-muted">Łącznie (jednorazowo)</span>
                <motion.span
                  key={total}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl font-bold"
                >
                  {total.toLocaleString("pl-PL")} <span className="text-sm text-muted">PLN</span>
                </motion.span>
              </div>

              {options.maintenance[maintenance].price > 0 && (
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-muted">Co miesiąc</span>
                  <span className="text-lg font-semibold">
                    {options.maintenance[maintenance].price} <span className="text-sm text-muted">PLN/mies.</span>
                  </span>
                </div>
              )}

              {total > 0 && (
                <div className="mt-4 p-3 bg-accent/5 border border-accent/10 rounded-sm">
                  <span className="mono text-[9px] text-accent uppercase tracking-[0.2em] block mb-1">Zaliczka (50%)</span>
                  <span className="text-lg font-semibold">
                    {firstMonth.toLocaleString("pl-PL")} <span className="text-sm text-muted">PLN</span>
                  </span>
                </div>
              )}

              <div className="mt-4 p-3 border border-border-strong rounded-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Star className="w-3.5 h-3.5 text-accent fill-accent" />
                  <span className="mono text-[9px] text-muted uppercase tracking-[0.2em]">Ocena Google = zniżka</span>
                </div>
                <p className="text-[12px] text-muted leading-relaxed">
                  Oceń nas na Google po realizacji i zgarnij <span className="text-accent font-semibold">1% zniżki</span> na następny projekt.
                </p>
              </div>
            </div>

            <Link
              href="/kontakt"
              className="group mt-8 w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-accent text-bg text-sm font-semibold rounded-sm hover:shadow-[0_0_30px_rgba(200,255,0,0.2)] transition-all"
            >
              Zamów wycenę
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
