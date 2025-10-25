import fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const toRead = path.join(__dirname, 'files', 'fileToRead.txt');

  const readable = fs.createReadStream(toRead, { encoding: 'utf8'});
  
  readable.on('data', chunk => process.stdout.write(chunk));
  readable.on('end', () => console.log(''))
}

await read();
