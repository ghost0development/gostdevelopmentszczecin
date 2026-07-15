"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, X, ExternalLink } from "lucide-react";

const EMAIL = "kontakt.gd.Bartoszosiej@outlook.com";
const SUBJECT = encodeURIComponent("Współpraca — Ghost Development");
const BODY = encodeURIComponent("Cześć,\n\nChciałbym porozmawiać o launcherze dla mojego serwera.\n\nPozdrawiam,");

const clients = [
  {
    name: "Gmail",
    color: "#EA4335",
    bg: "bg-[#EA4335]/10",
    border: "border-[#EA4335]/20",
    hoverBorder: "hover:border-[#EA4335]/40",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path d="M2 6L12 13L22 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    url: `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${SUBJECT}&body=${BODY}`,
  },
  {
    name: "Outlook",
    color: "#0078D4",
    bg: "bg-[#0078D4]/10",
    border: "border-[#0078D4]/20",
    hoverBorder: "hover:border-[#0078D4]/40",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    url: `https://outlook.live.com/mail/0/deeplink/compose?to=${EMAIL}&subject=${SUBJECT}&body=${BODY}`,
  },
  {
    name: "Yahoo Mail",
    color: "#6001D2",
    bg: "bg-[#6001D2]/10",
    border: "border-[#6001D2]/20",
    hoverBorder: "hover:border-[#6001D2]/40",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path d="M4 4L10 12L14 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 4L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4 20H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    url: `https://mail.yahoo.com/d/compose?to=${EMAIL}&subject=${SUBJECT}&body=${BODY}`,
  },
  {
    name: "Domyślna aplikacja",
    color: "#c8ff00",
    bg: "bg-accent/10",
    border: "border-accent/20",
    hoverBorder: "hover:border-accent/40",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    url: `mailto:${EMAIL}?subject=${SUBJECT}&body=${BODY}`,
  },
];

function EnvelopeAnimation({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="relative w-32 h-28 mx-auto mb-5">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="absolute inset-0 border-2 border-accent/30 rounded-sm bg-accent/5"
      />
      <motion.div
        initial={{ rotateX: 0 }}
        animate={{ rotateX: isOpen ? 180 : 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="absolute top-0 left-0 right-0 h-14 origin-top"
        style={{ perspective: 400 }}
      >
        <div className="w-full h-full border-2 border-accent/30 bg-surface" style={{
          clipPath: "polygon(0 0, 50% 100%, 100% 0)"
        }} />
      </motion.div>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: isOpen ? -35 : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.7, ease: [0.33, 1, 0.68, 1] }}
        className="absolute top-2 left-4 right-4 h-16 border border-accent/20 bg-bg rounded-sm flex items-center justify-center"
      >
        <div className="text-center">
          <div className="w-8 h-0.5 bg-accent/40 mx-auto mb-2 rounded-full" />
          <div className="w-12 h-0.5 bg-accent/20 mx-auto rounded-full" />
        </div>
      </motion.div>
      <svg className="absolute -bottom-1 -right-1 w-4 h-4 text-accent/20" viewBox="0 0 16 16">
        <line x1="16" y1="0" x2="16" y2="16" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="16" x2="16" y2="16" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  );
}

export default function EmailModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [step, setStep] = useState<"intro" | "pick">("intro");

  const handleCopy = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpen = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
    setOpen(false);
    setStep("intro");
  };

  const handleClose = () => {
    setOpen(false);
    setStep("intro");
  };

  return (
    <>
      <div onClick={() => setOpen(true)} className="cursor-pointer">
        {children}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={handleClose}
          >
            <div className="absolute inset-0 bg-bg/80 backdrop-blur-sm" />

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
              className="relative border border-border-strong bg-bg p-8 md:p-10 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-1.5 text-muted hover:text-text transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <AnimatePresence mode="wait">
                {step === "intro" ? (
                  <motion.div
                    key="intro"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                  >
                    <EnvelopeAnimation isOpen={open} />

                    <div className="text-center mb-6">
                      <span className="mono text-[9px] text-muted/40 uppercase tracking-[0.3em] block mb-2">
                        Napisz do nas
                      </span>
                      <h3 className="text-lg font-semibold">Wyślij wiadomość</h3>
                    </div>

                    <div className="border border-border-strong p-4 mb-6 bg-surface">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-[14px] font-medium break-all">{EMAIL}</span>
                        <button
                          onClick={handleCopy}
                          className="shrink-0 p-2 border border-border hover:border-accent/30 rounded-sm transition-colors"
                        >
                          {copied ? <Check className="w-3.5 h-3.5 text-accent" /> : <Copy className="w-3.5 h-3.5 text-muted" />}
                        </button>
                      </div>
                      {copied && (
                        <motion.span
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mono text-[9px] text-accent uppercase tracking-[0.2em] block mt-2"
                        >
                          Skopiowano do schowka
                        </motion.span>
                      )}
                    </div>

                    <button
                      onClick={() => setStep("pick")}
                      className="group w-full flex items-center justify-center gap-2 px-4 py-3.5 bg-accent text-bg text-sm font-semibold rounded-sm hover:shadow-[0_0_30px_rgba(200,255,0,0.2)] transition-all"
                    >
                      Otwórz klienta email
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="pick"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <button
                        onClick={() => setStep("intro")}
                        className="p-1.5 text-muted hover:text-text transition-colors"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M15 18L9 12L15 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      <div>
                        <span className="mono text-[9px] text-muted/40 uppercase tracking-[0.3em] block mb-0.5">
                          Wybierz klienta
                        </span>
                        <h3 className="text-base font-semibold">Gdzie chcesz napisać?</h3>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {clients.map((client, i) => (
                        <motion.button
                          key={client.name}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.25, delay: i * 0.05 }}
                          onClick={() => handleOpen(client.url)}
                          className={`w-full flex items-center gap-4 p-4 border ${client.border} ${client.hoverBorder} ${client.bg} rounded-sm transition-all duration-200 group`}
                        >
                          <span className="text-muted group-hover:text-text transition-colors">
                            {client.icon}
                          </span>
                          <span className="text-sm font-medium text-left flex-1">{client.name}</span>
                          <ExternalLink className="w-3.5 h-3.5 text-muted/30 group-hover:text-muted transition-colors" />
                        </motion.button>
                      ))}
                    </div>

                    <div className="mt-5 pt-4 border-t border-border">
                      <button
                        onClick={handleCopy}
                        className="w-full flex items-center justify-center gap-2 py-2.5 text-sm text-muted hover:text-text transition-colors"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-accent" />
                            Skopiowano email
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            Lub skopiuj adres email
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <svg className="absolute top-3 left-3 w-4 h-4 text-accent/10" viewBox="0 0 16 16">
                <line x1="0" y1="0" x2="0" y2="8" stroke="currentColor" strokeWidth="1" />
                <line x1="0" y1="0" x2="8" y2="0" stroke="currentColor" strokeWidth="1" />
              </svg>
              <svg className="absolute bottom-3 right-3 w-4 h-4 text-accent/10" viewBox="0 0 16 16">
                <line x1="16" y1="16" x2="16" y2="8" stroke="currentColor" strokeWidth="1" />
                <line x1="16" y1="16" x2="8" y2="16" stroke="currentColor" strokeWidth="1" />
              </svg>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
