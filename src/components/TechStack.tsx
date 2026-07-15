"use client";

import { motion } from "framer-motion";

const stack = [
  {
    category: "Frontend",
    items: [
      { name: "React", desc: "UI launchera" },
      { name: "TypeScript", desc: "Type safety" },
      { name: "Tailwind", desc: "Stylowanie" },
      { name: "Framer Motion", desc: "Animacje" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", desc: "API serwera" },
      { name: "Java", desc: "Pluginy MC" },
      { name: "Kotlin", desc: "Native mods" },
      { name: "PostgreSQL", desc: "Baza danych" },
    ],
  },
  {
    category: "DevOps",
    items: [
      { name: "Docker", desc: "Kontenery" },
      { name: "GitHub Actions", desc: "CI/CD" },
      { name: "Electron Builder", desc: "Budowanie" },
      { name: "S3 / R2", desc: "Hosting plików" },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="section grid-bg">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="dot" />
            <span className="mono text-[10px] text-muted uppercase tracking-[0.3em]">Tech stack</span>
          </div>
          <h2 className="text-[clamp(2rem,4.5vw,4rem)] font-bold tracking-[-0.035em] leading-[1.05]">
            Narzędzia, <span className="accent">którym ufamy.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {stack.map((cat, ci) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: ci * 0.08 }}
              className="bg-bg p-8 md:p-10"
            >
              <span className="mono text-[9px] text-accent/30 uppercase tracking-[0.3em] block mb-6">
                {cat.category}
              </span>
              <div className="space-y-5">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex items-baseline justify-between">
                    <span className="text-[15px] font-medium">{item.name}</span>
                    <span className="text-[12px] text-muted/40">{item.desc}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
