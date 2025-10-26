import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  const file = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
  const hash = createHash('sha256');
  const readable = fs.createReadStream(file);
  readable.pipe(hash).setEncoding('hex').pipe(process.stdout);
  readable.on('end', () => console.log(''));
};

await calculateHash();
