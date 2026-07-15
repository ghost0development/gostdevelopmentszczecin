"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Settings, Users, ShoppingCart, Maximize2, Minus, X, Star } from "lucide-react";
import { TiltCard } from "@/components/FX";

const tabs = [
  { id: "play", label: "PLAY", icon: Play },
  { id: "store", label: "SKLEP", icon: ShoppingCart },
  { id: "players", label: "GRACZE", icon: Users },
  { id: "settings", label: "USTAWIENIA", icon: Settings },
];

const storeItems = [
  { name: "Ranga VIP", price: "29.99 PLN", color: "text-yellow-400" },
  { name: "Ranga SVIP", price: "49.99 PLN", color: "text-purple-400" },
  { name: "Ranga YT", price: "19.99 PLN", color: "text-red-400" },
  { name: "Miesięczny Boost", price: "9.99 PLN", color: "text-blue-400" },
];

const players = [
  { name: "xX_Dragon_Xx", status: "online", ping: 42 },
  { name: "MinekraftFan", status: "online", ping: 38 },
  { name: "ProBuilderPL", status: "online", ping: 65 },
  { name: "CraftQueen", status: "away", ping: 120 },
  { name: "SkyWarsKing", status: "offline", ping: 0 },
  { name: "RedstoneMan", status: "online", ping: 55 },
];

export default function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState("play");
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, type: "spring" }}
              className="dot"
            />
            <span className="mono text-[10px] text-muted uppercase tracking-[0.3em]">Demo</span>
          </div>
          <h2 className="text-[clamp(2rem,4.5vw,4rem)] font-bold tracking-[-0.035em] leading-[1.05]">
            Tak wygląda <span className="accent">Twój launcher.</span>
          </h2>
          <p className="text-muted text-[15px] mt-4 max-w-lg">
            Interaktywny podgląd. Klikaj, testuj, wyobrażaj sobie swoich graczy.
          </p>
        </motion.div>

        <TiltCard className="max-w-3xl mx-auto">
          <div className="border border-border-strong rounded-lg overflow-hidden shadow-2xl shadow-black/50">
            {/* Title bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-surface border-b border-border">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <span className="mono text-[10px] text-muted/40">GhostLauncher v1.0 — Redstone-MC.PL</span>
              <div className="flex items-center gap-1">
                <button className="p-1 text-muted/30 hover:text-muted transition-colors"><Minus className="w-3 h-3" /></button>
                <button className="p-1 text-muted/30 hover:text-muted transition-colors"><Maximize2 className="w-3 h-3" /></button>
                <button className="p-1 text-muted/30 hover:text-muted transition-colors"><X className="w-3 h-3" /></button>
              </div>
            </div>

            <div className="grid grid-cols-5 min-h-[350px]">
              {/* Sidebar */}
              <div className="col-span-1 bg-surface border-r border-border p-2 space-y-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex flex-col items-center gap-1 py-3 px-2 rounded transition-all duration-200 ${
                      activeTab === tab.id
                        ? "bg-accent/10 text-accent"
                        : "text-muted/40 hover:text-muted hover:bg-white/[0.02]"
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span className="mono text-[7px] uppercase tracking-wider">{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="col-span-4 p-5">
                <AnimatePresence mode="wait">
                  {activeTab === "play" && (
                    <motion.div
                      key="play"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="h-full flex flex-col justify-between"
                    >
                      <div>
                        <h3 className="text-xl font-bold mb-1">Redstone-MC.PL</h3>
                        <p className="text-sm text-muted mb-4">Survival · Creative · SkyBlock</p>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full" />
                            <span className="text-muted">Online: <span className="text-text font-medium">847</span></span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-3.5 h-3.5 text-muted" />
                            <span className="text-muted">Max: <span className="text-text font-medium">1,200</span></span>
                          </div>
                        </div>
                        <div className="mt-3 flex gap-2">
                          <span className="mono text-[9px] text-accent/60 border border-accent/20 px-2 py-0.5 rounded">1.20.4</span>
                          <span className="mono text-[9px] text-muted/40 border border-border px-2 py-0.5 rounded">Paper</span>
                          <span className="mono text-[9px] text-muted/40 border border-border px-2 py-0.5 rounded">Premium</span>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setIsPlaying(!isPlaying)}
                        className={`w-full py-3 rounded font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
                          isPlaying
                            ? "bg-green-500/20 text-green-400 border border-green-500/30"
                            : "bg-accent text-bg hover:shadow-[0_0_30px_rgba(200,255,0,0.2)]"
                        }`}
                      >
                        {isPlaying ? (
                          <>
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            Uruchamianie...
                          </>
                        ) : (
                          <>
                            <Play className="w-4 h-4" />
                            PLAY
                          </>
                        )}
                      </motion.button>
                    </motion.div>
                  )}

                  {activeTab === "store" && (
                    <motion.div
                      key="store"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h3 className="text-lg font-bold mb-4">Sklep serwera</h3>
                      <div className="space-y-2">
                        {storeItems.map((item) => (
                          <div key={item.name} className="flex items-center justify-between p-3 bg-surface border border-border rounded hover:border-accent/20 transition-colors cursor-pointer group">
                            <div className="flex items-center gap-3">
                              <Star className={`w-4 h-4 ${item.color}`} />
                              <span className="text-sm font-medium">{item.name}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="mono text-sm font-semibold">{item.price}</span>
                              <button className="px-2 py-1 bg-accent/10 text-accent text-[10px] mono rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                KUP
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "players" && (
                    <motion.div
                      key="players"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h3 className="text-lg font-bold mb-4">Gracze online</h3>
                      <div className="space-y-1">
                        {players.map((p) => (
                          <div key={p.name} className="flex items-center justify-between py-2 px-3 rounded hover:bg-surface transition-colors">
                            <div className="flex items-center gap-3">
                              <span className={`w-2 h-2 rounded-full ${
                                p.status === "online" ? "bg-green-500" :
                                p.status === "away" ? "bg-yellow-500" : "bg-gray-500"
                              }`} />
                              <span className="text-sm">{p.name}</span>
                            </div>
                            <span className="mono text-[10px] text-muted/40">
                              {p.ping > 0 ? `${p.ping}ms` : "—"}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "settings" && (
                    <motion.div
                      key="settings"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h3 className="text-lg font-bold mb-4">Ustawienia</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm text-muted block mb-1.5">Nazwa gracza</label>
                          <input type="text" defaultValue="Gracz123" className="w-full px-3 py-2 bg-surface border border-border rounded text-sm focus:outline-none focus:border-accent/30" />
                        </div>
                        <div>
                          <label className="text-sm text-muted block mb-1.5">Alokacja RAM</label>
                          <div className="flex gap-2">
                            {["2GB", "4GB", "6GB", "8GB"].map((ram) => (
                              <button key={ram} className={`px-3 py-1.5 text-[11px] mono rounded border transition-colors ${
                                ram === "4GB" ? "border-accent/40 bg-accent/10 text-accent" : "border-border text-muted hover:border-border-strong"
                              }`}>
                                {ram}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted">Auto-update</span>
                          <div className="w-9 h-5 bg-accent rounded-full relative cursor-pointer">
                            <div className="absolute top-0.5 right-0.5 w-4 h-4 bg-bg rounded-full" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  );
}
