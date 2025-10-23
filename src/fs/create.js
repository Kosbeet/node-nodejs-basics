import fs from 'fs/promises';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
  const folder = path.join(__dirname, 'files');
  const filePath = path.join(folder, 'fresh.txt');
  try {
    await fs.access(filePath);
    throw new Error('FS operation failed');
  } catch(err) {
    if (err.code === 'ENOENT') {
      await fs.writeFile(filePath, 'I am fresh and young');
    } else {
      throw err;
    }
    
  }
};

await create();
