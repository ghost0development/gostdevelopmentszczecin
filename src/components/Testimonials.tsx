"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Radosław K.",
    role: "Właściciel Redstone-MC.PL",
    text: "Szukałem kogoś, kto stworzy launcher od zera. Ghost Dev nie użył szablonu — zrobili dokładnie to, czego potrzebowałem. Gracze są zachwyceni.",
    stars: 5,
  },
  {
    name: "Tomasz M.",
    role: "Admin serwera PvP",
    text: "Wcześniej używaliśmy generycznego launchera. Po zmianie na dedykowany — 40% więcej graczy wraca regularnie. Różnica jest ogromna.",
    stars: 5,
  },
  {
    name: "Arek L.",
    role: "Owner networku serwerów",
    text: "Profesjonalne podejście, czysty kod, terminowość. To rzadkość w tej branży. Polecam każdemu, kto traktuje swój serwera poważnie.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section">
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
            <span className="mono text-[10px] text-muted uppercase tracking-[0.3em]">Opinie</span>
          </div>
          <h2 className="text-[clamp(2rem,4.5vw,4rem)] font-bold tracking-[-0.035em] leading-[1.05]">
            Mówią <span className="accent">o nas.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-bg p-8 md:p-10 flex flex-col group hover:bg-surface/30 transition-colors duration-500"
            >
              <div className="flex gap-0.5 mb-6">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <motion.div
                    key={si}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + si * 0.05, type: "spring" }}
                  >
                    <Star className="w-3.5 h-3.5 text-accent fill-accent" />
                  </motion.div>
                ))}
              </div>
              <p className="text-[14px] text-muted leading-[1.8] flex-1 mb-8 group-hover:text-muted/90 transition-colors">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <span className="text-sm font-semibold block group-hover:text-accent transition-colors duration-300">{t.name}</span>
                <span className="mono text-[10px] text-muted/40 uppercase tracking-[0.15em]">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
