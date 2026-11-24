// Everyday Wonder — one sentence on a small moment of wonder.
//
// The program writes a single sentence (107 characters) to /output/entry.txt.
// The sentence is a fixed, hand-written line: no clock, no network, no
// randomness, so every run produces exactly the same output.

import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "My cracked phone screen catches the sunset, and for one red light the spiderweb in the glass turns to gold.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE + "\n", "utf8");
