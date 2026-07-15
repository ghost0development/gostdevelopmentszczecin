"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Ghost, Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "/#co-robimy", label: "Usługi" },
  { href: "/#proces", label: "Proces" },
  { href: "/#cennik", label: "Cennik" },
  { href: "/rezerwacja", label: "Rezerwacja" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const scrollTo = useCallback((href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#")) {
      const el = document.getElementById(href.slice(2));
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-bg/85 backdrop-blur-xl border-b border-border" : ""
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 lg:px-16 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="relative">
              <Ghost className="w-5 h-5 text-accent transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </span>
            <span className="mono text-sm font-bold tracking-tight">
              ghost<span className="accent">dev</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.href.startsWith("/#") ? (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="relative px-4 py-2 text-[13px] text-muted hover:text-text transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-4 right-4 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-[13px] text-muted hover:text-text transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-4 right-4 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              )
            )}
            <Link
              href="/rezerwacja"
              className="ml-4 px-5 py-2 text-[13px] font-semibold bg-accent text-bg rounded-sm hover:shadow-[0_0_24px_rgba(200,255,0,0.25)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Umów spotkanie
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-muted hover:text-text transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 mx-4 md:hidden"
          >
            <div className="bg-surface border border-border-strong rounded-xl p-4 backdrop-blur-xl">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="w-full text-left px-4 py-3 text-sm text-muted hover:text-text hover:bg-white/[0.02] rounded-lg transition-colors flex items-center justify-between"
                >
                  {link.label}
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100" />
                </button>
              ))}
              <div className="mt-2 pt-2 border-t border-border space-y-1">
                <Link
                  href="/rezerwacja"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-4 py-3 text-sm font-semibold bg-accent text-bg rounded-lg"
                >
                  Umów spotkanie
                </Link>
                <Link
                  href="/kontakt"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-4 py-3 text-sm text-muted border border-border rounded-lg hover:text-text transition-colors"
                >
                  Kontakt
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
