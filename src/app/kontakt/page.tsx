import KontaktForm from "@/components/KontaktForm";
import EmailModal from "@/components/EmailModal";
import LeafletMap from "@/components/LeafletMap";
import Link from "next/link";
import { Ghost, Mail, Phone, MapPin } from "lucide-react";

export const metadata = {
  title: "Kontakt | Ghost Development",
};

function EmailCard() {
  return (
    <EmailModal>
      <div className="group block relative border border-border-strong p-6 hover:border-accent/20 transition-all duration-500 overflow-hidden">
        {/* Background glow on hover */}
        <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/[0.02] transition-colors duration-500" />

        {/* Grid lines */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="email-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#c8ff00" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#email-grid)" opacity="0.15" />
          </svg>
        </div>

        <div className="relative z-10">
          {/* Label */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-accent/60 group-hover:text-accent transition-colors duration-300" />
              <span className="mono text-[9px] text-muted/40 uppercase tracking-[0.3em]">Email</span>
            </div>
            <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="mono text-[8px] text-muted/30 uppercase tracking-[0.15em]">Kliknij aby otworzyć</span>
            </div>
          </div>

          {/* Email address */}
          <div className="flex items-center gap-3">
            <span className="text-[17px] md:text-[20px] font-semibold tracking-[-0.01em] text-text group-hover:text-accent transition-colors duration-300 break-all">
              kontakt.gd.Bartoszosiej@outlook.com
            </span>
          </div>

          {/* Bottom decoration line */}
          <div className="mt-4 h-px bg-border group-hover:bg-accent/20 transition-colors duration-500" />
          <div className="mt-3 flex items-center gap-4">
            <span className="mono text-[8px] text-muted/20 uppercase tracking-[0.2em]">Odpowiadamy w ciągu 24h</span>
            <span className="w-1 h-1 bg-accent/30 rounded-full" />
            <span className="mono text-[8px] text-muted/20 uppercase tracking-[0.2em]">Pierwsza konsultacja gratis</span>
          </div>
        </div>

        {/* Corner decoration */}
        <svg className="absolute top-3 right-3 w-6 h-6 text-accent/0 group-hover:text-accent/10 transition-colors duration-500" viewBox="0 0 24 24">
          <line x1="24" y1="0" x2="24" y2="10" stroke="currentColor" strokeWidth="1" />
          <line x1="24" y1="0" x2="14" y2="0" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
    </EmailModal>
  );
}

export default function KontaktPage() {
  return (
    <section className="min-h-screen px-6 md:px-10 lg:px-16 pt-32 md:pt-40 pb-20">
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-6">
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-2 mb-10">
              <Ghost className="w-4 h-4 text-accent" />
              <span className="mono text-sm font-bold">
                ghost<span className="accent">dev</span>
              </span>
            </Link>

            <span className="mono text-[10px] text-muted uppercase tracking-[0.3em] block mb-3">Kontakt</span>
            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-[-0.03em] leading-[1] mb-6">
              Porozmawiajmy
              <br />
              <span className="accent">o Twoim serwerze.</span>
            </h1>
            <p className="text-muted text-[15px] leading-relaxed max-w-md mb-8">
              Jesteśmy otwarci na współpracę. Niezależnie od wielkości
              Twojego serwera — pomożemy stworzyć launcher, który
              stanie się Twoją wizytówką.
            </p>

            {/* Collaboration banner */}
            <div className="border border-accent/20 bg-accent/5 p-5 mb-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                <span className="mono text-[10px] text-accent uppercase tracking-[0.2em]">
                  Otwórni na współpracę
                </span>
              </div>
              <p className="text-[13px] text-muted leading-relaxed">
                Aktualnie przyjmujemy nowe zlecenia. Pierwsza konsultacja
                jest bezpłatna — opowiedz nam o swoim serwerze.
              </p>
            </div>

            {/* Email card — the star */}
            <EmailCard />

            {/* Other contact info */}
            <div className="mt-8 space-y-5">
              <div>
                <span className="mono text-[9px] text-muted/40 uppercase tracking-[0.3em] block mb-1.5">Telefon</span>
                <a href="tel:+48508302053" className="text-[15px] hover:text-accent transition-colors inline-flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-accent/40" />
                  +48 508 302 053
                </a>
              </div>
              <div>
                <span className="mono text-[9px] text-muted/40 uppercase tracking-[0.3em] block mb-1.5">Discord</span>
                <span className="text-[15px]">ghostdev</span>
              </div>
              <div>
                <span className="mono text-[9px] text-muted/40 uppercase tracking-[0.3em] block mb-1.5">Adres</span>
                <span className="text-[15px] inline-flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-accent/40" />
                  ul. Asnyka 3/22, 71-526 Szczecin
                </span>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 h-[300px]">
              <LeafletMap />
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <KontaktForm />
          </div>
        </div>
      </div>
    </section>
  );
}
