import fs from 'fs/promises';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



const rename = async () => {
  const folder = path.join(__dirname, 'files');
  const oldPath = path.join(folder, 'wrongFilename.txt');
  const newPath = path.join(folder, 'properFilename.md');

  try {
    await fs.access(newPath);
    throw new Error('FS operation failed');
  } catch (err) {
    try {
      await fs.access(oldPath);
      await fs.rename(oldPath, newPath);
    } catch (err) {
      throw new Error('FS operation failed');
    }
  }
};

await rename();
