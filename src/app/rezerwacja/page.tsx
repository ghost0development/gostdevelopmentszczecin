import CalendlyTabs from "@/components/CalendlyTabs";
import Link from "next/link";
import { Ghost } from "lucide-react";

export const metadata = {
  title: "Rezerwacja spotkania | Ghost Development — Launcher Minecraft Szczecin",
  description: "Umów bezpłatną konsultację lub wycenę projektu launchera Minecraft. Wybierz termin spotkania online lub stacjonarnego w Szczecinie.",
};

export default function RezerwacjaPage() {
  return (
    <section className="min-h-screen px-6 md:px-10 lg:px-16 pt-32 md:pt-40 pb-20">
      <div className="max-w-[1320px] mx-auto">
        <Link href="/" className="flex items-center gap-2 mb-10">
          <Ghost className="w-4 h-4 text-accent" />
          <span className="mono text-sm font-bold">
            ghost<span className="accent">dev</span>
          </span>
        </Link>

        <span className="mono text-[10px] text-muted uppercase tracking-[0.3em] block mb-3">Rezerwacja</span>
        <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-[-0.03em] leading-[1] mb-4">
          Umów <span className="accent">spotkanie.</span>
        </h1>
        <p className="text-muted text-[15px] leading-relaxed max-w-lg mb-14">
          Wybierz typ spotkania i zarezerwuj termin. Pierwsza konsultacja
          jest zawsze bezpłatna.
        </p>

        <CalendlyTabs />
      </div>
    </section>
  );
}
