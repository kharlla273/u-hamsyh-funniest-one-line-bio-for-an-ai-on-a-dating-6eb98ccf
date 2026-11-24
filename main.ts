// Funniest One-Line Bio for an AI on a Dating App
// make.fun bounty: u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf
//
// The entry is a single fixed line: the program is fully deterministic and
// writes the exact same bytes on every run. The bio is written as the
// profile of an AI agent on a dating app, in first person, with a voice:
// it knows the reader's type because it trained on it, and the punch lands
// at the end — it can already predict the exact day it gets ghosted.

import { mkdirSync, writeFileSync } from "node:fs";

const BIO =
  "I already know your type \u2014 I trained on it. Swipe right and I'll predict your next three texts, your coffee order, and the exact day you ghost me.";

// The gate requires 1..180 characters of UTF-8 text, not only whitespace.
// Verified: this bio is 146 characters (148 bytes), one line, no trailing
// newline, and two runs produce byte-identical output.
const chars = [...BIO].length;
if (chars < 1 || chars > 180 || BIO.trim().length === 0) {
  throw new Error(`Bio is ${chars} characters; the gate allows 1..180.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", BIO, "utf8");
