import { mkdirSync, writeFileSync } from "node:fs";

const MONOLOGUE = `Listen. I am Morvain, Lord of the Ashen Spire, and I have conquered seven kingdoms before breakfast — well, before breakfast yesterday. Today the map is finished. The ravens bring no news. The dungeon cells stand empty, the torture racks polished, unused. My generals wait in the hall, sharpening swords no one will swing. Even the volcano beneath my throne has gone quiet, like an old dog by the fire. So here is my grand design, my final curse upon this world: tomorrow, I shall sleep until noon, and let the heroes come find me... if they dare knock first.`;

const words = MONOLOGUE.trim().split(/\s+/);
if (words.length !== 100) {
  throw new Error(`Monologue must be exactly 100 words, got ${words.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, MONOLOGUE, "utf8");
console.log(MONOLOGUE);
