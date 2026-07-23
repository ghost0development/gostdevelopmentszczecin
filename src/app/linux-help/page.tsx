import type { Metadata } from "next";
import LinuxHelpContent from "@/components/LinuxHelpContent";

export const metadata: Metadata = {
  title: "Linux Help — Pomoc z Linuxem 50 PLN/h | Ghost Development Szczecin",
  description:
    "Linux Help od Ghost Development: pomoc z każdym problemem Linux — konfiguracja, bezpieczeństwo, skrypty, naprawa. 50 PLN/h, obszerne problemy — cena indywidualna.",
  alternates: {
    canonical: "https://ghost0development.github.io/gostdevelopmentszczecin/linux-help",
  },
  openGraph: {
    title: "Linux Help | Ghost Development — Szczecin",
    description: "Pomoc z Linuxem: konfiguracja, bezpieczeństwo, skrypty, naprawa. 50 PLN/h.",
    type: "website",
    locale: "pl_PL",
  },
};

export default function LinuxHelpPage() {
  return <LinuxHelpContent />;
}
