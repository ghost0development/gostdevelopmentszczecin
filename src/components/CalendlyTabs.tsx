"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import { MessageCircle, FileText, MapPin } from "lucide-react";

const meetings = [
  {
    id: "konsultacja",
    title: "Konsultacja",
    time: "15–30 min",
    price: "Bezpłatna",
    desc: "Krótka rozmowa o Twoim pomyśle. Poznajemy potrzeby, odpowiadamy na pytania.",
    url: "https://calendly.com/ghost-development-info/konsultacja",
    icon: MessageCircle,
  },
  {
    id: "wycena",
    title: "Wycena projektu",
    time: "30–60 min",
    price: "Bezpłatna",
    desc: "Szczegółowa dyskusja o projekcie. Omawiamy zakres, technologię, harmonogram i cenę.",
    url: "https://calendly.com/ghost-development-info/wycena-projektu",
    icon: FileText,
  },
  {
    id: "stacjonarne",
    title: "Spotkanie stacjonarne",
    time: "30–60 min",
    price: "Bezpłatna",
    desc: "Spotkanie na żywo we Szczecinie. Twarzą w twarz omawiamy szczegóły projektu.",
    url: "https://calendly.com/ghost-development-info/spotkanie-stacjonarne",
    icon: MapPin,
  },
];

export default function CalendlyTabs() {
  const [active, setActive] = useState(0);

  return (
    <div>
      {/* Tab buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        {meetings.map((m, i) => {
          const Icon = m.icon;
          const isActive = i === active;
          return (
            <button
              key={m.id}
              onClick={() => setActive(i)}
              className={`relative text-left p-5 border transition-all duration-300 ${
                isActive
                  ? "border-accent bg-accent/[0.04]"
                  : "border-border-strong hover:border-accent/20 bg-transparent"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="calendly-tab"
                  className="absolute inset-0 border border-accent bg-accent/[0.04]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <div className="relative z-10">
                <div className="flex items-center gap-2.5 mb-2">
                  <Icon className={`w-4 h-4 ${isActive ? "text-accent" : "text-muted/40"} transition-colors`} />
                  <span className="text-sm font-semibold">{m.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="mono text-[9px] text-muted/40 uppercase tracking-[0.2em]">{m.time}</span>
                  <span className="w-1 h-1 rounded-full bg-muted/20" />
                  <span className="mono text-[9px] text-muted/40 uppercase tracking-[0.2em]">{m.price}</span>
                </div>
                <p className="text-[12px] text-muted mt-2 leading-relaxed hidden sm:block">{m.desc}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Calendly embed */}
      <div className="border border-border-strong overflow-hidden h-[500px] sm:h-[600px] md:h-[680px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full h-full"
          >
            <CalendlyEmbed url={meetings[active].url} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
