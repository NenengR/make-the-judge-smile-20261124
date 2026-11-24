import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line's angle: a small good thing (a neighbour's gift), warmth in the
// gesture, surprise in the note's wording (generosity framed as a surplus
// problem), and one concrete detail (the note's exact words).
const LINE =
  "My neighbour left a tomato on my doorstep with a note that said only: grow more, I have too many.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log("entry.txt written");
