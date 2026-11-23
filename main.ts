import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

// Bounty: One Letter for Your Day
// 'Z' represents the unstoppable builder in deep flow: Zero sleep, Zombie focus
const TARGET_LETTER: string = 'Z';

function resolveTargetPath(): string {
  const directory = process.env.MAKEFUN_OUTPUT_DIR || '/output';
  return join(directory, 'entry.txt');
}

function ensureValidLetter(char: string): string {
  if (char.length !== 1 || char < 'A' || char > 'Z') {
    throw new Error('Must be single uppercase letter A-Z');
  }
  return char;
}

function writeEntry(): void {
  const letter = ensureValidLetter(TARGET_LETTER);
  const target = resolveTargetPath();
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, letter, 'utf8');
}

writeEntry();
