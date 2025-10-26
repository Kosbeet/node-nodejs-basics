import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';
import zlib from 'node:zlib';
import { pipeline } from 'node:stream/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const decompress = async () => {
  const src = path.join(__dirname, 'files', 'archive.gz');
  const dest = path.join(__dirname, 'files', 'fileToCompress.txt');

  const readable = fs.createReadStream(src);
  const writeable = fs.createWriteStream(dest);
  const gzip = zlib.createGunzip();

  try {
    await pipeline(readable, gzip, writeable);
  } catch (err) {
    throw err;
  }
};

await decompress();
