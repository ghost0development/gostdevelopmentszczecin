"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function CaseStudy() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="dot" />
            <span className="mono text-[10px] text-muted uppercase tracking-[0.3em]">Case study</span>
          </div>
          <h2 className="text-[clamp(2rem,4.5vw,4rem)] font-bold tracking-[-0.035em] leading-[1.05]">
            Pierwszy projekt <span className="accent">w realizacji.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-border">
          {/* Main visual */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 bg-bg p-8 md:p-12"
          >
            <div className="aspect-[16/9] bg-surface border border-border-strong rounded-sm relative overflow-hidden">
              {/* Mock UI */}
              <div className="absolute inset-0 p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  <span className="mono text-[9px] text-muted/30 ml-2">GhostLauncher v1.0</span>
                </div>
                <div className="flex-1 grid grid-cols-4 gap-3">
                  <div className="col-span-1 border border-border rounded-sm p-3 space-y-2">
                    <div className="w-full h-1.5 bg-accent/20 rounded-full" />
                    <div className="w-3/4 h-1 bg-white/5 rounded-full" />
                    <div className="w-1/2 h-1 bg-white/5 rounded-full" />
                    <div className="mt-4 w-full h-1 bg-accent/10 rounded-full" />
                    <div className="w-2/3 h-1 bg-white/5 rounded-full" />
                  </div>
                  <div className="col-span-3 border border-border rounded-sm p-4 flex flex-col justify-between">
                    <div>
                      <div className="w-32 h-2 bg-white/10 rounded-full mb-2" />
                      <div className="w-48 h-1 bg-white/5 rounded-full" />
                    </div>
                    <div className="flex gap-2">
                      <div className="px-4 py-1.5 bg-accent/20 rounded-sm">
                        <span className="mono text-[8px] text-accent">PLAY</span>
                      </div>
                      <div className="px-4 py-1.5 border border-border rounded-sm">
                        <span className="mono text-[8px] text-muted/40">SETTINGS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 bg-bg p-8 md:p-10 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div>
                <span className="mono text-[9px] text-muted uppercase tracking-[0.3em] block mb-2">Klient</span>
                <span className="text-lg font-semibold">Redstone-MC.PL</span>
              </div>
              <div className="h-px bg-border" />
              <div>
                <span className="mono text-[9px] text-muted uppercase tracking-[0.3em] block mb-2">Zakres</span>
                <span className="text-sm text-muted">Dedykowany launcher desktopowy z integracją serwera, systemem aktualizacji i custom UI.</span>
              </div>
              <div className="h-px bg-border" />
              <div>
                <span className="mono text-[9px] text-muted uppercase tracking-[0.3em] block mb-2">Stack</span>
                <div className="flex flex-wrap gap-1.5">
                  {["Electron", "React", "TypeScript", "Node.js"].map((t) => (
                    <span key={t} className="mono text-[9px] text-accent/50 border border-accent/10 px-2 py-0.5 rounded-sm">{t}</span>
                  ))}
                </div>
              </div>
              <div className="h-px bg-border" />
              <div>
                <span className="mono text-[9px] text-muted uppercase tracking-[0.3em] block mb-2">Status</span>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="text-sm">W realizacji</span>
                </div>
              </div>
            </div>

            <a href="#" className="mt-8 inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors group">
              Szczegóły projektu
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mt-px">
          {[
            { num: "135K+", label: "Zarejestrowanych graczy" },
            { num: "3.6K", label: "Członków Discord" },
            { num: "14.09.2019", label: "Data założenia serwera" },
            { num: "2–4 tyg", label: "Czas realizacji launchera" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-bg p-6 md:p-8"
            >
              <span className="text-2xl md:text-3xl font-bold tracking-[-0.03em]">{stat.num}</span>
              <span className="block mt-1 mono text-[9px] text-muted uppercase tracking-[0.2em]">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
