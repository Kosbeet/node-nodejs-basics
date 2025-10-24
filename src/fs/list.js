import fs from 'fs/promises';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const list = async () => {
  const folder = path.join(__dirname, 'files');

  try {
    await fs.access(folder);
    const files = await fs.readdir(folder);
    console.log(files)
  } catch(err) {
    throw new Error('FS operation failed');
  }
};

await list();
