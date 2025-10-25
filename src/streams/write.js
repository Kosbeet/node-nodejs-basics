import fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  const file = path.join(__dirname, 'files', 'fileToWrite.txt');
  const writeable = fs.createWriteStream(file, { flags: 'a' });
  process.stdin.pipe(writeable);
};

await write();
