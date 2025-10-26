
import { Worker } from 'node:worker_threads';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const performCalculations = async () => {
  const cpusLength = os.cpus().length;
  const result = new Array(cpusLength);

  const promises = [];

  for (let i = 0; i < cpusLength; i += 1) {
    promises.push(
      new Promise((resolve) => {
        const worker = new Worker(path.join( __dirname, 'worker.js'), { workerData: 10 + i });
        worker.on('message', (data) => {
          result[i] = { status: 'resolved', data }
          resolve()
        })
        worker.on('error', () => {
          result[i] = { status: 'error', data: null }
          resolve()
        })
        worker.on('exit', (code) => console.log('Worker exited with code', code))
      })
    )
  }

  await Promise.all(promises);

  console.log(result);
};

await performCalculations();
