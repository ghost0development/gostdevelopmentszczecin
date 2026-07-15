"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, X } from "lucide-react";

const meetingTypes = [
  { label: "Konsultacja (15-30 min)", url: "https://calendly.com/ghost-development-info/konsultacja" },
  { label: "Wycena projektu (30-60 min)", url: "https://calendly.com/ghost-development-info/wycena-projektu" },
  { label: "Spotkanie stacjonarne", url: "https://calendly.com/ghost-development-info/spotkanie-stacjonarne" },
];

export default function CalendlyBadge() {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!loaded) return null;

  return (
    <div className="fixed bottom-20 right-6 z-40 hidden md:block">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="absolute bottom-14 right-0 w-64 bg-surface border border-border-strong rounded-lg p-4 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="mono text-[9px] text-muted uppercase tracking-[0.2em]">Wybierz typ spotkania</span>
              <button onClick={() => setOpen(false)} className="text-muted hover:text-text transition-colors">
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="space-y-1.5">
              {meetingTypes.map((m) => (
                <a
                  key={m.label}
                  href={m.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2.5 text-sm text-muted hover:text-text hover:bg-white/[0.03] rounded transition-colors"
                >
                  {m.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="w-12 h-12 bg-accent text-bg rounded-full flex items-center justify-center shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-shadow"
      >
        <Calendar className="w-5 h-5" />
      </motion.button>
    </div>
  );
}
