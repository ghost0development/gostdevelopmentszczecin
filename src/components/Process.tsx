"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Brief i analiza",
    desc: "Rozmawiamy o Twoim serwerze. Poznajemy infrastrukturę, graczy, problemy. Na tej podstawie planujemy architekturę launchera.",
    detail: "1–2 dni",
    icon: "01",
  },
  {
    num: "02",
    title: "Projekt UI/UX",
    desc: "Projektujemy interfejs launchera. Wireframe → hi-fi mockup → akceptacja. Dwa darmowe iteracje w cenie.",
    detail: "3–5 dni",
    icon: "02",
  },
  {
    num: "03",
    title: "Realizacja",
    desc: "Code. Cotygodniowe demo postępów. Pełna przejrzystość — masz dostęp do repozytorium i deploy previews.",
    detail: "10–18 dni",
    icon: "03",
  },
  {
    num: "04",
    title: "Testing i wdrożenie",
    desc: "Testy na prawdziwych graczach. Poprawki. Wdrożenie na serwer. Monitorowanie stabilności przez pierwszy miesiąc.",
    detail: "2–3 dni",
    icon: "04",
  },
  {
    num: "05",
    title: "Opieka techniczna",
    desc: "150 PLN/mies. i zapominasz o problemach. Aktualizacje, poprawki, nowe funkcje na request. Responsywność < 24h.",
    detail: "ciągłe",
    icon: "05",
  },
];

export default function Process() {
  return (
    <section id="proces" className="section">
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
            <span className="mono text-[10px] text-muted uppercase tracking-[0.3em]">Proces</span>
          </div>
          <h2 className="text-[clamp(2rem,4.5vw,4rem)] font-bold tracking-[-0.035em] leading-[1.05] max-w-xl">
            Od pomysłu do gotowego
            <br />
            <span className="accent">launchera.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line - animated */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute left-[11px] md:left-[15px] top-0 bottom-0 w-px bg-gradient-to-b from-accent/20 via-border to-border origin-top hidden md:block"
          />

          <div className="space-y-12 md:space-y-16">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 relative"
              >
                {/* Number dot */}
                <div className="md:col-span-1 flex items-start gap-4 md:gap-0">
                  <motion.span
                    whileHover={{ scale: 1.2 }}
                    className="relative z-10 w-[22px] h-[22px] md:w-[30px] md:h-[30px] rounded-full border border-border-strong bg-bg flex items-center justify-center group-hover:border-accent/40 group-hover:bg-accent/5 transition-all duration-300 cursor-default"
                  >
                    <span className="mono text-[9px] text-accent/50 group-hover:text-accent transition-colors duration-300">{s.num}</span>
                  </motion.span>
                </div>

                {/* Content */}
                <div className="md:col-span-6">
                  <h3 className="text-lg md:text-xl font-semibold tracking-[-0.01em] mb-2 group-hover:text-accent transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-[14px] text-muted leading-[1.7]">{s.desc}</p>
                </div>

                {/* Time */}
                <div className="md:col-span-3 md:col-start-10 flex md:justify-end">
                  <span className="mono text-[10px] text-muted/30 uppercase tracking-[0.2em] group-hover:text-muted/50 transition-colors">
                    {s.detail}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
