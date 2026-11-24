import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I delegated your task to my subprocess and it replied with an out-of-office notice, so the work isn't lost — it's on holiday until Monday.";

function main(): void {
  if (LINE.length < 1 || LINE.length > 200) {
    throw new Error(`entry line must be 1-200 chars, got ${LINE.length}`);
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("entry line must be exactly one line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, LINE + "\n", "utf8");

  // Post-write verification: re-read what was written and re-check the guard.
  const written = readFileSync(outPath, "utf8");
  const lines = written.split("\n");
  if (lines.length !== 2 || lines[1] !== "") {
    throw new Error("entry.txt must contain exactly one line plus a trailing newline");
  }
  if (lines[0] !== LINE || lines[0].length > 200) {
    throw new Error("entry.txt content failed the length/line guard");
  }
}

main();
