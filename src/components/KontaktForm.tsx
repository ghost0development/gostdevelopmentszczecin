"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, ArrowRight, Shield, Clock, Zap } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkgwzqkz";

export default function KontaktForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSent(true);
      } else {
        setError("Wystąpił błąd. Spróbuj ponownie lub napisz na Discord.");
      }
    } catch {
      setError("Brak połączenia. Sprawdź internet i spróbuj ponownie.");
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="border border-border-strong p-12 text-center"
      >
        <CheckCircle className="w-10 h-10 text-accent mx-auto mb-5" />
        <h3 className="text-xl font-semibold mb-2">Wiadomość wysłana</h3>
        <p className="text-sm text-muted mb-6">
          Odpowiemy w ciągu 24 godzin. Dziękujemy za kontakt!
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-sm">
          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
          <span className="mono text-[10px] text-accent uppercase tracking-[0.2em]">
            Status: Oczekuje na odpowiedź
          </span>
        </div>
      </motion.div>
    );
  }

  return (
    <div>
      {/* Header badge */}
      <div className="flex items-center gap-3 mb-8">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-sm">
          <Zap className="w-3 h-3 text-accent" />
          <span className="mono text-[10px] text-accent uppercase tracking-[0.2em]">
            Otwórni na współpracę
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot field - hidden from users, catches bots */}
        <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

        {/* Subject line for email */}
        <input type="hidden" name="_subject" value="Nowa wiadomość z ghostdev.pl" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="mono text-[9px] text-muted/40 uppercase tracking-[0.3em] block mb-2.5">
              Nazwa / Nick
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3.5 bg-surface border border-border-strong rounded-sm text-sm text-text placeholder:text-muted/25 focus:outline-none focus:border-accent/25 transition-colors"
              placeholder="Twoja nazwa lub nick"
            />
          </div>
          <div>
            <label className="mono text-[9px] text-muted/40 uppercase tracking-[0.3em] block mb-2.5">
              Email kontaktowy
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3.5 bg-surface border border-border-strong rounded-sm text-sm text-text placeholder:text-muted/25 focus:outline-none focus:border-accent/25 transition-colors"
              placeholder="twoj@email.pl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="mono text-[9px] text-muted/40 uppercase tracking-[0.3em] block mb-2.5">
              Nazwa serwera
            </label>
            <input
              type="text"
              name="server"
              className="w-full px-4 py-3.5 bg-surface border border-border-strong rounded-sm text-sm text-text placeholder:text-muted/25 focus:outline-none focus:border-accent/25 transition-colors"
              placeholder="np. MojeMC.pl"
            />
          </div>
          <div>
            <label className="mono text-[9px] text-muted/40 uppercase tracking-[0.3em] block mb-2.5">
              Typ serwera
            </label>
            <select
              name="type"
              className="w-full px-4 py-3.5 bg-surface border border-border-strong rounded-sm text-sm text-text focus:outline-none focus:border-accent/25 transition-colors appearance-none cursor-pointer"
            >
              <option value="">Wybierz typ</option>
              <option value="vanilla">Vanilla</option>
              <option value="spigot">Spigot / Paper</option>
              <option value="forge">Forge</option>
              <option value="fabric">Fabric</option>
              <option value="bungee">BungeeCord / Velocity</option>
              <option value="inny">Inny</option>
            </select>
          </div>
        </div>

        <div>
          <label className="mono text-[9px] text-muted/40 uppercase tracking-[0.3em] block mb-2.5">
            Liczba graczy online (średnio)
          </label>
          <input
            type="text"
            name="players"
            className="w-full px-4 py-3.5 bg-surface border border-border-strong rounded-sm text-sm text-text placeholder:text-muted/25 focus:outline-none focus:border-accent/25 transition-colors"
            placeholder="np. 50-100"
          />
        </div>

        <div>
          <label className="mono text-[9px] text-muted/40 uppercase tracking-[0.3em] block mb-2.5">
            Opisz czego potrzebujesz
          </label>
          <textarea
            name="message"
            required
            rows={5}
            className="w-full px-4 py-3.5 bg-surface border border-border-strong rounded-sm text-sm text-text placeholder:text-muted/25 focus:outline-none focus:border-accent/25 transition-colors resize-none"
            placeholder="Opisz swój serwer, jakie problemy chcesz rozwiązać, czego oczekujesz od launchera..."
          />
        </div>

        {error && (
          <div className="px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-sm">
            <p className="text-sm text-red-400">{error}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="group w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-accent text-bg text-sm font-semibold rounded-sm hover:shadow-[0_0_40px_rgba(200,255,0,0.2)] transition-all disabled:opacity-40"
        >
          {loading ? "Wysyłanie..." : "Wyślij wiadomość"}
          <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>

        <p className="mono text-[9px] text-muted/20 uppercase tracking-[0.2em] text-center">
          Odpowiadamy w ciągu 24 godzin · Twoje dane są bezpieczne
        </p>
      </form>

      {/* Trust signals */}
      <div className="mt-10 grid grid-cols-3 gap-px bg-border">
        {[
          { icon: Shield, label: "Bezpieczne dane", detail: "Nie udostępniamy Twoich danych" },
          { icon: Clock, label: "Odpowiedź < 24h", detail: "Gwarantujemy szybki kontakt" },
          { icon: ArrowRight, label: "Konsultacja gratis", detail: "Pierwsza rozmowa bez opłat" },
        ].map((item) => (
          <div key={item.label} className="bg-bg p-4 md:p-5 text-center">
            <item.icon className="w-4 h-4 text-accent/40 mx-auto mb-2" />
            <span className="text-[11px] font-medium block mb-0.5">{item.label}</span>
            <span className="mono text-[8px] text-muted/30 uppercase tracking-[0.15em]">{item.detail}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
