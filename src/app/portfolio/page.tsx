import type { Metadata } from "next";
import PortfolioContent from "@/components/PortfolioContent";

export const metadata: Metadata = {
  title: "Portfolio — Realizacje launcherów Minecraft, stron, aplikacji | Ghost Development Szczecin",
  description: "Portfolio Ghost Development: dedykowane launchery desktopowe dla serwerów Minecraft, strony internetowe, aplikacje desktopowe. Zobacz nasze realizacje.",
  openGraph: {
    title: "Portfolio | Ghost Development — Szczecin",
    description: "Nasze realizacje — launchery Minecraft, strony, aplikacje desktopowe.",
    type: "website",
    locale: "pl_PL",
  },
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
