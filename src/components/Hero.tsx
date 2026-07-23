"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Ghost } from "lucide-react";
import { TextReveal, MagneticButton } from "@/components/FX";
import EmailModal from "@/components/EmailModal";

function BlueprintGrid() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#c8ff00" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/[0.015] rounded-full blur-[100px]"
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/[0.01] rounded-full blur-[100px]"
      />

      {/* Corner decorations */}
      <motion.svg
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute top-24 left-8 md:left-16 w-20 h-20 text-accent/8"
        viewBox="0 0 80 80"
      >
        <line x1="0" y1="0" x2="0" y2="25" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="0" x2="25" y2="0" stroke="currentColor" strokeWidth="1" />
        <circle cx="0" cy="0" r="2.5" fill="currentColor" />
        <motion.line
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          x1="0" y1="50" x2="0" y2="80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4"
        />
      </motion.svg>

      <motion.svg
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute top-24 right-8 md:right-16 w-20 h-20 text-accent/8"
        viewBox="0 0 80 80"
      >
        <line x1="80" y1="0" x2="80" y2="25" stroke="currentColor" strokeWidth="1" />
        <line x1="80" y1="0" x2="55" y2="0" stroke="currentColor" strokeWidth="1" />
        <circle cx="80" cy="0" r="2.5" fill="currentColor" />
      </motion.svg>

      {/* Floating ghost watermark */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 3, -3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 right-16 md:right-32 text-accent/[0.02]"
      >
        <Ghost className="w-40 h-40 md:w-60 md:h-60" />
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, 60]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.97]);

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-between px-5 sm:px-6 md:px-10 lg:px-16 pb-10 md:pb-20 pt-20 md:pt-32 overflow-hidden">
      <BlueprintGrid />

      {/* Top: Status */}
      <motion.div style={{ opacity }} className="relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
          className="flex items-center gap-2.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-40 pulse-dot" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="mono text-[10px] text-muted uppercase tracking-[0.25em]">
            Ghost Development · Est. 02.2026 · Szczecin, PL
          </span>
        </motion.div>
      </motion.div>

      {/* Center: Main headline */}
      <motion.div style={{ opacity, y, scale }} className="relative z-10 flex-1 flex items-center">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-start">
            {/* Left: Big text */}
            <div className="lg:col-span-8">
              <h1>
                <span className="mb-2 block">
                  <TextReveal
                    text="Naprawiamy Linux."
                    className="text-[clamp(2.25rem,7.25vw,6.75rem)] leading-[0.92] font-bold tracking-[-0.03em] block"
                    delay={2}
                  />
                </span>
                <span className="mb-6 sm:mb-8 block">
                  <TextReveal
                    text="I tworzymy launchery."
                    className="text-[clamp(2.25rem,7.25vw,6.75rem)] leading-[0.92] font-bold tracking-[-0.03em] accent block"
                    delay={2.4}
                  />
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.8 }}
                className="text-muted text-[15px] leading-relaxed max-w-lg"
              >
                Diagnostyka i naprawa oprogramowania — Linux, Steam Deck,
                Windows. Nie formatujemy od razu. Zdalnie (RustDesk) lub
                stacjonarnie w Szczecinie. Tworzymy również launchery
                desktopowe i aplikacje.
              </motion.p>
            </div>

            {/* Right: Specs card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 2.2 }}
              className="lg:col-span-4 lg:mt-4"
            >
              <div className="border border-border-strong p-6 space-y-5 group hover:border-accent/20 transition-colors duration-500 relative overflow-hidden">
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <span className="mono text-[9px] text-muted uppercase tracking-[0.3em] block mb-1.5">Czas realizacji</span>
                  <span className="text-lg font-semibold">Do 24h</span>
                </div>
                <div className="h-px bg-border relative z-10" />
                <div className="relative z-10">
                  <span className="mono text-[9px] text-muted uppercase tracking-[0.3em] block mb-2">Systemy</span>
                  <div className="flex flex-wrap gap-1.5">
                    {["Arch", "Kali", "Ubuntu", "Debian", "SteamOS", "Windows"].map((t, i) => (
                      <motion.span
                        key={t}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 2.5 + i * 0.05 }}
                        className="mono text-[10px] text-accent/70 border border-accent/10 px-2 py-0.5 rounded-sm hover:border-accent/30 hover:text-accent transition-colors cursor-default"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>
                <div className="h-px bg-border relative z-10" />
                <div className="relative z-10">
                  <span className="mono text-[9px] text-muted uppercase tracking-[0.3em] block mb-1.5">Linux Help</span>
                  <span className="text-lg font-semibold">50 <span className="text-muted text-sm">PLN/h</span></span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom: Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 0.5 }}
        className="relative z-10 flex items-center justify-between"
      >
        <MagneticButton>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-3 text-muted/30"
          >
            <ArrowDown className="w-3.5 h-3.5" />
            <span className="mono text-[9px] uppercase tracking-[0.25em]">Scroll</span>
          </motion.div>
        </MagneticButton>

        <div className="hidden md:flex items-center gap-6 mono text-[9px] text-muted/20 uppercase tracking-[0.2em]">
          <span>Szczecin, PL</span>
          <span className="w-px h-3 bg-white/10" />
          <EmailModal>
            <span className="hover:text-accent/40 transition-colors cursor-pointer">kontakt.gd.Bartoszosiej@outlook.com</span>
          </EmailModal>
        </div>
      </motion.div>
    </section>
  );
}
