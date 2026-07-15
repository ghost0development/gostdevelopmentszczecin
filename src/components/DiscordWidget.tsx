"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, MessageCircle } from "lucide-react";
import Image from "next/image";

interface WidgetData {
  name: string;
  presence_count: number;
  instant_invite: string;
  channels: number;
  members: number;
}

const fallback: WidgetData = {
  name: "Ghost Development",
  presence_count: 0,
  instant_invite: "https://discord.gg/jmb5uW24h",
  channels: 0,
  members: 0,
};

export default function DiscordWidget() {
  const [data, setData] = useState<WidgetData>(fallback);

  useEffect(() => {
    fetch("/discord-data.json")
      .then((r) => (r.ok ? r.json() : null))
      .then((d: WidgetData | null) => d && setData(d))
      .catch(() => {});
  }, []);

  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, type: "spring" }}
              className="dot"
            />
            <span className="mono text-[10px] text-muted uppercase tracking-[0.3em]">Discord</span>
          </div>
          <h2 className="text-[clamp(2rem,4.5vw,4rem)] font-bold tracking-[-0.035em] leading-[1.05]">
            Dołącz do <span className="accent">naszego Discorda.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-lg"
        >
          <div className="border border-border-strong p-6 md:p-8 relative overflow-hidden group hover:border-[#5865F2]/30 transition-colors duration-500">
            {/* Discord brand glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#5865F2]/5 rounded-full blur-[40px] pointer-events-none group-hover:bg-[#5865F2]/10 transition-colors duration-500" />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-[#5865F2]/20 bg-[#5865F2]/10 flex-shrink-0">
                  <Image
                    src="/discord-logo.jpeg"
                    alt="Ghost Development Discord"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{data.name}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-[12px] text-muted">
                        {data.presence_count > 0 ? `${data.presence_count} online` : "Online"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 bg-surface border border-border rounded-sm">
                  <Users className="w-4 h-4 text-[#5865F2]/60 mb-2" />
                  <span className="text-lg font-semibold block">{data.members > 0 ? data.members : "—"}</span>
                  <span className="mono text-[9px] text-muted/40 uppercase tracking-[0.2em]">Członków</span>
                </div>
                <div className="p-3 bg-surface border border-border rounded-sm">
                  <MessageCircle className="w-4 h-4 text-[#5865F2]/60 mb-2" />
                  <span className="text-lg font-semibold block">{data.presence_count > 0 ? data.presence_count : "—"}</span>
                  <span className="mono text-[9px] text-muted/40 uppercase tracking-[0.2em]">Online</span>
                </div>
              </div>

              {/* Join button */}
              <a
                href={data.instant_invite}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#5865F2] text-white text-sm font-semibold rounded-sm hover:bg-[#4752C4] hover:shadow-[0_0_30px_rgba(88,101,242,0.2)] transition-all duration-300"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Dołącz do Discorda
              </a>

              <p className="mt-4 text-center mono text-[9px] text-muted/20 uppercase tracking-[0.2em]">
                Zadaj pytanie · Poznaj innych · Bądź na bieżąco
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
