"use client";

import { motion } from "framer-motion";
import { Ghost, ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

function FloatingGhost() {
  return (
    <div className="relative w-48 h-48 mx-auto mb-8">
      {/* Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-accent rounded-full blur-[60px]"
      />

      {/* Ghost */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Ghost className="w-24 h-24 text-accent/60" />
      </motion.div>

      {/* Eyes */}
      <motion.div
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[35%] left-1/2 -translate-x-1/2 flex gap-4"
      >
        <div className="w-2 h-2 bg-bg rounded-full" />
        <div className="w-2 h-2 bg-bg rounded-full" />
      </motion.div>

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30 - i * 10],
            x: [0, (i % 2 === 0 ? 1 : -1) * (5 + i * 3)],
            opacity: [0.4, 0],
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeOut",
          }}
          className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-accent/30 rounded-full"
        />
      ))}
    </div>
  );
}

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <FloatingGhost />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <span className="mono text-[10px] text-muted/40 uppercase tracking-[0.3em] block mb-3">
          Błąd 404
        </span>
        <h1 className="text-[clamp(2rem,5vw,4rem)] font-bold tracking-[-0.03em] leading-[1] mb-4">
          Ta strona <span className="accent">zduchowała.</span>
        </h1>
        <p className="text-muted text-[15px] leading-relaxed max-w-md mx-auto mb-10">
          Strona, której szukasz, nie istnieje lub została przeniesiona.
          Może duch ją zabrał?
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg text-sm font-semibold rounded-sm hover:shadow-[0_0_30px_rgba(200,255,0,0.2)] transition-all"
          >
            <Home className="w-4 h-4" />
            Strona główna
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm text-muted border border-border rounded-sm hover:border-accent/30 hover:text-text transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Wróć
          </button>
        </div>
      </motion.div>

      {/* Decorative grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.015]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="404-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#c8ff00" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#404-grid)" />
        </svg>
      </div>
    </section>
  );
}
