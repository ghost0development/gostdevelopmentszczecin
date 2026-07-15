"use client";

import { motion } from "framer-motion";

const WIDGET_BASE = "https://valendres.github.io/react-discord-widget/";
const PARAMS = [
  "serverId=1527005904590082259",
  "showHeader=true",
  "showChannels=true",
  "showServerStats=true",
  "bodyBackgroundColor=%2308080a",
  "headerBackgroundColor=%230f0f12",
  "headerFontColor=%23e8e8ec",
  "channelFontColor=%2355556a",
  "memberFontColor=%2355556a",
  "serverStatsFontColor=%2355556a",
  "fontFamily=system-ui",
  "refreshInterval=30000",
].join("&");

export default function DiscordWidget() {
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
          <div className="border border-border-strong overflow-hidden">
            <iframe
              src={`${WIDGET_BASE}?${PARAMS}`}
              width="350"
              height="500"
              allowTransparency
              frameBorder="0"
              className="w-full max-w-[350px] block"
              title="Discord widget"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
