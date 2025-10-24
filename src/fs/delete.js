import fs from 'fs/promises';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
  const folder = path.join(__dirname, 'files');
  const file = path.join(folder, 'fileToRemove.txt');

  try {
    await fs.access(file);
    await fs.unlink(file);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await remove();
