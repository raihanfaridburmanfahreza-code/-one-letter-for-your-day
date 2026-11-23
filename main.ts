import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// Generate single letter entry for the bounty
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), 'Z');
