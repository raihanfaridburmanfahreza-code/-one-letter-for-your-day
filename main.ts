import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// One Letter for Your Day: Z (Zero sleep / Zombie focus)
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), 'Z');
