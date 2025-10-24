import fs from 'fs/promises';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const read = async () => {
  const folder = path.join(__dirname, 'files');
  const file = path.join(folder, 'fileToRead.txt');

  try {
    await fs.access(file);
    const readFile = await fs.readFile(file, { encoding: 'utf8' });
    console.log(readFile);
  } catch(err) {
    throw new Error('FS operation failed');
  }
};

await read();
