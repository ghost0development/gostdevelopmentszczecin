"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GlowCard } from "@/components/FX";

const services = [
  {
    num: "01",
    title: "Linux Help — diagnostyka i naprawa",
    desc: "System nie wstaje po aktualizacji? Konflikty pakietów, uszkodzone partycje, problemy ze sterownikami. Naprawiamy Linuxa zdalnie lub stacjonarnie. 50 PLN/h.",
    tech: ["Arch", "Kali", "Ubuntu", "Debian"],
    detail: "Naprawa bez reinstalacji. Odbudowa drzew zależności, repair partycji, konfiguracja systemu.",
  },
  {
    num: "02",
    title: "Steam Deck i gaming",
    desc: "SteamOS, dual boot, konflikty z grami, aktualizacje systemu. Steam Deck to miniaturowy PC z Arch Linuxem — naprawiamy tak samo jak każdy inny Linux.",
    tech: ["SteamOS", "Arch", "Proton"],
    detail: "Naprawa SteamOS po aktualizacjach, konfiguracja dual boot, diagnostyka gier.",
  },
  {
    num: "03",
    title: "Dedykowany launcher desktopowy",
    desc: "Aplikacja desktopowa stworzona od zera pod Twój serwer. Nie używamy szablonów — każdy element projektujemy indywidualnie. Od UI po logikę aktualizacji.",
    tech: ["Electron", "Java", "Kotlin"],
    detail: "Aplikacja native, nie webview. Działa offline, aktualizuje się w tle.",
  },
  {
    num: "04",
    title: "Integracja i systemy",
    desc: "Launcher komunikuje się z Twoim API. Pobiera status serwera, listę graczy, motd, resourcepacki. Automatycznie synchronizuje modyfikacje i pluginy.",
    tech: ["REST API", "WebSocket", "RCON"],
    detail: "Pełna synchronizacja z Twoim backendem. Zero ręcznej konfiguracji.",
  },
];

export default function WhatWeDo() {
  return (
    <section id="co-robimy" className="section">
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
            <span className="mono text-[10px] text-muted uppercase tracking-[0.3em]">Co robimy</span>
          </div>
          <h2 className="text-[clamp(2rem,4.5vw,4rem)] font-bold tracking-[-0.035em] leading-[1.05] max-w-2xl">
            Naprawiamy Linux.
            <br />
            <span className="text-muted">I tworzymy launchery.</span>
          </h2>
        </motion.div>

        <div className="space-y-px">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <GlowCard>
                <div className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-10 md:py-12 border-b border-border bg-transparent hover:bg-surface/40 transition-all duration-500 px-4 md:px-8 -mx-4 md:-mx-8 cursor-default relative">
                  <div className="md:col-span-1">
                    <span className="mono text-[11px] text-accent/30 group-hover:text-accent/60 transition-colors duration-300">{s.num}</span>
                  </div>
                  <div className="md:col-span-5">
                    <h3 className="text-xl font-semibold tracking-[-0.01em] group-hover:text-accent transition-colors duration-300 flex items-center gap-2">
                      {s.title}
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                    </h3>
                    <p className="text-[13px] text-muted/40 mt-1.5 hidden md:block">{s.detail}</p>
                  </div>
                  <div className="md:col-span-4">
                    <p className="text-[14px] text-muted leading-[1.7]">{s.desc}</p>
                  </div>
                  <div className="md:col-span-2 flex md:flex-col gap-1.5 md:items-start md:justify-start">
                    {s.tech.map((t, ti) => (
                      <motion.span
                        key={t}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.06 + ti * 0.03 }}
                        className="mono text-[9px] text-accent/40 border border-accent/10 px-2 py-0.5 rounded-sm group-hover:border-accent/25 group-hover:text-accent/60 transition-all duration-300"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
