// One Line, One Laugh (entry 2): writes a single original one-liner —
// one sentence, at most 200 characters — to entry.txt.
// The line is a fixed string: no randomness, no network, no clock, so
// the program is fully deterministic and writes byte-identical output
// on every run. The output directory comes from MAKEFUN_OUTPUT_DIR,
// falling back to a local out/ directory for manual runs.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one sentence, 55 characters, well under the 200 cap.
// Setup is the premise itself (a self-help book exists to help you);
// the twist lands on the last words: the book that should help you
// filed a restraining order against you — the exact opposite of its job.
// Self-contained, no setup the reader must supply, punchline at the end.
// Verified: running the program twice writes byte-identical output.
const LINE =
  "My self-help book filed a restraining order against me.";

// Guard: the gate rejects anything over 200 characters (or empty), so
// fail loudly instead of writing an invalid entry.
if (LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry length ${LINE.length} is outside 1..200 characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(process.cwd(), "out");
mkdirSync(outDir, { recursive: true });
// Write the line exactly, with no trailing newline, so the file holds
// precisely the one sentence the judge reads.
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
