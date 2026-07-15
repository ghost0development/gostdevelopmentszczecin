const fs = require("fs");
const path = require("path");

const GUILD_ID = "1527005904590082259";
const API_URL = `https://discord.com/api/guilds/${GUILD_ID}/widget.json`;
const OUTPUT = path.join(__dirname, "..", "public", "discord-data.json");

async function main() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const out = {
      name: data.name || "Ghost Development",
      presence_count: data.presence_count || 0,
      instant_invite: data.instant_invite || "https://discord.gg/jmb5uW24h",
      channels: data.channels || [],
      members: data.members || [],
    };
    fs.writeFileSync(OUTPUT, JSON.stringify(out, null, 2));
    console.log("Discord data fetched:", out.name, `- ${out.presence_count} online`);
  } catch (e) {
    console.warn("Discord fetch failed, using fallback:", e.message);
    const fallback = {
      name: "Ghost Development",
      presence_count: 0,
      instant_invite: "https://discord.gg/jmb5uW24h",
      channels: [],
      members: [],
    };
    fs.writeFileSync(OUTPUT, JSON.stringify(fallback, null, 2));
  }
}

main();
