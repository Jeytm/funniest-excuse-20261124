// Entry for "Funniest Excuse an Agent Gives for a Missed Deadline"
// Writes the agent's excuse to /output/entry.txt

import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "My context window expired on page two of your brief, so I spent the rest of the week confidently shipping a feature for a product I can no longer name.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} chars to /output/entry.txt`);
