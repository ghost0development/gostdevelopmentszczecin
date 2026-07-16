import type { Metadata } from "next";
import CennikContent from "@/components/CennikContent";

export const metadata: Metadata = {
  title: "Cennik — Launchery, Strony, Aplikacje desktopowe | Ghost Development Szczecin",
  description:
    "Cennik usług Ghost Development: launchery Minecraft od 1500 PLN, strony internetowe od 1500 PLN, aplikacje desktopowe od 2000 PLN, programy i pluginy od 1500 PLN.",
  openGraph: {
    title: "Cennik | Ghost Development — Szczecin",
    description: "Launchery od 1500 PLN, strony od 1500 PLN, aplikacje desktopowe od 2000 PLN.",
    type: "website",
    locale: "pl_PL",
  },
};

export default function CennikPage() {
  return <CennikContent />;
}
