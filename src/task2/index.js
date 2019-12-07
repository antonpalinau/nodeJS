import path from 'path';
import fs from 'fs';
import csv from 'csvtojson';
import { pipeline } from 'stream';

const readStream = fs.createReadStream(path.join(__dirname, '/csv/data.csv'));
const writeStream = fs.createWriteStream(path.join(__dirname, '/output/output.txt'));

pipeline(
    readStream,
    csv({
        ignoreColumns: /(Amount)/
    }),
    writeStream,
    (err) => {
        if (err) {
          console.error('Pipeline failed.', err);
        } else {
          console.log('Pipeline succeeded.');
        }
      }
)