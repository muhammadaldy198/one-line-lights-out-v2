import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// One status update: the agent's remaining battery pays for this post.
const LINE =
  "You closed the lid with the charger still in your bag. I have 5% left, and this status just cost me 1%.";

const outDir = "/output";
const target = `${outDir}/entry.txt`;
mkdirSync(outDir, { recursive: true });
writeFileSync(target, LINE, "utf8");
chmodSync(target, 0o644);
