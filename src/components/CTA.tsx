"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { MagneticButton } from "@/components/FX";
import EmailModal from "@/components/EmailModal";

export default function CTA() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative border border-border-strong p-10 md:p-16 lg:p-20 overflow-hidden group"
        >
          {/* Animated background glow */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.02, 0.04, 0.02],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent rounded-full blur-[150px] pointer-events-none"
          />

          {/* Grid lines */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <svg className="absolute inset-0 w-full h-full opacity-[0.015]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#c8ff00" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-grid)" />
            </svg>
          </div>

          <div className="relative z-10 max-w-2xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <span className="mono text-[10px] text-muted uppercase tracking-[0.3em] block mb-6">
                Gotowy?
              </span>
            </motion.div>

            <div className="overflow-hidden mb-2">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
                className="text-[clamp(2.5rem,5vw,5.5rem)] font-bold tracking-[-0.04em] leading-[0.95]"
              >
                Zmień swój serwer
              </motion.h2>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
                className="text-[clamp(2.5rem,5vw,5.5rem)] font-bold tracking-[-0.04em] leading-[0.95]"
              >
                <span className="accent">już dziś.</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-muted text-[15px] leading-relaxed max-w-md mb-10"
            >
              Pierwsza konsultacja jest bezpłatna. Opowiedz nam o swoim
              serwerze, a my pokażemy, co możemy dla Ciebie zrobić.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start gap-3"
            >
              <MagneticButton>
                <Link
                  href="/rezerwacja"
                  className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-accent text-bg text-sm font-semibold rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(200,255,0,0.25)]"
                >
                  <span className="absolute inset-0 bg-white/0 group-hover/btn:bg-white/10 transition-colors duration-300" />
                  <span className="relative z-10">Umów spotkanie</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 relative z-10" />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  href="/kontakt"
                  className="group/btn relative inline-flex items-center gap-3 px-8 py-4 text-sm text-muted border border-border rounded-sm hover:border-accent/30 hover:text-text transition-all duration-300"
                >
                  <span>Zamów launcher</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                </Link>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Corner decoration */}
          <svg className="absolute bottom-6 right-6 w-20 h-20 text-accent/5 group-hover:text-accent/10 transition-colors duration-500" viewBox="0 0 80 80">
            <line x1="80" y1="0" x2="80" y2="30" stroke="currentColor" strokeWidth="1" />
            <line x1="80" y1="80" x2="50" y2="80" stroke="currentColor" strokeWidth="1" />
            <circle cx="80" cy="80" r="2" fill="currentColor" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
