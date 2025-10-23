import fs from 'fs/promises';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const copy = async () => {
  const src = path.join(__dirname, './files');
  const dest = path.join(__dirname, './files_copy');
  console.log(src, 'source folder')

  try {
    await fs.access(src);
  } catch {
    throw new Error('FS operation failed');
  }

  try {
    await fs.access(dest);
    throw new Error('FS operation failed');
  } catch(err) {
    if (err.code !== 'ENOENT') {
      throw new Error('FS operation failed');
    }
  }

  try {
    await fs.cp(src, dest, { recursive: true });
  } catch {
    throw new Error('FS operation failed');
  }
};

await copy();
