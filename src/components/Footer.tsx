"use client";

import Link from "next/link";
import { Ghost } from "lucide-react";
import EmailModal from "@/components/EmailModal";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-12">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Ghost className="w-4 h-4 text-accent" />
              <span className="mono text-sm font-bold">
                ghost<span className="accent">dev</span>
              </span>
            </Link>
            <p className="text-[13px] text-muted max-w-sm leading-relaxed">
              Ghost Development — tworzymy dedykowane launchery desktopowe
              dla serwerów Minecraft. Od projektu po wdrożenie i opiekę
              techniczną.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <span className="mono text-[9px] text-muted/30 uppercase tracking-[0.3em] block mb-3">Nawigacja</span>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-[13px] text-muted hover:text-text transition-colors">Strona główna</Link>
              <Link href="/#funkcje" className="text-[13px] text-muted hover:text-text transition-colors">Usługi</Link>
              <Link href="/#cennik" className="text-[13px] text-muted hover:text-text transition-colors">Cennik</Link>
              <Link href="/rezerwacja" className="text-[13px] text-muted hover:text-text transition-colors">Rezerwacja</Link>
              <Link href="/kontakt" className="text-[13px] text-muted hover:text-text transition-colors">Kontakt</Link>
            </div>
          </div>

          <div className="md:col-span-3">
            <span className="mono text-[9px] text-muted/30 uppercase tracking-[0.3em] block mb-3">Kontakt</span>
            <div className="flex flex-col gap-2">
              <EmailModal>
                <span className="text-[13px] text-muted hover:text-text transition-colors cursor-pointer break-all">
                  kontakt.gd.Bartoszosiej@outlook.com
                </span>
              </EmailModal>
              <span className="text-[13px] text-muted">+48 508 302 053</span>
              <span className="text-[13px] text-muted">Discord: ghostdev</span>
              <span className="text-[13px] text-muted">Szczecin, PL</span>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[11px] text-muted/25">
            &copy; {new Date().getFullYear()} Ghost Development. Wszelkie prawa zastrzeżone.
          </p>
          <p className="mono text-[9px] text-muted/15 uppercase tracking-[0.2em]">ghostdev.pl</p>
        </div>
      </div>
    </footer>
  );
}
