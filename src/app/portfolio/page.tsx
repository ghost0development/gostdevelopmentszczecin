"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    name: "Redstone-MC.PL",
    status: "W realizacji",
    statusColor: "bg-accent animate-pulse",
    desc: "Dedykowany launcher desktopowy z integracją serwera survival, systemem aktualizacji i custom UI.",
    stack: ["Electron", "React", "TypeScript", "Node.js"],
    stats: [
      { num: "135K+", label: "Zarejestrowanych graczy" },
      { num: "3.6K", label: "Członków Discord" },
      { num: "14.09.2019", label: "Data założenia serwera" },
      { num: "2–4 tyg", label: "Czas realizacji launchera" },
    ],
    features: [
      "Automatyczna synchronizacja z REST API serwera",
      "System aktualizacji push",
      "Custom UI z motywem serwera",
      "Zarządzanie wersjami Minecraft",
      "Integracja z Discord Rich Presence",
    ],
  },
  {
    name: "Projekt #2",
    status: "Planowany",
    statusColor: "bg-muted/30",
    desc: "Launcher dla sieci serwerów PvP z matchmakingiem i statystykami.",
    stack: ["Electron", "Java", "WebSocket"],
    stats: [],
    features: [],
  },
  {
    name: "Projekt #3",
    status: "Planowany",
    statusColor: "bg-muted/30",
    desc: "System zarządzania wersjami i pluginami dla administratorów serwerów.",
    stack: ["Kotlin", "REST API", "Docker"],
    stats: [],
    features: [],
  },
];

export default function PortfolioPage() {
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
            <ArrowLeft className="w-4 h-4" />
            Strona główna
          </Link>

          <span className="mono text-[10px] text-muted uppercase tracking-[0.3em] block mb-3">Portfolio</span>
          <h1 className="text-[clamp(2.25rem,5vw,4.5rem)] font-bold tracking-[-0.04em] leading-[1] mb-4">
            Nasze <span className="accent">realizacje.</span>
          </h1>
          <p className="text-muted text-[15px] leading-relaxed max-w-lg mb-16 md:mb-24">
            Każdy launcher to osobny projekt. Bez szablonów, bez kompromisów.
          </p>
        </motion.div>

        <div className="space-y-px">
          {projects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
              className="bg-surface border border-border-strong p-6 md:p-10 group hover:border-accent/15 transition-colors duration-500"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="mono text-[10px] text-accent uppercase tracking-[0.3em]">{project.name}</span>
                  <div className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${project.statusColor}`} />
                    <span className="mono text-[9px] text-muted/50 uppercase tracking-[0.2em]">{project.status}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  {idx === 0 ? (
                    <div className="aspect-[16/10] bg-bg border border-border rounded-sm relative overflow-hidden mb-5">
                      <div className="absolute inset-0 p-4 md:p-6 flex flex-col">
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
                  ) : (
                    <div className="aspect-[16/10] bg-bg border border-border rounded-sm flex items-center justify-center mb-5">
                      <span className="mono text-[10px] text-muted/15">wkrótce</span>
                    </div>
                  )}

                  <p className="text-sm text-muted leading-relaxed">{project.desc}</p>
                </div>

                <div className="space-y-5">
                  <div>
                    <span className="mono text-[9px] text-muted uppercase tracking-[0.3em] block mb-2.5">Stack technologiczny</span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((t) => (
                        <span key={t} className="mono text-[9px] text-accent/60 border border-accent/10 px-2.5 py-1 rounded-sm">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.features.length > 0 && (
                    <>
                      <div className="h-px bg-border" />
                      <div>
                        <span className="mono text-[9px] text-muted uppercase tracking-[0.3em] block mb-2.5">Kluczowe funkcje</span>
                        <ul className="space-y-1.5">
                          {project.features.map((f) => (
                            <li key={f} className="flex items-start gap-2 text-sm text-muted">
                              <span className="w-1 h-1 rounded-full bg-accent/40 mt-2 flex-shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}

                  {project.stats.length > 0 && (
                    <>
                      <div className="h-px bg-border" />
                      <div className="grid grid-cols-2 gap-4">
                        {project.stats.map((stat) => (
                          <div key={stat.label}>
                            <span className="text-lg font-bold tracking-[-0.02em]">{stat.num}</span>
                            <span className="block mt-0.5 mono text-[8px] text-muted/50 uppercase tracking-[0.15em]">{stat.label}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
