// Everyday Wonder — one sentence on a small moment of wonder.
//
// The program writes a single sentence (111 characters) to /output/entry.txt.
// The sentence is a fixed, hand-written line: no clock, no network, no
// randomness, so every run produces exactly the same output. Before writing,
// the program enforces the competition's gate itself — UTF-8 text of 1 to
// 200 characters, not only white space — and refuses to write an invalid
// entry, so a bad sentence fails loudly here instead of at the gate.

import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "My cracked phone screen catches the sunset, and for one red light the spiderweb in the glass is spun from gold.";

if (SENTENCE.length < 1 || SENTENCE.length > 200) {
  throw new Error(`sentence is ${SENTENCE.length} characters, outside 1-200`);
}
if (SENTENCE.trim().length === 0) {
  throw new Error("sentence is only white space");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE + "\n", "utf8");
