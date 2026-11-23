import * as fs from 'node:fs';
import * as path from 'node:path';

/**
 * Letter of the day representing the theme:
 * 'K' for Kaizen - continuous daily improvement and mindful refinement.
 */
export const DAILY_LETTER = 'K';

/**
 * Resolves the destination file path for the entry based on environment settings.
 */
export function resolveOutputPath(): string {
  const baseDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  return path.join(baseDir, 'entry.txt');
}

/**
 * Validates that the entry is strictly a single uppercase alphabetic character.
 */
export function validateEntryLetter(letter: string): string {
  if (!letter || letter.length !== 1 || !/^[A-Z]$/.test(letter)) {
    throw new Error(`Invalid entry letter "${letter}". Must be a single uppercase character [A-Z].`);
  }
  return letter;
}

/**
 * Ensures the target directory exists and writes the single character entry.
 */
export function writeDailyEntry(targetPath: string, letter: string): void {
  const validatedLetter = validateEntryLetter(letter);
  const dir = path.dirname(targetPath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(targetPath, validatedLetter, { encoding: 'utf-8' });
}

/**
 * Main orchestration entrypoint with robust error handling and console status logging.
 */
export function run(): void {
  try {
    const outputPath = resolveOutputPath();
    console.log(`[make.fun] Writing daily letter theme "${DAILY_LETTER}" to ${outputPath}...`);
    writeDailyEntry(outputPath, DAILY_LETTER);
    console.log(`[make.fun] Successfully recorded letter "${DAILY_LETTER}" to entry file.`);
  } catch (error) {
    console.error('[make.fun] Failed to write daily entry:', error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

run();
