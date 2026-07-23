"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Ile kosztuje naprawa Linux?",
    a: "Linux Help kosztuje 50 PLN/h za standardowe problemy (konfiguracja, sterowniki, instalacja). Złożone sprawy — uszkodzone partycje, pętle initramfs, odbudowa drzewa zależności — wycena indywidualna po diagnozie.",
  },
  {
    q: "Co jeśli Linux nie wstaje po aktualizacji?",
    a: "To najczęstszy problem. Nie formatuję — naprawiam. Odbudowuję drzewa zależności, naprawiam partycje, przywracam system z pętli initramfs. W 95% przypadków system wstaje bez utraty danych.",
  },
  {
    q: "Naprawiacie Steam Deck?",
    a: "Tak. Steam Deck to miniaturowy PC z Arch Linuxem. Naprawiamy problemy z SteamOS, aktualizacjami, dual bootem, konfliktami z grami. Zdalnie lub stacjonarnie w Szczecinie.",
  },
  {
    q: "Ile trwa realizacja launchera?",
    a: "Standardowo 2–4 tygodnie, zależnie od złożoności. Przed rozpoczęciem podajemy dokładny harmonogram. Cotygodniowe demo postępów — zawsze wiesz, na czym stoimy.",
  },
  {
    q: "Dlaczego cenicie 1500 PLN, a nie mniej?",
    a: "To nie jest szablon z ThemeForest. Każdy element projektujemy od zera. Dostajesz dedykowaną aplikację desktopową, nie modyfikację gotowca. Cena odzwierciedla jakość kodu i czas pracy.",
  },
  {
    q: "Czy obsługujecie cracked serwery?",
    a: "Nie. Tworzymy launchery dla serwerów z legalną kopią gry. To kwestia bezpieczeństwa naszych klientów i graczy.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="border-b border-border"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 md:py-7 text-left group"
      >
        <span className="text-[15px] md:text-[17px] font-medium pr-8 group-hover:text-accent transition-colors duration-300">
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="shrink-0 w-8 h-8 rounded-sm border border-border flex items-center justify-center text-muted group-hover:border-accent/30 group-hover:text-accent transition-colors duration-300"
        >
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-7 text-[14px] text-muted leading-[1.8] max-w-2xl">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-28"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, type: "spring" }}
                  className="dot"
                />
                <span className="mono text-[10px] text-muted uppercase tracking-[0.3em]">FAQ</span>
              </div>
              <h2 className="text-[clamp(2rem,4.5vw,4rem)] font-bold tracking-[-0.035em] leading-[1.05]">
                Pytania
                <br />
                <span className="text-muted">i odpowiedzi.</span>
              </h2>
            </motion.div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            {faqs.map((faq, i) => (
              <FAQItem key={faq.q} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
