"use client";

import Image from "next/image";

const clients = [
  { name: "Ghost Dev", logo: "/discord-logo.jpeg", isOwn: true },
  { name: "Redstone MC" },
  { name: "Hypixel" },
  { name: "MineBlocks" },
  { name: "CubeCraft" },
  { name: "PvP Land" },
  { name: "NetworkMC" },
  { name: "ExtremeCraft" },
  { name: "Jartex" },
];

export default function LogoStrip() {
  return (
    <section className="py-10 border-y border-border overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...clients, ...clients].map((c, i) => (
          <span
            key={i}
            className="mx-10 flex items-center gap-3"
          >
            {c.logo ? (
              <span className="w-5 h-5 rounded-sm overflow-hidden border border-border-strong flex-shrink-0">
                <Image
                  src={c.logo}
                  alt={c.name}
                  width={20}
                  height={20}
                  className="w-full h-full object-cover"
                />
              </span>
            ) : (
              <span className="w-5 h-5 rounded-sm border border-border-strong flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-accent/30 rounded-full" />
              </span>
            )}
            <span className="mono text-[11px] text-muted/25 uppercase tracking-[0.2em]">{c.name}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
