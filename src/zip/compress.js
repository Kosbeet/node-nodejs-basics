import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';
import zlib from 'node:zlib';
import { pipeline } from 'node:stream/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
  const toRead = path.join(__dirname, 'files', 'fileToCompress.txt');
  const dest = path.join(__dirname, 'files', 'archive.gz');
  
  const readable = fs.createReadStream(toRead);
  const writeable = fs.createWriteStream(dest);
  const gzip = zlib.createGzip();

  try {
    await pipeline(readable, gzip, writeable);
  } catch (err) {
    throw err;
  }
  
};

await compress();
