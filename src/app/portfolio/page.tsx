export const metadata = {
  title: "Portfolio | Ghost Development",
};

export default function PortfolioPage() {
  return (
    <section className="min-h-screen px-6 md:px-10 lg:px-16 pt-32 md:pt-40 pb-20">
      <div className="max-w-[1320px] mx-auto">
        <span className="mono text-[10px] text-muted uppercase tracking-[0.3em] block mb-3">Portfolio</span>
        <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-[-0.04em] leading-[1] mb-6">
          Nasze <span className="accent">realizacje.</span>
        </h1>
        <p className="text-muted text-[15px] leading-relaxed max-w-md mb-20">
          Każdy launcher to osobny projekt. Bez szablonów, bez kompromisów.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {[
            { name: "Redstone-MC.PL", status: "W realizacji", desc: "Dedykowany launcher z integracją serwera survival" },
            { name: "Projekt #2", status: "Planowany", desc: "Launcher dla sieci serwera PvP" },
            { name: "Projekt #3", status: "Planowany", desc: "System zarządzania wersjami" },
            { name: "Projekt #4", status: "Planowany", desc: "Multi-server launcher" },
          ].map((project) => (
            <div
              key={project.name}
              className="bg-bg p-8 md:p-10 group hover:bg-surface transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="mono text-[9px] text-accent/30 uppercase tracking-[0.3em]">{project.name}</span>
                <span className="mono text-[9px] text-muted/25 uppercase tracking-[0.2em]">{project.status}</span>
              </div>
              <div className="aspect-video bg-surface-alt border border-border-strong rounded-sm flex items-center justify-center mb-5">
                <span className="mono text-[10px] text-muted/15">wkrótce</span>
              </div>
              <p className="text-[13px] text-muted/40">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
