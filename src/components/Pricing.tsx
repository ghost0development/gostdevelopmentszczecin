"use client";

import { motion } from "framer-motion";
import { Check, Ghost } from "lucide-react";
import Link from "next/link";

const features = [
  "Dedykowany launcher desktopowy",
  "Customowy design (UI/UX)",
  "Integracja z API serwera",
  "System auto-update",
  "Whitelist / banlisty",
  "Canary/dev/prod channels",
  "Wsparcie po wdrożeniu (1 miesiąc gratis)",
];

export default function Pricing() {
  return (
    <section id="cennik" className="section grid-bg">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, type: "spring" }}
              className="dot"
            />
            <span className="mono text-[10px] text-muted uppercase tracking-[0.3em]">Cennik</span>
          </div>
          <h2 className="text-[clamp(2rem,4.5vw,4rem)] font-bold tracking-[-0.035em] leading-[1.05] max-w-xl">
            Jeden projekt.
            <br />
            <span className="text-muted">Jeden koszt.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-border max-w-5xl">
          {/* Main price */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-bg p-8 md:p-12 group hover:bg-surface/30 transition-colors duration-500"
          >
            <div className="flex items-baseline gap-3 mb-2">
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-[clamp(3rem,6vw,5rem)] font-bold tracking-[-0.04em] leading-none"
              >
                1 500
              </motion.span>
              <span className="text-muted text-lg">PLN netto</span>
            </div>
            <span className="mono text-[10px] text-muted/40 uppercase tracking-[0.2em] block mb-8">
              Jednorazowa opłata · 50% zaliczka
            </span>

            <div className="h-px bg-border mb-8" />

            <ul className="space-y-3.5">
              {features.map((f, i) => (
                <motion.li
                  key={f}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.04 }}
                  className="flex items-start gap-3 text-sm"
                >
                  <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span className="text-muted group-hover:text-muted/80 transition-colors">{f}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right column */}
          <div className="lg:col-span-5 flex flex-col">
            {/* Maintenance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="bg-bg p-8 md:p-10 flex-1 group hover:bg-surface/30 transition-colors duration-500"
            >
              <span className="mono text-[9px] text-muted uppercase tracking-[0.3em] block mb-4">Opieka techniczna</span>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold tracking-[-0.03em]">150</span>
                <span className="text-muted text-sm">PLN/mies. netto</span>
              </div>
              <p className="text-[13px] text-muted/50 mb-6">Brak umów · Rezygnacja w każdej chwili</p>
              <ul className="space-y-2.5">
                {["Aktualizacje i poprawki", "Monitoring 24/7", "Nowe funkcje", "Priorytetowe wsparcie"].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-[13px] text-muted/50 group-hover:text-muted/70 transition-colors">
                    <span className="w-1 h-1 bg-accent/30 rounded-full shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.14 }}
              className="bg-bg p-8 md:p-10 border-t border-border lg:border-t-0"
            >
              <Link
                href="/kontakt"
                className="group/btn relative w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-accent text-bg text-sm font-semibold hover:shadow-[0_0_40px_rgba(200,255,0,0.25)] transition-all duration-300 rounded-sm overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/0 group-hover/btn:bg-white/10 transition-colors duration-300" />
                <Ghost className="w-4 h-4 transition-transform group-hover/btn:rotate-12 relative z-10" />
                <span className="relative z-10">Rozpocznij projekt</span>
              </Link>
              <p className="mt-3 text-center mono text-[9px] text-muted/30 uppercase tracking-[0.2em]">
                Odpowiedź w ciągu 24h
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
