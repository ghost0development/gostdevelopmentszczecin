"use client";

const clients = [
  "Redstone MC",
  "Hypixel",
  "MineBlocks",
  "CubeCraft",
  "PvP Land",
  "NetworkMC",
  "ExtremeCraft",
  "Jartex",
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
            <span className="w-5 h-5 rounded-sm border border-border-strong flex items-center justify-center">
              <span className="w-1.5 h-1.5 bg-accent/30 rounded-full" />
            </span>
            <span className="mono text-[11px] text-muted/25 uppercase tracking-[0.2em]">{c}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
